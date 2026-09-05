import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/site/Motion";

const faqs = [
  { q: "My patient list is old. Will this still work?", a: "Yes — and older lists often outperform newer ones. A patient who visited 18 months ago and never received a single follow-up isn't a lost cause. They're an untouched opportunity." },
  { q: "How is this different from an email blast?", a: "Three differences: personalization by treatment type, SMS vs email (higher open rates, faster response), and a multi-touch sequence vs a single blast." },
  { q: "What booking software do you support?", a: "Mangomint and Boulevard natively. If you use something else, we work from a CSV export — most owners can generate that in under 5 minutes." },
  { q: "What do I have to do?", a: "Twenty minutes on an onboarding call. Connect your account or send the CSV. Answer a few questions so we write messaging that sounds like you. That's it." },
  { q: "Is there a guarantee?", a: "The $5,000 setup includes 20 booked appointments. If we don't deliver 20 in the 60-day window, we keep working at no additional cost until we do." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="navy-section pt-32 sm:pt-52 pb-32 sm:pb-52">
      <div className="mx-auto max-w-[84rem] px-6 sm:px-12">
        <Reveal>
          <div className="flex items-center gap-5">
            <span className="w-10 rule-gold" />
            <span className="eyebrow">Questions</span>
          </div>
          <h2 className="mt-10 display-lg text-foreground">Frequently Asked</h2>
        </Reveal>

        <div className="mt-20 sm:mt-32 max-w-[760px]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.9, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="rule-faint" />
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left py-8 sm:py-10 flex items-start justify-between gap-10 group"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-display text-[1.875rem] sm:text-[2.5rem] leading-[1.16] transition-colors duration-500 ${
                      isOpen ? "text-gold" : "text-foreground group-hover:text-gold"
                    }`}
                  >
                    {f.q}
                  </span>
                  <span className="relative mt-4 w-4 h-4 shrink-0" aria-hidden>
                    <span className="absolute inset-x-0 top-1/2 h-px bg-gold/70" />
                    <span
                      className={`absolute inset-y-0 left-1/2 w-px bg-gold/70 transition-transform duration-700 ${
                        isOpen ? "scale-y-0" : "scale-y-100"
                      }`}
                      style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                    />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-12 max-w-2xl body-editorial text-foreground/65">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
          <div className="rule-faint" />
        </div>
      </div>
    </section>
  );
}
