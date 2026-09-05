import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Motion";

const forYou = [
  "Single-location MedSpa doing $40K–$120K/month",
  "Running Mangomint or Boulevard",
  "200+ patients in your database",
  "Want results in 60 days, not a 6-month strategy",
  "Done with tools that require you to run them",
];
const notForYou = [
  "You run multiple locations and need enterprise custom build",
  "You want to approve every message before it sends",
  "Your practice is under a year old",
  "You're looking for a general marketing agency",
];

const anim = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -10% 0px" },
  transition: { duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
});

function Column({
  label,
  items,
  marker,
  muted,
}: {
  label: string;
  items: string[];
  marker: string;
  muted?: boolean;
}) {
  return (
    <div>
      <div className="eyebrow eyebrow-dark">{label}</div>
      <ul className="mt-12">
        {items.map((t, i) => (
          <li
            key={i}
            className="flex items-baseline gap-7 py-7"
            style={{ borderTop: "1px solid rgba(21,21,21,0.18)" }}
          >
            <span
              className="text-base leading-none w-4 shrink-0"
              style={{ color: "var(--gold-dark)" }}
              aria-hidden
            >
              {marker}
            </span>
            <span
              className={`font-display text-[1.75rem] sm:text-[2.15rem] leading-[1.24] tracking-[-0.005em] ${
                muted ? "text-navy-deep/80" : "text-navy-deep"
              }`}
            >
              {t}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WhoFor() {
  return (
    <section id="who-its-for" className="cream-section pt-32 sm:pt-52 pb-32 sm:pb-52">
      <div className="container-grid">
        <Reveal>
          <div className="flex items-center gap-5">
            <span className="w-12" style={{ height: 1, background: "var(--gold-dark)" }} />
            <span className="eyebrow eyebrow-dark">The Fit</span>
          </div>
          <h2 className="mt-10 display-lg text-navy-deep">Who It's For</h2>
        </Reveal>

        <div className="mt-20 sm:mt-32 grid lg:grid-cols-2 gap-16 lg:gap-28">
          <motion.div {...anim(0)}>
            <Column label="Built for you if" items={forYou} marker="/" />
          </motion.div>
          <motion.div {...anim(1)}>
            <Column label="Not a fit if" items={notForYou} marker="×" muted />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
