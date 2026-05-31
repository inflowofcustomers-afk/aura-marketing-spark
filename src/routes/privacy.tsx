import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/site/PageShell";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — AURA Invites" },
      { name: "description", content: "AURA Invites privacy policy." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" eyebrow="Legal" updated="May 30, 2025">
      <LegalSection heading="1. Introduction">
        <p>
          AURA Invites ("we", "our", "us") is committed to protecting your personal information. This Privacy Policy describes how we collect, use, and protect data submitted through aurainvites.com.
        </p>
      </LegalSection>
      <LegalSection heading="2. Information We Collect">
        <ul className="list-disc pl-5 space-y-2 text-foreground/75">
          <li>Contact information (name, email, phone number).</li>
          <li>Business information (practice name, revenue range, booking software, patient database size).</li>
          <li>Communications via SMS or email related to our services.</li>
        </ul>
      </LegalSection>
      <LegalSection heading="3. How We Use Information">
        <ul className="list-disc pl-5 space-y-2 text-foreground/75">
          <li>To respond to your application and schedule calls.</li>
          <li>To deliver the AURA Reactivation Pilot service.</li>
          <li>To send SMS and email communications related to your account.</li>
          <li>To improve our platform.</li>
        </ul>
      </LegalSection>
      <LegalSection heading="4. SMS Communications">
        <p>
          By submitting our application form and providing your phone number, you consent to receive SMS messages from AURA Invites. These may include application follow-ups, onboarding communications, and service updates. Message frequency varies. Reply STOP to opt out at any time. Message and data rates may apply.
        </p>
      </LegalSection>
      <LegalSection heading="5. Data Sharing">
        <p>
          We do not sell your personal information. We may share data with service providers (including Twilio for SMS delivery) solely to operate our platform.
        </p>
      </LegalSection>
      <LegalSection heading="6. Data Retention">
        <p>
          We retain your information as long as necessary to provide services. You may request deletion at any time by emailing hello@aurainvites.com.
        </p>
      </LegalSection>
      <LegalSection heading="7. Contact">
        <p>
          AURA Invites | hello@aurainvites.com | aurainvites.com
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
