import { NextResponse } from "next/server";
import { getCampaign } from "@/lib/campaign";

export const dynamic = "force-dynamic"; // never cache

export async function GET() {
  const campaign = await getCampaign();
  return NextResponse.json(campaign, {
    headers: { "Cache-Control": "no-store" },
  });
}