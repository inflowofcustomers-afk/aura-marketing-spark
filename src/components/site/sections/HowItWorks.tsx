import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Motion";

const steps = [
  {
    numeral: "01",
    title: "Connect",
    body: "You connect your Mangomint or Boulevard account, or upload a CSV export. Takes 15 minutes. We handle everything after that.",
  },
  {
    numeral: "02",
    title: "Launch",
    body: "Our team builds your campaign: segmentation, copy, sequencing, and a dedicated phone number. Your campaign goes live within 7 days.",
  },
  {
    numeral: "03",
    title: "Collect",
    body: "Patients respond. Appointments book. You get a weekly report showing exactly what came in. The only thing you do is show up for the appointment.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="navy-section pt-28 sm:pt-44 pb-28 sm:pb-44">
      <div className="canvas-grid">
        <Reveal>
          <div className="flex items-center gap-5">
            <span className="w-12 rule-gold" />
            <span className="eyebrow">The Process</span>
          </div>
          <h2 className="mt-12 display-canvas text-foreground w-[80%]">How It Works</h2>
          <p className="mt-10 body-editorial text-foreground/85 max-w-[34rem] lg:ml-auto lg:text-right">
            Three steps. Seven days. Appointments on your calendar.
          </p>
        </Reveal>
      </div>

      <div className="container-grid">
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
                <div className={i === 1 ? "lg:col-span-2 lg:col-start-2" : "lg:col-span-3"}>
                  <div className="numeral-xl tabular-nums">{s.numeral}</div>
                </div>
                <h3 className="lg:col-span-4 font-display text-[2.6rem] sm:text-[4.25rem] text-foreground leading-[0.95] tracking-[0.01em]">
                  {s.title}
                </h3>
                <p
                  className={`body-editorial text-foreground/85 max-w-2xl ${
                    i === 2 ? "lg:col-span-5 lg:col-start-8" : "lg:col-span-5"
                  }`}
                >
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
