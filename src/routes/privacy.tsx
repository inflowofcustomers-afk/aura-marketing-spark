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
    <LegalLayout title="Privacy Policy" eyebrow="Legal" updated="[DATE]">
      <LegalSection heading="1. Introduction">
        <p>[BODY COPY — placeholder for privacy policy introduction.]</p>
      </LegalSection>
      <LegalSection heading="2. Information We Collect">
        <p>[BODY COPY — placeholder for information we collect.]</p>
      </LegalSection>
      <LegalSection heading="3. How We Use Information">
        <p>[BODY COPY — placeholder for usage description.]</p>
      </LegalSection>
      <LegalSection heading="4. Data Sharing">
        <p>[BODY COPY — placeholder.]</p>
      </LegalSection>
      <LegalSection heading="5. Your Rights">
        <p>[BODY COPY — placeholder.]</p>
      </LegalSection>
      <LegalSection heading="6. Contact">
        <p>[CONTACT EMAIL / ADDRESS placeholder.]</p>
      </LegalSection>
    </LegalLayout>
  );
}
