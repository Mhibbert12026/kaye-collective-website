"use client";

import { AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedStagger";
import {
  BrandMonogramCorner,
  brandCardHoverClasses,
} from "@/components/ui/BrandMonogram";
import { cn } from "@/lib/utils";

type WorkshopOutcomeCardProps = {
  title: string;
  className?: string;
};

function WorkshopOutcomeCard({ title, className }: WorkshopOutcomeCardProps) {
  return (
    <article
      className={cn(
        "relative flex min-h-[10rem] flex-col justify-center rounded-2xl border border-warm-nude/80 bg-white px-6 py-7 shadow-[0_2px_14px_rgba(59,42,34,0.04)] sm:min-h-[11rem] sm:px-7 sm:py-8 lg:px-8",
        brandCardHoverClasses,
        "hover:border-soft-gold/45",
        className,
      )}
    >
      <BrandMonogramCorner />

      <span
        aria-hidden
        className="mb-4 block h-px w-10 bg-soft-gold/60 transition-[width] duration-300 group-hover:w-14"
      />
      <h3 className="font-serif text-xl leading-[1.2] tracking-tight text-chocolate sm:text-[1.375rem] lg:text-2xl">
        {title}
      </h3>
    </article>
  );
}

type WorkshopOutcomesGridProps = {
  outcomes: string[];
  className?: string;
};

export function WorkshopOutcomesGrid({
  outcomes,
  className,
}: WorkshopOutcomesGridProps) {
  return (
    <AnimatedStagger
      className={cn(
        "grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6",
        className,
      )}
    >
      {outcomes.map((outcome) => (
        <AnimatedItem key={outcome} variant="scrollEnter">
          <WorkshopOutcomeCard title={outcome} />
        </AnimatedItem>
      ))}
    </AnimatedStagger>
  );
}
