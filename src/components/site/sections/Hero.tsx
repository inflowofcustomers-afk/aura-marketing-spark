import { ArrowRight } from "lucide-react";
import { Aurora, Particles, Reveal } from "@/components/site/Motion";
import { CTALink } from "@/components/site/CTA";

export function Hero() {
  return (
    <section className="relative overflow-hidden navy-section pt-32 sm:pt-40 pb-20 sm:pb-32 grain">
      <Aurora />
      <Particles count={28} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 text-center">
        <Reveal>
          <span className="eyebrow inline-block">Purpose-built for MedSpa owners</span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] text-foreground">
            Your dormant patient list is hiding{" "}
            <span className="gold-gradient-text italic">$30,000</span> in booked revenue.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-7 mx-auto max-w-2xl text-base sm:text-lg text-foreground/75 leading-relaxed">
            AURA finds every patient who visited once and disappeared, and brings them back,
            with a personalized SMS and email sequence that books appointments automatically.
            No ads. No new leads. Just revenue from people who already know you.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <CTALink to="/apply" variant="gold">
              Apply for a Founder Spot <ArrowRight size={16} />
            </CTALink>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-medium border border-foreground/25 text-foreground hover:border-gold hover:text-gold transition-all"
            >
              See How It Works
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.45}>
          <div className="mt-16 flex items-center justify-center gap-3 text-xs eyebrow opacity-70">
            <span className="h-px w-8 bg-gold/50" />
            <span>Limited founder spots</span>
            <span className="h-px w-8 bg-gold/50" />
          </div>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
