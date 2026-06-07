import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "The Kaye Collective | No One Transforms Alone",
  description:
    "Engaging Talent. Building Trust. Inspiring Change. Premium leadership coaching and advisory for executives, teams, and organizations.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <EditorialStatementSection />
      <LeadershipConnectionSection />
      <TrustedBySection />
      <ServicesSection />
      <SpeakingSection />
      <FounderSection />
      <ExperienceSection />
      <ResultsImpactSection />
      <ClientSuccessHighlightsSection />
      <ContactSection />
    </>
  );
}
