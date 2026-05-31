import { Check, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Motion";
import { CTALink } from "@/components/site/CTA";

const includes = [
  "[Feature / deliverable line 1]",
  "[Feature / deliverable line 2]",
  "[Feature / deliverable line 3]",
  "[Feature / deliverable line 4]",
  "[Feature / deliverable line 5]",
  "[Feature / deliverable line 6]",
];

export function Offer() {
  return (
    <section className="navy-section py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_oklch(0.72_0.12_80/_0.12),_transparent_55%)]" />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <span className="eyebrow">The Offer</span>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl">
              [OFFER HEADLINE]
            </h2>
            <p className="mt-4 text-foreground/70 max-w-xl mx-auto">
              [Short subhead introducing the founder offer.]
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 relative rounded-3xl overflow-hidden border border-gold/30 bg-gradient-to-b from-navy to-navy-deep p-8 sm:p-12 gold-glow">
            <div className="absolute -top-px inset-x-10 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-10">
              <div>
                <div className="eyebrow">Founder Pricing</div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-5xl sm:text-6xl gold-gradient-text">
                    [$X]
                  </span>
                  <span className="text-foreground/60 text-sm">[/period]</span>
                </div>
                <p className="mt-3 text-sm text-foreground/60">[Brief pricing detail.]</p>
              </div>
              <div className="flex sm:justify-end sm:items-end">
                <CTALink to="/apply" variant="gold">
                  Apply for a Founder Spot <ArrowRight size={16} />
                </CTALink>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <div className="eyebrow mb-5">What's Included</div>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {includes.map((line, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-gold" />
                    </span>
                    <span className="text-foreground/85 text-sm leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
