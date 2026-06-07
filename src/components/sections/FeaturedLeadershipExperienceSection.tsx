"use client";

import { featuredLeadershipExperienceTeaser } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { SectionIntro } from "@/components/content/SectionIntro";
import { mobileCtaButton, sectionContentGap } from "@/lib/layout";
import { cn } from "@/lib/utils";

type FeaturedLeadershipExperienceSectionProps = {
  className?: string;
  showIntro?: boolean;
};

export function FeaturedLeadershipExperienceSection({
  className,
  showIntro = true,
}: FeaturedLeadershipExperienceSectionProps) {
  const { label, title, description, theme, audience, format, cta } =
    featuredLeadershipExperienceTeaser;

  return (
    <div className={className}>
      {showIntro && (
        <SectionIntro label={label} title="Workshop design in action." />
      )}

      <AnimatedSection duration="slow" className={showIntro ? sectionContentGap : undefined}>
        <div
          className={cn(
            "overflow-hidden rounded-2xl border border-warm-nude/70 bg-white",
            "shadow-[0_4px_24px_rgba(59,42,34,0.06)]",
          )}
        >
          <div className="border-b border-warm-nude/50 bg-cream/40 px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <p className="text-sm font-medium tracking-[0.28em] text-mocha uppercase">
              {label}
            </p>
            <h3 className="mt-3 font-serif text-[1.75rem] leading-[1.15] tracking-tight text-chocolate sm:text-[2rem] lg:text-[2.25rem]">
              {title}
            </h3>
            <p className="mt-2 text-base text-mocha/90 lg:text-lg">{theme}</p>
          </div>

          <div className="grid gap-6 px-6 py-8 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-10 lg:px-10 lg:py-10">
            <div>
              <p className="text-base leading-[1.85] text-mocha lg:text-lg lg:leading-[1.9]">
                {description}
              </p>
              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-[0.625rem] font-medium tracking-[0.18em] text-mocha/75 uppercase">
                    Audience
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-chocolate lg:text-base">
                    {audience}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.625rem] font-medium tracking-[0.18em] text-mocha/75 uppercase">
                    Format
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-chocolate lg:text-base">
                    {format}
                  </dd>
                </div>
              </dl>
            </div>

            <Button
              href={cta.href}
              variant="primary"
              className={`${mobileCtaButton} shrink-0 lg:min-w-[15rem]`}
            >
              {cta.label}
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
