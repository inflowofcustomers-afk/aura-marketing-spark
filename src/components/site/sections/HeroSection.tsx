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
        <div className="order-2 lg:order-1 px-6 sm:px-12 lg:pl-[6vw] lg:pr-14 pt-16 lg:pt-52 pb-24 lg:pb-40 flex flex-col justify-center">
          <motion.div {...rise(0)} className="flex items-center gap-5">
            <span className="w-12 rule-gold" />
            <span className="eyebrow">Purpose-built for MedSpa owners</span>
          </motion.div>

          <motion.h1 {...rise(0.12)} className="mt-12 font-display font-light text-foreground max-w-[20ch]"
            style={{ fontSize: "clamp(3rem, 5.9vw, 5.9rem)", lineHeight: 1.01, letterSpacing: "-0.022em" }}>
            Your dormant patient list is hiding{" "}
            <span className="gold-italic">$30,000</span> in booked revenue.
          </motion.h1>

          <motion.p
            {...rise(0.24)}
            className="mt-10 max-w-[36rem] body-editorial text-foreground/65"
          >
            AURA finds every patient who visited once and disappeared, and brings them back —
            with a personalized SMS and email sequence that books appointments automatically.
            No ads. No new leads. Just revenue from people who already know you.
          </motion.p>

          <motion.div
            {...rise(0.36)}
            className="mt-14 flex flex-col sm:flex-row gap-6 sm:gap-10 sm:items-center"
          >
            <CTALink to="/apply" variant="gold" className="self-start">
              Apply for a Founder Spot
            </CTALink>
            <a
              href="#how-it-works"
              className="self-start text-xs uppercase tracking-[0.22em] text-foreground/65 hover:text-gold transition-colors duration-500 link-underline"
            >
              See How It Works
            </a>
          </motion.div>

          <motion.div {...rise(0.5)} className="mt-20 flex items-center gap-5">
            <span className="w-14 rule-faint" />
            <span className="text-[11px] uppercase tracking-[0.32em] text-foreground/45">
              Limited founder spots
            </span>
          </motion.div>
        </div>

        {/* Photographic column — full-height, edge to edge */}
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
                "linear-gradient(90deg, rgba(6,22,37,0.96) 0%, rgba(6,22,37,0.6) 14%, rgba(6,22,37,0.12) 42%, rgba(6,22,37,0) 70%), linear-gradient(180deg, rgba(6,22,37,0.6) 0%, rgba(6,22,37,0) 28%, rgba(6,22,37,0.62) 100%)",
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
