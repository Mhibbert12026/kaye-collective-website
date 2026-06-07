import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { PartnerAudience } from "@/types";

type AudienceCardProps = {
  audience: PartnerAudience;
  href?: string;
  variant?: "light" | "dark";
  showCta?: boolean;
  className?: string;
};

export function AudienceCard({
  audience,
  href = "/partner-with-us",
  variant = "dark",
  showCta = true,
  className,
}: AudienceCardProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl border p-8",
        isDark
          ? "border-cream/15 bg-cream/5"
          : "border-warm-nude bg-white",
        className,
      )}
    >
      <h3
        className={cn(
          "font-serif text-2xl",
          isDark ? "text-cream" : "text-chocolate",
        )}
      >
        {audience.title}
      </h3>
      <p
        className={cn(
          "mt-5 flex-1 text-base leading-[1.75]",
          isDark ? "text-warm-nude" : "text-mocha",
        )}
      >
        {audience.description}
      </p>
      {showCta && (
        <Button
          href={href}
          variant={isDark ? "gold" : "primary"}
          className="mt-8 w-full"
        >
          {audience.cta}
        </Button>
      )}
    </div>
  );
}
