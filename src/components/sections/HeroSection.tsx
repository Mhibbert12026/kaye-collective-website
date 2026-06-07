"use client";

import Image from "next/image";
import { founderBio, heroContent } from "@/lib/constants";
import { jenniferImages } from "@/lib/images";
import { heroEntrance, heroTransition } from "@/lib/motion";
import { siteContainerWide, mobileCtaButton, mobileCtaGroup } from "@/lib/layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100svh-72px)] overflow-x-clip overflow-y-visible bg-cream sm:min-h-[calc(100svh-80px)] lg:min-h-[calc(100svh-90px)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_50%,_rgba(247,243,239,1)_0%,_transparent_50%)]" />

      <div
        className={`${siteContainerWide} relative grid w-full min-w-0 gap-6 pt-4 pb-8 sm:pb-8 lg:grid-cols-[1fr_0.92fr] lg:items-start lg:gap-10 lg:pt-5 lg:pb-10`}
      >
        <div className="max-w-2xl lg:order-1 lg:pt-1">
          <AnimatedSection
            animateOnMount
            variant="scrollEnter"
            duration={heroTransition.headline.duration}
            delay={heroEntrance.eyebrow}
          >
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-mocha uppercase sm:text-sm sm:tracking-[0.28em] md:tracking-[0.32em]">
              {heroContent.eyebrow}
            </p>
          </AnimatedSection>

          <AnimatedSection
            animateOnMount
            variant="scrollEnter"
            duration={heroTransition.headline.duration}
            delay={heroEntrance.headline}
          >
            <h1 className="font-serif text-[2.125rem] leading-[1.06] tracking-tight text-balance text-chocolate sm:text-5xl sm:leading-[1.02] lg:text-7xl lg:leading-[1.04]">
              {heroContent.headline}
            </h1>
          </AnimatedSection>

          <AnimatedSection
            animateOnMount
            variant="scrollEnter"
            duration={heroTransition.supporting.duration}
            delay={heroEntrance.supporting}
          >
            <p className="mt-5 font-serif text-xl leading-snug text-aubergine sm:text-2xl lg:text-[1.75rem]">
              {heroContent.mantra[0]}
            </p>

            <p className="mt-5 max-w-xl text-base leading-[1.75] text-mocha sm:text-lg lg:text-xl lg:leading-[1.8]">
              {heroContent.description}
            </p>
          </AnimatedSection>

          <AnimatedSection
            animateOnMount
            variant="scrollEnter"
            duration={heroTransition.actions.duration}
            delay={heroEntrance.actions}
          >
            <div className={`mt-8 ${mobileCtaGroup}`}>
              <Button href="/partner-with-us" className={mobileCtaButton}>
                {heroContent.primaryCta}
              </Button>
              <Button href="/services" variant="secondary" className={mobileCtaButton}>
                {heroContent.secondaryCta}
              </Button>
            </div>
          </AnimatedSection>
        </div>

        <div className="relative min-w-0 lg:order-2 lg:flex lg:justify-end lg:pt-1">
          <div className="relative mx-auto w-full min-w-0 max-w-md overflow-hidden lg:max-w-[540px]">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-mocha/35 via-warm-nude/50 to-mocha/20 blur-sm sm:-inset-5 sm:rounded-[2.5rem] lg:-inset-8 lg:rounded-[3rem]"
            />

            <AnimatedSection
              animateOnMount
              variant="scrollEnter"
              duration={heroTransition.portrait.duration}
              delay={heroEntrance.portrait}
              className="relative aspect-[4/5] w-full max-h-[min(420px,calc(100svh-240px))] overflow-hidden rounded-[1.5rem] border border-warm-nude/40 shadow-[0_24px_64px_rgba(59,42,34,0.16)] sm:max-h-[min(480px,calc(100svh-220px))] sm:rounded-[2rem] lg:max-h-[min(520px,calc(100svh-220px))] lg:rounded-[2.5rem]"
            >
              <Image
                src={jenniferImages.headshot.src}
                alt={jenniferImages.headshot.alt}
                fill
                className="object-cover object-[center_12%]"
                sizes="(max-width: 1024px) 90vw, 540px"
                priority
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-tr from-chocolate/10 via-transparent to-soft-gold/8 mix-blend-multiply"
              />
            </AnimatedSection>

            <AnimatedSection
              animateOnMount
              variant="scrollEnter"
              duration={heroTransition.portraitCaption.duration}
              delay={heroEntrance.portraitCaption}
              className="mt-4 text-center lg:text-left"
            >
              <p className="font-serif text-xl text-chocolate lg:text-xl">
                {founderBio.name}
              </p>
              <p className="mt-1 text-base text-aubergine lg:text-lg">
                {founderBio.title}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <ScrollIndicator
        href="#manifesto"
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 sm:bottom-8 sm:block"
      />
    </section>
  );
}
