"use client";

import { founderBio, founderContent, manifestoContent } from "@/lib/constants";
import { jenniferImages } from "@/lib/images";
import { founderMotion, scrollSection } from "@/lib/motion";
import { mobileCtaButton, mobileCtaGroup, sectionBlockGap } from "@/lib/layout";
import { FounderPortrait } from "@/components/content/FounderPortrait";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedStagger";
import { Button } from "@/components/ui/Button";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { TextLink } from "@/components/ui/TextLink";
import {
  SectionHeading,
  SectionLabel,
  SectionWrapper,
} from "@/components/ui/SectionWrapper";

export function FounderSection() {
  return (
    <SectionWrapper id="founder" variant="soft-beige" afterTransition>
      <div className="mx-auto grid min-w-0 max-w-6xl items-center gap-6 lg:grid-cols-2 lg:gap-10">
        <AnimatedSection
          variant="scrollEnter"
          duration={founderMotion.portraitDuration}
          className="mx-auto w-full max-w-lg lg:max-w-none"
        >
          <FounderPortrait
            src={jenniferImages.coach.src}
            alt={jenniferImages.coach.alt}
            className="shadow-[0_20px_56px_rgba(59,42,34,0.14)]"
          />
        </AnimatedSection>

        <div>
          <AnimatedStagger staggerDelay={founderMotion.textStagger}>
            <AnimatedItem>
              <p className="text-sm font-medium tracking-[0.28em] text-soft-gold uppercase">
                Advisor
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <SectionLabel className="mt-3">Meet Jennifer</SectionLabel>
            </AnimatedItem>
            <AnimatedItem>
              <SectionHeading
                as="h2"
                size="large"
                accent={false}
                className="text-[1.875rem] leading-[1.12] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
              >
                {founderBio.name}
              </SectionHeading>
            </AnimatedItem>
            <AnimatedItem>
              <p className="mt-3 text-lg leading-snug text-aubergine sm:text-xl lg:text-2xl">
                {founderBio.tagline}
              </p>
            </AnimatedItem>
          </AnimatedStagger>

          <AnimatedSection
            variant="scrollEnter"
            duration={scrollSection.duration}
            delay={0.08}
            className={`${sectionBlockGap}`}
          >
            <p className="text-base leading-[1.85] text-mocha sm:text-lg lg:text-xl">
              {manifestoContent.lead}
            </p>
            <p className="mt-5 text-base leading-[1.85] text-mocha sm:text-lg lg:text-xl">
              {founderContent.homepageExcerpt}
            </p>
            <p className="mt-4 text-xs leading-relaxed tracking-[0.08em] text-mocha/70 uppercase sm:text-sm sm:tracking-[0.1em]">
              {founderContent.credentialsLine}
            </p>
          </AnimatedSection>

          <AnimatedSection
            variant="scrollEnter"
            duration={scrollSection.duration}
            delay={0.12}
            className={sectionBlockGap}
          >
            <QuoteBlock
              quote={manifestoContent.quote}
              className="!border-l-2 bg-cream/40 py-4 pl-4 sm:pl-6 [&_p]:text-xl [&_p]:leading-snug [&_p]:sm:text-2xl [&_p]:md:text-3xl [&_p]:lg:text-4xl"
            />
          </AnimatedSection>

          <AnimatedSection
            variant="scrollEnter"
            duration={scrollSection.duration}
            delay={0.16}
            className={`${sectionBlockGap} ${mobileCtaGroup} sm:items-center`}
          >
            <Button href="/founder" className={mobileCtaButton}>
              Read Full Bio
            </Button>
            <TextLink href="/partner-with-us" className="text-center sm:text-left">
              Work With Jennifer →
            </TextLink>
          </AnimatedSection>
        </div>
      </div>
    </SectionWrapper>
  );
}
