import { createElement } from "react";
import { getSpeakingTopicIcon } from "@/lib/service-icons";
import {
  BrandMonogramCorner,
  brandCardHoverClasses,
} from "@/components/ui/BrandMonogram";
import { TopicPill } from "@/components/ui/TopicPill";
import { cn } from "@/lib/utils";

type SpeakingTopicCategoryCardProps = {
  cluster: string;
  description: string;
  topics: readonly string[] | string[];
  className?: string;
};

function CategoryIconBadge({ cluster }: { cluster: string }) {
  const Icon = getSpeakingTopicIcon(cluster);

  return (
    <span
      aria-hidden
      className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-soft-gold/35 bg-soft-gold/10 lg:mb-5"
    >
      {createElement(Icon, {
        className: "h-[1.125rem] w-[1.125rem] text-aubergine",
        strokeWidth: 1.5,
      })}
    </span>
  );
}

export function SpeakingTopicCategoryCard({
  cluster,
  description,
  topics,
  className,
}: SpeakingTopicCategoryCardProps) {
  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-2xl border border-warm-nude/75 bg-white p-6 shadow-[0_4px_20px_rgba(59,42,34,0.05)] sm:p-7 lg:p-8",
        brandCardHoverClasses,
        "hover:border-soft-gold/45",
        className,
      )}
    >
      <BrandMonogramCorner />

      <div className="shrink-0">
        <CategoryIconBadge cluster={cluster} />

        <h3 className="font-serif text-[1.375rem] leading-[1.2] tracking-tight text-chocolate sm:text-2xl">
          {cluster}
        </h3>

        <p className="mt-3 min-h-[3.25rem] text-[0.9375rem] leading-[1.7] text-mocha sm:text-base lg:min-h-[3.5rem]">
          {description}
        </p>

        <span
          aria-hidden
          className="mt-4 block h-px w-12 bg-soft-gold/65 lg:mt-5"
        />
      </div>

      <ul className="mt-4 flex flex-1 flex-wrap content-start gap-2 rounded-xl border border-warm-nude/45 bg-cream/35 p-4 sm:mt-5 sm:gap-2.5 sm:p-5">
        {topics.map((topic) => (
          <TopicPill key={topic} topic={topic} variant="portfolio" />
        ))}
      </ul>
    </article>
  );
}
