import { createElement } from "react";
import { getWhoWeServeIcon } from "@/lib/service-icons";
import { TextLink } from "@/components/ui/TextLink";
import { cn } from "@/lib/utils";
import type { WhoWeServeAudience } from "@/types";

const cardHover =
  "transition-[transform,box-shadow,border-color] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-soft-gold/55 hover:shadow-[0_14px_36px_rgba(59,42,34,0.1)]";

function AudienceIconBadge({ title }: { title: string }) {
  const Icon = getWhoWeServeIcon(title);

  return (
    <span
      aria-hidden
      className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-soft-gold/30 bg-soft-gold/10"
    >
      {createElement(Icon, {
        className: "h-[1.125rem] w-[1.125rem] text-soft-gold",
        strokeWidth: 1.5,
      })}
    </span>
  );
}

type WhoWeServeCardProps = {
  audience: WhoWeServeAudience;
  className?: string;
};

export function WhoWeServeCard({ audience, className }: WhoWeServeCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-2xl border border-warm-nude/80 bg-white p-6 sm:p-8 lg:p-12",
        cardHover,
        className,
      )}
    >
      <AudienceIconBadge title={audience.title} />

      <h3 className="font-serif text-2xl leading-[1.15] tracking-tight text-chocolate sm:text-[1.75rem] lg:text-[2rem]">
        {audience.title}
      </h3>

      <p className="mt-4 text-base leading-[1.85] text-mocha/90 lg:text-lg">
        {audience.description}
      </p>

      <ul className="mt-6 space-y-2.5 border-t border-warm-nude/60 pt-6">
        {audience.capabilities.map((capability) => (
          <li
            key={capability}
            className="flex items-start gap-3 text-sm leading-snug text-mocha md:text-base"
          >
            <span
              aria-hidden
              className="mt-[0.45rem] h-1 w-1 shrink-0 rotate-45 bg-soft-gold"
            />
            {capability}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-10">
        <TextLink href={audience.href} className="text-aubergine hover:text-chocolate">
          {audience.cta} →
        </TextLink>
      </div>
    </article>
  );
}
