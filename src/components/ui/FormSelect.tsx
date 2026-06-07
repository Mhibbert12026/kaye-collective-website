import { cn } from "@/lib/utils";

type FormSelectProps = {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  onDark?: boolean;
  placeholder?: string;
};

export function FormSelect({
  label,
  name,
  options,
  required,
  onDark,
  placeholder = "Select an option",
}: FormSelectProps) {
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
      <select
        id={name}
        name={name}
        required={required}
        className={cn(
          "h-12 w-full rounded-xl border px-4 text-sm outline-none transition-colors focus:border-aubergine",
          onDark
            ? "border-cream/20 bg-cream/5 text-cream"
            : "border-warm-nude bg-white text-chocolate",
        )}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
