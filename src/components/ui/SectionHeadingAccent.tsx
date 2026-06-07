"use client";

import { motion, useReducedMotion } from "framer-motion";
import { createTransition, scrollSection } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SectionHeadingAccentProps = {
  className?: string;
  widthClass?: string;
};

export function SectionHeadingAccent({
  className,
  widthClass = "w-20 lg:w-24",
}: SectionHeadingAccentProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <span
        aria-hidden
        className={cn(
          "block h-px bg-soft-gold",
          widthClass,
          className,
        )}
      />
    );
  }

  return (
    <motion.span
      aria-hidden
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ ...scrollSection.viewport, once: true }}
      transition={createTransition({ duration: scrollSection.duration })}
      className={cn(
        "block h-px bg-soft-gold",
        widthClass,
        className,
      )}
    />
  );
}
