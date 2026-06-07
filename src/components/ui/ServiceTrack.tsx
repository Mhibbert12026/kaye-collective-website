import { createElement } from "react";
import { getServiceIcon } from "@/lib/service-icons";
import { TextLink } from "@/components/ui/TextLink";
import { cn } from "@/lib/utils";
import type { ServiceItem } from "@/types";

type ServiceTrackProps = {
  title: string;
  services: ServiceItem[];
  href: string;
  accent?: "mocha" | "gold";
  className?: string;
};

const accents = {
  mocha: "border-t-mocha hover:border-t-chocolate",
  gold: "border-t-soft-gold hover:border-t-mocha",
};

const serviceTrackHover =
  "transition-[transform,box-shadow,border-color] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-mocha/35 hover:shadow-[0_8px_24px_rgba(59,42,34,0.08)]";

function ServiceTrackIcon({ title }: { title: string }) {
  const Icon = getServiceIcon(title);

  return (
    <span
      aria-hidden
      className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-soft-gold/30 bg-soft-gold/10"
    >
      {createElement(Icon, {
        className: "h-4 w-4 text-aubergine",
        strokeWidth: 1.5,
      })}
    </span>
  );
}

export function ServiceTrack({
  title,
  services,
  href,
  accent = "mocha",
  className,
}: ServiceTrackProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-warm-nude/80 border-t-4 bg-white",
        accents[accent],
        serviceTrackHover,
        className,
      )}
    >
      <h3 className="font-serif text-3xl leading-[1.15] tracking-tight text-chocolate lg:text-4xl">
        {title}
      </h3>
      <ul className="mt-10 space-y-9">
        {services.map((service) => (
          <li key={service.title} className="flex gap-4">
            <ServiceTrackIcon title={service.title} />
            <div className="min-w-0 flex-1">
              <p className="font-serif text-xl leading-snug text-chocolate lg:text-2xl">
                {service.title}
              </p>
              <p className="mt-4 text-base leading-[1.85] text-mocha/90 lg:text-lg lg:leading-[1.92]">
                {service.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <TextLink href={href} className="mt-10 text-base lg:text-lg">
        View all services →
      </TextLink>
    </div>
  );
}
