"use client";

import { editorialStatement } from "@/lib/constants";
import { jenniferImages } from "@/lib/images";
import { scrollSection } from "@/lib/motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { siteContainerWide, sectionPaddingYAfterHero } from "@/lib/layout";

export function EditorialStatementSection() {
  return (
    <section
      aria-label="Editorial statement"
      id="manifesto"
      className={`w-full overflow-hidden bg-cream ${sectionPaddingYAfterHero}`}
    >
      <div className={siteContainerWide}>
        <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <AnimatedSection variant="scrollEnter" duration={scrollSection.duration}>
              <p
                aria-label={editorialStatement.eyebrow}
                className="font-script text-[2rem] leading-none font-medium text-aubergine md:text-[2.5rem] lg:text-[2.625rem]"
              >
                <span aria-hidden className="inline-block -rotate-1">
                  {editorialStatement.eyebrow}
                </span>
              </p>
            </AnimatedSection>

            <AnimatedSection
              variant="scrollEnter"
              duration={scrollSection.duration}
              delay={0.08}
              className="relative mt-4 lg:mt-5"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -top-3 -left-1 font-serif text-[3.75rem] leading-none text-soft-gold/18 select-none md:text-[5rem] lg:text-[5.5rem]"
              >
                &ldquo;
              </span>
              <blockquote className="relative pt-2">
                <p className="font-serif text-[1.875rem] leading-[1.2] font-medium tracking-tight text-pretty text-chocolate md:text-[2.25rem] md:leading-[1.16] lg:text-[2.75rem] lg:leading-[1.14]">
                  {editorialStatement.quote.map((line, index) => (
                    <span
                      key={line}
                      className={index === 1 ? "mt-1.5 block lg:mt-2" : "block"}
                    >
                      {line}
                    </span>
                  ))}
                </p>
              </blockquote>
            </AnimatedSection>
          </div>

          <AnimatedSection
            variant="scrollEnter"
            duration={scrollSection.duration}
            delay={0.12}
            className="lg:col-span-6"
          >
            <EditorialImage
              src={jenniferImages.coach.src}
              alt={jenniferImages.coach.alt}
              aspectClass="aspect-[4/5] lg:aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 46vw"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
