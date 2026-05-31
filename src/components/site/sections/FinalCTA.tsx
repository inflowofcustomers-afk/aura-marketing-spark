import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Motion";
import { CTALink } from "@/components/site/CTA";

export function FinalCTA() {
  return (
    <section className="cream-section py-24 sm:py-36 relative overflow-hidden">
      {/* Warm gold radial glow — cream-friendly alternative to Aurora */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 110%, oklch(0.72 0.12 80 / 0.18), transparent 70%)",
        }}
      />
      {/* Subtle top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <Reveal>
          <span className="eyebrow" style={{ color: "var(--gold-dark)" }}>
            Founder Spots Are Limited
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] text-navy-deep">
            Bring back the patients{" "}
            <span className="gold-gradient-text italic">already in your list.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-navy-deep/65 max-w-xl mx-auto">
            If the math makes sense for your practice, the application takes 3 minutes. We'll reach out within 24 hours — and if it's a fit, your campaign goes live within 7 days.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10">
            <CTALink to="/apply" variant="gold">
              Apply for a Founder Spot <ArrowRight size={16} />
            </CTALink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
