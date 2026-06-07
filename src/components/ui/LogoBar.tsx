import { cn } from "@/lib/utils";

type LogoBarProps = {
  logos: string[];
  className?: string;
  variant?: "light" | "dark" | "monochrome";
};

export function LogoBar({ logos, className, variant = "light" }: LogoBarProps) {
  const isDark = variant === "dark";

  if (variant === "monochrome") {
    return (
      <div
        className={cn(
          "grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:gap-5",
          className,
        )}
      >
        {logos.map((logo) => {
          const isLong = logo.length > 18;

          return (
            <div
              key={logo}
              className="flex min-h-[4.5rem] items-center justify-center rounded-xl border border-warm-nude/60 bg-white/70 px-4 py-4 lg:min-h-[5rem]"
            >
              <span
                className={cn(
                  "text-center font-medium uppercase tracking-[0.14em] text-chocolate/45",
                  isLong
                    ? "max-w-[11rem] text-[0.625rem] leading-snug lg:text-[0.6875rem]"
                    : "text-xs lg:text-sm",
                )}
              >
                {logo}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-x-10 gap-y-4",
        className,
      )}
    >
      {logos.map((logo) => (
        <span
          key={logo}
          className={cn(
            "text-base font-medium tracking-wide lg:text-lg",
            isDark ? "text-warm-nude/80" : "text-mocha/70",
          )}
        >
          {logo}
        </span>
      ))}
    </div>
  );
}
