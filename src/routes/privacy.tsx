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
    <LegalLayout title="AURA Invites — Privacy Policy" eyebrow="Legal" updated="June 12, 2026">
      <LegalSection heading="1. Who We Are">
        <p>
          AURA Invites is operated by AI Ops, LLC ("Company," "we," "us," or "our"). We provide marketing automation and patient reactivation services for MedSpa businesses. For questions about this policy, contact us at privacy@aurainvites.com.
        </p>
      </LegalSection>

      <LegalSection heading="2. What Information We Collect">
        <p>We collect information you provide directly to us, including:</p>
        <ul className="list-disc pl-5 space-y-2 text-foreground/75">
          <li>Name and business name when you contact us or sign up for our services</li>
          <li>Email address and phone number submitted through our contact forms or intake process</li>
          <li>Business information such as your MedSpa name, location, and patient list data you provide for campaign purposes</li>
          <li>Communications you send to us via email or contact forms</li>
        </ul>
      </LegalSection>

      <LegalSection heading="3. How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-5 space-y-2 text-foreground/75">
          <li>Respond to your inquiries and provide our services</li>
          <li>Onboard you as a client and operate your reactivation campaigns</li>
          <li>Send you service-related communications and reporting</li>
          <li>Improve our platform and services</li>
          <li>Comply with applicable legal obligations</li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. Patient Data">
        <p>
          If you engage AURA Invites for reactivation services, you may provide us with contact information belonging to your patients. You represent that you have the right to share this data with us and that you have obtained any required consents. We process this data solely to perform the services you have engaged us for and do not sell, rent, or otherwise disclose it to third parties.
        </p>
      </LegalSection>

      <LegalSection heading="5. How We Share Information">
        <p>We do not sell your personal information. We may share information with:</p>
        <ul className="list-disc pl-5 space-y-2 text-foreground/75">
          <li>Service providers who assist us in operating our business (e.g., SMS and email delivery platforms), bound by confidentiality obligations</li>
          <li>Professional advisors such as lawyers and accountants, under confidentiality obligations</li>
          <li>Law enforcement or government authorities when required by law</li>
        </ul>
      </LegalSection>

      <LegalSection heading="6. Data Retention">
        <p>
          We retain your information for as long as necessary to provide our services and fulfill the purposes described in this policy, or as required by law. When a client relationship ends, we will delete or return client data upon written request.
        </p>
      </LegalSection>

      <LegalSection heading="7. Your California Privacy Rights (CCPA)">
        <p>If you are a California resident, you have the right to:</p>
        <ul className="list-disc pl-5 space-y-2 text-foreground/75">
          <li>Know what personal information we collect about you</li>
          <li>Request deletion of your personal information</li>
          <li>Opt out of the sale of your personal information (we do not sell personal information)</li>
        </ul>
        <p>To exercise these rights, contact us at privacy@aurainvites.com.</p>
      </LegalSection>

      <LegalSection heading="8. Security">
        <p>
          We use reasonable administrative, technical, and physical safeguards to protect your information. No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection heading="9. Third-Party Links">
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.
        </p>
      </LegalSection>

      <LegalSection heading="10. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. We will post the updated policy on our website with a revised effective date. Continued use of our services after changes constitutes acceptance of the updated policy.
        </p>
      </LegalSection>

      <LegalSection heading="11. Contact Us">
        <p>AI Ops, LLC</p>
        <p>Email: privacy@aurainvites.com</p>
        <p>Website: aurainvites.com</p>
      </LegalSection>

      <LegalSection heading="12. SMS Messaging">
        <p>
          If you separately opt in to receive marketing text messages from AI Ops, LLC regarding Aura Invites, we may send recurring promotional or marketing messages to the mobile number you provide. Message frequency varies. Message and data rates may apply. You may reply STOP at any time to unsubscribe or HELP for assistance.
        </p>
        <p>
          SMS consent is not a condition of purchasing or using our products or services, and it is separate from your acceptance of our Terms of Service or this Privacy Policy.
        </p>
        <p>
          We do not sell, rent, share, or otherwise disclose mobile phone numbers, SMS opt-in data, or SMS consent information to third parties or affiliates for their own marketing or promotional purposes.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
