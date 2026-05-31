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
    <section id="who-its-for" className="cream-section py-20 sm:py-32 relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <span className="eyebrow" style={{ color: "var(--gold-dark)" }}>The Fit</span>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl text-navy-deep">Who It's For</h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <motion.div {...itemAnim(0)}>
            <div
              className="rounded-2xl p-8 h-full border"
              style={{
                background: "linear-gradient(180deg, #ffffff, oklch(0.95 0.015 80))",
                borderColor: "oklch(0.72 0.16 150 / 40%)",
                boxShadow: "0 4px 24px -8px oklch(0.72 0.16 150 / 15%)",
              }}
            >
              <div className="eyebrow" style={{ color: "oklch(0.55 0.16 150)" }}>
                Built for you if
              </div>
              <ul className="mt-6 space-y-4">
                {forYou.map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 border"
                      style={{ background: "oklch(0.72 0.16 150 / 12%)", borderColor: "oklch(0.72 0.16 150 / 50%)" }}
                    >
                      <Check size={14} className="text-success" />
                    </span>
                    <span className="text-navy-deep/80">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div {...itemAnim(1)}>
            <div
              className="rounded-2xl p-8 h-full border"
              style={{
                background: "linear-gradient(180deg, #ffffff, oklch(0.95 0.015 80))",
                borderColor: "oklch(0.65 0.22 25 / 30%)",
                boxShadow: "0 4px 24px -8px oklch(0.65 0.22 25 / 10%)",
              }}
            >
              <div className="eyebrow" style={{ color: "oklch(0.55 0.22 25)" }}>
                Not a fit if
              </div>
              <ul className="mt-6 space-y-4">
                {notForYou.map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 border"
                      style={{ background: "oklch(0.65 0.22 25 / 10%)", borderColor: "oklch(0.65 0.22 25 / 40%)" }}
                    >
                      <X size={14} className="text-destructive" />
                    </span>
                    <span className="text-navy-deep/60">{t}</span>
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
