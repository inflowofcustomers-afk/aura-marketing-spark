import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/site/PageShell";

export const Route = createFileRoute("/sms-policy")({
  head: () => ({
    meta: [
      { title: "SMS Policy — AURA Invites" },
      { name: "description", content: "AURA Invites SMS communication policy." },
    ],
  }),
  component: SmsPolicy,
});

function SmsPolicy() {
  return (
    <LegalLayout title="SMS Policy" eyebrow="Legal" updated="June 12, 2026">
      <LegalSection heading="1. Who sends SMS through AURA Invites">
        <p>
          AURA Invites operates an SMS-based patient reactivation platform for MedSpa businesses. Messages are sent to MedSpa patients who previously provided contact information to the MedSpa and consented to communications.
        </p>
      </LegalSection>
      <LegalSection heading="2. Consent &amp; Opt-In">
        <p>
          Patient phone numbers are collected and consented to directly by the MedSpa client prior to any AURA campaign. AURA Invites does not purchase phone number lists. All contacts have a prior relationship with the MedSpa practice.
        </p>
      </LegalSection>
      <LegalSection heading="3. Opt-Out (STOP)">
        <p>
          Recipients may opt out at any time by replying STOP. Opt-outs are processed immediately.
        </p>
      </LegalSection>
      <LegalSection heading="4. Message Frequency">
        <p>
          Typical campaigns involve 2–4 messages per contact over a 30-day period.
        </p>
      </LegalSection>
      <LegalSection heading="5. Carrier &amp; Data Rates">
        <p>
          Standard message and data rates may apply.
        </p>
      </LegalSection>
      <LegalSection heading="6. Help (HELP)">
        <p>
          Reply HELP to any message or contact hello@aurainvites.com.
        </p>
      </LegalSection>
      <LegalSection heading="7. Privacy">
        <p>
          See our Privacy Policy for details on how we handle your data.
        </p>
      </LegalSection>
      <LegalSection heading="8. Contact">
        <p>
          AURA Invites | hello@aurainvites.com | aurainvites.com
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
