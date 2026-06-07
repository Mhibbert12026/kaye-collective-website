"use client";

import { createElement } from "react";
import { getWorkshopApproachIcon } from "@/lib/service-icons";
import { AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedStagger";
import { cn } from "@/lib/utils";

type ApproachPillar = {
  title: string;
  description: string;
};

type ApproachPillarCardProps = {
  pillar: ApproachPillar;
  className?: string;
};

const cardHover =
  "transition-[transform,box-shadow,border-color] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-soft-gold/45 hover:shadow-[0_12px_32px_rgba(59,42,34,0.09)]";

function ApproachIconBadge({ title }: { title: string }) {
  const Icon = getWorkshopApproachIcon(title);

  return (
    <span
      aria-hidden
      className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-soft-gold/35 bg-soft-gold/10"
    >
      {createElement(Icon, {
        className: "h-[1.125rem] w-[1.125rem] text-aubergine",
        strokeWidth: 1.5,
      })}
    </span>
  );
}

function ApproachPillarCard({ pillar, className }: ApproachPillarCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-2xl border border-warm-nude/80 bg-white p-6 shadow-[0_2px_14px_rgba(59,42,34,0.04)] sm:p-7 lg:p-8",
        cardHover,
        className,
      )}
    >
      <ApproachIconBadge title={pillar.title} />
      <h3 className="font-serif text-xl leading-[1.2] tracking-tight text-chocolate sm:text-[1.375rem] lg:text-2xl">
        {pillar.title}
      </h3>
      <p className="mt-3 text-base leading-[1.85] text-mocha/90 lg:mt-4 lg:text-lg lg:leading-[1.9]">
        {pillar.description}
      </p>
    </article>
  );
}

type ApproachPillarsGridProps = {
  pillars: ApproachPillar[];
  className?: string;
};

export function ApproachPillarsGrid({
  pillars,
  className,
}: ApproachPillarsGridProps) {
  return (
    <AnimatedStagger
      className={cn(
        "grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6",
        className,
      )}
    >
      {pillars.map((pillar) => (
        <AnimatedItem key={pillar.title} variant="scrollEnter">
          <ApproachPillarCard pillar={pillar} />
        </AnimatedItem>
      ))}
    </AnimatedStagger>
  );
}
