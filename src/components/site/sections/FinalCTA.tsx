import { Reveal } from "@/components/site/Motion";
import { CTALink } from "@/components/site/CTA";

export function FinalCTA() {
  return (
    <section className="cream-section py-40 sm:py-72 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 sm:px-12 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-5">
            <span className="w-12" style={{ height: 1, background: "var(--gold-dark)" }} />
            <span className="eyebrow eyebrow-dark">Founder Spots Are Limited</span>
            <span className="w-12" style={{ height: 1, background: "var(--gold-dark)" }} />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="mt-16 font-display font-light text-navy-deep"
            style={{
              fontSize: "clamp(3.5rem, 8.6vw, 7.6rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.025em",
            }}
          >
            Bring back the patients{" "}
            <span className="gold-italic">already in your list.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-16 body-editorial text-navy-deep/80 max-w-2xl mx-auto">
            If the math makes sense for your practice, the application takes 3 minutes. We'll reach out within 24 hours, and if it's a fit, your campaign goes live within 7 days.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-16">
            <CTALink to="/apply" variant="dark">
              Apply for a Founder Spot
            </CTALink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
