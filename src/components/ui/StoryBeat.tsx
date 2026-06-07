"use client";

import Link from "next/link";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading, SectionLabel } from "@/components/ui/SectionWrapper";
import { scrollSection } from "@/lib/motion";
import { cn } from "@/lib/utils";

type StoryBeatProps = {
  role: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  imagePosition?: "left" | "right";
  aspectClass?: string;
  imageVariant?: "light" | "dark";
  cta?: { label: string; href: string };
  className?: string;
};

export function StoryBeat({
  role,
  title,
  description,
  image,
  imagePosition = "left",
  aspectClass = "aspect-[4/5] lg:aspect-[3/4]",
  imageVariant = "light",
  cta,
  className,
}: StoryBeatProps) {
  const imageBlock = (
    <AnimatedSection
      variant="scrollEnter"
      duration={scrollSection.duration}
      className="w-full"
    >
      <EditorialImage
        src={image.src}
        alt={image.alt}
        aspectClass={aspectClass}
        variant={imageVariant}
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </AnimatedSection>
  );

  const contentBlock = (
    <AnimatedSection
      variant="scrollEnter"
      duration={scrollSection.duration}
      delay={0.08}
      className={cn(
        "flex flex-col justify-center lg:py-2",
        imagePosition === "right" ? "lg:pr-4" : "lg:pl-4",
      )}
    >
      <p className="text-xs font-medium tracking-[0.2em] text-soft-gold uppercase sm:text-sm sm:tracking-[0.28em]">
        {role}
      </p>
      <SectionHeading
        as="h3"
        size="large"
        accent={false}
        className="mt-2.5 text-[1.75rem] leading-[1.12] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
      >
        {title}
      </SectionHeading>
      <p className="mt-3 max-w-md text-base leading-[1.75] text-mocha sm:text-lg lg:text-xl">
        {description}
      </p>
      {cta && (
        <Link
          href={cta.href}
          className="mt-5 inline-flex text-base font-medium text-aubergine transition-colors hover:text-chocolate lg:text-lg"
        >
          {cta.label} →
        </Link>
      )}
    </AnimatedSection>
  );

  return (
    <div
      className={cn(
        "grid min-w-0 items-center gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-10",
        className,
      )}
    >
      {imagePosition === "left" ? (
        <>
          <div className="lg:col-span-7">{imageBlock}</div>
          <div className="lg:col-span-5">{contentBlock}</div>
        </>
      ) : (
        <>
          <div className="lg:order-2 lg:col-span-7">{imageBlock}</div>
          <div className="lg:order-1 lg:col-span-5">{contentBlock}</div>
        </>
      )}
    </div>
  );
}
