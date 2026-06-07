import Image from "next/image";
import { founderBio } from "@/lib/constants";
import { jenniferImages } from "@/lib/images";
import { cn } from "@/lib/utils";

type FounderPortraitProps = {
  className?: string;
  sticky?: boolean;
  priority?: boolean;
  src?: string;
  alt?: string;
};

export function FounderPortrait({
  className,
  sticky = false,
  priority = false,
  src = jenniferImages.headshot.src,
  alt = `${founderBio.name}, ${founderBio.title}`,
}: FounderPortraitProps) {
  const portrait = (
    <div
      className={cn(
        "relative aspect-[4/5] overflow-hidden rounded-[2rem] border-2 border-warm-nude/80 bg-white shadow-[0_16px_48px_rgba(59,42,34,0.12)]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        priority={priority}
        sizes="(max-width: 1024px) 90vw, 680px"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-tr from-chocolate/10 via-transparent to-soft-gold/8 mix-blend-multiply"
      />
    </div>
  );

  if (sticky) {
    return <div className="sticky top-32">{portrait}</div>;
  }

  return portrait;
}
