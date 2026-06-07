import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading, SectionLabel } from "@/components/ui/SectionWrapper";
import { siteContainerNarrow } from "@/lib/layout";

type PageHeroProps = {
  label: string;
  title: string;
  description?: string;
  variant?: "cream" | "white" | "warm-nude" | "chocolate" | "aubergine";
  centered?: boolean;
  labelClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function PageHero({
  label,
  title,
  description,
  variant = "cream",
  centered = true,
  labelClassName,
  titleClassName,
  descriptionClassName,
}: PageHeroProps) {
  const isDark = variant === "chocolate" || variant === "aubergine";

  return (
    <section
      className={cn(
        "pt-20 pb-10 md:pt-24 md:pb-12",
        variant === "cream" && "bg-cream text-chocolate",
        variant === "white" && "bg-white text-chocolate",
        variant === "warm-nude" && "bg-warm-nude/20 text-chocolate",
        variant === "chocolate" && "bg-chocolate text-cream",
        variant === "aubergine" && "bg-aubergine text-cream",
      )}
    >
      <AnimatedSection
        duration="slower"
        className={cn(
          siteContainerNarrow,
          "px-6 lg:px-10",
          centered && "text-center",
        )}
      >
        <SectionLabel className={labelClassName}>
          {isDark ? (
            <span className="text-soft-gold">{label}</span>
          ) : (
            label
          )}
        </SectionLabel>
        <SectionHeading
          as="h1"
          size="display"
          centered={centered}
          className={cn(isDark && "text-cream", titleClassName)}
        >
          {title}
        </SectionHeading>
        {description && (
          <p
            className={cn(
              "mt-5 text-xl leading-[1.75] md:text-2xl md:leading-[1.8]",
              isDark ? "text-warm-nude" : "text-mocha",
              descriptionClassName,
            )}
          >
            {description}
          </p>
        )}
      </AnimatedSection>
    </section>
  );
}
