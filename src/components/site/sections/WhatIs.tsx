import { Reveal } from "@/components/site/Motion";
import stillLife from "@/assets/still-life.jpg";

export function WhatIs() {
  return (
    <section className="cream-section pt-32 sm:pt-52 pb-32 sm:pb-52">
      <div className="mx-auto max-w-[84rem] px-6 sm:px-12">
        <Reveal>
          <div className="flex items-center gap-5">
            <span className="w-12" style={{ height: 1, background: "var(--gold-dark)" }} />
            <span className="eyebrow eyebrow-dark">What is AURA</span>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-10 display-lg text-navy-deep max-w-[16ch]">
            A reactivation engine purpose-built for MedSpas.
          </h2>
        </Reveal>

        <div className="mt-20 sm:mt-32 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal delay={0.12}>
            <div className="space-y-10 body-editorial text-navy-deep/75">
              <p>Most patient reactivation attempts fail because they're generic — a newsletter blast, a promo email, a discount nobody asked for. Patients ignore them because they feel like junk mail.</p>
              <p>AURA connects directly to your Mangomint or Boulevard account, analyzes your full patient history, segments your dormant list by treatment type and last visit, and deploys a personalized SMS and email sequence that feels like it came from your practice — not a marketing platform.</p>
            </div>

            {/* Editorial annotation, not a card */}
            <div
              className="mt-16 pt-10"
              style={{ borderTop: "1px solid var(--gold)" }}
            >
              <div className="eyebrow eyebrow-dark">The Result</div>
              <p className="mt-6 font-display text-[2.25rem] sm:text-[3.25rem] leading-[1.08] tracking-[-0.01em] text-navy-deep max-w-[20ch]">
                First message goes out within 7 days of onboarding.{" "}
                <span className="italic text-[var(--gold-dark)]">
                  You don't touch a single thing.
                </span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <img
              src={stillLife}
              alt="Luxury skincare bottle and folded linen on a travertine ledge in warm daylight"
              width={1200}
              height={1504}
              loading="lazy"
              className="w-full h-[460px] lg:h-[820px] object-cover img-duotone"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
