import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply — AURA Invites" },
      {
        name: "description",
        content:
          "Apply for a founder spot. AURA is accepting a limited number of MedSpa partners.",
      },
      { property: "og:title", content: "Apply — AURA Invites" },
      {
        property: "og:description",
        content: "Apply for a founder spot with AURA Invites.",
      },
    ],
  }),
  component: ApplyPage,
});

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  textarea?: boolean;
}) {
  const base =
    "w-full bg-navy/60 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition";
  return (
    <label className="block">
      <span className="block text-xs eyebrow mb-2">
        {label} {required && <span className="text-gold">*</span>}
      </span>
      {textarea ? (
        <textarea name={name} required={required} placeholder={placeholder} rows={4} className={base} />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} className={base} />
      )}
    </label>
  );
}

function ApplyPage() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <section className="navy-section pt-32 sm:pt-40 pb-20 sm:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,_oklch(0.72_0.12_80/_0.15),_transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">Founder Application</span>
              <h1 className="mt-4 font-display text-4xl sm:text-6xl leading-[1.05]">
                Apply for a{" "}
                <span className="gold-gradient-text italic">Founder Spot</span>
              </h1>
              <p className="mt-5 text-foreground/75 max-w-xl mx-auto">
                [Short intro paragraph about the application process and what happens next.]
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-12 card-hairline rounded-3xl p-7 sm:p-10 gold-glow">
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 mx-auto rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center">
                    <CheckCircle2 className="text-gold" size={28} />
                  </div>
                  <h2 className="mt-6 font-display text-3xl">Application Received</h2>
                  <p className="mt-3 text-foreground/75">
                    [Confirmation copy — we'll reach out within X business days.]
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full Name" name="name" required placeholder="Your name" />
                    <Field label="Email" name="email" type="email" required placeholder="you@medspa.com" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="MedSpa Name" name="business" required placeholder="Business name" />
                    <Field label="Phone" name="phone" type="tel" placeholder="(555) 555-5555" />
                  </div>
                  <Field label="Website" name="website" type="url" placeholder="https://" />
                  <Field
                    label="Approx. Patients in Your Database"
                    name="patients"
                    placeholder="e.g. 1,200"
                  />
                  <Field
                    label="Tell us about your goals"
                    name="goals"
                    textarea
                    placeholder="[Prompt copy for the applicant.]"
                  />

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gold text-navy-deep px-7 py-3.5 text-[15px] font-medium hover:bg-gold-light transition-all hover:-translate-y-0.5 shadow-[0_10px_40px_-12px_rgba(184,150,62,0.6)]"
                  >
                    Submit Application <ArrowRight size={16} />
                  </button>
                  <p className="text-xs text-muted-foreground">
                    [Disclaimer / privacy reassurance copy.]
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
