import type { Metadata } from "next";
import { aboutContent, siteConfig, valuePillars } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedStagger";
import { IconCard } from "@/components/ui/IconCard";
import { PageHero } from "@/components/ui/PageHero";
import { SectionIntro } from "@/components/content/SectionIntro";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { stagger } from "@/lib/motion";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about The Kaye Collective — ${siteConfig.mission}`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title={siteConfig.mission}
        description={siteConfig.mantra.join(" ")}
      />

      <SectionWrapper variant="white">
        <SectionIntro label="Our Story" title="Built on connection." />
        <AnimatedStagger className="max-w-3xl space-y-6">
          {aboutContent.story.map((paragraph) => (
            <AnimatedItem key={paragraph.slice(0, 40)} variant="fadeIn">
              <p className="text-lg leading-relaxed text-mocha">{paragraph}</p>
            </AnimatedItem>
          ))}
        </AnimatedStagger>

        <AnimatedSection delay={stagger.section} duration="slow" className="mt-16">
          <SectionIntro label="Our Approach" title="Human-centric by design." />
          <p className="max-w-3xl text-lg leading-relaxed text-mocha">
            {aboutContent.approach}
          </p>
        </AnimatedSection>

        <AnimatedStagger className="mt-16 grid gap-6 md:grid-cols-3">
          {valuePillars.map((pillar) => (
            <AnimatedItem key={pillar.title}>
              <IconCard title={pillar.title} description={pillar.description} />
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </SectionWrapper>

      <SectionWrapper variant="warm-nude">
        <SectionIntro
          centered
          label="The Name"
          title="Keeper of the keys."
          description={aboutContent.nameMeaning}
        />
        <AnimatedSection
          delay={stagger.section * 2}
          duration="slow"
          className="mt-10 text-center"
        >
          <Button href="/partner-with-us">Partner With Us</Button>
        </AnimatedSection>
      </SectionWrapper>
    </>
  );
}
