import { cn } from "@/lib/utils";

type WorkshopContentSlotProps = {
  id: string;
  className?: string;
};

/** Empty editorial frame — reserved for future workshop content. */
export function WorkshopContentSlot({ id, className }: WorkshopContentSlotProps) {
  return (
    <div
      id={id}
      aria-hidden
      className={cn(
        "min-h-[16rem] rounded-2xl border border-warm-nude/40 bg-white/45 lg:min-h-[20rem]",
        className,
      )}
    />
  );
}
