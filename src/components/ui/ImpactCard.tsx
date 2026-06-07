import { cn } from "@/lib/utils";
import type { ImpactCardContent } from "@/lib/constants";

type ImpactCardProps = {
  card: ImpactCardContent;
  className?: string;
};

export function ImpactCard({ card, className }: ImpactCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col justify-center rounded-2xl border border-warm-nude/70 bg-white px-6 py-6 shadow-[0_2px_14px_rgba(59,42,34,0.05)] transition-all duration-300 ease hover:-translate-y-0.5 hover:border-warm-nude hover:shadow-[0_10px_32px_rgba(59,42,34,0.09)] lg:px-7 lg:py-8",
        className,
      )}
    >
      {card.type === "metric" ? (
        <>
          <p className="font-serif text-[2rem] leading-none tracking-tight text-chocolate lg:text-[2.25rem]">
            {card.primary}
          </p>
          <p className="mt-3 text-base leading-snug font-medium text-mocha lg:text-[1.0625rem]">
            {card.secondary}
          </p>
        </>
      ) : (
        <ul className="space-y-2.5">
          {card.items.map((item) => (
            <li
              key={item}
              className="font-serif text-xl leading-tight tracking-tight text-chocolate lg:text-[1.375rem]"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
