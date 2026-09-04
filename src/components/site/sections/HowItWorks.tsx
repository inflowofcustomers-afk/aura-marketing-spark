import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Motion";

const steps = [
  {
    numeral: "I",
    title: "Connect",
    body: "You connect your Mangomint or Boulevard account — or upload a CSV export. Takes 15 minutes. We handle everything after that.",
  },
  {
    numeral: "II",
    title: "Launch",
    body: "Our team builds your campaign — segmentation, copy, sequencing, dedicated phone number. Your campaign goes live within 7 days.",
  },
  {
    numeral: "III",
    title: "Collect",
    body: "Patients respond. Appointments book. You get a weekly report showing exactly what came in. The only thing you do is show up for the appointment.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="navy-section pt-28 sm:pt-44 pb-28 sm:pb-44">
      <div className="mx-auto max-w-[80rem] px-6 sm:px-12">
        <Reveal>
          <div className="flex items-center gap-5">
            <span className="w-10 rule-gold" />
            <span className="eyebrow">The Process</span>
          </div>
          <div className="mt-10 grid lg:grid-cols-12 gap-8 items-end">
            <h2 className="lg:col-span-7 display-lg text-foreground">How It Works</h2>
            <p className="lg:col-span-5 body-editorial text-foreground/55 lg:pb-3">
              Three steps. Seven days. Appointments on your calendar.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 sm:mt-28">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -12% 0px" }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="rule-faint" />
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 py-14 sm:py-20">
                <div className="lg:col-span-2 flex lg:block items-baseline gap-5">
                  <div className="font-display text-3xl sm:text-4xl text-gold/70 tracking-[0.18em] leading-none">
                    {s.numeral}
                  </div>
                </div>
                <h3 className="lg:col-span-4 font-display text-3xl sm:text-5xl text-foreground leading-none tracking-[0.02em]">
                  {s.title}
                </h3>
                <p className="lg:col-span-6 body-editorial text-foreground/55 max-w-xl">
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
