import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { BrandMonogram } from "@/components/ui/BrandMonogram";
import { siteContainerNarrow } from "@/lib/layout";
import { cn } from "@/lib/utils";

type LeadershipExperiencesIntroProps = {
  statement: string;
  className?: string;
};

export function LeadershipExperiencesIntro({
  statement,
  className,
}: LeadershipExperiencesIntroProps) {
  return (
    <section
      aria-label="Leadership experiences introduction"
      className={cn("border-b border-warm-nude/40 bg-white", className)}
    >
      <div className={`${siteContainerNarrow} px-6 py-14 md:py-16 lg:px-10 lg:py-20`}>
        <AnimatedSection duration="slow" className="text-center">
          <BrandMonogram size="md" opacity={15} className="mx-auto mb-5 lg:mb-6" />
          <span
            aria-hidden
            className="mx-auto mb-6 block h-px w-16 bg-soft-gold/70 lg:mb-8"
          />
          <p className="font-serif text-[1.375rem] leading-[1.45] tracking-tight text-chocolate sm:text-2xl sm:leading-[1.4] md:text-[1.75rem] lg:text-3xl lg:leading-[1.38]">
            {statement}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
