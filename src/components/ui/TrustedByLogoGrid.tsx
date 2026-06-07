"use client";

import { cn } from "@/lib/utils";
import type { TrustedByLogo } from "@/lib/constants";
import { AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedStagger";

type TrustedByLogoGridProps = {
  logos: TrustedByLogo[];
  className?: string;
};

/** 25% larger than original 120 / 140 / 160px display widths */
const displayWidthClass: Record<NonNullable<TrustedByLogo["displayWidth"]>, string> = {
  120: "max-w-[110px] sm:max-w-[130px] lg:max-w-[150px]",
  140: "max-w-[125px] sm:max-w-[150px] lg:max-w-[175px]",
  160: "max-w-[140px] sm:max-w-[170px] lg:max-w-[200px]",
};

const LOGO_SCALE = 1.25;

export function TrustedByLogoGrid({ logos, className }: TrustedByLogoGridProps) {
  return (
    <ul
      className={cn(
        "mx-auto grid max-w-6xl grid-cols-2 place-items-center gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-10 md:gap-x-10 md:gap-y-12 lg:grid-cols-4 lg:gap-x-16 lg:gap-y-12 xl:gap-x-20",
        className,
      )}
    >
      <AnimatedStagger className="contents" delay={0.1} staggerDelay={0.09}>
        {logos.map((logo) => {
          const width = logo.displayWidth ?? 140;
          const scaledWidth = Math.round(width * LOGO_SCALE);

          return (
            <AnimatedItem key={logo.file} className="contents">
              <li className="group flex w-full justify-center">
                <div
                  className={cn(
                    "flex h-[3.5rem] w-full items-center justify-center px-1 transition-transform duration-300 ease-out group-hover:scale-105 sm:h-[4rem] sm:px-2 md:h-[4.25rem] md:px-3 lg:h-20",
                    displayWidthClass[width],
                  )}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/logos/${logo.file}`}
                    alt={logo.alt}
                    title={logo.name}
                    width={scaledWidth}
                    height={Math.round(scaledWidth * 0.28)}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full max-h-[36px] object-contain opacity-55 grayscale transition-opacity duration-300 ease-out group-hover:opacity-100 sm:max-h-[42px] md:max-h-[48px] lg:max-h-[55px]"
                  />
                </div>
              </li>
            </AnimatedItem>
          );
        })}
      </AnimatedStagger>
    </ul>
  );
}
