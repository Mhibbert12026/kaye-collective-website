import { BrandMonogramWatermark } from "@/components/ui/BrandMonogram";
import { cn } from "@/lib/utils";

type DocumentPageWatermarkProps = {
  className?: string;
};

export function DocumentPageWatermark({ className }: DocumentPageWatermarkProps) {
  return <BrandMonogramWatermark className={className} opacity={10} />;
}
