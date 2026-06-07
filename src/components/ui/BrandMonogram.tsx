import { cn } from "@/lib/utils";

export type BrandMonogramSize = "card" | "sm" | "md" | "lg" | "watermark" | "watermark-lg";
export type BrandMonogramOpacity = 10 | 15 | 20;

/** Shared card lift + shadow — parent must include `group` for monogram hover. */
export const brandCardHoverClasses =
  "group transition-[transform,box-shadow,border-color] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(59,42,34,0.1)]";

/** Top-right corner placement — consistent across breakpoints. */
export const brandMonogramCornerPosition =
  "pointer-events-none absolute top-5 right-5 sm:top-6 sm:right-6";

/** Card monogram: 15% default → 25% on parent hover, 250ms transition. */
export const brandMonogramCardClasses =
  "border-soft-gold/20 text-soft-gold/15 transition-[border-color,color] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-soft-gold/35 group-hover:text-soft-gold/25";

type BrandMonogramProps = {
  size?: BrandMonogramSize;
  opacity?: BrandMonogramOpacity;
  interactive?: boolean;
  className?: string;
};

const sizeClasses: Record<BrandMonogramSize, string> = {
  card: "h-[22px] w-[22px] text-[0.5625rem]",
  sm: "h-4 w-4 text-[0.5rem]",
  md: "h-5 w-5 text-[0.5625rem]",
  lg: "h-6 w-6 text-[0.625rem]",
  watermark: "h-24 w-24 text-[1.375rem]",
  "watermark-lg": "h-36 w-36 text-[2rem] sm:h-40 sm:w-40 sm:text-4xl",
};

const opacityClasses: Record<BrandMonogramOpacity, string> = {
  10: "border-soft-gold/15 text-soft-gold/10",
  15: "border-soft-gold/20 text-soft-gold/15",
  20: "border-soft-gold/25 text-soft-gold/20",
};

export function BrandMonogram({
  size = "md",
  opacity = 15,
  interactive = false,
  className,
}: BrandMonogramProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full border font-serif font-semibold leading-none tracking-[-0.02em]",
        sizeClasses[size],
        interactive ? brandMonogramCardClasses : opacityClasses[opacity],
        className,
      )}
    >
      KC
    </span>
  );
}

type BrandMonogramCornerProps = {
  className?: string;
};

export function BrandMonogramCorner({ className }: BrandMonogramCornerProps) {
  return (
    <BrandMonogram
      size="card"
      interactive
      className={cn(brandMonogramCornerPosition, className)}
    />
  );
}

type BrandMonogramWatermarkProps = {
  className?: string;
  opacity?: BrandMonogramOpacity;
};

export function BrandMonogramWatermark({
  className,
  opacity = 15,
}: BrandMonogramWatermarkProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden",
        className,
      )}
    >
      <BrandMonogram size="watermark-lg" opacity={opacity} />
    </div>
  );
}
