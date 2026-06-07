"use client";

import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { luxuryEase } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ScrollIndicatorProps = {
  href: string;
  className?: string;
  label?: string;
};

export function ScrollIndicator({
  href,
  className,
  label = "Scroll to learn more",
}: ScrollIndicatorProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <a
      href={href}
      aria-label={label}
      className={cn(
        "text-mocha transition-colors hover:text-chocolate",
        className,
      )}
    >
      {shouldReduceMotion ? (
        <ChevronDown className="h-6 w-6" />
      ) : (
        <motion.span
          animate={{ opacity: [0.45, 1, 0.45], y: [0, 5, 0] }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: luxuryEase,
          }}
          className="inline-flex"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.span>
      )}
    </a>
  );
}
