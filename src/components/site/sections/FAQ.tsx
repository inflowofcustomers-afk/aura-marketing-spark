import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/site/Motion";

const faqs = [
  { q: "[FAQ QUESTION 1]", a: "[FAQ answer 1.]" },
  { q: "[FAQ QUESTION 2]", a: "[FAQ answer 2.]" },
  { q: "[FAQ QUESTION 3]", a: "[FAQ answer 3.]" },
  { q: "[FAQ QUESTION 4]", a: "[FAQ answer 4.]" },
  { q: "[FAQ QUESTION 5]", a: "[FAQ answer 5.]" },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="navy-section py-20 sm:py-32 relative">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <span className="eyebrow">Questions</span>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl">Frequently Asked</h2>
          </div>
        </Reveal>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.05}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left py-6 flex items-start justify-between gap-6 group"
                >
                  <span className="font-display text-lg sm:text-xl text-foreground group-hover:text-gold transition-colors">
                    {f.q}
                  </span>
                  <span
                    className={`mt-1 w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-45 bg-gold text-navy-deep" : "text-gold"
                    }`}
                  >
                    <Plus size={16} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-foreground/75 leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
