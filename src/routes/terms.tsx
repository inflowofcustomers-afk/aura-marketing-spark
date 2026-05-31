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
    <LegalLayout title="Terms of Service" eyebrow="Legal" updated="May 30, 2025">
      <LegalSection heading="1. Acceptance of Terms">
        <p>
          By accessing aurainvites.com or engaging AURA Invites services, you agree to these Terms. If you do not agree, do not use our platform.
        </p>
      </LegalSection>
      <LegalSection heading="2. Services">
        <p>
          AURA Invites provides a patient reactivation platform for MedSpa owners including SMS and email campaign management, database segmentation, and performance reporting.
        </p>
      </LegalSection>
      <LegalSection heading="3. Subscriptions &amp; Billing">
        <p>
          Pilot pricing is $5,000 setup fee (includes 20 booked appointments) plus $250 per booked appointment thereafter. Continuation retainer is $2,500/month or $497/month self-serve, billed month-to-month.
        </p>
      </LegalSection>
      <LegalSection heading="4. Client Responsibilities">
        <p>
          Clients are responsible for providing accurate patient data, maintaining proper patient consent for marketing communications, and complying with applicable laws including HIPAA where applicable.
        </p>
      </LegalSection>
      <LegalSection heading="5. Limitation of Liability">
        <p>
          AURA Invites is not liable for indirect, incidental, or consequential damages. Total liability is limited to fees paid in the preceding 30 days.
        </p>
      </LegalSection>
      <LegalSection heading="6. Contact">
        <p>
          AURA Invites | hello@aurainvites.com | aurainvites.com
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
