import type { Transition, Variants } from "framer-motion";

/** Editorial luxury ease — slow deceleration, no bounce */
export const luxuryEase = [0.22, 1, 0.36, 1] as const;

export const duration = {
  fast: 0.5,
  base: 0.6,
  slow: 0.72,
  slower: 0.8,
} as const;

export type MotionDuration = keyof typeof duration;

export const stagger = {
  /** Delay between staggered children */
  child: 0.1,
  /** Delay between sequential section blocks */
  section: 0.14,
} as const;

export const viewport = {
  once: true,
  margin: "-8% 0px -8% 0px",
  amount: 0.18,
} as const;

/** Scroll-triggered section reveal — fade up, 0.6s default, once */
export const scrollSection = {
  duration: duration.base,
  offset: 24,
  viewport: {
    once: true,
    margin: "-8% 0px -8% 0px",
    amount: 0.15,
  },
} as const;

export type MotionVariant =
  | "fadeUp"
  | "fadeIn"
  | "scaleIn"
  | "heroPortrait"
  | "scrollEnter"
  | "warmFade";

/** Fade + slight upward motion only — no blur, scale, or bounce */
export const motionVariants: Record<MotionVariant, Variants> = {
  scrollEnter: {
    hidden: {
      opacity: 0,
      y: scrollSection.offset,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
  fadeUp: {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
  fadeIn: {
    hidden: {
      opacity: 0,
      y: 12,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
  warmFade: {
    hidden: {
      opacity: 0,
      y: 16,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
  /** @deprecated Use scrollEnter — kept for compatibility, no scale */
  scaleIn: {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
  /** @deprecated Use scrollEnter — kept for compatibility, no scale */
  heroPortrait: {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger.child,
      delayChildren: 0.06,
    },
  },
};

export function resolveDuration(value?: MotionDuration | number): number {
  if (value === undefined) return duration.base;
  if (typeof value === "number") return value;
  return duration[value];
}

export function createTransition(options: {
  duration?: MotionDuration | number;
  delay?: number;
  reduced?: boolean;
}): Transition {
  const { duration: durationValue = duration.base, delay = 0, reduced = false } =
    options;

  if (reduced) {
    return { duration: 0 };
  }

  return {
    duration: resolveDuration(durationValue),
    delay,
    ease: luxuryEase,
  };
}

/** Hero entrance — intentional stagger on page load */
export const heroEntrance = {
  eyebrow: 0.04,
  headline: 0.1,
  portrait: 0.18,
  supporting: 0.32,
  portraitCaption: 0.44,
  actions: 0.56,
} as const;

export const founderMotion = {
  portraitDuration: duration.slow,
  textStagger: stagger.child,
  badgeStagger: stagger.child,
} as const;

export const experienceMotion = {
  headingDuration: duration.slow,
  cardDuration: duration.slow,
  metricStagger: stagger.child,
  cardStagger: stagger.child,
} as const;

export const heroTransition = {
  headline: { duration: duration.slower },
  supporting: { duration: duration.slow },
  actions: { duration: duration.slow },
  portrait: { duration: duration.slower },
  portraitCaption: { duration: duration.base },
} as const;
