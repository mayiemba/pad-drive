export type Campaign = {
  campaignGoal: number; // shown in the top pill
  progressGoal: number; // goal the progress bar is measured against
  raised: number;
  endDate: string; // ISO date; "days left" is computed from this
};

// Used only if the sheet has never loaded successfully.
const FALLBACK: Campaign = {
  campaignGoal: 250_000,
  progressGoal: 12_500,
  raised: 0,
  endDate: "2026-12-31T23:59:59+03:00",
};

let lastGood: Campaign | null = null;
let cache: { at: number; data: Campaign } | null = null;
const CACHE_MS = 10_000; // protects the sheet from many visitors polling at once

function parse(csv: string): Campaign {
  const out: Record<string, string> = {};
  for (const line of csv.split(/\r?\n/)) {
    const m = line.match(/^([^,]+),(.*)$/);
    if (!m) continue;
    out[m[1].trim()] = m[2].trim().replace(/^"|"$/g, "");
  }
  // strips commas/spaces so "8,420" or "8 420" still works
  const num = (k: keyof Campaign, fallback: number) => {
    const v = Number((out[k] ?? "").replace(/[,\s]/g, ""));
    return Number.isFinite(v) && v >= 0 && out[k] !== undefined ? v : fallback;
  };
  const base = lastGood ?? FALLBACK;
  return {
    raised: num("raised", base.raised),
    progressGoal: num("progressGoal", base.progressGoal) || base.progressGoal,
    campaignGoal: num("campaignGoal", base.campaignGoal),
    endDate: Number.isNaN(Date.parse(out.endDate)) ? base.endDate : out.endDate,
  };
}

export async function getCampaign(): Promise<Campaign> {
  if (cache && Date.now() - cache.at < CACHE_MS) return cache.data;

  const url = process.env.CAMPAIGN_SHEET_URL;
  if (!url) return lastGood ?? FALLBACK;

  try {
    const res = await fetch(`${url}${url.includes("?") ? "&" : "?"}t=${Date.now()}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Sheet responded ${res.status}`);
    const data = parse(await res.text());
    lastGood = data;
    cache = { at: Date.now(), data };
    return data;
  } catch {
    return lastGood ?? FALLBACK; // keep the site up if Google hiccups
  }
}