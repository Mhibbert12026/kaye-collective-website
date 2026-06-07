import Link from "next/link";
import { cn } from "@/lib/utils";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export function TextLink({
  href,
  children,
  className,
  external,
}: TextLinkProps) {
  const classes = cn(
    "inline-flex items-center text-base font-medium text-aubergine transition-colors hover:text-chocolate lg:text-lg",
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
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
