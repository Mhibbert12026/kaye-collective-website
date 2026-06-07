import { cn } from "@/lib/utils";
import type { LeadershipImpactStat } from "@/lib/constants";

type LeadershipImpactCardProps = {
  stat: LeadershipImpactStat;
  className?: string;
};

export function LeadershipImpactCard({ stat, className }: LeadershipImpactCardProps) {
  const isNumeric = /^\d/.test(stat.primary);

  return (
    <div
      className={cn(
        "flex h-full flex-col justify-center rounded-2xl border border-warm-nude/50 bg-white px-6 py-7 shadow-[0_2px_16px_rgba(59,42,34,0.04)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-warm-nude/80 hover:shadow-[0_12px_36px_rgba(59,42,34,0.08)] sm:px-7 sm:py-8 lg:px-8 lg:py-10",
        className,
      )}
    >
      <p
        className={cn(
          "font-serif leading-none tracking-tight text-chocolate",
          isNumeric
            ? "text-5xl md:text-6xl lg:text-[4rem]"
            : "text-3xl md:text-4xl lg:text-[2.625rem] lg:leading-[1.05]",
        )}
      >
        {stat.primary}
      </p>
      <p className="mt-4 max-w-[14rem] text-base leading-snug text-mocha lg:mt-5 lg:text-lg lg:leading-snug">
        {stat.secondary}
      </p>
    </div>
  );
}
