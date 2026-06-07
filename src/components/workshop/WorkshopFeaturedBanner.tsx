import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  BrandMonogramCorner,
} from "@/components/ui/BrandMonogram";
import { siteContainer } from "@/lib/layout";

type WorkshopFeaturedBannerProps = {
  label: string;
  title: string;
  theme: string;
};

export function WorkshopFeaturedBanner({
  label,
  title,
  theme,
}: WorkshopFeaturedBannerProps) {
  return (
    <section
      aria-labelledby="featured-workshop-heading"
      className="relative border-b border-warm-nude/50 bg-white"
    >
      <div className={`${siteContainer} py-12 md:py-14 lg:py-16`}>
        <AnimatedSection
          duration="slow"
          className="group relative max-w-4xl p-6 sm:p-8"
        >
          <BrandMonogramCorner />
          <p className="text-sm font-medium tracking-[0.28em] text-mocha uppercase">
            {label}
          </p>
          <h2
            id="featured-workshop-heading"
            className="mt-3 font-serif text-[2rem] leading-[1.12] tracking-tight text-chocolate sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem]"
          >
            {title}
          </h2>
          <p className="mt-4 text-lg leading-[1.8] text-mocha md:text-xl md:leading-[1.85]">
            {theme}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
