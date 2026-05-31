import { Reveal } from "@/components/site/Motion";

export function WhatIs() {
  return (
    <section className="cream-section pt-12 sm:pt-16 pb-20 sm:pb-32 relative">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <span className="eyebrow" style={{ color: "var(--gold-dark)" }}>
            What is AURA
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl text-navy-deep max-w-3xl">
            A reactivation engine purpose-built for MedSpas.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 space-y-5 text-navy-deep/80 text-base sm:text-lg leading-relaxed">
              <p>Most patient reactivation attempts fail because they're generic — a newsletter blast, a promo email, a discount nobody asked for. Patients ignore them because they feel like junk mail.</p>
              <p>AURA connects directly to your Mangomint or Boulevard account, analyzes your full patient history, segments your dormant list by treatment type and last visit, and deploys a personalized SMS and email sequence that feels like it came from your practice — not a marketing platform.</p>
            </div>
            <div className="lg:col-span-2">
              <div
                className="rounded-2xl p-7 border"
                style={{
                  background:
                    "linear-gradient(180deg, oklch(0.95 0.04 80), oklch(0.92 0.06 80))",
                  borderColor: "var(--gold)",
                }}
              >
                <div className="eyebrow" style={{ color: "var(--gold-dark)" }}>
                  The Result
                </div>
                <p className="mt-3 font-display text-2xl text-navy-deep leading-tight">
                  First message goes out within 7 days of onboarding. You don't touch a single thing.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
