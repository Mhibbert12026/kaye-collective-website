import { BrandMonogramWatermark } from "@/components/ui/BrandMonogram";
import { cn } from "@/lib/utils";

type BrandWatermarkProps = {
  className?: string;
};

export function BrandWatermark({ className }: BrandWatermarkProps) {
  return (
    <BrandMonogramWatermark
      className={cn("fixed inset-0 z-0", className)}
      opacity={10}
    />
  );
}
