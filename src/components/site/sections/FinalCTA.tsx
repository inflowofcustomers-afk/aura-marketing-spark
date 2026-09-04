import { Reveal } from "@/components/site/Motion";
import { CTALink } from "@/components/site/CTA";

export function FinalCTA() {
  return (
    <section className="cream-section py-36 sm:py-60">
      <div className="mx-auto max-w-5xl px-6 sm:px-12 text-center">
        <Reveal>
          <span className="eyebrow eyebrow-dark">Founder Spots Are Limited</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-14 display-xl text-navy-deep">
            Bring back the patients{" "}
            <span className="gold-italic">already in your list.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-14 body-editorial text-navy-deep/60 max-w-xl mx-auto">
            If the math makes sense for your practice, the application takes 3 minutes. We'll reach out within 24 hours — and if it's a fit, your campaign goes live within 7 days.
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
