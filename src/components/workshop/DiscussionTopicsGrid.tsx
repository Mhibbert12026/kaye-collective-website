"use client";

import { AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedStagger";
import { DiscussionTopicCard } from "@/components/workshop/DiscussionTopicCard";
import { cn } from "@/lib/utils";

type DiscussionTopicsGridProps = {
  topics: string[];
  className?: string;
};

export function DiscussionTopicsGrid({
  topics,
  className,
}: DiscussionTopicsGridProps) {
  return (
    <AnimatedStagger
      className={cn(
        "grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6",
        className,
      )}
    >
      {topics.map((topic, index) => (
        <AnimatedItem key={topic} variant="scrollEnter">
          <DiscussionTopicCard title={topic} index={index} />
        </AnimatedItem>
      ))}
    </AnimatedStagger>
  );
}
