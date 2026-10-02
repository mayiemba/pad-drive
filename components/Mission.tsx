import styles from "./Mission.module.css";

const STEPS = [
  {
    title: "Partner with trusted homes",
    text: "We aim to work alongside a registered children’s home so girls there can get the menstural kits they need.",
  },
  {
    title: "Provide complete care kits",
    text: "Pads, discreet pouches, undergarments, and hygiene essentials, delivered on a dependable schedule.",
  },
  {
    title: "Sustain it with dignity",
    text: "Private disposal bins, gentle mentorship, and open conversations that replace silence with confidence.",
  },
];

export default function Mission() {
  return (
    <section id="mission" className={styles.section} aria-labelledby="mission-title">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Our mission</p>
          <h2 id="mission-title" className={styles.title}>
            No girl should have to choose between
            <em>her period and her education.</em>
          </h2>
          <p className={styles.lead}>
            The Menstrual Dignity Project exists to make sanitary care a
            dependable part of life in children’s homes, so every girl can
            learn, grow, and be present without fear or shame.
          </p>

          <ol className={styles.steps}>
            {STEPS.map((s, i) => (
              <li key={s.title} className={styles.step}>
                <span className={styles.num}>{i + 1}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <a href="https://www.mchanga.africa/fundraiser/148697" target="_blank" className={styles.cta}>
            Join the mission
          </a>
        </div>
      </div>
    </section>
  );
}