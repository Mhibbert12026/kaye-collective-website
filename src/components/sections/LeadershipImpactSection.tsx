"use client";

import { leadershipImpactContent } from "@/lib/constants";
import { scrollSection } from "@/lib/motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedStagger";
import { LeadershipImpactCard } from "@/components/ui/LeadershipImpactCard";
import { SectionHeadingAccent } from "@/components/ui/SectionHeadingAccent";
import {
  SectionHeading,
  SectionWrapper,
} from "@/components/ui/SectionWrapper";
import { sectionContentGap } from "@/lib/layout";

export function LeadershipImpactSection() {
  const { headline, stats } = leadershipImpactContent;

  return (
    <SectionWrapper id="leadership-impact" variant="cream">
      <AnimatedSection variant="scrollEnter" duration={scrollSection.duration}>
        <div className="max-w-3xl">
          <SectionHeadingAccent widthClass="w-[80px]" className="mb-4 origin-left" />
          <SectionHeading as="h2" size="large" accent={false}>
            {headline}
          </SectionHeading>
        </div>
      </AnimatedSection>

      <AnimatedStagger
        className={`${sectionContentGap} grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6`}
        delay={0.08}
      >
        {stats.map((stat) => (
          <AnimatedItem key={stat.secondary}>
            <LeadershipImpactCard stat={stat} />
          </AnimatedItem>
        ))}
      </AnimatedStagger>
    </SectionWrapper>
  );
}
