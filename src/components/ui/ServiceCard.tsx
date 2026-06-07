import { createElement } from "react";
import { getServiceIcon } from "@/lib/service-icons";
import { cn } from "@/lib/utils";
import type { ServiceItem } from "@/types";

type ServiceCardProps = {
  service: ServiceItem;
  className?: string;
  variant?: "cream" | "white";
};

const serviceCardHover =
  "transition-[transform,box-shadow,border-color] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-mocha/40 hover:shadow-[0_8px_24px_rgba(59,42,34,0.08)]";

function ServiceIconBadge({ title }: { title: string }) {
  const Icon = getServiceIcon(title);

  return (
    <span
      aria-hidden
      className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-full border border-soft-gold/35 bg-soft-gold/10"
    >
      {createElement(Icon, {
        className: "h-5 w-5 text-aubergine",
        strokeWidth: 1.5,
      })}
    </span>
  );
}

export function ServiceCard({
  service,
  className,
  variant = "cream",
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl border border-warm-nude p-10 lg:p-12",
        variant === "cream" ? "bg-cream" : "bg-white",
        serviceCardHover,
        className,
      )}
    >
      <ServiceIconBadge title={service.title} />
      <h3 className="font-serif text-[1.625rem] leading-[1.2] tracking-tight text-chocolate lg:text-3xl">
        {service.title}
      </h3>
      <p className="mt-6 text-base font-normal leading-[1.85] text-mocha/90 lg:text-lg lg:leading-[1.92]">
        {service.description}
      </p>
    </div>
  );
}
