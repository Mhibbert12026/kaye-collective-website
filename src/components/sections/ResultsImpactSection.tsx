"use client";

import { resultsImpactContent } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedStagger";
import { ImpactCard } from "@/components/ui/ImpactCard";
import { ScrollSection } from "@/components/ui/ScrollSection";
import {
  SectionHeading,
  SectionLabel,
  SectionWrapper,
} from "@/components/ui/SectionWrapper";
import { sectionBlockGap, sectionContentGap } from "@/lib/layout";

export function ResultsImpactSection() {
  const { label, headline, subheadline, cards, clientsGain } =
    resultsImpactContent;

  return (
    <SectionWrapper id="results" variant="white">
      <ScrollSection>
        <div className="max-w-3xl">
          <SectionLabel>{label}</SectionLabel>
          <SectionHeading as="h2" size="large" accent={false}>
            {headline}
          </SectionHeading>
          <p className="mt-4 text-lg leading-[1.8] text-mocha lg:text-xl lg:leading-[1.85]">
            {subheadline}
          </p>
        </div>

        <AnimatedStagger className={`${sectionContentGap} grid gap-4 sm:grid-cols-2 lg:gap-5`}>
          {cards.map((card) => (
            <AnimatedItem key={card.items[0]} variant="scrollEnter">
              <ImpactCard card={card} />
            </AnimatedItem>
          ))}
        </AnimatedStagger>

        <AnimatedSection variant="scrollEnter" duration="slow" delay={0.12} className={sectionBlockGap}>
          <div className="rounded-2xl border border-warm-nude/60 bg-cream/50 p-6 sm:p-8 lg:p-10">
            <p className="text-sm font-medium tracking-[0.28em] text-mocha uppercase">
              {clientsGain.label}
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-3">
              {clientsGain.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base leading-[1.7] text-mocha lg:text-lg"
                >
                  <span
                    aria-hidden
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-soft-gold"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </ScrollSection>
    </SectionWrapper>
  );
}
