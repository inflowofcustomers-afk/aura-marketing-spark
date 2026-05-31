import { createFileRoute } from "@tanstack/react-router";
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
    <LegalLayout title="SMS Policy" eyebrow="Legal" updated="[DATE]">
      <LegalSection heading="1. Consent">
        <p>[BODY COPY — opt-in / consent placeholder.]</p>
      </LegalSection>
      <LegalSection heading="2. Message Frequency">
        <p>[BODY COPY placeholder.]</p>
      </LegalSection>
      <LegalSection heading="3. Opt-Out (STOP)">
        <p>[BODY COPY placeholder — reply STOP to unsubscribe.]</p>
      </LegalSection>
      <LegalSection heading="4. Help (HELP)">
        <p>[BODY COPY placeholder.]</p>
      </LegalSection>
      <LegalSection heading="5. Carrier & Data Rates">
        <p>[BODY COPY placeholder.]</p>
      </LegalSection>
      <LegalSection heading="6. Privacy">
        <p>[BODY COPY placeholder — see Privacy Policy.]</p>
      </LegalSection>
    </LegalLayout>
  );
}
