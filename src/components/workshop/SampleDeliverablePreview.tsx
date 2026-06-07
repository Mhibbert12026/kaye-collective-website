"use client";

import { useState } from "react";
import type { WorkshopDeliverablePage } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  BrandMonogramCorner,
} from "@/components/ui/BrandMonogram";
import { CurriculumDocumentPage } from "@/components/workshop/CurriculumDocumentPage";
import { cn } from "@/lib/utils";

type SampleDeliverablePreviewProps = {
  pages: WorkshopDeliverablePage[];
  confidentiality: string;
  className?: string;
};

const paperLayers = [
  {
    className:
      "translate-x-5 translate-y-5 rotate-[2deg] opacity-[0.45] shadow-[0_10px_28px_rgba(59,42,34,0.07)]",
  },
  {
    className:
      "translate-x-2.5 translate-y-2.5 rotate-[1deg] opacity-[0.65] shadow-[0_14px_36px_rgba(59,42,34,0.09)]",
  },
];

export function SampleDeliverablePreview({
  pages,
  confidentiality,
  className,
}: SampleDeliverablePreviewProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePage = pages[activeIndex];

  return (
    <div
      className={cn(
        "grid gap-8 lg:grid-cols-[minmax(0,1fr)_11rem] lg:items-start lg:gap-10 xl:grid-cols-[minmax(0,1fr)_12.5rem]",
        className,
      )}
    >
      <div className="relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none lg:mx-0">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-x-4 -inset-y-6 rounded-3xl bg-[radial-gradient(ellipse_at_50%_50%,_rgba(184,155,114,0.08)_0%,_transparent_70%)]"
        />

        <div className="group relative px-2 pb-4 pt-2 sm:px-4">
          <BrandMonogramCorner />
          {paperLayers.map((layer) => (
            <div
              key={layer.className}
              aria-hidden
              className={cn(
                "absolute inset-2 rounded-[3px] border border-warm-nude/35 bg-[#faf7f3]",
                layer.className,
              )}
            />
          ))}

          <AnimatedSection
            key={activePage.id}
            variant="scrollEnter"
            duration="slow"
            className="relative"
          >
            <CurriculumDocumentPage
              page={activePage}
              confidentiality={confidentiality}
            />
          </AnimatedSection>
        </div>

        <p className="mt-4 text-center text-sm text-mocha/80 lg:text-left">
          Page {activePage.pageNumber} of {pages.length}
          <span className="mx-2 text-warm-nude">·</span>
          {activePage.tabLabel}
        </p>
      </div>

      <div className="lg:sticky lg:top-28">
        <p className="mb-3 text-sm font-medium tracking-[0.28em] text-mocha uppercase">
          Sample Pages
        </p>
        <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
          {pages.map((page, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={page.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "min-w-[9.5rem] shrink-0 rounded-xl border px-4 py-3 text-left transition-[transform,box-shadow,border-color,background-color] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:min-w-0",
                  isActive
                    ? "border-soft-gold/50 bg-white shadow-[0_8px_24px_rgba(59,42,34,0.08)]"
                    : "border-warm-nude/60 bg-white/70 hover:-translate-y-0.5 hover:border-soft-gold/35 hover:bg-white hover:shadow-[0_6px_18px_rgba(59,42,34,0.06)]",
                )}
              >
                <span className="block font-serif text-base text-chocolate">
                  {page.tabLabel}
                </span>
                <span className="mt-1 block text-xs tracking-wide text-mocha/75">
                  Page {page.pageNumber}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
