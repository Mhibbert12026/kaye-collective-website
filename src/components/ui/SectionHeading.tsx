"use client";

import { SectionHeadingAccent } from "@/components/ui/SectionHeadingAccent";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  size?: "default" | "large" | "display";
  accent?: boolean;
  centered?: boolean;
};

const sizes = {
  default:
    "text-4xl leading-[1.12] tracking-tight md:text-5xl lg:text-6xl",
  large:
    "text-[2.75rem] leading-[1.1] tracking-tight md:text-6xl lg:text-7xl",
  display:
    "text-5xl leading-[1.04] tracking-tight md:text-7xl lg:text-8xl",
};

const accentWidths = {
  default: "w-16 lg:w-20",
  large: "w-20 lg:w-24",
  display: "w-24 lg:w-28",
};

export function SectionHeading({
  children,
  className,
  as: Tag = "h2",
  size = "default",
  accent = true,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "mx-auto inline-block text-center")}>
      <Tag
        className={cn(
          "font-serif text-balance",
          sizes[size],
          className,
        )}
      >
        {children}
      </Tag>
      {accent && (
        <SectionHeadingAccent
          widthClass={accentWidths[size]}
          className="mt-5"
        />
      )}
    </div>
  );
}
