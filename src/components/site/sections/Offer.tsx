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
      className="relative navy-section overflow-hidden h-[58vh] sm:h-[86vh]"
    >
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
  );
}

export function Offer() {
  const { value, ref } = usePriceCounter(5000, 1400);

  return (
    <>
      <CinematicBand />

      <section className="navy-section pt-28 sm:pt-40 pb-32 sm:pb-52">
        <div className="mx-auto max-w-[80rem] px-6 sm:px-12">
          <Reveal>
            <div className="flex items-center gap-5">
              <span className="w-12 rule-gold" />
              <span className="eyebrow">The Offer</span>
            </div>
            <h2 className="mt-10 display-lg text-foreground max-w-[16ch]">
              The AURA Reactivation Pilot.
            </h2>
            <p className="mt-10 body-editorial text-foreground/65 max-w-2xl">
              Three founder spots. Lower setup cost. Direct access to our team. Locked-in rate
              that won't be available to anyone else.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-20 rule-gold" />

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
                  <span className="text-xs uppercase tracking-[0.24em] text-foreground/55">
                    setup fee
                  </span>
                </div>
                <p className="mt-8 body-editorial text-foreground/70 max-w-md">
                  Includes your first 20 booked appointments. $250 per booking after that.
                </p>
                <div className="mt-14">
                  <CTALink to="/apply" variant="gold">
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
                      <span className="text-[11px] tracking-[0.2em] text-gold/70 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-foreground/85 body-support">{line}</span>
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
