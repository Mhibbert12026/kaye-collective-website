"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  createTransition,
  motionVariants,
  resolveDuration,
  scrollSection,
  stagger,
  staggerContainerVariants,
  viewport,
  type MotionDuration,
  type MotionVariant,
} from "@/lib/motion";

type AnimatedStaggerProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  staggerDelay?: number;
};

export function AnimatedStagger({
  children,
  className,
  delay = 0,
  once = true,
  staggerDelay = stagger.child,
}: AnimatedStaggerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...scrollSection.viewport, once }}
      transition={{
        delayChildren: delay,
        staggerChildren: staggerDelay,
      }}
    >
      {children}
    </motion.div>
  );
}

type AnimatedItemProps = {
  children: React.ReactNode;
  className?: string;
  variant?: MotionVariant;
  duration?: MotionDuration | number;
};

export function AnimatedItem({
  children,
  className,
  variant = "scrollEnter",
  duration: durationProp,
}: AnimatedItemProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={motionVariants[variant]}
      transition={createTransition({
        duration: resolveDuration(durationProp ?? "base"),
      })}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
