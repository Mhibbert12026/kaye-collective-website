"use client";

import Script from "next/script";
import { calendlyUrl, cn } from "@/lib/utils";

type CalendlyEmbedProps = {
  className?: string;
};

export function CalendlyEmbed({ className }: CalendlyEmbedProps) {
  return (
    <>
      <div
        className={cn("calendly-inline-widget w-full", className)}
        data-url={calendlyUrl}
        style={{ minWidth: "280px", height: "700px" }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
