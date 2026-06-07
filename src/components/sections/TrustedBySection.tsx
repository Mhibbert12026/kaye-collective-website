import { trustedByContent, trustedByLogos } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeadingAccent } from "@/components/ui/SectionHeadingAccent";
import { TrustedByLogoGrid } from "@/components/ui/TrustedByLogoGrid";
import { siteContainerWide, sectionPaddingYAfterTransition, sectionContentGap } from "@/lib/layout";
import { scrollSection } from "@/lib/motion";

export function TrustedBySection() {
  return (
    <section
      aria-labelledby="trusted-by-heading"
      className={`bg-white ${sectionPaddingYAfterTransition}`}
    >
      <div className={siteContainerWide}>
        <AnimatedSection variant="scrollEnter" duration={scrollSection.duration}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium tracking-[0.2em] text-mocha uppercase sm:text-sm sm:tracking-[0.28em]">
              {trustedByContent.eyebrow}
            </p>
            <SectionHeadingAccent
              widthClass="w-[80px]"
              className="mx-auto mt-4 mb-3 origin-center"
            />
            <h2
              id="trusted-by-heading"
              className="font-serif text-balance text-xl leading-[1.3] tracking-tight text-chocolate sm:text-2xl sm:leading-[1.25] md:text-3xl lg:text-[2rem]"
            >
              {trustedByContent.headline}
            </h2>
          </div>
        </AnimatedSection>

        <TrustedByLogoGrid
          logos={trustedByLogos}
          className={sectionContentGap}
        />
      </div>
    </section>
  );
}
