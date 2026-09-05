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
      <div className="mt-8" style={{ height: 1, background: "rgba(21,21,21,0.28)" }} />
      <ul className="mt-2">
        {items.map((t, i) => (
          <li
            key={i}
            className="flex items-baseline gap-6 sm:gap-8 py-8 sm:py-10"
            style={i === 0 ? undefined : { borderTop: "1px solid rgba(21,21,21,0.14)" }}
          >
            <span
              className="text-sm leading-none w-4 shrink-0"
              style={{ color: "var(--gold-dark)" }}
              aria-hidden
            >
              {marker}
            </span>
            <span
              className={`font-display leading-[1.2] tracking-[-0.008em] ${
                muted ? "text-navy-deep/80" : "text-navy-deep"
              }`}
              style={{ fontSize: "clamp(1.5rem, 2.3vw, 2.125rem)" }}
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
      <div className="canvas-grid">
        <Reveal>
          <div className="flex items-center gap-5">
            <span className="w-12" style={{ height: 1, background: "var(--gold-dark)" }} />
            <span className="eyebrow eyebrow-dark">The Fit</span>
          </div>
          <h2
            className="mt-10 sm:mt-14 font-display font-light text-navy-deep tracking-[-0.025em]"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 0.98 }}
          >
            Who It's For
          </h2>
        </Reveal>

        <div className="mt-20 sm:mt-36 grid lg:grid-cols-2 gap-20 lg:gap-0">
          <motion.div {...anim(0)} className="lg:pr-16 xl:pr-24">
            <Column label="Built for you if" items={forYou} marker="/" />
          </motion.div>
          <motion.div
            {...anim(1)}
            className="lg:pl-16 xl:pl-24 lg:border-l"
            style={{ borderColor: "rgba(21,21,21,0.14)" }}
          >
            <Column label="Not a fit if" items={notForYou} marker="×" muted />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

