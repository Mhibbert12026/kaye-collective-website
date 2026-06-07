import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "outline" | "filled" | "gold";
};

const variants = {
  outline: "border border-warm-nude text-mocha bg-transparent",
  filled: "bg-cream text-mocha border border-warm-nude",
  gold: "border border-soft-gold/40 text-soft-gold bg-soft-gold/10",
};

export function Badge({
  children,
  className,
  variant = "outline",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3 py-1.5 text-sm font-medium lg:text-base",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
