import { SectionDivider } from "@/components/ui/SectionDivider";
import type { SectionDividerVariant, SectionFade } from "@/components/ui/SectionDivider";

type HomeSectionBridgeProps = {
  variant?: SectionDividerVariant;
  fade?: SectionFade;
  marker?: string;
};

export function HomeSectionBridge({
  variant = "editorial",
  fade,
  marker,
}: HomeSectionBridgeProps) {
  return (
    <SectionDivider variant={variant} fade={fade} marker={marker} tone="light" />
  );
}
