import { Reveal } from "@/components/site/Motion";
import stillLife from "@/assets/still-life.jpg";

export function WhatIs() {
  return (
    <section className="cream-section pt-28 sm:pt-44 pb-28 sm:pb-44">
      <div className="mx-auto max-w-[80rem] px-6 sm:px-12">
        <Reveal>
          <div className="flex items-center gap-5">
            <span className="w-10" style={{ height: 1, background: "var(--gold-dark)" }} />
            <span className="eyebrow eyebrow-dark">What is AURA</span>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-10 display-lg text-navy-deep max-w-[18ch]">
            A reactivation engine purpose-built for MedSpas.
          </h2>
        </Reveal>

        <div className="mt-20 sm:mt-28 grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          <Reveal delay={0.12} className="lg:col-span-7">
            <div className="space-y-9 body-editorial text-navy-deep/70 max-w-2xl">
              <p>Most patient reactivation attempts fail because they're generic — a newsletter blast, a promo email, a discount nobody asked for. Patients ignore them because they feel like junk mail.</p>
              <p>AURA connects directly to your Mangomint or Boulevard account, analyzes your full patient history, segments your dormant list by treatment type and last visit, and deploys a personalized SMS and email sequence that feels like it came from your practice — not a marketing platform.</p>
            </div>

            {/* Editorial annotation, not a card */}
            <div className="mt-16 pl-8 sm:pl-10 border-l" style={{ borderColor: "var(--gold)" }}>
              <div className="eyebrow eyebrow-dark">The Result</div>
              <p className="mt-5 font-display text-[1.75rem] sm:text-4xl leading-[1.2] text-navy-deep max-w-[24ch]">
                First message goes out within 7 days of onboarding. You don't touch a single thing.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-5">
            <img
              src={stillLife}
              alt="Luxury skincare bottle and folded linen on a travertine ledge in warm daylight"
              width={1200}
              height={1504}
              loading="lazy"
              className="w-full h-[420px] lg:h-[640px] object-cover img-duotone"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
