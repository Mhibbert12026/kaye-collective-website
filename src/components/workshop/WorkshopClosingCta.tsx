"use client";

import { scrollSection } from "@/lib/motion";
import {
  brandSurfaceGradient,
  brandSurfaceTopLine,
  closingCtaPaddingY,
  mobileCtaButton,
  mobileCtaGroup,
  siteContainerWide,
} from "@/lib/layout";
import { calendlyUrl } from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

type WorkshopClosingCtaProps = {
  headline: string;
  subheadline: string;
  primaryCta: { label: string };
  secondaryCta: { label: string; href: string };
};

export function WorkshopClosingCta({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
}: WorkshopClosingCtaProps) {
  return (
    <section
      id="get-started"
      aria-labelledby="workshop-closing-heading"
      className="relative overflow-hidden bg-chocolate text-cream"
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 ${brandSurfaceGradient}`}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 h-px ${brandSurfaceTopLine}`}
      />

      <div className={`${siteContainerWide} relative ${closingCtaPaddingY}`}>
        <AnimatedSection
          variant="scrollEnter"
          duration={scrollSection.duration}
          className="mx-auto max-w-4xl text-center"
        >
          <span
            aria-hidden
            className="mx-auto mb-6 block h-px w-20 bg-soft-gold/70 lg:mb-8"
          />

          <h2
            id="workshop-closing-heading"
            className="font-serif text-balance text-[1.75rem] leading-[1.12] tracking-tight text-cream sm:text-[2.25rem] sm:leading-[1.1] md:text-[2.75rem] md:leading-[1.08] lg:text-[4.25rem] lg:leading-[1.06]"
          >
            {headline}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-[1.85] text-warm-nude sm:mt-6 sm:text-lg md:max-w-3xl md:text-xl md:leading-[1.9] lg:mt-8">
            {subheadline}
          </p>

          <div
            className={`${mobileCtaGroup} mt-8 justify-center sm:mt-10 lg:mt-12`}
          >
            <Button
              href={calendlyUrl}
              external
              variant="gold"
              className={`${mobileCtaButton} min-w-[13.5rem]`}
            >
              {primaryCta.label}
            </Button>
            <Button
              href={secondaryCta.href}
              variant="ghost"
              className={`${mobileCtaButton} min-w-[13.5rem]`}
            >
              {secondaryCta.label}
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
