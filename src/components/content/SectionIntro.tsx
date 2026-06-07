import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { BrandMonogram } from "@/components/ui/BrandMonogram";
import { SectionHeading, SectionLabel } from "@/components/ui/SectionWrapper";

type SectionIntroProps = {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
  brandMark?: boolean;
  delay?: number;
  animated?: boolean;
  labelClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  as?: "h1" | "h2" | "h3";
  titleSize?: "default" | "large" | "display";
  duration?: number;
};

export function SectionIntro({
  label,
  title,
  description,
  centered = false,
  brandMark = false,
  delay = 0,
  animated = true,
  labelClassName,
  titleClassName,
  descriptionClassName,
  as = "h2",
  titleSize = "large",
  duration,
}: SectionIntroProps) {
  const content = (
    <>
      {brandMark ? (
        <div
          className={cn(
            "mb-2 flex items-center gap-3",
            centered && "justify-center",
          )}
        >
          <BrandMonogram size="sm" opacity={15} />
          <SectionLabel className={cn("mb-0", labelClassName)}>
            {label}
          </SectionLabel>
        </div>
      ) : (
        <SectionLabel className={labelClassName}>{label}</SectionLabel>
      )}
      <SectionHeading
        as={as}
        size={titleSize}
        className={titleClassName}
        centered={centered}
      >
        {title}
      </SectionHeading>
      {description && (
        <p
          className={cn(
            "mt-5 text-xl leading-[1.75] text-mocha md:text-2xl md:leading-[1.8]",
            centered && "mx-auto",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </>
  );

  if (!animated) {
    return (
      <div className={cn(centered && "mx-auto max-w-5xl text-center")}>
        {content}
      </div>
    );
  }

  return (
    <AnimatedSection
      delay={delay}
      duration={duration ?? "slow"}
      className={cn(centered && "mx-auto max-w-5xl text-center")}
    >
      {content}
    </AnimatedSection>
  );
}
