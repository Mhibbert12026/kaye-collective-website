"use client";

import {
  executiveCoachingContent,
  leadershipDevelopmentContent,
  servicesContent,
} from "@/lib/constants";
import { jenniferImages } from "@/lib/images";
import { ScrollSection } from "@/components/ui/ScrollSection";
import { StoryBeat } from "@/components/ui/StoryBeat";
import { SectionHeading, SectionLabel } from "@/components/ui/SectionWrapper";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { sectionBlockGap, sectionContentGap } from "@/lib/layout";

export function ServicesSection() {
  return (
    <SectionWrapper id="services" variant="cream" afterTransition>
      <ScrollSection>
        <div className="max-w-2xl">
          <SectionLabel>{servicesContent.label}</SectionLabel>
          <SectionHeading size="display" accent={false}>
            {servicesContent.title}
          </SectionHeading>
        </div>

        <div className={`${sectionContentGap} space-y-8 lg:space-y-10`}>
          <StoryBeat
            role={leadershipDevelopmentContent.label}
            title={leadershipDevelopmentContent.title}
            description={leadershipDevelopmentContent.description}
            image={jenniferImages.coachingCircle}
            imagePosition="left"
            cta={{ label: "Explore organizational work", href: "/services" }}
          />

          <StoryBeat
            role={executiveCoachingContent.label}
            title={executiveCoachingContent.title}
            description={executiveCoachingContent.description}
            image={jenniferImages.coachingInAction}
            imagePosition="right"
            cta={{ label: "Explore coaching", href: "/services" }}
          />
        </div>

        <p className={`${sectionBlockGap} text-center font-serif text-2xl tracking-tight text-chocolate lg:text-3xl`}>
          {servicesContent.closing}
        </p>
      </ScrollSection>
    </SectionWrapper>
  );
}
