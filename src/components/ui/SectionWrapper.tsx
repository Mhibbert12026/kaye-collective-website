import { cn } from "@/lib/utils";
import { siteContainer, sectionPaddingY, sectionPaddingYCompact } from "@/lib/layout";

export { SectionHeading } from "@/components/ui/SectionHeading";

type SectionWrapperProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  variant?: "cream" | "white" | "warm-nude" | "chocolate" | "aubergine";
  spacious?: boolean;
};

const variants = {
  cream: "bg-cream text-chocolate",
  white: "bg-white text-chocolate",
  "warm-nude": "bg-warm-nude/20 text-chocolate",
  chocolate: "bg-chocolate text-cream",
  aubergine: "bg-aubergine text-cream",
};

export function SectionWrapper({
  children,
  id,
  className,
  variant = "cream",
  spacious = true,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        spacious ? sectionPaddingY : sectionPaddingYCompact,
        variants[variant],
        className,
      )}
    >
      <div className={cn(siteContainer, "min-w-0")}>{children}</div>
    </section>
  );
}

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-2 text-sm font-medium tracking-[0.28em] text-mocha uppercase",
        className,
      )}
    >
      {children}
    </p>
  );
}
