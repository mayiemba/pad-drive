import Image from "next/image";
import styles from "./Hero.module.css";
import CampaignProgress from "./campaignProgress";
import { getCampaign } from "@/lib/campaign";

type HeroProps = {
  donateUrl?: string;
  imageSrc: string; // path to your image, e.g. "/dignity-basket.jpg"
};

export default async function Hero({ donateUrl = "#donate", imageSrc }: HeroProps) {
  const campaign = await getCampaign();

  return (
    <section className={styles.hero}>
      <div className={styles.blobTop} aria-hidden />
      <div className={styles.blobBottom} aria-hidden />

      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.pill}>
            <span className={styles.dot} />
            Campaign goal: KES {campaign.campaignGoal.toLocaleString("en-US")} 🌸
          </span>

          <h1 className={styles.title}>
            Support Menstrual
            <em>Dignity.</em>
          </h1>

          <p className={styles.lead}>
            Your donation helps girls in orphan and group home care access
            essential menstrual supplies, restoring self-worth, hygiene
            security, and uninterrupted education.
          </p>

          <CampaignProgress initial={campaign} serverNow={Date.now()} />

          <a href={donateUrl} className={styles.cta}>
            Donate Today
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
            </svg>
          </a>
        </div>

        <div className={styles.visual}>
          <div className={styles.frame}>
            <Image
              src={imageSrc}
              alt="Curated adolescent dignity basket with pads, reusable underwear and pouches"
              fill
              sizes="(max-width: 900px) 100vw, 540px"
              className={styles.img}
              priority
            />
            <span className={styles.caption}>
              <span className={styles.dot} />
              Curated Adolescent Dignity Basket
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}