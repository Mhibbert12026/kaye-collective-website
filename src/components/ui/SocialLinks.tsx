import { socialLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-12h4v2" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const socialIconMap = {
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
} as const;

type SocialPlatform = keyof typeof socialIconMap;
type SocialLinkVariant = "dark" | "light";

const variantClasses: Record<SocialLinkVariant, string> = {
  dark: "border-cream/15 bg-cream/5 text-warm-nude hover:border-soft-gold/60 hover:bg-soft-gold/15 hover:text-soft-gold",
  light:
    "border-warm-nude/60 bg-white/80 text-mocha shadow-[0_2px_10px_rgba(59,42,34,0.04)] hover:border-soft-gold/55 hover:bg-soft-gold/10 hover:text-aubergine",
};

const hoverTransition =
  "transition-[color,background-color,border-color,transform] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105";

type SocialLinkProps = {
  label: SocialPlatform;
  href: string;
  ariaLabel: string;
  variant?: SocialLinkVariant;
  className?: string;
};

function SocialLink({
  label,
  href,
  ariaLabel,
  variant = "dark",
  className,
}: SocialLinkProps) {
  const Icon = socialIconMap[label];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-full border",
        hoverTransition,
        variantClasses[variant],
        className,
      )}
    >
      <Icon className="h-[18px] w-[18px]" />
    </a>
  );
}

type SocialLinksRowProps = {
  variant?: SocialLinkVariant;
  className?: string;
  centered?: boolean;
};

function SocialLinksRow({
  variant = "dark",
  className,
  centered = false,
}: SocialLinksRowProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap gap-3",
        centered && "justify-center",
        className,
      )}
    >
      {socialLinks.map((item) => (
        <SocialLink
          key={item.label}
          label={item.label}
          href={item.href}
          ariaLabel={item.ariaLabel}
          variant={variant}
        />
      ))}
    </div>
  );
}

export { SocialLink, SocialLinksRow };
