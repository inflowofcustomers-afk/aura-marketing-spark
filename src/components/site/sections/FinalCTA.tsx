import { Reveal } from "@/components/site/Motion";
import { CTALink } from "@/components/site/CTA";

export function FinalCTA() {
  return (
    <section className="cream-section py-32 sm:py-60 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 sm:px-12 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-5">
            <span className="w-12" style={{ height: 1, background: "var(--gold-dark)" }} />
            <span className="eyebrow eyebrow-dark">Founder Applications Are Closed</span>
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
          <p className="mt-16 body-editorial text-navy-deep/85 max-w-2xl mx-auto">
            Founder applications are closed for now. Join the waitlist in under 2 minutes and you'll be first to hear when the next round opens, at the same founder rate.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-16">
            <CTALink to="/apply" variant="dark">
              Join the Waitlist
            </CTALink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
