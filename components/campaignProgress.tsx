"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";
import type { Campaign } from "@/lib/campaign";

const POLL_MS = 15_000;
const DAY_MS = 86_400_000;
const kes = (n: number) => `KES ${Math.round(n).toLocaleString("en-US")}`;

type Props = { initial: Campaign; serverNow: number };

export default function CampaignProgress({ initial, serverNow }: Props) {
  const [data, setData] = useState(initial);
  const [now, setNow] = useState(serverNow);
  const [shown, setShown] = useState(initial.raised); // animated number
  const shownRef = useRef(initial.raised);

  // Poll the backend; pause while the tab is hidden.
  useEffect(() => {
    let stop = false;
    const load = async () => {
      if (document.hidden) return;
      try {
        const res = await fetch("/api/campaign", { cache: "no-store" });
        if (res.ok && !stop) {
          setData(await res.json());
          setNow(Date.now());
        }
      } catch {
        /* keep last known values */
      }
    };
    const id = setInterval(load, POLL_MS);
    document.addEventListener("visibilitychange", load);
    load();
    return () => {
      stop = true;
      clearInterval(id);
      document.removeEventListener("visibilitychange", load);
    };
  }, []);

  // Count smoothly from the old amount to the new one.
  useEffect(() => {
    const from = shownRef.current;
    const to = data.raised;
    if (from === to) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      shownRef.current = to;
      setShown(to);
      return;
    }
    const start = performance.now();
    const duration = 900;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const v = from + (to - from) * (1 - Math.pow(1 - p, 3));
      shownRef.current = v;
      setShown(v);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [data.raised]);

  const percent = Math.min(100, Math.round((data.raised / data.progressGoal) * 100));
  const daysLeft = Math.max(0, Math.ceil((Date.parse(data.endDate) - now) / DAY_MS));

  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div>
          <p className={styles.goal}>Campaign goal: {kes(data.progressGoal)}</p>
          <p className={styles.raised}>
            <strong>{kes(shown)}</strong> raised so far
          </p>
        </div>
        <span className={styles.badge}>{percent}% Funded</span>
      </div>

      <div
        className={styles.track}
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Funding progress"
      >
        <div
          className={styles.bar}
          style={{ width: `${percent}%`, transition: "width 0.9s ease" }}
        />
      </div>

      <div className={styles.days}>
        <strong>{daysLeft}</strong>
        <span>{daysLeft === 1 ? "Day Left" : "Days Left"}</span>
      </div>
    </div>
  );
}