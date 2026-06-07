import { cn } from "@/lib/utils";

type FormSuccessProps = {
  title?: string;
  message?: string;
  onDark?: boolean;
  className?: string;
};

export function FormSuccess({
  title = "Thank you for reaching out.",
  message = "We've received your message and will be in touch soon.",
  onDark,
  className,
}: FormSuccessProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-8 text-center",
        onDark
          ? "border-cream/20 bg-cream/5 text-cream"
          : "border-warm-nude bg-white text-chocolate",
        className,
      )}
    >
      <p className="font-serif text-2xl">{title}</p>
      <p className="mt-3 text-sm opacity-80">{message}</p>
    </div>
  );
}
