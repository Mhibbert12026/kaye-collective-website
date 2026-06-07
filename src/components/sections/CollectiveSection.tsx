import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionIntro } from "@/components/content/SectionIntro";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { stagger } from "@/lib/motion";

export function CollectiveSection() {
  return (
    <SectionWrapper variant="white">
      <SectionIntro
        centered
        label="The Collective"
        title="A community in the making."
        description="The Kaye Collective is more than one coach — it's a growing community of intuitive, heart-centered coaches and facilitators who create environments where clients discover their strengths, identify their gaps, and create pathways to excellence."
        titleSize="large"
      />
      <AnimatedSection
        delay={stagger.section}
        duration="slow"
        variant="fadeIn"
        className="mx-auto mt-4 max-w-4xl text-center"
      >
        <p className="text-xl leading-[1.8] text-mocha lg:text-2xl">
          At launch, Jennifer Huggins leads the collective with a vision to
          partner alongside brilliant practitioners who share her commitment to
          transformation, connection, and sustainable success.
        </p>
      </AnimatedSection>
      <AnimatedSection
        delay={stagger.section * 2}
        duration="slow"
        className="mt-8 text-center"
      >
        <Button href="/partner-with-us">Partner With Us</Button>
      </AnimatedSection>
    </SectionWrapper>
  );
}
