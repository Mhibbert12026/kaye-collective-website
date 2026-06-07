import type { Metadata } from "next";
import { speakingContent, speakingTopics } from "@/lib/constants";
import { FeaturedLeadershipExperienceSection } from "@/components/sections/FeaturedLeadershipExperienceSection";
import { SpeakingTopicsGrid } from "@/components/sections/SpeakingTopicsGrid";
import { SectionIntro } from "@/components/content/SectionIntro";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { stagger } from "@/lib/motion";
import { calendlyUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Speaking & Facilitation",
  description:
    "Keynotes and facilitation from Jennifer Huggins — engaging sessions that mobilize leaders and teams.",
};

export default function SpeakingPage() {
  return (
    <>
      <PageHero
        label={speakingContent.label}
        title={speakingContent.title}
        description={speakingContent.description}
      />

      <SectionWrapper variant="cream">
        <SectionIntro
          label="Speaking Portfolio"
          title="Sessions that engage and mobilize."
          description={speakingContent.topicsIntro}
          centered
          descriptionClassName="mx-auto mb-8 max-w-[700px] text-center text-[16px] leading-[1.7] text-mocha md:text-[18px]"
        />
        <SpeakingTopicsGrid groups={speakingTopics} />
      </SectionWrapper>

      <SectionWrapper variant="warm-nude">
        <FeaturedLeadershipExperienceSection />
      </SectionWrapper>

      <SectionWrapper variant="chocolate">
        <SectionIntro
          centered
          label="Book Jennifer"
          labelClassName="text-soft-gold"
          title="Bring Jennifer to your next event."
          titleClassName="text-cream"
          description="Keynotes, facilitation, and leadership experiences tailored to your audience."
          descriptionClassName="mx-auto text-warm-nude"
        />
        <AnimatedSection
          delay={stagger.section}
          duration="slow"
          className="mt-8 text-center"
        >
          <Button href={calendlyUrl} external variant="gold">
            Book Jennifer to Speak
          </Button>
        </AnimatedSection>
      </SectionWrapper>
    </>
  );
}
