import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "nav";
  variant?: "light" | "dark";
};

const lockupSizes = {
  sm: {
    monogramBox: "h-11 w-11",
    monogramType: "text-lg",
    name: "text-lg",
    tagline: "text-[9px] tracking-[0.2em]",
    textGap: "gap-1",
    gap: "gap-3",
  },
  md: {
    monogramBox: "h-14 w-14",
    monogramType: "text-xl",
    name: "text-xl",
    tagline: "text-[10px] tracking-[0.22em]",
    textGap: "gap-1",
    gap: "gap-4",
  },
  lg: {
    monogramBox: "h-16 w-16",
    monogramType: "text-2xl",
    name: "text-2xl sm:text-3xl",
    tagline: "text-[11px] sm:text-xs tracking-[0.24em]",
    textGap: "gap-1.5",
    gap: "gap-5",
  },
  nav: {
    monogramBox: "h-16 w-16",
    monogramType: "text-[1.75rem]",
    name: "text-2xl leading-none xl:text-[1.875rem]",
    tagline:
      "text-[11px] leading-none tracking-[0.26em] xl:text-[13px] xl:tracking-[0.28em]",
    textGap: "gap-1.5",
    gap: "gap-6 xl:gap-7",
  },
};

function Monogram({
  sizeKey,
  variant,
}: {
  sizeKey: keyof typeof lockupSizes;
  variant: "light" | "dark";
}) {
  const isDark = variant === "dark";
  const styles = lockupSizes[sizeKey];

  return (
    <span
      aria-hidden
      className={cn(
        "relative flex shrink-0 items-center justify-center rounded-full font-serif font-semibold leading-none tracking-[-0.02em]",
        styles.monogramBox,
        styles.monogramType,
        isDark
          ? "border-2 border-soft-gold/70 bg-chocolate text-cream shadow-[inset_0_0_0_1px_rgba(184,155,114,0.15)]"
          : "border-2 border-mocha/40 bg-white text-chocolate shadow-[0_2px_12px_rgba(59,42,34,0.1)]",
      )}
    >
      KC
    </span>
  );
}

function BrandLockup({
  sizeKey,
  variant,
}: {
  sizeKey: keyof typeof lockupSizes;
  variant: "light" | "dark";
}) {
  const styles = lockupSizes[sizeKey];
  const isDark = variant === "dark";

  return (
    <span className={cn("flex shrink-0 flex-col", styles.textGap)}>
      <span
        className={cn(
          "whitespace-nowrap font-serif font-medium leading-none tracking-[0.015em]",
          styles.name,
          isDark ? "text-cream" : "text-chocolate",
        )}
      >
        The Kaye Collective
      </span>
      <span
        className={cn(
          "whitespace-nowrap font-sans font-medium uppercase leading-none",
          styles.tagline,
          isDark ? "text-soft-gold/80" : "text-mocha/80",
        )}
      >
        Leadership &amp; Advisory
      </span>
    </span>
  );
}

export function Logo({
  className,
  size = "md",
  variant = "light",
}: LogoProps) {
  const sizeKey = size === "nav" ? "nav" : size;
  const styles = lockupSizes[sizeKey];

  return (
    <Link
      href="/"
      className={cn(
        "group flex shrink-0 items-center transition-opacity duration-300 hover:opacity-90",
        styles.gap,
        className,
      )}
      aria-label="The Kaye Collective — Leadership and Advisory — Home"
    >
      <Monogram sizeKey={sizeKey} variant={variant} />
      <BrandLockup sizeKey={sizeKey} variant={variant} />
    </Link>
  );
}
