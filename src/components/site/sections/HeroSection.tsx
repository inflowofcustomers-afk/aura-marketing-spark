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
      {/* Full portrait, right side — never cropped, never behind the copy */}
      <div className="hidden lg:flex absolute inset-0 justify-end items-center pointer-events-none">
        <motion.img
          initial={reduce ? undefined : { opacity: 0, scale: 1.03 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.1, ease }}
          src={heroPortrait}
          alt="A woman with luminous, natural skin in soft warm light"
          width={1024}
          height={1408}
          className="h-[82%] w-auto max-w-none object-contain object-right-center img-duotone"
        />
      </div>
      {/* Soft edge so the portrait melts into the navy, left edge of the photo */}
      <div
        aria-hidden
        className="hidden lg:block absolute inset-y-0 right-0 w-[58%] bg-gradient-to-l from-transparent via-transparent to-[color:var(--navy-deep)]"
      />

      <div className="relative z-10 canvas-grid min-h-[54rem] lg:min-h-[min(60rem,100svh)] flex items-center">
        <div className="w-full pt-36 pb-16 sm:pt-44 sm:pb-20 lg:pt-40 lg:pb-24 lg:max-w-[52%]">
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

          {/* Mobile: full portrait below the copy so nothing covers her face */}
          <motion.img
            initial={reduce ? undefined : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.4, ease }}
            src={heroPortrait}
            alt="A woman with luminous, natural skin in soft warm light"
            width={1024}
            height={1408}
            className="lg:hidden mt-14 mx-auto w-full max-w-[30rem] h-auto object-contain img-duotone"
          />
        </div>
      </div>
    </section>
  );
}
