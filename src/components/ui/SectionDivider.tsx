import { siteContainerWide } from "@/lib/layout";
import { cn } from "@/lib/utils";

type SectionDividerVariant = "line" | "diamond" | "editorial";
type SectionSurface = "cream" | "white" | "warm-nude" | "chocolate" | "aubergine";
type SectionFade =
  | "cream-white"
  | "white-cream"
  | "cream-warm-nude"
  | "white-warm-nude"
  | "warm-nude-white"
  | "white-chocolate"
  | "chocolate-aubergine"
  | "aubergine-cream";

type SectionDividerProps = {
  variant?: SectionDividerVariant;
  tone?: "light" | "dark";
  fade?: SectionFade;
  surface?: SectionSurface;
  className?: string;
};

const surfaceClasses: Record<SectionSurface, string> = {
  cream: "bg-cream",
  white: "bg-white",
  "warm-nude": "bg-warm-nude/20",
  chocolate: "bg-chocolate",
  aubergine: "bg-aubergine",
};

const fadeClasses: Record<SectionFade, string> = {
  "cream-white": "bg-gradient-to-b from-cream to-white",
  "white-cream": "bg-gradient-to-b from-white to-cream",
  "cream-warm-nude": "bg-gradient-to-b from-cream to-warm-nude/20",
  "white-warm-nude": "bg-gradient-to-b from-white to-warm-nude/20",
  "warm-nude-white": "bg-gradient-to-b from-warm-nude/20 to-white",
  "white-chocolate": "bg-gradient-to-b from-white to-chocolate",
  "chocolate-aubergine": "bg-gradient-to-b from-chocolate to-aubergine",
  "aubergine-cream": "bg-gradient-to-b from-aubergine to-cream",
};

function DividerMark({
  variant,
  tone,
}: {
  variant: SectionDividerVariant;
  tone: "light" | "dark";
}) {
  const line = tone === "dark" ? "bg-soft-gold/50" : "bg-soft-gold/40";
  const lineStrong = tone === "dark" ? "bg-soft-gold/65" : "bg-soft-gold/55";
  const accent = tone === "dark" ? "bg-soft-gold/75" : "bg-soft-gold/65";

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
    <div className="flex w-full max-w-sm items-center gap-3 sm:max-w-md sm:gap-4">
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
  );
}

export function SectionDivider({
  variant = "line",
  tone = "light",
  fade,
  surface = "cream",
  className,
}: SectionDividerProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "flex items-center justify-center py-7 md:py-9 lg:py-10",
        fade ? fadeClasses[fade] : surfaceClasses[surface],
        className,
      )}
    >
      <div className={cn(siteContainerWide, "flex justify-center px-6 lg:px-10 xl:px-12")}>
        <DividerMark variant={variant} tone={tone} />
      </div>
    </div>
  );
}

export type { SectionDividerVariant, SectionFade, SectionSurface };
