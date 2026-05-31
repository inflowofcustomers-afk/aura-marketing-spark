import { Reveal } from "@/components/site/Motion";
import { Database, MessageSquareText, CalendarCheck2 } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "[STEP 1 TITLE]",
    body: "[Step 1 description.]",
  },
  {
    icon: MessageSquareText,
    title: "[STEP 2 TITLE]",
    body: "[Step 2 description.]",
  },
  {
    icon: CalendarCheck2,
    title: "[STEP 3 TITLE]",
    body: "[Step 3 description.]",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="navy-section py-20 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <span className="eyebrow">The Process</span>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl">How It Works</h2>
            <p className="mt-4 max-w-xl mx-auto text-foreground/70">
              [Short subhead about the simplicity of the 3-step process.]
            </p>
          </div>
        </Reveal>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={i} delay={i * 0.15}>
                  <div className="relative text-center lg:text-left">
                    <div className="relative inline-flex">
                      <div className="w-24 h-24 rounded-full border border-gold/30 bg-navy flex items-center justify-center mx-auto lg:mx-0">
                        <Icon className="text-gold" size={28} />
                      </div>
                      <span className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-gold text-navy-deep font-display text-lg flex items-center justify-center gold-glow">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-2xl sm:text-3xl">{s.title}</h3>
                    <p className="mt-3 text-foreground/70 leading-relaxed">{s.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
