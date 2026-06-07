"use client";

import { manifestoContent, valuePillars } from "@/lib/constants";
import { jenniferImages } from "@/lib/images";
import { IconCard } from "@/components/ui/IconCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { ScrollSection } from "@/components/ui/ScrollSection";
import {
  SectionHeading,
  SectionLabel,
  SectionWrapper,
} from "@/components/ui/SectionWrapper";

export function ManifestoSection() {
  return (
    <SectionWrapper id="manifesto" variant="white">
      <ScrollSection>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          <AnimatedSection variant="warmFade" duration="slow" className="lg:col-span-5">
            <SectionLabel>{manifestoContent.label}</SectionLabel>
            <SectionHeading size="display" accent={false}>
              {manifestoContent.title}
            </SectionHeading>
            <p className="mt-5 text-xl leading-[1.8] text-aubergine lg:text-2xl">
              {manifestoContent.lead}
            </p>
            <p className="mt-5 text-lg leading-[1.85] text-mocha lg:text-xl">
              {manifestoContent.paragraphs[0]}
            </p>
          </AnimatedSection>

          <AnimatedSection
            variant="fadeUp"
            duration="slow"
            delay={0.08}
            className="lg:col-span-7"
          >
            <EditorialImage
              src={jenniferImages.coach.src}
              alt={jenniferImages.coach.alt}
              aspectClass="aspect-[5/4] lg:aspect-[16/11]"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </AnimatedSection>
        </div>

        <QuoteBlock quote={manifestoContent.quote} className="mt-14 lg:mt-16" />

        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-14 lg:gap-6">
          {valuePillars.map((pillar) => (
            <IconCard
              key={pillar.title}
              title={pillar.title}
              description={pillar.description}
              className="h-full border-warm-nude/80 bg-cream/50 p-8 lg:p-9"
            />
          ))}
        </div>
      </ScrollSection>
    </SectionWrapper>
  );
}
