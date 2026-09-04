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

export function Offer() {
  const { value, ref } = usePriceCounter(5000, 1400);

  return (
    <>
      {/* Full-bleed editorial band */}
      <div className="relative navy-section">
        <img
          src={interior}
          alt="A quiet, warm-toned aesthetic treatment suite in soft daylight"
          width={1600}
          height={1008}
          loading="lazy"
          className="w-full h-[42vh] sm:h-[62vh] object-cover img-duotone"
        />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,22,37,0.55) 0%, rgba(6,22,37,0.1) 40%, rgba(6,22,37,0.85) 100%)",
          }}
        />
      </div>

      <section className="navy-section pt-24 sm:pt-36 pb-28 sm:pb-44">
        <div className="mx-auto max-w-[72rem] px-6 sm:px-12">
          <Reveal>
            <div className="flex items-center gap-5">
              <span className="w-10 rule-gold" />
              <span className="eyebrow">The Offer</span>
            </div>
            <h2 className="mt-10 display-lg text-foreground max-w-[16ch]">
              The AURA Reactivation Pilot.
            </h2>
            <p className="mt-8 body-editorial text-foreground/55 max-w-xl">
              Three founder spots. Lower setup cost. Direct access to our team. Locked-in rate
              that won't be available to anyone else.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-20 rule-gold" />

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 py-14 sm:py-20 items-start">
              <div className="lg:col-span-6">
                <div className="eyebrow">Founder Pricing</div>
                <div className="mt-6 flex items-baseline gap-4">
                  <span
                    ref={ref as React.RefObject<HTMLSpanElement>}
                    className="font-display text-[4.5rem] sm:text-[7rem] text-gold leading-[1.05] tracking-[-0.02em]"
                  >
                    ${value.toLocaleString()}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.24em] text-foreground/45">
                    setup fee
                  </span>
                </div>
                <p className="mt-6 body-editorial text-foreground/55 max-w-md">
                  Includes your first 20 booked appointments. $250 per booking after that.
                </p>
                <div className="mt-12">
                  <CTALink to="/apply" variant="gold">
                    Apply for a Founder Spot
                  </CTALink>
                </div>
              </div>

              <div className="lg:col-span-6 lg:pl-12 lg:border-l" style={{ borderColor: "rgba(198,161,91,0.18)" }}>
                <div className="eyebrow">What's Included</div>
                <ul className="mt-8">
                  {includes.map((line, i) => (
                    <li
                      key={i}
                      className="flex items-baseline gap-6 py-4"
                      style={{ borderBottom: "1px solid rgba(198,161,91,0.12)" }}
                    >
                      <span className="text-[10px] tracking-[0.2em] text-gold/60 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-foreground/75 text-[15px] font-light leading-relaxed">
                        {line}
                      </span>
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
