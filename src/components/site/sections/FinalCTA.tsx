import { ArrowRight } from "lucide-react";
import { Aurora, Reveal } from "@/components/site/Motion";
import { CTALink } from "@/components/site/CTA";

export function FinalCTA() {
  return (
    <section className="navy-section py-24 sm:py-36 relative overflow-hidden grain">
      <Aurora />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <Reveal>
          <span className="eyebrow">Founder Spots Are Limited</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05]">
            Bring back the patients{" "}
            <span className="gold-gradient-text italic">already in your list.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-foreground/75 max-w-xl mx-auto">
            [Short closing line reinforcing the offer.]
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
