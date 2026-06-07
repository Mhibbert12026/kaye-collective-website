"use client";

import { whoWeServeAudiences, whoWeServeContent } from "@/lib/constants";
import { AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedStagger";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeadingAccent } from "@/components/ui/SectionHeadingAccent";
import { SectionLabel } from "@/components/ui/SectionWrapper";
import { WhoWeServeCard } from "@/components/ui/WhoWeServeCard";
import { siteContainer, sectionPaddingY } from "@/lib/layout";
import { scrollSection, stagger } from "@/lib/motion";

export function WhoWeServeSection() {
  return (
    <section
      aria-labelledby="who-we-serve-heading"
      className={`bg-cream ${sectionPaddingY}`}
    >
      <div className={siteContainer}>
        <AnimatedSection variant="scrollEnter" duration={scrollSection.duration}>
          <div className="max-w-4xl">
            <SectionLabel>{whoWeServeContent.label}</SectionLabel>

            <SectionHeadingAccent
              widthClass="w-[80px]"
              className="mb-6 origin-left"
            />

            <h2
              id="who-we-serve-heading"
              className="font-serif text-[1.875rem] leading-[1.14] tracking-tight text-balance text-chocolate sm:text-4xl sm:leading-[1.12] md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
            >
              {whoWeServeContent.title}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-[1.85] text-mocha md:text-lg">
              {whoWeServeContent.description}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedStagger
          className="mt-6 grid gap-8 lg:mt-8 lg:grid-cols-3 lg:gap-8"
          staggerDelay={stagger.child}
          delay={0.08}
        >
          {whoWeServeAudiences.map((audience) => (
            <AnimatedItem key={audience.title} className="h-full">
              <WhoWeServeCard audience={audience} />
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
