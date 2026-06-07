import { cn } from "@/lib/utils";
import { siteContainer, siteContainerNarrow, siteContainerWide } from "@/lib/layout";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
};

const sizes = {
  default: siteContainer,
  narrow: cn(siteContainerNarrow, "px-6 lg:px-10"),
  wide: siteContainerWide,
};

export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return <div className={cn(sizes[size], className)}>{children}</div>;
}
