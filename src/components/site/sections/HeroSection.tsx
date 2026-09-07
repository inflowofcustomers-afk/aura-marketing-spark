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
    <section className="relative navy-section grain overflow-hidden min-h-[54rem] lg:min-h-[min(60rem,100svh)]">
      <motion.img
        initial={reduce ? undefined : { opacity: 0, scale: 1.04 }}
        animate={reduce ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.1, ease }}
        src={heroPortrait}
        alt="A woman with luminous, natural skin in soft warm light"
        width={1024}
        height={1408}
        className="absolute inset-0 h-full w-full object-cover object-[66%_center] img-duotone"
      />
      <div aria-hidden className="absolute inset-0 bg-[color:var(--navy-deep)]/55" />
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-full lg:w-[74%] bg-gradient-to-r from-[color:var(--navy-deep)] via-[color:var(--navy-deep)]/90 to-transparent"
      />

      <div className="relative z-10 canvas-grid min-h-[54rem] lg:min-h-[min(60rem,100svh)] flex items-end lg:items-center">
        <div className="w-full pt-36 pb-16 sm:pt-44 sm:pb-20 lg:pt-40 lg:pb-24">
          <div className="max-w-[68rem]">
          <motion.div {...rise(0)} className="flex items-center gap-5">
            <span className="w-12 rule-gold" />
            <span className="eyebrow">Purpose-built for MedSpa owners</span>
          </motion.div>

          <motion.h1
            {...rise(0.12)}
            className="mt-9 sm:mt-12 max-w-[13ch] font-display font-light text-foreground"
            style={{ fontSize: "clamp(3.5rem, 6.8vw, 7rem)", lineHeight: 0.98 }}
          >
            Your dormant patient list is hiding{" "}
            <span className="gold-italic">$30,000</span> in booked revenue.
          </motion.h1>

          <motion.p
            {...rise(0.24)}
            className="mt-8 sm:mt-10 max-w-[49rem] text-foreground/90"
            style={{ fontSize: "clamp(1.15rem, 1.45vw, 1.4rem)", lineHeight: 1.72, fontWeight: 300 }}
          >
            AURA finds every patient who visited once and disappeared, and brings them back,
            with a personalized SMS and email sequence that books appointments automatically.
            No ads. No new leads. Just revenue from people who already know you.
          </motion.p>

          <motion.div
            {...rise(0.36)}
            className="mt-14 flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center"
          >
            <CTALink to="/apply" variant="gold" className="self-start">
              Apply for a Founder Spot
            </CTALink>
            <a
              href="#how-it-works"
              className="self-start inline-flex items-center justify-center whitespace-nowrap px-7 py-4 text-[12px] uppercase tracking-[0.2em] border border-foreground/25 text-foreground hover:border-gold hover:text-gold transition-all duration-500"
            >
              See How It Works
            </a>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
