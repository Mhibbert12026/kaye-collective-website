import { cn } from "@/lib/utils";

type FormTextareaProps = {
  label: string;
  name: string;
  rows?: number;
  required?: boolean;
  onDark?: boolean;
};

export function FormTextarea({
  label,
  name,
  rows = 5,
  required,
  onDark,
}: FormTextareaProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className={cn(
          "mb-2 block text-sm font-medium",
          onDark ? "text-cream" : "text-chocolate",
        )}
      >
        {label}
        {required ? " *" : ""}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        rows={rows}
        className={cn(
          "w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:border-aubergine",
          onDark
            ? "border-cream/20 bg-cream/5 text-cream"
            : "border-warm-nude bg-white text-chocolate",
        )}
      />
    </div>
  );
}
