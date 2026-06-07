"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";
import {
  createTransition,
  motionVariants,
  resolveDuration,
  scrollSection,
  viewport,
  type MotionDuration,
  type MotionVariant,
} from "@/lib/motion";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: MotionVariant;
  duration?: MotionDuration | number;
  once?: boolean;
  animateOnMount?: boolean;
} & Pick<HTMLMotionProps<"div">, "id">;

export function AnimatedSection({
  children,
  className,
  delay = 0,
  variant = "scrollEnter",
  duration: durationProp,
  once = true,
  animateOnMount = false,
  id,
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const sectionViewport =
    variant === "scrollEnter"
      ? { ...scrollSection.viewport, once }
      : { ...viewport, once };

  if (shouldReduceMotion) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      id={id}
      variants={motionVariants[variant]}
      initial="hidden"
      {...(animateOnMount
        ? { animate: "visible" }
        : {
            whileInView: "visible",
            viewport: sectionViewport,
          })}
      transition={createTransition({
        duration: resolveDuration(durationProp),
        delay,
      })}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
