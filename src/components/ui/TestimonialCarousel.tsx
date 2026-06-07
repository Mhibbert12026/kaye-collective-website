"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
  className?: string;
  variant?: "light" | "dark";
};

export function TestimonialCarousel({
  testimonials,
  className,
  variant = "light",
}: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (testimonials.length === 0) {
    return null;
  }

  const isDark = variant === "dark";
  const active = testimonials[activeIndex];

  return (
    <div className={cn("text-center", className)}>
      <blockquote
        className={cn(
          "mx-auto max-w-2xl font-serif text-xl leading-relaxed md:text-2xl",
          isDark ? "text-cream" : "text-chocolate",
        )}
      >
        &ldquo;{active.quote}&rdquo;
      </blockquote>
      <footer className="mt-6">
        <p
          className={cn(
            "font-medium",
            isDark ? "text-warm-nude" : "text-chocolate",
          )}
        >
          {active.name}
        </p>
        <p className={cn("text-sm", isDark ? "text-warm-nude/80" : "text-mocha")}>
          {active.title}, {active.organization}
        </p>
      </footer>

      {testimonials.length > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`View testimonial ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                index === activeIndex
                  ? "bg-soft-gold"
                  : isDark
                    ? "bg-cream/30"
                    : "bg-warm-nude",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
