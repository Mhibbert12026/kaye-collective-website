import type { Metadata } from "next";
import { partnerAudiences } from "@/lib/constants";
import { SchedulingCard } from "@/components/ui/SchedulingCard";
import { ContactForm } from "@/components/ui/ContactForm";
import { AudienceCard } from "@/components/ui/AudienceCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedStagger";
import {
  DiscoveryCallSteps,
  PartnerHero,
  SectionIntro,
} from "@/components/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { stagger } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Partner with The Kaye Collective for leadership development, coaching, and organizational transformation.",
};

export default function PartnerWithUsPage() {
  return (
    <>
      <PartnerHero />

      <SectionWrapper variant="cream">
        <AnimatedStagger className="grid gap-8 md:grid-cols-3">
          {partnerAudiences.map((audience) => (
            <AnimatedItem key={audience.title} variant="scaleIn">
              <AudienceCard
                audience={audience}
                variant="light"
                showCta={false}
              />
            </AnimatedItem>
          ))}
        </AnimatedStagger>

        <AnimatedSection delay={stagger.section * 2} duration="slow" className="mt-20">
          <DiscoveryCallSteps />
        </AnimatedSection>
      </SectionWrapper>

      <SectionWrapper variant="white">
        <SectionIntro label="Schedule" title="Book your discovery call" />
        <AnimatedSection
          delay={stagger.section}
          duration="slow"
          variant="fadeIn"
          className="mx-auto mt-10 max-w-xl"
        >
          <SchedulingCard />
        </AnimatedSection>
      </SectionWrapper>

      <SectionWrapper id="message" variant="warm-nude">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionIntro
            label="Or send a message"
            title="Prefer to write first?"
            description="Tell us about your organization, your goals, and how we can support your journey."
          />
          <AnimatedSection
            delay={stagger.section}
            duration="slow"
            variant="fadeUp"
          >
            <ContactForm />
          </AnimatedSection>
        </div>
      </SectionWrapper>
    </>
  );
}
