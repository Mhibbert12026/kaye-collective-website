import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "gold";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
  ariaLabel?: string;
};

const variants = {
  primary:
    "bg-aubergine text-cream hover:bg-chocolate border border-aubergine shadow-[0_2px_12px_rgba(90,48,69,0.22)] hover:shadow-[0_4px_18px_rgba(90,48,69,0.3)]",
  secondary:
    "bg-transparent text-chocolate border border-mocha hover:border-chocolate hover:bg-white/50",
  ghost: "bg-transparent text-cream border border-cream/30 hover:bg-cream/10",
  gold: "bg-soft-gold text-chocolate hover:bg-chocolate hover:text-cream border border-soft-gold",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  onClick,
  type = "button",
  external,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex h-14 items-center justify-center whitespace-nowrap rounded-full px-8 text-base font-medium tracking-wide transition-colors duration-300",
    variants[variant],
    className,
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className={classes}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
