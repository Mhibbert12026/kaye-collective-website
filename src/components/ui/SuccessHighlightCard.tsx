import { createElement } from "react";
import { getServiceIcon } from "@/lib/service-icons";
import { cn } from "@/lib/utils";

type SuccessHighlightCardProps = {
  title: string;
  description: string;
  className?: string;
};

const cardHover =
  "transition-[transform,box-shadow,border-color] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-soft-gold/45 hover:shadow-[0_12px_32px_rgba(59,42,34,0.09)]";

function HighlightIconBadge({ title }: { title: string }) {
  const Icon = getServiceIcon(title);

  return (
    <span
      aria-hidden
      className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-soft-gold/35 bg-soft-gold/10"
    >
      {createElement(Icon, {
        className: "h-[1.125rem] w-[1.125rem] text-aubergine",
        strokeWidth: 1.5,
      })}
    </span>
  );
}

export function SuccessHighlightCard({
  title,
  description,
  className,
}: SuccessHighlightCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-2xl border border-warm-nude/80 bg-white px-6 py-7 shadow-[0_2px_14px_rgba(59,42,34,0.04)] sm:px-8 sm:py-8 lg:px-9 lg:py-10",
        cardHover,
        className,
      )}
    >
      <HighlightIconBadge title={title} />
      <h3 className="font-serif text-[1.375rem] leading-[1.2] tracking-tight text-chocolate sm:text-2xl lg:text-[1.625rem]">
        {title}
      </h3>
      <p className="mt-4 text-base leading-[1.85] text-mocha/90 lg:text-lg lg:leading-[1.9]">
        {description}
      </p>
    </article>
  );
}
