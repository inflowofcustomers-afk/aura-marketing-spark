import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Motion";

const pains = [
  { title: "400 patients who visited once and never came back", body: "They're not gone. They're waiting to be asked. Most owners have hundreds of dormant patients sitting in their system while they spend money chasing new ones." },
  { title: "You've tried email blasts before", body: "A Mailchimp campaign, maybe a promo. The results were embarrassing. This isn't that — AURA segments by treatment type and sends personalized SMS that feels like it came from your practice." },
  { title: "Your front desk is stretched thin", body: "Juggling phones, check-ins, no-shows — while your dormant patient list sits completely untouched. Every month those patients go quiet is another month they drift to the competitor down the street." },
  { title: "Every missed patient is $500–$800 walking out the door", body: "That's not a rounding error. For a practice doing $60K/month, a 30% lapse rate is $18,000/month in recoverable revenue sitting dormant." },
];

const numerals = ["I", "II", "III", "IV"];

export function Pain() {
  return (
    <section className="navy-section pt-28 sm:pt-44 pb-20 sm:pb-28">
      <div className="mx-auto max-w-[80rem] px-6 sm:px-12">
        <Reveal>
          <div className="flex items-center gap-5">
            <span className="w-10 rule-gold" />
            <span className="eyebrow">The Reality</span>
          </div>
          <h2 className="mt-10 display-lg text-foreground max-w-[14ch]">Sound familiar?</h2>
        </Reveal>

        <div className="mt-20 sm:mt-28">
          {pains.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -12% 0px" }}
              transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={i % 2 === 1 ? "lg:pl-[16%]" : ""}
            >
              <div className="rule-faint" />
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 py-12 sm:py-16">
                <div className="lg:col-span-1">
                  <span className="font-display text-lg text-gold/70 tracking-[0.2em]">
                    {numerals[i]}
                  </span>
                </div>
                <h3 className="lg:col-span-6 display-md text-foreground max-w-[22ch]">
                  {p.title}
                </h3>
                <p className="lg:col-span-5 body-editorial text-foreground/55">{p.body}</p>
              </div>
            </motion.article>
          ))}
          <div className="rule-faint" />
        </div>
      </div>
    </section>
  );
}
