import type { Metadata } from "next";
import { HomeSectionBridge } from "@/components/layout/HomeSectionBridge";
import { EditorialStatementSection } from "@/components/sections/EditorialStatementSection";
import { LeadershipConnectionSection } from "@/components/sections/LeadershipConnectionSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { ClientSuccessHighlightsSection } from "@/components/sections/ClientSuccessHighlightsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ResultsImpactSection } from "@/components/sections/ResultsImpactSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SpeakingSection } from "@/components/sections/SpeakingSection";
import { SectionDivider } from "@/components/ui/SectionDivider";

export const metadata: Metadata = {
  title: "The Kaye Collective | No One Transforms Alone",
  description:
    "Engaging Talent. Building Trust. Inspiring Change. Premium leadership coaching and advisory for executives, teams, and organizations.",
};

export default function Home() {
  return (
    <>
      <HeroSection />

      <HomeSectionBridge
        variant="editorial"
        fade="cream-warm-ivory"
        marker="Mission"
      />
      <EditorialStatementSection />

      <HomeSectionBridge
        variant="monogram"
        fade="warm-ivory-soft-beige"
        marker="Connection"
      />
      <LeadershipConnectionSection />

      <HomeSectionBridge
        variant="diamond"
        fade="soft-beige-white"
        marker="Trust"
      />
      <TrustedBySection />

      <HomeSectionBridge variant="line" fade="white-cream" marker="The Work" />
      <ServicesSection />

      <HomeSectionBridge
        variant="editorial"
        fade="cream-warm-ivory"
        marker="Speaking"
      />
      <SpeakingSection />

      <HomeSectionBridge
        variant="monogram"
        fade="warm-ivory-soft-beige"
        marker="Founder"
      />
      <FounderSection />

      <HomeSectionBridge variant="diamond" fade="soft-beige-white" marker="Impact" />
      <ExperienceSection />

      <HomeSectionBridge variant="line" fade="white-cream" marker="Results" />
      <ResultsImpactSection />

      <HomeSectionBridge
        variant="editorial"
        fade="cream-warm-ivory"
        marker="Highlights"
      />
      <ClientSuccessHighlightsSection />

      <SectionDivider variant="monogram" fade="warm-ivory-chocolate" tone="dark" marker="Partner" />
      <ContactSection />
    </>
  );
}
