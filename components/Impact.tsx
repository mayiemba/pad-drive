import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./Impact.module.css";

type Item = { title: string; text: string; icon: ReactNode; accent: string };

const Icon = ({ children }: { children: ReactNode }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    {children}
  </svg>
);

const ITEMS: Item[] = [
  {
    title: "Purchasing pads for the girls",
    text: "Premium, skin-safe day and night flow packs",
    accent: "🌿",
    icon: (
      <Icon>
        <path d="M8 3 4 7l4 4" />
        <path d="M4 7h16" />
        <path d="m16 21 4-4-4-4" />
        <path d="M20 17H4" />
      </Icon>
    ),
  },
  {
    title: "Purchasing pad bins & disposal",
    text: "Hygienic foot-pedal covered washroom receptacles",
    accent: "🌸",
    icon: (
      <Icon>
        <path d="M3 6h18" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M10 11v6" />
        <path d="M14 11v6" />
      </Icon>
    ),
  },
  {
    title: "Panties & discreet pouches",
    text: "Breathable cotton undergarments and quiet fabric zip kits",
    accent: "✨",
    icon: (
      <Icon>
        <path d="M4 5h16l-1.5 7.5a4 4 0 0 1-3.9 3.2H9.4a4 4 0 0 1-3.9-3.2L4 5Z" />
        <path d="M12 15.7V21" />
      </Icon>
    ),
  },
  {
    title: "Food for them on distribution day",
    text: "Iron-rich healthy snacks, clean juices, and lunch meals",
    accent: "🍎",
    icon: (
      <Icon>
        <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
        <path d="M7 21h10" />
        <path d="M19.5 12 22 6" />
        <path d="M11 3c.3.1.8.5.7 1.4-.1.8-.9 1.2-1 2-.1.8.3 1.2.7 1.6" />
      </Icon>
    ),
  },
  {
    title: "Sustenance care supplies",
    text: "Mild soaps, laundry powder, and hygiene wipes",
    accent: "💧",
    icon: (
      <Icon>
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </Icon>
    ),
  },
];

export default function Impact({ imageSrc }: { imageSrc: string }) {
  return (
    <section className={styles.section} aria-labelledby="impact-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Tangible impact &amp; allocation</p>
            <h2 id="impact-title" className={styles.title}>
              What Your Donation Fuels
            </h2>
            <p className={styles.lead}>
              Every dollar collected goes directly into physical supplies and
              safe hygiene environments designed to remove social anxiety and
              embarrassment.
            </p>
          </div>

          <span className={styles.badge}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            Zero Overhead On Pad Supply
          </span>
        </header>

        <div className={styles.grid}>
          <ul className={styles.list}>
            {ITEMS.map((item) => (
              <li key={item.title} className={styles.item}>
                <span className={styles.iconWrap}>{item.icon}</span>
                <div className={styles.itemText}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <span className={styles.accent} aria-hidden>
                  {item.accent}
                </span>
              </li>
            ))}
          </ul>

          <figure className={styles.visual}>
            <div className={styles.frame}>
              <div className={styles.imgBox}>
                <Image
                  src={imageSrc}
                  alt="Supplies funded by your donation: pads, bins, panties, pouches and food"
                  fill
                  sizes="(max-width: 900px) 100vw, 620px"
                  className={styles.img}
                />
              </div>
              <figcaption className={styles.banner}>
                <span aria-hidden>💛</span> Every single contribution makes a
                lasting difference <span aria-hidden>💛</span>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}