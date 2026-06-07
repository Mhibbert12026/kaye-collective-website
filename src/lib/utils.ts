import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calendlyUrl =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com";
