import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

function ConsentCheckbox({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-start gap-3 cursor-pointer group">
      <span
        className="relative mt-0.5 flex-shrink-0 w-5 h-5 rounded border transition-colors"
        style={{
          borderColor: checked
            ? "var(--gold)"
            : "oklch(0.72 0.12 80 / 50%)",
          backgroundColor: checked ? "oklch(0.72 0.12 80 / 0.12)" : "#fff",
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
            className="absolute inset-0 m-auto"
            style={{ color: "var(--gold-dark)" }}
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
      <span className="text-sm text-navy-deep/65 leading-relaxed">
        I agree to receive recurring marketing text messages from AI Ops, LLC regarding
        Aura Invites, including promotions, special offers, and related marketing
        communications. Consent is not a condition of purchase. Message frequency varies.
        Message and data rates may apply. Reply STOP to unsubscribe or HELP for help.
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
    "w-full bg-white border rounded-xl px-4 py-3 text-navy-deep placeholder:text-navy-deep/35 focus:outline-none transition"
    + " focus:border-gold focus:ring-1 focus:ring-gold";
  const style = {
    borderColor: "oklch(0.72 0.12 80 / 35%)",
  };
  return (
    <label className="block">
      <span className="block text-xs eyebrow mb-2" style={{ color: "var(--gold-dark)" }}>
        {label} {required && <span style={{ color: "var(--gold-dark)" }}>*</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={4}
          className={base}
          style={style}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={base}
          style={style}
        />
      )}
    </label>
  );
}

function ApplyPage() {
  const [sent, setSent] = useState(false);
  const [consent, setConsent] = useState(false);

  return (
    <PageShell>
      <section className="cream-section pt-32 sm:pt-40 pb-20 sm:pb-32 relative overflow-hidden">
        {/* Soft gold glow from top */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, oklch(0.72 0.12 80 / 0.14), transparent 65%)",
          }}
        />
        {/* Bottom gold hairline */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow" style={{ color: "var(--gold-dark)" }}>
                Founder Application
              </span>
              <h1 className="mt-4 font-display text-4xl sm:text-6xl leading-[1.05] text-navy-deep">
                Apply for a{" "}
                <span className="gold-gradient-text italic">Founder Spot</span>
              </h1>
              <p className="mt-5 text-navy-deep/65 max-w-xl mx-auto">
                Three founder spots available at locked-in pricing. Tell us about your
                practice and we'll reach out within 24 hours. If it's a fit, your
                campaign goes live within 7 days.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div
              className="mt-12 rounded-3xl p-7 sm:p-10"
              style={{
                background: "linear-gradient(180deg, #ffffff, oklch(0.96 0.012 80))",
                border: "1px solid oklch(0.72 0.12 80 / 30%)",
                boxShadow:
                  "0 0 0 1px oklch(0.72 0.12 80 / 12%), 0 20px 60px -20px oklch(0.72 0.12 80 / 20%)",
              }}
            >
              {sent ? (
                <div className="text-center py-12">
                  <div
                    className="w-14 h-14 mx-auto rounded-full flex items-center justify-center"
                    style={{
                      background: "oklch(0.72 0.12 80 / 12%)",
                      border: "1px solid oklch(0.72 0.12 80 / 40%)",
                    }}
                  >
                    <CheckCircle2 style={{ color: "var(--gold-dark)" }} size={28} />
                  </div>
                  <h2 className="mt-6 font-display text-3xl text-navy-deep">
                    Application Received
                  </h2>
                  <p className="mt-3 text-navy-deep/65">
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
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@medspa.com"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="MedSpa Name"
                      name="business"
                      required
                      placeholder="Business name"
                    />
                    <Field
                      label="Phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 555-5555"
                    />
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
                    }}
                  />

                  <button
                    type="submit"
                    className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gold text-navy-deep px-7 py-3.5 text-[15px] font-medium hover:bg-gold-light transition-all hover:-translate-y-0.5 shadow-[0_10px_40px_-12px_rgba(184,150,62,0.5)]"
                  >
                    Submit Application <ArrowRight size={16} />
                  </button>
                  <p className="text-xs text-navy-deep/45">
                    By submitting this form you agree to our{" "}
                    <Link
                      to="/terms"
                      className="underline hover:text-navy-deep/70"
                      style={{ color: "var(--gold-dark)" }}
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/privacy"
                      className="underline hover:text-navy-deep/70"
                      style={{ color: "var(--gold-dark)" }}
                    >
                      Privacy Policy
                    </Link>
                    . Agreeing to these does not enroll you in SMS marketing — that
                    requires separately checking the box above. We'll never share your
                    information with third parties. AI Ops, LLC operates the Aura Invites
                    platform.
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
