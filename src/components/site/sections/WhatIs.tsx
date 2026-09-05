import { Reveal } from "@/components/site/Motion";
import interiorDetail from "@/assets/interior-detail.jpg";

export function WhatIs() {
  return (
    <section className="cream-section pt-28 sm:pt-44 pb-28 sm:pb-44">
      <div className="container-grid">
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

        <div className="mt-20 sm:mt-32 grid lg:grid-cols-[45fr_55fr] gap-16 lg:gap-24 items-center">
          <Reveal delay={0.12}>
            <div className="space-y-10 body-editorial text-navy-deep/85">
              <p>Most patient reactivation attempts fail because they're generic: a newsletter blast, a promo email, a discount nobody asked for. Patients ignore them because they feel like junk mail.</p>
              <p>AURA connects directly to your Mangomint or Boulevard account, analyzes your full patient history, segments your dormant list by treatment type and last visit, and deploys a personalized SMS and email sequence that feels like it came from your practice, not from a marketing platform.</p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <img
              src={interiorDetail}
              alt="Warm daylight across travertine stone, sheer linen and fluted glass in a luxury aesthetic clinic"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full h-[480px] lg:h-[880px] object-cover img-duotone"
            />
          </Reveal>
        </div>

        {/* Editorial pull quote, full composition width */}
        <Reveal delay={0.1}>
          <div className="mt-24 sm:mt-36 pt-14" style={{ borderTop: "1px solid var(--gold)" }}>
            <div className="eyebrow eyebrow-dark">The Result</div>
            <p
              className="mt-10 font-display font-light text-navy-deep max-w-[26ch]"
              style={{
                fontSize: "clamp(2.5rem, 5.4vw, 4.75rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.015em",
              }}
            >
              First message goes out within 7 days of onboarding.{" "}
              <span className="italic text-[var(--gold-dark)]">
                You don't touch a single thing.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
