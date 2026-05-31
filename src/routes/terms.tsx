import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/site/PageShell";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — AURA Invites" },
      { name: "description", content: "AURA Invites terms of service." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <LegalLayout title="Terms of Service" eyebrow="Legal" updated="[DATE]">
      <LegalSection heading="1. Acceptance of Terms">
        <p>[BODY COPY placeholder.]</p>
      </LegalSection>
      <LegalSection heading="2. Use of Service">
        <p>[BODY COPY placeholder.]</p>
      </LegalSection>
      <LegalSection heading="3. Subscriptions & Billing">
        <p>[BODY COPY placeholder.]</p>
      </LegalSection>
      <LegalSection heading="4. Cancellation">
        <p>[BODY COPY placeholder.]</p>
      </LegalSection>
      <LegalSection heading="5. Limitation of Liability">
        <p>[BODY COPY placeholder.]</p>
      </LegalSection>
      <LegalSection heading="6. Contact">
        <p>[CONTACT placeholder.]</p>
      </LegalSection>
    </LegalLayout>
  );
}
