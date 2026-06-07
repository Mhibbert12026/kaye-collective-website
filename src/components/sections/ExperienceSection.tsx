import { caseStudies, experienceContent } from "@/lib/constants";
import { experienceMotion } from "@/lib/motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { TextLink } from "@/components/ui/TextLink";
import { SectionHeading, SectionLabel } from "@/components/ui/SectionWrapper";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { sectionBlockGap, sectionContentGap } from "@/lib/layout";

export function ExperienceSection() {
  const [featured] = caseStudies;

  return (
    <SectionWrapper id="experience" variant="cream">
      <div className="max-w-2xl">
        <SectionLabel>{experienceContent.label}</SectionLabel>
        <SectionHeading size="large" accent={false}>
          {experienceContent.title}
        </SectionHeading>
        <p className="mt-4 text-lg text-mocha">{experienceContent.description}</p>
      </div>

      <AnimatedSection
        variant="warmFade"
        duration={experienceMotion.cardDuration}
        delay={0.1}
        className={sectionContentGap}
      >
        <CaseStudyCard
          study={featured}
          variant="featured"
          href="/experience"
          interactive
          className="border-warm-nude/80 bg-white p-6 sm:p-8 lg:p-10"
        />
      </AnimatedSection>

      <div className={`${sectionBlockGap} text-center`}>
        <TextLink href="/experience">View all experience →</TextLink>
      </div>
    </SectionWrapper>
  );
}
