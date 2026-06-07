import Image from "next/image";
import { cn } from "@/lib/utils";

type EditorialImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  aspectClass?: string;
  sizes?: string;
  variant?: "light" | "dark";
};

export function EditorialImage({
  src,
  alt,
  priority = false,
  className,
  imageClassName,
  aspectClass = "aspect-[4/5]",
  sizes = "(max-width: 1024px) 100vw, 50vw",
  variant = "light",
}: EditorialImageProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] shadow-[0_16px_48px_rgba(59,42,34,0.12)] lg:rounded-[2rem]",
        isDark
          ? "border border-cream/15 shadow-[0_20px_56px_rgba(0,0,0,0.28)]"
          : "border border-warm-nude/60",
        aspectClass,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
      />
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 mix-blend-multiply",
          isDark
            ? "bg-gradient-to-tr from-chocolate/25 via-chocolate/5 to-soft-gold/10"
            : "bg-gradient-to-tr from-chocolate/12 via-transparent to-soft-gold/8",
        )}
      />
    </div>
  );
}
