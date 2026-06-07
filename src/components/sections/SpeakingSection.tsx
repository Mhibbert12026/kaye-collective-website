"use client";

import { featuredLeadershipExperienceTeaser, speakingContent } from "@/lib/constants";
import { jenniferImages } from "@/lib/images";
import { TopicPill } from "@/components/ui/TopicPill";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { StoryBeat } from "@/components/ui/StoryBeat";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedStagger";
import { calendlyUrl } from "@/lib/utils";
import { scrollSection, stagger } from "@/lib/motion";
import { mobileCtaButton, sectionBlockGap, sectionContentGap } from "@/lib/layout";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function SpeakingSection() {
  const { sampleCta } = featuredLeadershipExperienceTeaser;

  return (
    <SectionWrapper id="speaking" variant="warm-ivory" afterTransition>
      <StoryBeat
        role="Speaker"
        title={speakingContent.title}
        description={speakingContent.description}
        image={jenniferImages.speaker}
        imagePosition="right"
        aspectClass="aspect-[5/4] lg:aspect-[16/10]"
      />

      <AnimatedStagger
        className={`${sectionContentGap} flex flex-wrap justify-center gap-2.5`}
        delay={0.06}
        staggerDelay={stagger.child}
      >
        {speakingContent.featuredTopics.map((topic) => (
          <AnimatedItem key={topic}>
            <TopicPill topic={topic} variant="light" />
          </AnimatedItem>
        ))}
      </AnimatedStagger>

      <AnimatedSection
        variant="scrollEnter"
        duration={scrollSection.duration}
        delay={0.1}
        className={`${sectionBlockGap} flex flex-col items-center gap-4 px-1 sm:gap-5`}
      >
        <Button href={calendlyUrl} external className={`${mobileCtaButton} max-w-md`}>
          Book Jennifer to Speak
        </Button>
        <TextLink href={sampleCta.href}>{sampleCta.label} →</TextLink>
      </AnimatedSection>
    </SectionWrapper>
  );
}
