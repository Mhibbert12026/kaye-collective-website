"use client";

import Link from "next/link";
import { AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedStagger";
import { TextLink } from "@/components/ui/TextLink";
import { experienceMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/types";

type CaseStudyCardProps = {
  study: CaseStudy;
  variant?: "featured" | "compact" | "full";
  href?: string;
  className?: string;
  interactive?: boolean;
};

const cardHover =
  "transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-mocha/35 hover:shadow-[0_10px_28px_rgba(59,42,34,0.09)]";

const metricHover =
  "transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-mocha/30 hover:shadow-[0_6px_18px_rgba(59,42,34,0.07)]";

export function CaseStudyCard({
  study,
  variant = "compact",
  href,
  className,
  interactive = false,
}: CaseStudyCardProps) {
  if (variant === "featured") {
    return (
      <div
        className={cn(
          "rounded-2xl border border-warm-nude bg-white",
          interactive && cardHover,
          className,
        )}
      >
        <p className="text-sm tracking-[0.22em] text-soft-gold uppercase">
          {study.client}
        </p>
        <h3 className="mt-4 font-serif text-3xl text-chocolate lg:text-5xl">
          {study.title}
        </h3>
        <p className="mt-5 max-w-4xl text-xl leading-[1.8] text-mocha lg:text-2xl lg:leading-[1.85]">
          {study.challenge}
        </p>
        <CaseStudyMetrics results={study.results} interactive={interactive} />
        {href && (
          <TextLink href={href} className="mt-8 text-base lg:text-lg">
            View all experience →
          </TextLink>
        )}
      </div>
    );
  }

  if (variant === "full") {
    return (
      <article
        className={cn(
          "rounded-2xl border border-warm-nude bg-cream p-10 md:p-14",
          interactive && cardHover,
          className,
        )}
      >
        <p className="text-sm tracking-[0.22em] text-soft-gold uppercase">
          {study.client}
        </p>
        <h2 className="mt-4 font-serif text-3xl text-chocolate lg:text-5xl">
          {study.title}
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <CaseStudyColumn label="Challenge" content={study.challenge} />
          <CaseStudyColumn label="Approach" content={study.approach} />
          <div>
            <h3 className="text-sm tracking-[0.22em] text-mocha uppercase">
              Results
            </h3>
            <ul className="mt-4 space-y-3">
              {study.results.map((result) => (
                <li
                  key={result}
                  className="text-base leading-relaxed text-mocha lg:text-lg"
                >
                  • {result}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    );
  }

  const content = (
    <div
      className={cn(
        "h-full rounded-2xl border border-warm-nude bg-white",
        interactive && cardHover,
        className,
      )}
    >
      <p className="text-sm tracking-[0.22em] text-soft-gold uppercase">
        {study.client}
      </p>
      <h3 className="mt-4 font-serif text-2xl text-chocolate lg:text-3xl">
        {study.title}
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-mocha lg:text-lg">
        {study.approach.slice(0, 180)}…
      </p>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

function CaseStudyMetrics({
  results,
  interactive,
}: {
  results: string[];
  interactive?: boolean;
}) {
  return (
    <AnimatedStagger
      className="mt-8 grid gap-4 sm:grid-cols-3"
      staggerDelay={experienceMotion.metricStagger}
    >
      {results.map((result) => (
        <AnimatedItem key={result} variant="warmFade" duration="base">
          <div
            className={cn(
              "h-full rounded-xl border border-warm-nude/60 bg-cream px-5 py-4 text-base leading-relaxed text-mocha lg:text-lg",
              interactive && metricHover,
            )}
          >
            {result}
          </div>
        </AnimatedItem>
      ))}
    </AnimatedStagger>
  );
}

function CaseStudyColumn({
  label,
  content,
}: {
  label: string;
  content: string;
}) {
  return (
    <div>
      <h3 className="text-sm tracking-[0.22em] text-mocha uppercase">{label}</h3>
      <p className="mt-4 text-base leading-[1.75] text-mocha lg:text-lg">
        {content}
      </p>
    </div>
  );
}
