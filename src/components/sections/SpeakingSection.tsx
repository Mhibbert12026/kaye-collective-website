"use client";

import { speakingContent } from "@/lib/constants";
import { jenniferImages } from "@/lib/images";
import { TopicPill } from "@/components/ui/TopicPill";
import { Button } from "@/components/ui/Button";
import { StoryBeat } from "@/components/ui/StoryBeat";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedStagger";
import { calendlyUrl } from "@/lib/utils";
import { scrollSection, stagger } from "@/lib/motion";
import { mobileCtaButton, sectionBlockGap, sectionContentGap } from "@/lib/layout";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function SpeakingSection() {
  return (
    <SectionWrapper id="speaking" variant="white">
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
        className={`${sectionBlockGap} flex justify-center px-1`}
      >
        <Button href={calendlyUrl} external className={`${mobileCtaButton} max-w-md`}>
          Book Jennifer to Speak
        </Button>
      </AnimatedSection>
    </SectionWrapper>
  );
}
