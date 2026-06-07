"use client";

import { motion, useReducedMotion } from "framer-motion";
import { luxuryEase } from "@/lib/motion";
import { cn } from "@/lib/utils";

type QuoteAccentLineProps = {
  className?: string;
  delay?: number;
};

export function QuoteAccentLine({
  className,
  delay = 0.2,
}: QuoteAccentLineProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <span
        aria-hidden
        className={cn("mx-auto mt-10 block h-px w-28 bg-soft-gold lg:w-36", className)}
      />
    );
  }

  return (
    <motion.span
      aria-hidden
      initial={{ scaleX: 0, opacity: 0.5 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1, delay, ease: luxuryEase }}
      className={cn(
        "mx-auto mt-10 block h-px w-28 origin-left bg-soft-gold lg:w-36",
        className,
      )}
    />
  );
}
