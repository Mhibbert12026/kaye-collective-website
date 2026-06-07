export const jenniferImages = {
  headshot: {
    src: "/images/jennifer-huggins-headshot.png",
    alt: "Jennifer K. Huggins, Founder & Leadership Coach",
  },
  speaker: {
    src: "/images/jennifer/speaker.png",
    alt: "Jennifer delivering a keynote at a corporate conference",
    role: "Speaker",
  },
  coachingCircle: {
    src: "/images/jennifer/coaching-circle.png",
    alt: "Jennifer facilitating a leadership coaching circle with professionals",
    role: "Facilitator",
  },
  coachingInAction: {
    src: "/images/jennifer/coaching-in-action.png",
    alt: "Jennifer in an executive coaching session",
    role: "Coach",
  },
  coach: {
    src: "/images/jennifer/coach.png",
    alt: "Jennifer K. Huggins in a modern office setting",
    role: "Coach",
  },
  modernOffice: {
    src: "/images/jennifer/modern-office.png",
    alt: "Jennifer at her desk in a modern collaborative office",
    role: "Advisor",
  },
} as const;

export type JenniferImageKey = keyof typeof jenniferImages;
