import { cn } from "@/lib/utils";

type TopicPillProps = {
  topic: string;
  className?: string;
  variant?: "light" | "dark";
};

export function TopicPill({ topic, className, variant = "dark" }: TopicPillProps) {
  return (
    <li
      className={cn(
        "rounded-full border px-5 py-2.5 text-base lg:text-lg",
        variant === "dark"
          ? "border-cream/15 text-warm-nude"
          : "border-warm-nude bg-white text-mocha",
        className,
      )}
    >
      {topic}
    </li>
  );
}

type TopicGroupProps = {
  cluster: string;
  topics: string[];
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
