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

function SocialLink({
  label,
  href,
}: {
  label: keyof typeof socialIconMap;
  href: string;
}) {
  const Icon = socialIconMap[label];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 bg-cream/5 text-warm-nude transition-[color,background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-soft-gold/50 hover:bg-soft-gold/10 hover:text-cream"
    >
      <Icon className="h-[18px] w-[18px]" />
    </a>
  );
}

export { SocialLink };
