"use client";

import { partnerAudiences, partnerContent } from "@/lib/constants";
import { jenniferImages } from "@/lib/images";
import { AudienceCard } from "@/components/ui/AudienceCard";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { ScrollSection } from "@/components/ui/ScrollSection";
import {
  SectionHeading,
  SectionLabel,
  SectionWrapper,
} from "@/components/ui/SectionWrapper";

export function PartnerSection() {
  return (
    <SectionWrapper id="partner" variant="aubergine">
      <ScrollSection>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <AnimatedSection variant="warmFade" duration="slow" className="lg:col-span-5">
            <SectionLabel>
              <span className="text-soft-gold">{partnerContent.label}</span>
            </SectionLabel>
            <SectionHeading size="display" className="text-cream" accent={false}>
              {partnerContent.title}
            </SectionHeading>
            <p className="mt-5 text-lg leading-[1.85] text-warm-nude lg:text-xl">
              {partnerContent.description}
            </p>
            <Button href="/partner-with-us" variant="gold" className="mt-9">
              Schedule a Discovery Call
            </Button>
          </AnimatedSection>

          <AnimatedSection
            variant="fadeUp"
            duration="slow"
            delay={0.08}
            className="lg:col-span-7"
          >
            <EditorialImage
              src={jenniferImages.modernOffice.src}
              alt={jenniferImages.modernOffice.alt}
              variant="dark"
              aspectClass="aspect-[5/4] lg:aspect-[16/10]"
              sizes="(max-width: 1024px) 100vw, 52vw"
            />
          </AnimatedSection>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:mt-16 lg:gap-8">
          {partnerAudiences.map((audience) => (
            <AudienceCard
              key={audience.title}
              audience={audience}
              variant="dark"
              href="/partner-with-us"
              className="p-8 lg:p-9"
            />
          ))}
        </div>
      </ScrollSection>
    </SectionWrapper>
  );
}
