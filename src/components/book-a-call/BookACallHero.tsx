"use client";

import Image from "next/image";
import { bookACallContent, founderBio } from "@/lib/constants";
import { jenniferImages } from "@/lib/images";
import { heroEntrance, heroTransition } from "@/lib/motion";
import { siteContainerWide } from "@/lib/layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function BookACallHero() {
  const { headline, subheadline, callout, trustIndicators } =
    bookACallContent.hero;

  return (
    <section className="relative overflow-x-clip bg-cream pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_50%,_rgba(247,243,239,1)_0%,_transparent_50%)]" />

      <div
        className={`${siteContainerWide} relative grid w-full min-w-0 gap-8 lg:grid-cols-[1fr_0.88fr] lg:items-center lg:gap-12`}
      >
        <div className="max-w-2xl">
          <AnimatedSection
            animateOnMount
            variant="scrollEnter"
            duration={heroTransition.headline.duration}
            delay={heroEntrance.eyebrow}
          >
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-mocha uppercase sm:text-sm sm:tracking-[0.28em]">
              {bookACallContent.label}
            </p>
          </AnimatedSection>

          <AnimatedSection
            animateOnMount
            variant="scrollEnter"
            duration={heroTransition.headline.duration}
            delay={heroEntrance.headline}
          >
            <h1 className="font-serif text-[2.125rem] leading-[1.08] tracking-tight text-balance text-chocolate sm:text-5xl sm:leading-[1.04] lg:text-6xl lg:leading-[1.06]">
              {headline}
            </h1>
          </AnimatedSection>

          <AnimatedSection
            animateOnMount
            variant="scrollEnter"
            duration={heroTransition.supporting.duration}
            delay={heroEntrance.supporting}
          >
            <p className="mt-5 max-w-xl text-base leading-[1.75] text-mocha sm:text-lg lg:text-xl lg:leading-[1.8]">
              {subheadline}
            </p>

            <div className="mt-6 inline-flex max-w-xl rounded-2xl border border-soft-gold/40 bg-gradient-to-r from-soft-gold/12 via-cream to-soft-gold/8 px-5 py-4 shadow-[0_2px_12px_rgba(59,42,34,0.04)] sm:mt-7 sm:px-6">
              <p className="text-sm font-medium leading-[1.55] tracking-wide text-aubergine sm:text-[0.9375rem]">
                {callout}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection
            animateOnMount
            variant="scrollEnter"
            duration={heroTransition.actions.duration}
            delay={heroEntrance.actions}
          >
            <ul className="mt-8 space-y-3 sm:mt-10">
              {trustIndicators.map((indicator) => (
                <li
                  key={indicator}
                  className="flex items-center gap-3 text-base text-mocha sm:text-lg"
                >
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-soft-gold"
                  />
                  {indicator}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>

        <div className="relative min-w-0 lg:flex lg:justify-end">
          <AnimatedSection
            animateOnMount
            variant="scrollEnter"
            duration={heroTransition.portrait.duration}
            delay={heroEntrance.portrait}
            className="relative mx-auto w-full max-w-md lg:max-w-[480px]"
          >
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-mocha/30 via-warm-nude/45 to-mocha/15 blur-sm sm:-inset-4 lg:-inset-6 lg:rounded-[2.5rem]"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-warm-nude/40 shadow-[0_24px_64px_rgba(59,42,34,0.14)] sm:rounded-[2rem] lg:rounded-[2.25rem]">
              <Image
                src={jenniferImages.headshot.src}
                alt={jenniferImages.headshot.alt}
                fill
                className="object-cover object-[center_12%]"
                sizes="(max-width: 1024px) 90vw, 480px"
                priority
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-tr from-chocolate/10 via-transparent to-soft-gold/8 mix-blend-multiply"
              />
            </div>
            <p className="mt-4 text-center font-serif text-xl text-chocolate lg:text-left">
              {founderBio.name}
            </p>
            <p className="mt-1 text-center text-base text-aubergine lg:text-left">
              {founderBio.title}
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
