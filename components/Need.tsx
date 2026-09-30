import type { ReactNode } from "react";
import styles from "./Need.module.css";

type Card = { title: string; text: string; color: string; icon: ReactNode };

const Icon = ({ children }: { children: ReactNode }) => (
  <svg
    width="22"
    height="22"
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

const CARDS: Card[] = [
  {
    title: "Zero Absenteeism",
    text: "By giving guaranteed 3–12 month packs, girls never skip exams or class from fear of leakage.",
    color: "#6f3a93",
    icon: (
      <Icon>
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
        <path d="M22 10v6" />
      </Icon>
    ),
  },
  {
    title: "Sanitary Infrastructure",
    text: "We don’t just drop boxes, we install private, clean disposal bins with weekly eco-friendly pickups.",
    color: "#8e55b8",
    icon: (
      <Icon>
        <path d="M4 10h12l-1 10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1L4 10Z" />
        <path d="M3 10h14" />
        <path d="M9 6h2" />
        <circle cx="17" cy="5" r="1" />
        <circle cx="20" cy="8" r="1" />
        <circle cx="20" cy="3.5" r="0.5" />
      </Icon>
    ),
  },
  {
    title: "Eradicating Stigma",
    text: "Girls receive gentle sisterly mentorship and educational storybooks to celebrate puberty with dignity.",
    color: "#e2bf6a",
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <path d="M9 9h.01" />
        <path d="M15 9h.01" />
      </Icon>
    ),
  },
];

export default function Need() {
  return (
    <section className={styles.section} aria-labelledby="need-title">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>The need in orphan care</p>
        <h2 id="need-title" className={styles.title}>
          When basic dignity is withheld, education stops.
        </h2>
        <p className={styles.lead}>
          In residential and institutional children’s centers, budgets are
          pushed to the limit for food and rent. Menstrual pads are often
          relegated to an afterthought or rationing system, leaving girls
          anxious, vulnerable, and absent from class up to 5 days each month.
        </p>

        <ul className={styles.cards}>
          {CARDS.map((c) => (
            <li
              key={c.title}
              className={styles.card}
              style={{ borderTopColor: c.color }}
            >
              <span className={styles.iconWrap}>{c.icon}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}