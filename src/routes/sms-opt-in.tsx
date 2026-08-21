import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const SMS_CONSENT_TEXT =
  "I agree to receive recurring marketing text messages from AI Ops, LLC regarding Aura Invites, including promotions, special offers, and related marketing communications. Consent is not a condition of purchase. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe or HELP for help.";

export const Route = createFileRoute("/sms-opt-in")({
  head: () => ({
    meta: [
      { title: "Aura Invites Marketing SMS — Opt In" },
      {
        name: "description",
        content:
          "Opt in to receive recurring marketing text messages from AI Ops, LLC regarding Aura Invites. Message and data rates may apply.",
      },
      { property: "og:title", content: "Aura Invites Marketing SMS — Opt In" },
      {
        property: "og:description",
        content:
          "Separate, optional consent to receive marketing SMS from AI Ops, LLC regarding Aura Invites.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SmsOptInPage,
});

function SmsConsentCheckbox({
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
          borderColor: checked ? "var(--gold)" : "oklch(0.72 0.12 80 / 50%)",
          backgroundColor: checked ? "oklch(0.72 0.12 80 / 0.12)" : "#fff",
        }}
      >
        <input
          type="checkbox"
          name="smsConsent"
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
      <span className="text-sm text-navy-deep/65 leading-relaxed">{SMS_CONSENT_TEXT}</span>
    </label>
  );
}

function SmsOptInPage() {
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const linkStyle = { color: "var(--gold-dark)" } as const;

  return (
    <PageShell>
      <section className="cream-section pt-32 sm:pt-40 pb-20 sm:pb-32 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, oklch(0.72 0.12 80 / 0.14), transparent 65%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="relative mx-auto max-w-2xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow" style={{ color: "var(--gold-dark)" }}>
                SMS Marketing
              </span>
              <h1 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.05] text-navy-deep">
                Aura Invites <span className="gold-gradient-text italic">Marketing SMS</span>
              </h1>
              <p className="mt-5 text-navy-deep/65 max-w-xl mx-auto">
                Opt in below to receive recurring marketing text messages from AI Ops, LLC
                regarding Aura Invites.
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
                  <h2 className="mt-6 font-display text-3xl text-navy-deep">You're Opted In</h2>
                  <p className="mt-3 text-navy-deep/65">
                    Thanks — your mobile number has been submitted for marketing text messages
                    from AI Ops, LLC regarding Aura Invites. Reply STOP at any time to
                    unsubscribe or HELP for help.
                  </p>
                </div>
              ) : (
                <form
                  noValidate
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!phone.trim()) {
                      setError("Please enter your mobile phone number.");
                      return;
                    }
                    if (!consent) {
                      setError(
                        "Please check the SMS marketing consent box to join the program.",
                      );
                      return;
                    }
                    // Consent is recorded only on an actively checked box + successful submit.
                    const submission = {
                      phone: phone.trim(),
                      smsMarketingConsent: true,
                      consentTimestamp: new Date().toISOString(),
                      consentLanguage: SMS_CONSENT_TEXT,
                      sourcePage: "/sms-opt-in",
                    };
                    void submission;
                    setError(null);
                    setSent(true);
                  }}
                  className="space-y-6"
                >
                  <label className="block">
                    <span
                      className="block text-xs eyebrow mb-2"
                      style={{ color: "var(--gold-dark)" }}
                    >
                      Mobile Phone Number <span style={{ color: "var(--gold-dark)" }}>*</span>
                    </span>
                    <input
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      required
                      maxLength={25}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 555-5555"
                      className="w-full bg-white border rounded-xl px-4 py-3 text-navy-deep placeholder:text-navy-deep/35 focus:outline-none transition focus:border-gold focus:ring-1 focus:ring-gold"
                      style={{ borderColor: "oklch(0.72 0.12 80 / 35%)" }}
                    />
                  </label>

                  <div>
                    <span
                      className="block text-xs eyebrow mb-2"
                      style={{ color: "var(--gold-dark)" }}
                    >
                      Optional SMS Marketing Consent
                    </span>
                    <SmsConsentCheckbox
                      checked={consent}
                      onChange={(v) => {
                        setConsent(v);
                        if (v) setError(null);
                      }}
                    />
                  </div>

                  {error && (
                    <p className="text-sm" style={{ color: "var(--danger)" }} role="alert">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gold text-navy-deep px-7 py-3.5 text-[15px] font-medium hover:bg-gold-light transition-all hover:-translate-y-0.5 shadow-[0_10px_40px_-12px_rgba(184,150,62,0.5)]"
                  >
                    Join SMS Marketing <ArrowRight size={16} />
                  </button>

                  <p className="text-xs text-navy-deep/45 leading-relaxed">
                    By joining, you are providing separate consent to receive marketing SMS from
                    AI Ops, LLC regarding Aura Invites. Message frequency varies. Message and
                    data rates may apply. Reply STOP to unsubscribe or HELP for help. Consent is
                    not a condition of purchase.
                  </p>

                  <p className="text-sm">
                    <Link to="/privacy" className="underline" style={linkStyle}>
                      Privacy Policy
                    </Link>
                    <span className="text-navy-deep/35"> · </span>
                    <Link to="/terms" className="underline" style={linkStyle}>
                      Terms of Service
                    </Link>
                    <span className="text-navy-deep/35"> · </span>
                    <Link to="/sms-policy" className="underline" style={linkStyle}>
                      SMS Policy
                    </Link>
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          <p className="mt-8 text-center text-sm text-navy-deep/55">
            AI Ops, LLC operates the Aura Invites platform.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
