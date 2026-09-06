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
      <div className="grid lg:grid-cols-2 items-stretch">
        {/* Editorial column */}
        <div className="order-2 lg:order-1 grid-left-align pt-28 lg:pt-36 pb-20 lg:pb-28 flex flex-col justify-center">
          <motion.div {...rise(0)} className="flex items-center gap-5">
            <span className="w-12 rule-gold" />
            <span className="eyebrow">Purpose-built for MedSpa owners</span>
          </motion.div>

          <motion.h1 {...rise(0.12)} className="mt-12 font-display font-light text-foreground w-full"
            style={{ fontSize: "clamp(3.25rem, 6.6vw, 7rem)", lineHeight: 1.02, letterSpacing: "-0.02em" }}>
            Your dormant patient list is hiding{" "}
            <span className="gold-italic">$30,000</span> in booked revenue.
          </motion.h1>

          <motion.p
            {...rise(0.24)}
            className="mt-10 w-full max-w-none text-foreground/85"
            style={{ fontSize: "clamp(1.15rem, 1.5vw, 1.4rem)", lineHeight: 1.8, fontWeight: 300, letterSpacing: "0.005em" }}
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

        {/* Photographic column: full-height, edge to edge */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 1.06 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.15, ease }}
          className="order-1 lg:order-2 relative overflow-hidden min-h-[62vh] lg:min-h-screen"
        >
          <img
            src={heroPortrait}
            alt="A woman with luminous, natural skin in soft warm light"
            width={1024}
            height={1408}
            className="absolute inset-0 w-full h-full object-cover object-[58%_28%] img-duotone"
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(6,22,37,0.96) 0%, rgba(6,22,37,0.6) 14%, rgba(6,22,37,0.12) 42%, rgba(6,22,37,0) 70%), linear-gradient(180deg, rgba(6,22,37,0.28) 0%, rgba(6,22,37,0) 18%, rgba(6,22,37,0.62) 100%)",
              mixBlendMode: "multiply",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ background: "rgba(6,22,37,0.22)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
