import { cn } from "@/lib/utils";
import {
  BrandMonogramCorner,
  brandCardHoverClasses,
} from "@/components/ui/BrandMonogram";

type ValuePillarCardProps = {
  title: string;
  description: string;
  className?: string;
};

export function ValuePillarCard({
  title,
  description,
  className,
}: ValuePillarCardProps) {
  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-2xl border border-warm-nude/80 bg-cream p-8 shadow-[0_2px_14px_rgba(59,42,34,0.04)] sm:p-9 lg:p-10",
        brandCardHoverClasses,
        className,
      )}
    >
      <BrandMonogramCorner />

      <span
        aria-hidden
        className="mb-5 block h-px w-10 bg-soft-gold/65 lg:mb-6"
      />

      <h3 className="min-h-[2.625rem] font-serif text-[1.375rem] leading-[1.2] tracking-tight text-chocolate sm:min-h-[2.875rem] sm:text-2xl lg:min-h-[3.25rem] lg:text-[1.75rem]">
        {title}
      </h3>

      <p className="mt-4 text-base leading-[1.75] text-mocha lg:mt-5 lg:text-lg lg:leading-[1.8]">
        {description}
      </p>
    </article>
  );
}
