import type { Metadata } from "next";
import {
  featuredLeadershipExperienceTeaser,
  individualServices,
  organizationServices,
  speakingTopics,
} from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedStagger";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { TopicGroup } from "@/components/ui/TopicPill";
import { SectionIntro } from "@/components/content/SectionIntro";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { mobileCtaButton, mobileCtaGroup } from "@/lib/layout";
import { stagger } from "@/lib/motion";
import { calendlyUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Leadership development, executive coaching, team facilitation, and speaking from The Kaye Collective.",
};

export default function ServicesPage() {
  const { sampleCta } = featuredLeadershipExperienceTeaser;

  return (
    <>
      <PageHero
        label="Services"
        title="Designed for lasting change."
        description="From personalized coaching to large-scale cultural transformations, we deliver solutions that empower leaders, teams, and organizations to thrive."
      />

      <SectionWrapper variant="white">
        <SectionIntro
          label="For Organizations"
          title="Corporate & team partnerships"
        />
        <AnimatedStagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {organizationServices.map((service) => (
            <AnimatedItem key={service.title} variant="scaleIn">
              <ServiceCard service={service} variant="cream" />
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </SectionWrapper>

      <SectionWrapper variant="warm-nude">
        <SectionIntro
          label="For Individuals"
          title="Coaching & career acceleration"
        />
        <AnimatedStagger className="mt-12 grid gap-6 md:grid-cols-2">
          {individualServices.map((service) => (
            <AnimatedItem key={service.title} variant="scaleIn">
              <ServiceCard service={service} variant="white" />
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </SectionWrapper>

      <SectionWrapper id="speaking" variant="chocolate">
        <SectionIntro
          label="Speaking & Facilitation"
          labelClassName="text-soft-gold"
          title="Topics that engage and mobilize."
          titleClassName="text-cream"
          descriptionClassName="text-warm-nude"
        />
        <AnimatedStagger className="mt-12 space-y-10">
          {speakingTopics.map((group) => (
            <AnimatedItem key={group.cluster} variant="fadeIn">
              <TopicGroup
                cluster={group.cluster}
                topics={group.topics}
                variant="dark"
              />
            </AnimatedItem>
          ))}
        </AnimatedStagger>
        <AnimatedSection
          delay={stagger.section * 2}
          duration="slow"
          className={`${mobileCtaGroup} mt-12 justify-start`}
        >
          <Button href={calendlyUrl} external variant="gold" className={mobileCtaButton}>
            Book Jennifer to Speak
          </Button>
          <Button href={sampleCta.href} variant="ghost" className={mobileCtaButton}>
            {sampleCta.label}
          </Button>
        </AnimatedSection>
      </SectionWrapper>

      <SectionWrapper variant="aubergine">
        <SectionIntro
          centered
          label="Ready to partner?"
          labelClassName="text-soft-gold"
          title="Let's explore how we can support you."
          titleClassName="text-cream"
          description="Whether you're an organization, executive, or event planner — we'd love to connect."
          descriptionClassName="text-warm-nude mx-auto"
        />
        <AnimatedSection
          delay={stagger.section * 2}
          duration="slow"
          className="mt-8 text-center"
        >
          <Button href="/partner-with-us" variant="gold">
            Partner With Us
          </Button>
        </AnimatedSection>
      </SectionWrapper>
    </>
  );
}
