import type { Metadata } from "next";
import { caseStudies, clientLogos } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedStagger";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { LogoBar } from "@/components/ui/LogoBar";
import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { stagger } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Client experience and case studies from The Kaye Collective — Experian, BCG, and more.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        label="Client Experience"
        title="Results that endure."
        description="The Kaye Collective creates lasting change and breakthrough results. We stand shoulder to shoulder through pivotal moments that often feel challenging, chaotic, or even messy."
      />

      <SectionWrapper variant="white">
        <AnimatedStagger className="space-y-12">
          {caseStudies.map((study) => (
            <AnimatedItem key={study.slug} variant="scaleIn" duration="slow">
              <CaseStudyCard study={study} variant="full" />
            </AnimatedItem>
          ))}
        </AnimatedStagger>

        <AnimatedSection delay={stagger.section} duration="slow" variant="fadeIn">
          <LogoBar logos={clientLogos} className="mt-20" />
        </AnimatedSection>
      </SectionWrapper>
    </>
  );
}
