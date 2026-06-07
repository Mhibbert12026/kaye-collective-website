import type { Metadata } from "next";
import { founderBio, siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedStagger";
import {
  CredentialList,
  ExperienceBadges,
  FounderPortrait,
} from "@/components/content";
import {
  SectionHeading,
  SectionLabel,
  SectionWrapper,
} from "@/components/ui/SectionWrapper";
import { stagger } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Founder",
  description: `Meet ${founderBio.name}, ${founderBio.title} at The Kaye Collective.`,
};

export default function FounderPage() {
  return (
    <SectionWrapper variant="cream" className="pt-20 lg:pt-24">
      <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
        <AnimatedSection duration="slow" variant="scaleIn">
          <FounderPortrait sticky priority className="max-w-[720px]" />
        </AnimatedSection>

        <div>
          <AnimatedSection delay={stagger.section} duration="slow">
            <SectionLabel>Founder</SectionLabel>
            <SectionHeading as="h1" size="display">
              {founderBio.name}
            </SectionHeading>
            <p className="mt-3 text-2xl text-aubergine">{founderBio.title}</p>
            <p className="mt-2 text-xl font-medium text-mocha">
              {founderBio.tagline}
            </p>
          </AnimatedSection>

          <AnimatedStagger className="mt-8 space-y-5">
            {founderBio.paragraphs.map((paragraph) => (
              <AnimatedItem key={paragraph.slice(0, 48)} variant="fadeIn">
                <p className="text-xl leading-[1.8] text-mocha lg:text-2xl">
                  {paragraph}
                </p>
              </AnimatedItem>
            ))}
          </AnimatedStagger>

          <AnimatedSection
            delay={stagger.section * 2}
            duration="slow"
            variant="fadeIn"
            className="mt-10"
          >
            <CredentialList />
          </AnimatedSection>

          <AnimatedSection delay={stagger.section * 3} duration="slow" variant="fadeIn">
            <div className="mt-8">
              <ExperienceBadges />
            </div>

            <p className="mt-8 text-base text-mocha lg:text-lg">
              Based in {siteConfig.location}
            </p>

            <Button href="/partner-with-us" className="mt-8">
              Work With Jennifer
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </SectionWrapper>
  );
}
