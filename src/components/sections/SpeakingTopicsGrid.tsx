"use client";

import { AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedStagger";
import { SpeakingTopicCategoryCard } from "@/components/sections/SpeakingTopicCategoryCard";
import { cn } from "@/lib/utils";

type SpeakingTopicGroup = {
  cluster: string;
  description: string;
  topics: readonly string[] | string[];
};

type SpeakingTopicsGridProps = {
  groups: readonly SpeakingTopicGroup[] | SpeakingTopicGroup[];
  className?: string;
};

export function SpeakingTopicsGrid({ groups, className }: SpeakingTopicsGridProps) {
  return (
    <AnimatedStagger
      className={cn(
        "mx-auto grid max-w-6xl gap-5 lg:grid-cols-3 lg:gap-6",
        className,
      )}
    >
      {groups.map((group) => (
        <AnimatedItem key={group.cluster} variant="scrollEnter" className="h-full">
          <SpeakingTopicCategoryCard
            cluster={group.cluster}
            description={group.description}
            topics={group.topics}
          />
        </AnimatedItem>
      ))}
    </AnimatedStagger>
  );
}
