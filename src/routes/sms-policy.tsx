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
    <LegalLayout title="SMS Policy" eyebrow="Legal" updated="August 20, 2026">
      <LegalSection heading="1. Who Sends SMS Messages">
        <p>
          AI Ops, LLC operates the Aura Invites platform. Marketing text messages sent through this program are sent by AI Ops, LLC regarding Aura Invites.
        </p>
      </LegalSection>

      <LegalSection heading="2. Consent & Opt-In">
        <p>
          Marketing text messages are sent only to individuals who provide separate, affirmative consent to receive them.
        </p>
        <p>
          Users may opt in through our website by entering their mobile phone number and actively checking the optional SMS marketing consent checkbox.
        </p>
        <p>
          The SMS marketing checkbox is unchecked by default and is not required to submit a form, purchase a product or service, or use Aura Invites.
        </p>
        <p>
          Accepting our <Link to="/terms" className="text-gold underline hover:text-gold-light">Terms of Service</Link> or <Link to="/privacy" className="text-gold underline hover:text-gold-light">Privacy Policy</Link> does not enroll a user in SMS marketing.
        </p>
        <p>
          We do not purchase phone number lists or use purchased consent for this SMS marketing program.
        </p>
      </LegalSection>

      <LegalSection heading="3. Types of Messages">
        <p>
          Subscribers may receive recurring marketing and promotional text messages from AI Ops, LLC regarding Aura Invites, including promotions, special offers, and related marketing communications.
        </p>
        <p>
          This SMS marketing program does not currently include software updates, account notifications, transactional messages, appointment reminders, or other informational SMS categories.
        </p>
      </LegalSection>

      <LegalSection heading="4. Opt-Out — STOP">
        <p>
          Recipients may opt out at any time by replying STOP to any marketing text message.
        </p>
        <p>
          After an opt-out request is processed, marketing text messages will stop unless the recipient later provides new consent.
        </p>
      </LegalSection>

      <LegalSection heading="5. Message Frequency">
        <p>
          Message frequency varies.
        </p>
      </LegalSection>

      <LegalSection heading="6. Message and Data Rates">
        <p>
          Message and data rates may apply.
        </p>
      </LegalSection>

      <LegalSection heading="7. Help — HELP">
        <p>
          Reply HELP to any message for assistance or contact <a href="mailto:privacy@aurainvites.com" className="text-gold underline hover:text-gold-light">privacy@aurainvites.com</a>.
        </p>
      </LegalSection>

      <LegalSection heading="8. Privacy">
        <p>
          No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
        </p>
        <p>
          SMS opt-in data and consent will not be sold, rented, transferred, or shared with third parties or affiliates for their own marketing or promotional purposes.
        </p>
        <p>
          Information may be provided to service providers acting on our behalf solely as necessary to deliver the messaging service.
        </p>
        <p>
          See our <Link to="/privacy" className="text-gold underline hover:text-gold-light">Privacy Policy</Link> for additional information about how we collect, use, and protect personal information.
        </p>
      </LegalSection>

      <LegalSection heading="9. Not a Condition of Purchase">
        <p>
          Consent to receive marketing text messages is not a condition of purchasing or using any product or service from AI Ops, LLC or Aura Invites.
        </p>
      </LegalSection>

      <LegalSection heading="10. Carrier Liability">
        <p>
          Mobile carriers are not liable for delayed or undelivered messages.
        </p>
      </LegalSection>

      <LegalSection heading="11. Contact">
        <p>AI Ops, LLC</p>
        <p>Aura Invites</p>
        <p>Email: <a href="mailto:privacy@aurainvites.com" className="text-gold underline hover:text-gold-light">privacy@aurainvites.com</a></p>
        <p>Website: aurainvites.com</p>
      </LegalSection>
    </LegalLayout>
  );
}
