import type { ReactNode } from "react";
import styles from "./Motivation.module.css";

type Card = { title: string; text: string; color: string; tint: string; icon: ReactNode };

const Icon = ({ children }: { children: ReactNode }) => (
  <svg
    width="18"
    height="18"
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
    title: "Dignity Over Scarcity",
    text: "Transforming sanitary care from an unpredictable emergency handout into a dependable, unconditional monthly standard that restores unshakeable self-esteem.",
    color: "#6f3a93",
    tint: "#ecc9fb",
    icon: (
      <Icon>
        <path d="M20 13c0 5-3.5 7.5-7.7 8.9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1Z" />
        <circle cx="12" cy="11" r="2" />
        <path d="M12 13v3" />
      </Icon>
    ),
  },
  {
    title: "Sustained Academic Potential",
    text: "Keeping girls present, confident, and actively participating in their classrooms and exams every single week—completely free from the dread of leaks or ridicule.",
    color: "#8e55b8",
    tint: "#d3f3dc",
    icon: (
      <Icon>
        <path d="M12 7v14" />
        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3Z" />
      </Icon>
    ),
  },
  {
    title: "Holistic Care & Sisterhood",
    text: "Far beyond pads: we supply private foot-pedal disposal bins, fresh undergarments, nourishing snacks, and warm, taboo-free menstrual health mentorship.",
    color: "#e2bf6a",
    tint: "#fdf0cf",
    icon: (
      <Icon>
        <path d="M18 21a8 8 0 0 0-16 0" />
        <circle cx="10" cy="8" r="5" />
        <path d="M22 20c0-3.4-1.9-6.3-4.7-7.7A5 5 0 0 0 16 3" />
      </Icon>
    ),
  },
];


export default function Motivation() {
  return (
    <section id="motivation" className={styles.section} aria-labelledby="why-title">
      <div className={styles.inner}>
        <span className={styles.pill}>
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z" />
          </svg>
          Our Heart &amp; Motivation
        </span>

        <h2 id="why-title" className={styles.title}>
          Why We Do This:
          <em>Every Girl Deserves to Feel Seen.</em>
        </h2>

        <p className={styles.lead}>
          Nobody should miss schooling, dread puberty, or bear silent shame
          simply because of biological womanhood. In overburdened children’s
          homes, resources are stretched thin between food and shelter, making
          menstrual hygiene an accidental casualty of scarcity. We exist to
          permanently close that gap.
        </p>

        <ul className={styles.cards}>
          {CARDS.map((c) => (
            <li
              key={c.title}
              className={styles.card}
              style={{ borderTopColor: c.color }}
            >
              <span
                className={styles.iconWrap}
                style={{ background: c.tint, color: c.color }}
              >
                {c.icon}
              </span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </li>
          ))}
        </ul>

        <figure className={styles.quote}>
          <div className={styles.glow} aria-hidden />
          <div className={styles.quoteBody}>
            <div className={styles.stars} role="img" aria-label="5 out of 5 stars">
              ★★★★★
            </div>
            <blockquote>
              “While times are absolutely changing, we still find ourselves up against a very
               traditional notion that periods shouldn't be discussed in public. In order to normalize 
               the topic of menstruation, we have to talk about it! The more people have access to quality 
               menstrual health education and period products, the more we can work towards ending the period taboo. 
               I'm extremely passionate about this because periods are not something to be ashamed of, and having 
               access to high-quality period products shouldn't be something we have to fight for."
            </blockquote>
            <figcaption>
              <strong>Claire Coder</strong>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}