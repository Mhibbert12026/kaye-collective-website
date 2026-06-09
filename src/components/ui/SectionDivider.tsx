import { siteContainerWide } from "@/lib/layout";
import { cn } from "@/lib/utils";

type SectionDividerVariant = "line" | "diamond" | "editorial" | "monogram";
type SectionSurface =
  | "cream"
  | "warm-ivory"
  | "soft-beige"
  | "white"
  | "warm-nude"
  | "chocolate"
  | "aubergine";
type SectionFade =
  | "cream-warm-ivory"
  | "warm-ivory-soft-beige"
  | "soft-beige-white"
  | "white-cream"
  | "cream-white"
  | "warm-ivory-white"
  | "white-warm-ivory"
  | "soft-beige-warm-ivory"
  | "soft-beige-cream"
  | "cream-warm-nude"
  | "white-warm-nude"
  | "warm-nude-white"
  | "white-chocolate"
  | "warm-ivory-chocolate"
  | "soft-beige-chocolate"
  | "chocolate-aubergine"
  | "aubergine-cream";

type SectionDividerProps = {
  variant?: SectionDividerVariant;
  tone?: "light" | "dark";
  fade?: SectionFade;
  surface?: SectionSurface;
  marker?: string;
  className?: string;
};

const surfaceClasses: Record<SectionSurface, string> = {
  cream: "bg-cream",
  "warm-ivory": "bg-warm-ivory",
  "soft-beige": "bg-soft-beige",
  white: "bg-white",
  "warm-nude": "bg-warm-nude/20",
  chocolate: "bg-chocolate",
  aubergine: "bg-aubergine",
};

const fadeClasses: Record<SectionFade, string> = {
  "cream-warm-ivory": "bg-gradient-to-b from-cream to-warm-ivory",
  "warm-ivory-soft-beige": "bg-gradient-to-b from-warm-ivory to-soft-beige",
  "soft-beige-white": "bg-gradient-to-b from-soft-beige to-white",
  "white-cream": "bg-gradient-to-b from-white to-cream",
  "cream-white": "bg-gradient-to-b from-cream to-white",
  "warm-ivory-white": "bg-gradient-to-b from-warm-ivory to-white",
  "white-warm-ivory": "bg-gradient-to-b from-white to-warm-ivory",
  "soft-beige-warm-ivory": "bg-gradient-to-b from-soft-beige to-warm-ivory",
  "soft-beige-cream": "bg-gradient-to-b from-soft-beige to-cream",
  "cream-warm-nude": "bg-gradient-to-b from-cream to-warm-nude/20",
  "white-warm-nude": "bg-gradient-to-b from-white to-warm-nude/20",
  "warm-nude-white": "bg-gradient-to-b from-warm-nude/20 to-white",
  "white-chocolate": "bg-gradient-to-b from-white to-chocolate",
  "warm-ivory-chocolate": "bg-gradient-to-b from-warm-ivory to-chocolate",
  "soft-beige-chocolate": "bg-gradient-to-b from-soft-beige to-chocolate",
  "chocolate-aubergine": "bg-gradient-to-b from-chocolate to-aubergine",
  "aubergine-cream": "bg-gradient-to-b from-aubergine to-cream",
};

function DividerMark({
  variant,
  tone,
  marker,
}: {
  variant: SectionDividerVariant;
  tone: "light" | "dark";
  marker?: string;
}) {
  const line = tone === "dark" ? "bg-soft-gold/50" : "bg-soft-gold/40";
  const lineStrong = tone === "dark" ? "bg-soft-gold/65" : "bg-soft-gold/55";
  const accent = tone === "dark" ? "bg-soft-gold/75" : "bg-soft-gold/65";

  if (variant === "monogram") {
    return (
      <div className="flex flex-col items-center gap-3">
        {marker && (
          <span className="text-[0.625rem] font-medium tracking-[0.28em] text-mocha/70 uppercase sm:text-[0.6875rem]">
            {marker}
          </span>
        )}
        <span
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border font-serif text-sm font-semibold tracking-[-0.02em]",
            tone === "dark"
              ? "border-soft-gold/50 bg-chocolate/80 text-cream"
              : "border-soft-gold/40 bg-cream text-aubergine shadow-[0_2px_10px_rgba(59,42,34,0.06)]",
          )}
        >
          KC
        </span>
        <span className={cn("block h-px w-12 sm:w-14", lineStrong)} />
      </div>
    );
  }

  if (variant === "line") {
    return <span className={cn("block h-px w-16 sm:w-20", lineStrong)} />;
  }

  if (variant === "diamond") {
    return (
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        <span className={cn("h-px w-10 sm:w-14", line)} />
        <span className={cn("h-1.5 w-1.5 shrink-0 rotate-45", accent)} />
        <span className={cn("h-px w-10 sm:w-14", line)} />
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-3 sm:max-w-md sm:gap-4">
      {marker && (
        <span className="text-[0.625rem] font-medium tracking-[0.28em] text-mocha/70 uppercase sm:text-[0.6875rem]">
          {marker}
        </span>
      )}
      <div className="flex w-full items-center gap-3 sm:gap-4">
        <span
          className={cn(
            "h-px flex-1 bg-gradient-to-r from-transparent",
            tone === "dark" ? "to-soft-gold/45" : "to-soft-gold/35",
          )}
        />
        <span className={cn("h-1 w-1 shrink-0 rotate-45", accent)} />
        <span
          className={cn(
            "h-px flex-1 bg-gradient-to-l from-transparent",
            tone === "dark" ? "to-soft-gold/30" : "to-soft-gold/25",
          )}
        />
      </div>
    </div>
  );
}

export function SectionDivider({
  variant = "line",
  tone = "light",
  fade,
  surface = "cream",
  marker,
  className,
}: SectionDividerProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "flex items-center justify-center py-6 md:py-8 lg:py-9",
        fade ? fadeClasses[fade] : surfaceClasses[surface],
        className,
      )}
    >
      <div
        className={cn(
          siteContainerWide,
          "flex justify-center px-6 lg:px-10 xl:px-12",
        )}
      >
        <DividerMark variant={variant} tone={tone} marker={marker} />
      </div>
    </div>
  );
}

export type { SectionDividerVariant, SectionFade, SectionSurface };
