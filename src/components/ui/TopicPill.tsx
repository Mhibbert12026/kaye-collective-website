import { cn } from "@/lib/utils";

type TopicPillProps = {
  topic: string;
  className?: string;
  variant?: "light" | "dark" | "portfolio";
};

const pillVariants = {
  dark: "border-cream/15 text-warm-nude",
  light: "border-warm-nude bg-white text-mocha",
  portfolio:
    "border-warm-nude/70 bg-cream/80 font-medium text-chocolate shadow-[0_1px_6px_rgba(59,42,34,0.05)] transition-[transform,box-shadow,border-color,background-color] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-soft-gold/55 hover:bg-white hover:shadow-[0_8px_20px_rgba(59,42,34,0.08)]",
};

export function TopicPill({
  topic,
  className,
  variant = "dark",
}: TopicPillProps) {
  return (
    <li
      className={cn(
        "rounded-full border px-4 py-2 text-sm leading-snug sm:px-5 sm:py-2.5 sm:text-base lg:text-[1.0625rem]",
        pillVariants[variant],
        className,
      )}
    >
      {topic}
    </li>
  );
}

type TopicGroupProps = {
  cluster: string;
  topics: readonly string[] | string[];
  variant?: "light" | "dark";
  className?: string;
};

export function TopicGroup({
  cluster,
  topics,
  variant = "dark",
  className,
}: TopicGroupProps) {
  return (
    <div className={className}>
      <p
        className={cn(
          "mb-3 text-sm tracking-[0.22em] uppercase",
          variant === "dark" ? "text-soft-gold" : "text-mocha",
        )}
      >
        {cluster}
      </p>
      <ul className="flex flex-wrap gap-2.5">
        {topics.map((topic) => (
          <TopicPill key={topic} topic={topic} variant={variant} />
        ))}
      </ul>
    </div>
  );
}
