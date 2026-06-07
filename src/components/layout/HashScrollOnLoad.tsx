"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToSection } from "@/lib/navigation";

/** Scroll to URL hash after client navigation (e.g. /about → /#speaking). */
export function HashScrollOnLoad() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    let attempts = 0;
    let frame = 0;

    const tryScroll = () => {
      if (scrollToSection(hash) || attempts >= 12) return;
      attempts += 1;
      frame = requestAnimationFrame(tryScroll);
    };

    frame = requestAnimationFrame(tryScroll);

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
