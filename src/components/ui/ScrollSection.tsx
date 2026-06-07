"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { scrollSection } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ScrollSectionProps = {
  children: React.ReactNode;
  className?: string;
};

/** Homepage section scroll reveal — fade up 30px, 0.8s, once */
export function ScrollSection({ children, className }: ScrollSectionProps) {
  return (
    <AnimatedSection
      variant="scrollEnter"
      duration={scrollSection.duration}
      once
      className={cn(className)}
    >
      {children}
    </AnimatedSection>
  );
}
