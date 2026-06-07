"use client";

import { EditorialImage } from "@/components/ui/EditorialImage";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading, SectionLabel } from "@/components/ui/SectionWrapper";
import { cn } from "@/lib/utils";

type EditorialFeatureProps = {
  label: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  imagePosition?: "left" | "right";
  aspectClass?: string;
  imageVariant?: "light" | "dark";
  children?: React.ReactNode;
  className?: string;
};

export function EditorialFeature({
  label,
  title,
  description,
  image,
  imagePosition = "left",
  aspectClass = "aspect-[4/5] lg:aspect-[3/4]",
  imageVariant = "light",
  children,
  className,
}: EditorialFeatureProps) {
  const imageBlock = (
    <AnimatedSection variant="fadeUp" duration="slow" className="w-full">
      <EditorialImage
        src={image.src}
        alt={image.alt}
        aspectClass={aspectClass}
        variant={imageVariant}
        sizes="(max-width: 1024px) 100vw, 48vw"
      />
    </AnimatedSection>
  );

  const contentBlock = (
    <AnimatedSection
      variant="warmFade"
      duration="slow"
      delay={0.08}
      className={cn(
        "flex flex-col justify-center",
        imagePosition === "right" ? "lg:pr-2 xl:pr-6" : "lg:pl-2 xl:pl-6",
      )}
    >
      <SectionLabel>{label}</SectionLabel>
      <SectionHeading as="h3" size="large" accent={false} className="mt-1">
        {title}
      </SectionHeading>
      <p className="mt-5 max-w-md text-lg leading-[1.85] text-mocha lg:text-xl lg:leading-[1.88]">
        {description}
      </p>
      {children}
    </AnimatedSection>
  );

  return (
    <div
      className={cn(
        "grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16",
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
