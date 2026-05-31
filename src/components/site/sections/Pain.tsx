import { Reveal } from "@/components/site/Motion";

const pains = [
  { title: "400 patients who visited once and never came back", body: "They're not gone. They're waiting to be asked. Most owners have hundreds of dormant patients sitting in their system while they spend money chasing new ones." },
  { title: "You've tried email blasts before", body: "A Mailchimp campaign, maybe a promo. The results were embarrassing. This isn't that — AURA segments by treatment type and sends personalized SMS that feels like it came from your practice." },
  { title: "Your front desk is stretched thin", body: "Juggling phones, check-ins, no-shows — while your dormant patient list sits completely untouched. Every month those patients go quiet is another month they drift to the competitor down the street." },
  { title: "Every missed patient is $500–$800 walking out the door", body: "That's not a rounding error. For a practice doing $60K/month, a 30% lapse rate is $18,000/month in recoverable revenue sitting dormant." },
];

export function Pain() {
  return (
    <section className="navy-section py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.25_0.06_250/_0.6),_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <span className="eyebrow">The Reality</span>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl text-foreground">
              Sound familiar?
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {pains.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="card-hairline rounded-2xl p-7 sm:p-9 h-full transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="font-display text-3xl gold-gradient-text leading-none">
                    0{i + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-foreground/70 leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
