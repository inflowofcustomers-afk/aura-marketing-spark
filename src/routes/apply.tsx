import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

function ConsentCheckbox({
  checked,
  onChange,
  error,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  error?: boolean;
}) {
  return (
    <label className="flex items-start gap-3 cursor-pointer group">
      <span className="relative mt-0.5 flex-shrink-0 w-5 h-5 rounded border transition-colors"
        style={{
          borderColor: error ? "oklch(0.65 0.2 25)" : checked ? "oklch(0.72 0.12 80)" : "oklch(0.35 0.02 260)",
          backgroundColor: checked ? "oklch(0.72 0.12 80 / 0.15)" : "transparent",
        }}
      >
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        {checked && (
          <svg
            className="absolute inset-0 m-auto text-gold"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </span>
      <span className="text-sm text-foreground/75 leading-relaxed">
        I confirm that my patients have consented to receive communications from my practice and that I have the right to contact them via SMS.
        <span className="text-gold ml-1">*</span>
      </span>
    </label>
  );
}

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
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);

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
                Three founder spots available at locked-in pricing. Tell us about your practice and we'll reach out within 24 hours. If it's a fit, your campaign goes live within 7 days.
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
                    if (!consent) {
                      setConsentError(true);
                      return;
                    }
                    setConsentError(false);
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
                    placeholder="What's the biggest challenge in your practice right now? (optional)"
                  />

                  <ConsentCheckbox
                    checked={consent}
                    onChange={(v) => {
                      setConsent(v);
                      if (v) setConsentError(false);
                    }}
                    error={consentError}
                  />

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gold text-navy-deep px-7 py-3.5 text-[15px] font-medium hover:bg-gold-light transition-all hover:-translate-y-0.5 shadow-[0_10px_40px_-12px_rgba(184,150,62,0.6)]"
                  >
                    Submit Application <ArrowRight size={16} />
                  </button>
                  <p className="text-xs text-muted-foreground">
                    By submitting this form you agree to our Terms of Service and Privacy Policy. We'll never share your information with third parties.
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
