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
    <LegalLayout title="AURA Invites — Terms of Service" eyebrow="Legal" updated="June 12, 2026">
      <LegalSection heading="1. Acceptance of Terms">
        <p>
          These Terms of Service ("Terms") govern your access to and use of the AURA Invites platform and services provided by AI Ops, LLC ("Company," "we," "us," or "our"). By accessing our website or engaging our services, you agree to be bound by these Terms. If you do not agree, do not use our services.
        </p>
      </LegalSection>

      <LegalSection heading="2. Services">
        <p>
          AURA Invites provides marketing automation services for MedSpa businesses, including patient reactivation campaigns via SMS and email, website templates, and related tools. The specific scope of services, pricing, and deliverables will be set forth in a separate service agreement or order form signed by both parties.
        </p>
      </LegalSection>

      <LegalSection heading="3. Payment Terms">
        <p>
          All fees are as specified in your service agreement. Setup fees are due prior to campaign launch. Performance-based fees (where applicable) are invoiced monthly based on verified results. Invoices are due net 15 days. Late payments are subject to a 1.5% monthly fee. All fees are non-refundable except as expressly stated in your service agreement.
        </p>
      </LegalSection>

      <LegalSection heading="4. Client Responsibilities">
        <p>You are responsible for:</p>
        <ul className="list-disc pl-5 space-y-2 text-foreground/75">
          <li>Providing accurate business and contact data required for campaign setup</li>
          <li>Ensuring you have obtained all required consents and have the legal right to contact the individuals in any patient list you provide</li>
          <li>Complying with all applicable laws, including CAN-SPAM, TCPA, and HIPAA as applicable to your business</li>
          <li>Reviewing and approving campaign creative before deployment</li>
        </ul>
      </LegalSection>

      <LegalSection heading="5. No Guarantee of Results">
        <p>
          We will use commercially reasonable efforts to deliver the services described in your agreement. However, we do not guarantee specific revenue outcomes, booking volumes, or return on investment. Results depend on factors outside our control, including the quality and age of your patient list, market conditions, and patient behavior. Any case studies, benchmarks, or projections shared are illustrative only and not guarantees of future performance.
        </p>
      </LegalSection>

      <LegalSection heading="6. Intellectual Property">
        <p>
          AURA Invites retains all rights to its platform, templates, methodologies, and proprietary systems. Client data remains the property of the client. Campaign creative developed for a client is owned by the client upon full payment of all fees.
        </p>
      </LegalSection>

      <LegalSection heading="7. Confidentiality">
        <p>
          Each party agrees to keep confidential any non-public information received from the other party in connection with the services and to use such information solely for the purpose of performing under these Terms.
        </p>
      </LegalSection>

      <LegalSection heading="8. Limitation of Liability">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL AI OPS, LLC BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL AGGREGATE LIABILITY SHALL NOT EXCEED THE FEES PAID BY YOU IN THE THREE MONTHS PRECEDING THE CLAIM.
        </p>
      </LegalSection>

      <LegalSection heading="9. Indemnification">
        <p>
          You agree to indemnify and hold harmless AI Ops, LLC and its officers, directors, and employees from any claims, damages, or expenses (including reasonable attorneys' fees) arising from your use of the services, your violation of these Terms, or your violation of any applicable law.
        </p>
      </LegalSection>

      <LegalSection heading="10. Term and Termination">
        <p>
          These Terms remain in effect for the duration of your service engagement. Either party may terminate with written notice as specified in your service agreement. Upon termination, all outstanding fees become immediately due. Sections 5 through 9 survive termination.
        </p>
      </LegalSection>

      <LegalSection heading="11. Governing Law">
        <p>
          These Terms are governed by the laws of the state in which AI Ops, LLC is incorporated, without regard to conflict of law principles. Any disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
        </p>
      </LegalSection>

      <LegalSection heading="12. Changes to Terms">
        <p>
          We reserve the right to update these Terms at any time. We will notify existing clients of material changes. Continued use of our services after notice constitutes acceptance of the updated Terms.
        </p>
      </LegalSection>

      <LegalSection heading="13. SMS Program Terms and Conditions">
        <p>
          By opting into text messaging programs provided through the AURA Invites platform, or by enabling AURA Invites to send text messages to your end-users, you agree to the following terms:
        </p>
        <p><strong>Program Description:</strong> AURA Invites sends a mix of marketing promotions, scheduling notifications, appointment reminders, and customer service follow-ups on behalf of our MedSpa clients to reactivate dormant patients.</p>
        <p><strong>Message Frequency:</strong> Message frequency varies based on user interaction, campaign settings, and patient booking behavior.</p>
        <p><strong>Pricing:</strong> Message and data rates may apply from your mobile carrier. AURA Invites does not charge end-users for receiving text messages.</p>
        <p><strong>Stop & Help:</strong> End-users can cancel the SMS service at any time by texting "STOP" to our shortcode or dedicated long-code number. After texting "STOP", a confirmation message will be sent, and text communications will cease. For assistance, users can reply "HELP" or contact privacy@aurainvites.com.</p>
        <p><strong>Carrier Liability:</strong> Mobile carriers (including but not limited to T-Mobile, AT&T, and Verizon) are not liable for delayed or undelivered messages.</p>
      </LegalSection>

      <LegalSection heading="14. Contact">
        <p>AI Ops, LLC</p>
        <p>Email: privacy@aurainvites.com</p>
        <p>Website: aurainvites.com</p>
      </LegalSection>
    </LegalLayout>
  );
}
