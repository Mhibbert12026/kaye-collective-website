/** Shared layout tokens — premium editorial scale */
export const siteContainer =
  "mx-auto w-full max-w-[1500px] px-6 lg:px-10 xl:px-12";

export const siteContainerWide =
  "mx-auto w-full max-w-[1600px] px-6 lg:px-10 xl:px-12";

export const siteContainerNarrow = "mx-auto w-full max-w-[52rem]";

/**
 * Section vertical rhythm — asymmetric padding keeps inter-section gaps ~96–120px
 * while preserving ~80–96px inset from the section edge to content.
 */
export const sectionPaddingY =
  "pt-14 pb-12 md:pt-20 md:pb-14 lg:pt-24 lg:pb-16";

/** First section after the hero (same background — avoid doubled top gap) */
export const sectionPaddingYAfterHero =
  "pt-12 pb-12 md:pt-16 md:pb-14 lg:pt-20 lg:pb-16";

/** Tighter sections (nested bands, secondary blocks) */
export const sectionPaddingYCompact = "pt-12 pb-10 md:pt-16 md:pb-12";

/** Heading block → first content element */
export const sectionContentGap = "mt-6 lg:mt-8";

/** Major blocks within the same section */
export const sectionBlockGap = "mt-6 lg:mt-8";

export const bodyText = "text-lg leading-[1.75] text-mocha md:text-xl md:leading-[1.8]";
export const bodyTextLarge =
  "text-xl leading-[1.8] text-mocha md:text-2xl md:leading-[1.85]";

/** Closing CTA — slightly more generous than standard sections */
export const closingCtaPaddingY =
  "pt-16 pb-14 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24";

/** Brand surface treatment — shared by footer and closing CTA */
export const brandSurfaceGradient =
  "bg-[radial-gradient(ellipse_at_20%_0%,_rgba(184,155,114,0.12)_0%,_transparent_55%),radial-gradient(ellipse_at_80%_100%,_rgba(90,48,69,0.18)_0%,_transparent_50%)]";

export const brandSurfaceTopLine =
  "bg-gradient-to-r from-transparent via-soft-gold/50 to-transparent";

/** Full-width primary actions on small screens */
export const mobileCtaGroup =
  "flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4";

export const mobileCtaButton = "w-full sm:w-auto";
