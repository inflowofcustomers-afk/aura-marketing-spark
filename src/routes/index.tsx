import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Hero } from "@/components/site/sections/Hero";
import { Pain } from "@/components/site/sections/Pain";
import { WhatIs } from "@/components/site/sections/WhatIs";
import { HowItWorks } from "@/components/site/sections/HowItWorks";
import { Offer } from "@/components/site/sections/Offer";
import { WhoFor } from "@/components/site/sections/WhoFor";
import { FAQ } from "@/components/site/sections/FAQ";
import { FinalCTA } from "@/components/site/sections/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AURA Invites — Patient reactivation for MedSpa owners" },
      {
        name: "description",
        content:
          "AURA reactivates dormant MedSpa patients with personalized SMS and email sequences that book appointments automatically.",
      },
      { property: "og:title", content: "AURA Invites — Patient reactivation for MedSpa owners" },
      {
        property: "og:description",
        content:
          "Bring back the patients already in your list. Personalized SMS + email sequences that book appointments on autopilot.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <Hero />
      <Pain />
      <WhatIs />
      <HowItWorks />
      <Offer />
      <WhoFor />
      <FAQ />
      <FinalCTA />
    </PageShell>
  );
}
