"use client";

import { cn } from "@/lib/utils";

type DiscussionTopicCardProps = {
  title: string;
  index: number;
  className?: string;
};

const cardHover =
  "transition-[transform,box-shadow,border-color] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-soft-gold/45 hover:shadow-[0_12px_32px_rgba(59,42,34,0.09)]";

export function DiscussionTopicCard({
  title,
  index,
  className,
}: DiscussionTopicCardProps) {
  const displayIndex = String(index + 1).padStart(2, "0");

  return (
    <article
      className={cn(
        "group relative flex min-h-[9.5rem] flex-col justify-end overflow-hidden rounded-2xl border border-warm-nude/80 bg-white p-6 shadow-[0_2px_14px_rgba(59,42,34,0.04)] sm:min-h-[10.5rem] sm:p-7 lg:p-8",
        cardHover,
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute top-5 right-5 font-serif text-[2rem] leading-none text-soft-gold/25 transition-colors duration-300 group-hover:text-soft-gold/40 lg:top-6 lg:right-6 lg:text-[2.25rem]"
      >
        {displayIndex}
      </span>

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
