import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Motion";

const steps = [
  {
    numeral: "01",
    title: "Connect",
    body: "You connect your Mangomint or Boulevard account — or upload a CSV export. Takes 15 minutes. We handle everything after that.",
  },
  {
    numeral: "02",
    title: "Launch",
    body: "Our team builds your campaign — segmentation, copy, sequencing, dedicated phone number. Your campaign goes live within 7 days.",
  },
  {
    numeral: "03",
    title: "Collect",
    body: "Patients respond. Appointments book. You get a weekly report showing exactly what came in. The only thing you do is show up for the appointment.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="navy-section pt-32 sm:pt-52 pb-32 sm:pb-52">
      <div className="mx-auto max-w-[84rem] px-6 sm:px-12">
        <Reveal>
          <div className="flex items-center gap-5">
            <span className="w-12 rule-gold" />
            <span className="eyebrow">The Process</span>
          </div>
          <div className="mt-10 grid lg:grid-cols-12 gap-8 items-end">
            <h2 className="lg:col-span-7 display-lg text-foreground">How It Works</h2>
            <p className="lg:col-span-5 body-editorial text-foreground/60 lg:pb-4">
              Three steps. Seven days. Appointments on your calendar.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 sm:mt-32">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -12% 0px" }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="rule-faint" />
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 py-16 sm:py-24 items-start">
                <div className="lg:col-span-3">
                  <div className="numeral-xl tabular-nums">{s.numeral}</div>
                </div>
                <h3 className="lg:col-span-4 font-display text-4xl sm:text-6xl text-foreground leading-[0.95] tracking-[0.01em]">
                  {s.title}
                </h3>
                <p className="lg:col-span-5 body-editorial text-foreground/65 max-w-2xl">
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="rule-faint" />
        </div>
      </div>
    </section>
  );
}
