import { Check, X } from "lucide-react";
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

const itemAnim = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -10% 0px" },
  transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
});

export function WhoFor() {
  return (
    <section id="who-its-for" className="navy-section py-20 sm:py-32 relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <span className="eyebrow">The Fit</span>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl">Who It's For</h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <motion.div {...itemAnim(0)}>
            <div className="card-hairline rounded-2xl p-8 h-full">
              <div className="eyebrow" style={{ color: "oklch(0.72 0.16 150)" }}>
                Built for you if
              </div>
              <ul className="mt-6 space-y-4">
                {forYou.map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-success/15 border border-success/40 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-success" />
                    </span>
                    <span className="text-foreground/85">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div {...itemAnim(1)}>
            <div className="card-hairline rounded-2xl p-8 h-full">
              <div className="eyebrow" style={{ color: "oklch(0.7 0.2 25)" }}>
                Not a fit if
              </div>
              <ul className="mt-6 space-y-4">
                {notForYou.map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-destructive/15 border border-destructive/40 flex items-center justify-center flex-shrink-0">
                      <X size={14} className="text-destructive" />
                    </span>
                    <span className="text-foreground/70">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
