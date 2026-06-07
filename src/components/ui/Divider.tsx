import { cn } from "@/lib/utils";

type DividerProps = {
  className?: string;
  variant?: "warm-nude" | "soft-gold" | "cream";
};

const variants = {
  "warm-nude": "bg-warm-nude",
  "soft-gold": "bg-soft-gold",
  cream: "bg-cream/20",
};

export function Divider({ className, variant = "warm-nude" }: DividerProps) {
  return (
    <hr className={cn("h-px border-0", variants[variant], className)} />
  );
}
