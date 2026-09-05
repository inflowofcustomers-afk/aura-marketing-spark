import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/site/Motion";
import { CTALink } from "@/components/site/CTA";
import { usePriceCounter } from "@/hooks/usePriceCounter";
import interior from "@/assets/interior-suite.jpg";

const includes = [
  "AURA platform deployment",
  "Native Mangomint or Boulevard integration",
  "Full patient database segmentation",
  "Complete SMS + email campaign creative",
  "Dedicated phone number for your practice",
  "Live tracking dashboard",
  "Weekly performance reports",
  "60-day campaign window",
];

function CinematicBand() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const inset = useTransform(scrollYProgress, [0, 0.42], ["7vw", "0vw"]);

  return (
    <motion.div
      ref={ref}
      style={reduce ? undefined : { paddingLeft: inset, paddingRight: inset }}
      className="navy-section"
    >
      <div className="relative overflow-hidden h-[58vh] sm:h-[86vh]">
        <motion.img
          src={interior}
          alt="A quiet, warm-toned aesthetic treatment suite in soft daylight"
          width={1600}
          height={1008}
          loading="lazy"
          style={reduce ? undefined : { y }}
          className="absolute inset-0 w-full h-[118%] -top-[9%] object-cover img-duotone"
        />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,22,37,0.55) 0%, rgba(6,22,37,0.12) 42%, rgba(6,22,37,0.92) 100%)",
          }}
        />
      </div>
    </motion.div>
  );
}

export function Offer() {
  const { value, ref } = usePriceCounter(5000, 1400);

  return (
    <>
      <CinematicBand />

      <section className="navy-section pt-28 sm:pt-44 pb-28 sm:pb-48">
        <div className="canvas-grid">
          <Reveal>
            <div className="flex items-center gap-5">
              <span className="w-12 rule-gold" />
              <span className="eyebrow">The Offer</span>
            </div>
            <h2
              className="mt-12 sm:mt-16 font-display font-light text-foreground tracking-[-0.025em]"
              style={{ fontSize: "clamp(2.75rem, 7.4vw, 6.25rem)", lineHeight: 0.98 }}
            >
              The AURA INVITES&trade;
              <br />
              Reactivation Pilot.
            </h2>
            <p
              className="mt-10 sm:mt-14 text-foreground/85 font-light max-w-[60ch] w-[92%] lg:w-[64%]"
              style={{ fontSize: "clamp(1.0625rem, 1.35vw, 1.375rem)", lineHeight: 1.68 }}
            >
              Three founder spots. Lower setup cost. Direct access to our team. Locked-in rate
              that won't be available to anyone else.
            </p>
          </Reveal>
        </div>

        <div className="container-grid">


          <Reveal delay={0.12}>
            <div className="mt-24 sm:mt-32 rule-gold" />

            <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 py-16 sm:py-24 items-start">
              <div className="lg:col-span-6">
                <div className="eyebrow">Founder Pricing</div>
                <div className="mt-8 flex flex-wrap items-baseline gap-5">
                  <span
                    ref={ref as React.RefObject<HTMLSpanElement>}
                    className="font-display text-[6rem] sm:text-[10rem] text-gold leading-[0.92] tracking-[-0.03em] tabular-nums"
                  >
                    ${value.toLocaleString()}
                  </span>
                  <span className="text-sm uppercase tracking-[0.24em] text-foreground/80">
                    setup fee
                  </span>
                </div>
                <p className="mt-8 body-editorial text-foreground/88 max-w-md">
                  Includes your first 20 booked appointments. $250 per booking after that.
                </p>
                <div className="mt-14">
                  <CTALink to="/apply" variant="solid">
                    Apply for a Founder Spot
                  </CTALink>
                </div>
              </div>

              <div
                className="lg:col-span-6 lg:pl-16 lg:border-l"
                style={{ borderColor: "rgba(198,161,91,0.18)" }}
              >
                <div className="eyebrow">What's Included</div>
                <ul className="mt-10">
                  {includes.map((line, i) => (
                    <li
                      key={i}
                      className="flex items-baseline gap-7 py-5"
                      style={{ borderBottom: "1px solid rgba(198,161,91,0.12)" }}
                    >
                      <span className="text-[12px] tracking-[0.2em] text-gold/80 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-foreground/90 body-support">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rule-faint" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
