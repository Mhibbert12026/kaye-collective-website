"use client";

import { siteConfig } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { scrollSection } from "@/lib/motion";

export function FooterCallToAction() {
  return (
    <div className="border-b border-cream/10 py-10 lg:py-14">
      <AnimatedSection
        variant="scrollEnter"
        duration={scrollSection.duration}
        className="max-w-4xl"
      >
        <span
          aria-hidden
          className="mb-6 block h-px w-20 origin-left bg-soft-gold"
        />
        <div className="space-y-2 font-serif text-2xl leading-[1.18] tracking-tight text-cream sm:text-3xl sm:leading-[1.15] md:text-4xl lg:text-5xl">
          {siteConfig.mantra.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <p className="mt-5 max-w-2xl text-base leading-[1.85] text-warm-nude sm:mt-6 sm:text-lg lg:text-xl lg:leading-[1.9]">
          {siteConfig.tagline}
        </p>
      </AnimatedSection>
    </div>
  );
}
