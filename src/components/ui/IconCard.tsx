import { cn } from "@/lib/utils";

type IconCardProps = {
  title: string;
  description: string;
  className?: string;
  icon?: React.ReactNode;
};

export function IconCard({
  title,
  description,
  className,
  icon,
}: IconCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-warm-nude bg-cream",
        className,
      )}
    >
      {icon && <div className="mb-4 text-soft-gold">{icon}</div>}
      <h3 className="font-serif text-2xl text-chocolate lg:text-3xl">{title}</h3>
      <p className="mt-4 text-base leading-[1.75] text-mocha lg:text-lg lg:leading-[1.8]">
        {description}
      </p>
    </div>
  );
}
