"use client";

import { clientSuccessHighlightsContent } from "@/lib/constants";
import { AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedStagger";
import { ScrollSection } from "@/components/ui/ScrollSection";
import { SectionHeading, SectionWrapper } from "@/components/ui/SectionWrapper";
import { SuccessHighlightCard } from "@/components/ui/SuccessHighlightCard";
import { sectionContentGap } from "@/lib/layout";

export function ClientSuccessHighlightsSection() {
  const { headline, cards } = clientSuccessHighlightsContent;

  return (
    <SectionWrapper id="success-highlights" variant="cream">
      <ScrollSection>
        <div className="max-w-3xl">
          <SectionHeading as="h2" size="default" accent={false}>
            {headline}
          </SectionHeading>
        </div>

        <AnimatedStagger
          className={`${sectionContentGap} grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6`}
        >
          {cards.map((card) => (
            <AnimatedItem key={card.title} variant="scrollEnter">
              <SuccessHighlightCard
                title={card.title}
                description={card.description}
              />
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </ScrollSection>
    </SectionWrapper>
  );
}
