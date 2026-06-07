import { cn } from "@/lib/utils";

type FormFieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  onDark?: boolean;
};

export function FormField({
  label,
  name,
  type = "text",
  required,
  onDark,
}: FormFieldProps) {
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
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className={cn(
          "h-12 w-full rounded-xl border px-4 text-sm outline-none transition-colors focus:border-aubergine",
          onDark
            ? "border-cream/20 bg-cream/5 text-cream"
            : "border-warm-nude bg-white text-chocolate",
        )}
      />
    </div>
  );
}
