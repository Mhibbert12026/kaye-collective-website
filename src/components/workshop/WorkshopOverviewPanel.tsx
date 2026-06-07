"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedStagger";
import {
  BrandMonogramCorner,
  brandCardHoverClasses,
} from "@/components/ui/BrandMonogram";
import { cn } from "@/lib/utils";

type WorkshopOverviewPanelProps = {
  audience: string;
  format: string;
  focusAreas: string[];
  className?: string;
};

function MetaField({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-8 lg:p-10">
      <p className="text-sm font-medium tracking-[0.28em] text-mocha uppercase">
        {label}
      </p>
      <p className="mt-3 font-serif text-2xl leading-[1.2] tracking-tight text-chocolate lg:text-[1.75rem]">
        {value}
      </p>
    </div>
  );
}

export function WorkshopOverviewPanel({
  audience,
  format,
  focusAreas,
  className,
}: WorkshopOverviewPanelProps) {
  return (
    <AnimatedSection duration="slow" className={className}>
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-warm-nude/70 bg-white shadow-[0_4px_24px_rgba(59,42,34,0.06)]",
          brandCardHoverClasses,
          "hover:border-warm-nude/90",
        )}
      >
        <BrandMonogramCorner />
        <div className="grid md:grid-cols-2 md:divide-x md:divide-warm-nude/50">
          <MetaField label="Audience" value={audience} />
          <MetaField label="Format" value={format} />
        </div>

        <div className="border-t border-warm-nude/50 bg-cream/35 px-8 py-8 lg:px-10 lg:py-10">
          <p className="text-sm font-medium tracking-[0.28em] text-mocha uppercase">
            Focus Areas
          </p>
          <AnimatedStagger className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <AnimatedItem key={area} variant="scrollEnter">
                <div
                  className={cn(
                    "flex items-start gap-3 rounded-xl border border-warm-nude/50 bg-white/80 px-4 py-3.5",
                    "transition-[transform,box-shadow,border-color] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                    "hover:-translate-y-0.5 hover:border-soft-gold/40 hover:shadow-[0_8px_20px_rgba(59,42,34,0.06)]",
                  )}
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-soft-gold"
                  />
                  <span className="text-base leading-snug text-mocha lg:text-lg">
                    {area}
                  </span>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </div>
    </AnimatedSection>
  );
}
