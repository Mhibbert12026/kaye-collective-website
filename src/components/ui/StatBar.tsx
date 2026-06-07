import { cn } from "@/lib/utils";

type StatBarProps = {
  stats: { value: string; label: string }[];
  className?: string;
  variant?: "light" | "dark";
};

export function StatBar({ stats, className, variant = "light" }: StatBarProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "grid gap-6 sm:grid-cols-3",
        className,
      )}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={cn(
            "rounded-2xl border p-6 text-center",
            isDark
              ? "border-cream/15 bg-cream/5"
              : "border-warm-nude bg-white",
          )}
        >
          <p
            className={cn(
              "font-serif text-3xl",
              isDark ? "text-cream" : "text-aubergine",
            )}
          >
            {stat.value}
          </p>
          <p
            className={cn(
              "mt-2 text-sm",
              isDark ? "text-warm-nude" : "text-mocha",
            )}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
