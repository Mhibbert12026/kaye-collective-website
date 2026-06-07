import { cn } from "@/lib/utils";

type QuoteBlockProps = {
  quote: string;
  attribution?: string;
  className?: string;
  variant?: "gold" | "aubergine" | "centered";
};

export function QuoteBlock({
  quote,
  attribution,
  className,
  variant = "gold",
}: QuoteBlockProps) {
  if (variant === "centered") {
    return (
      <blockquote
        className={cn("mx-auto max-w-4xl text-center", className)}
      >
        <p className="font-serif text-3xl leading-snug text-aubergine md:text-4xl lg:text-5xl">
          &ldquo;{quote}&rdquo;
        </p>
        {attribution && (
          <footer className="mt-5 text-base text-mocha">— {attribution}</footer>
        )}
      </blockquote>
    );
  }

  return (
    <blockquote
      className={cn(
        "mx-auto max-w-5xl border-l-4 py-2 pl-8 lg:pl-10",
        variant === "gold" ? "border-soft-gold" : "border-aubergine",
        className,
      )}
    >
      <p
        className={cn(
          "font-serif text-3xl leading-snug md:text-4xl lg:text-5xl lg:leading-snug",
          variant === "gold" ? "text-aubergine" : "text-chocolate",
        )}
      >
        &ldquo;{quote}&rdquo;
      </p>
      {attribution && (
        <footer className="mt-5 text-base text-mocha">— {attribution}</footer>
      )}
    </blockquote>
  );
}
