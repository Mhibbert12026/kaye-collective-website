"use client";

import type { WorkshopAgendaItem } from "@/lib/constants";
import { AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedStagger";
import { cn } from "@/lib/utils";

type WorkshopAgendaTimelineProps = {
  items: WorkshopAgendaItem[];
  className?: string;
};

export function WorkshopAgendaTimeline({
  items,
  className,
}: WorkshopAgendaTimelineProps) {
  return (
    <AnimatedStagger
      className={cn(
        "relative mx-auto max-w-3xl lg:max-w-4xl",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute top-3 bottom-3 left-[4.75rem] w-px bg-gradient-to-b from-soft-gold/70 via-warm-nude/80 to-warm-nude/40 sm:left-[5.25rem] lg:left-[6rem]"
      />

      <ol className="space-y-0">
        {items.map((item, index) => (
          <AnimatedItem key={`${item.time}-${item.title}`} variant="scrollEnter">
            <li
              className={cn(
                "relative grid grid-cols-[4.75rem_1fr] items-start gap-x-5 sm:grid-cols-[5.25rem_1fr] sm:gap-x-8 lg:grid-cols-[6rem_1fr]",
                index < items.length - 1 && "pb-8 lg:pb-10",
              )}
            >
              <time
                dateTime={item.time.replace(" ", "")}
                className="pt-0.5 text-right font-serif text-base tabular-nums tracking-tight text-aubergine sm:text-lg lg:text-xl"
              >
                {item.time}
              </time>

              <div className="relative pl-2 sm:pl-0">
                <span
                  aria-hidden
                  className="absolute -left-[1.35rem] top-2.5 z-10 h-3 w-3 rounded-full border-2 border-soft-gold bg-cream shadow-[0_0_0_4px_rgba(250,247,242,0.9)] sm:-left-[1.55rem] lg:-left-[1.75rem]"
                />

                <div
                  className={cn(
                    "rounded-2xl border border-warm-nude/60 bg-white px-5 py-4 shadow-[0_2px_12px_rgba(59,42,34,0.04)] sm:px-6 sm:py-5",
                    "transition-[transform,box-shadow,border-color] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                    "hover:-translate-y-0.5 hover:border-soft-gold/45 hover:shadow-[0_10px_28px_rgba(59,42,34,0.08)]",
                  )}
                >
                  <h3 className="font-serif text-xl leading-[1.25] tracking-tight text-chocolate sm:text-[1.375rem] lg:text-2xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            </li>
          </AnimatedItem>
        ))}
      </ol>
    </AnimatedStagger>
  );
}
