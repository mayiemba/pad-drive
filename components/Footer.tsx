import styles from "./Footer.module.css";

const LINKS = [
  { label: "Our Mission", href: "#mission" },
  { label: "What We Provide", href: "#provide" },
  { label: "Donation Impact & Metrics", href: "#impact" },
  { label: "Frequently Asked Questions", href: "#faq" },
  { label: "Financial Disclosures", href: "#financials" },
];

const PARTNERS = ["New Beginning Children's Home, Utawala."];

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.cols}>
          <div className={styles.brand}>
            <p className={styles.brandName}>
              <svg width="20" height="20" {...svgProps}>
                <path d="M12 20c-4 0-8-3-8-9 4 0 7 2 8 5 1-3 4-5 8-5 0 6-4 9-8 9Z" />
                <path d="M12 16c-2-2-2.5-5 0-9 2.5 4 2 7 0 9Z" />
                <path d="M12 20v1.5" />
              </svg>
              Pad Drive Initiative
            </p>
            <p className={styles.text}>
              Nurturing health, confidence, and uninterrupted education for
              adolescent girls in children’s home care.
            </p>
          </div>

          <div>
            <h2 className={styles.heading}>Radical Transparency</h2>
            <p className={styles.text}>
              100% of proceeds go directly to menstrual care kits and hygiene
              support for our partnered homes.
            </p>
            <p className={styles.partnerLabel}>Partner Recognition:</p>
            <ul className={styles.partners}>
              {PARTNERS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <nav aria-label="Quick links">
            <h2 className={styles.heading}>Quick Links</h2>
            <ul className={styles.links}>
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>© {year} Menstrual Dignity Project. All rights reserved.</p>
          <p className={styles.crafted}>
            <svg width="16" height="16" {...svgProps}>
              <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
              <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.8-2.8L15.700 12" />
              <path d="m2 15 6 6" />
              <path d="M19.5 7.5c1-.9 1.5-1.8 1.5-3a2.5 2.5 0 0 0-4.500-1.5A2.5 2.5 0 0 0 12 4.500c0 1.2.5 2.1 1.5 3L16.500 10Z" />
            </svg>
            Crafted with love for community care.
          </p>
        </div>
      </div>
    </footer>
  );
}