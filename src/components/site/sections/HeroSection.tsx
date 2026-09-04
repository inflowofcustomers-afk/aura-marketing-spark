import { motion, useReducedMotion } from "framer-motion";
import { CTALink } from "@/components/site/CTA";
import heroPortrait from "@/assets/hero-portrait.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1.2, delay, ease },
        };

  return (
    <section className="relative navy-section grain overflow-hidden">
      <div className="mx-auto max-w-[92rem] px-6 sm:px-12 pt-32 sm:pt-44 pb-20 sm:pb-32">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          {/* Editorial column */}
          <div className="lg:col-span-7">
            <motion.div {...rise(0)} className="flex items-center gap-5">
              <span className="w-10 rule-gold" />
              <span className="eyebrow">Purpose-built for MedSpa owners</span>
            </motion.div>

            <motion.h1 {...rise(0.12)} className="mt-10 display-xl text-foreground max-w-[16ch]">
              Your dormant patient list is hiding{" "}
              <span className="gold-italic">$30,000</span> in booked revenue.
            </motion.h1>

            <motion.p
              {...rise(0.24)}
              className="mt-10 max-w-xl body-editorial text-foreground/60"
            >
              AURA finds every patient who visited once and disappeared, and brings them back —
              with a personalized SMS and email sequence that books appointments automatically.
              No ads. No new leads. Just revenue from people who already know you.
            </motion.p>

            <motion.div
              {...rise(0.36)}
              className="mt-14 flex flex-col sm:flex-row gap-5 sm:gap-8 sm:items-center"
            >
              <CTALink to="/apply" variant="gold" className="self-start">
                Apply for a Founder Spot
              </CTALink>
              <a
                href="#how-it-works"
                className="self-start text-[11px] uppercase tracking-[0.22em] text-foreground/60 hover:text-gold transition-colors duration-500 link-underline"
              >
                See How It Works
              </a>
            </motion.div>

            <motion.div {...rise(0.5)} className="mt-20 flex items-center gap-5">
              <span className="w-14 rule-faint" />
              <span className="text-[10px] uppercase tracking-[0.32em] text-foreground/35">
                Limited founder spots
              </span>
            </motion.div>
          </div>

          {/* Photographic column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={reduce ? undefined : { opacity: 0, scale: 1.04 }}
              animate={reduce ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 1.8, delay: 0.2, ease }}
              className="relative overflow-hidden"
            >
              <img
                src={heroPortrait}
                alt="A woman with luminous, natural skin in soft warm light"
                width={1024}
                height={1408}
                className="w-full h-[58vh] lg:h-[76vh] object-cover img-duotone"
              />
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(6,22,37,0.28) 0%, rgba(6,22,37,0) 35%, rgba(6,22,37,0.35) 100%)",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
