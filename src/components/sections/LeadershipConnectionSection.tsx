"use client";

import { leadershipConnectionContent } from "@/lib/constants";
import { jenniferImages } from "@/lib/images";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { siteContainerWide, sectionPaddingY } from "@/lib/layout";
import { scrollSection } from "@/lib/motion";

export function LeadershipConnectionSection() {
  const { eyebrow, headline, body, cta } = leadershipConnectionContent;

  return (
    <section
      aria-labelledby="leadership-connection-heading"
      className={`w-full overflow-hidden bg-warm-nude/20 ${sectionPaddingY}`}
    >
      <div className={siteContainerWide}>
        <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-10">
          <AnimatedSection
            variant="scrollEnter"
            duration={scrollSection.duration}
            className="lg:col-span-7"
          >
            <EditorialImage
              src={jenniferImages.coachingCircle.src}
              alt={jenniferImages.coachingCircle.alt}
              aspectClass="aspect-[4/5] lg:aspect-[5/6]"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </AnimatedSection>

          <div className="lg:col-span-5">
            <AnimatedSection
              variant="scrollEnter"
              duration={scrollSection.duration}
              delay={0.08}
            >
              <p className="text-sm font-medium tracking-[0.28em] text-mocha uppercase">
                {eyebrow}
              </p>
            </AnimatedSection>

            <AnimatedSection
              variant="scrollEnter"
              duration={scrollSection.duration}
              delay={0.12}
              className="mt-4"
            >
              <SectionHeading as="h2" size="large" accent={false}>
                <span id="leadership-connection-heading">{headline}</span>
              </SectionHeading>
            </AnimatedSection>

            <AnimatedSection
              variant="scrollEnter"
              duration={scrollSection.duration}
              delay={0.16}
              className="mt-5"
            >
              <p className="max-w-md text-lg leading-[1.8] text-mocha lg:text-xl lg:leading-[1.85]">
                {body}
              </p>
            </AnimatedSection>

            <AnimatedSection
              variant="scrollEnter"
              duration={scrollSection.duration}
              delay={0.2}
              className="mt-5"
            >
              <TextLink href={cta.href}>{cta.label} →</TextLink>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
