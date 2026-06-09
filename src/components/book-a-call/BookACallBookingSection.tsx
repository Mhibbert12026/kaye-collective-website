"use client";

import { bookACallContent } from "@/lib/constants";
import { SectionIntro } from "@/components/content/SectionIntro";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CalendlyEmbed } from "@/components/ui/CalendlyEmbed";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { sectionContentGap } from "@/lib/layout";
import { stagger } from "@/lib/motion";

export function BookACallBookingSection() {
  const { booking } = bookACallContent;

  return (
    <SectionWrapper id="booking" variant="white">
      <SectionIntro
        label={booking.label}
        title={booking.title}
        description={booking.description}
        centered
      />
      <AnimatedSection
        delay={stagger.child}
        duration="slow"
        className={sectionContentGap}
      >
        <div className="relative mx-auto max-w-4xl">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-4 -inset-y-6 rounded-3xl bg-[radial-gradient(ellipse_at_50%_0%,_rgba(184,155,114,0.1)_0%,_transparent_65%)] sm:-inset-x-8"
          />

          <div className="relative overflow-hidden rounded-2xl border border-warm-nude/80 bg-gradient-to-b from-white via-cream/50 to-warm-nude/15 shadow-[0_12px_40px_rgba(59,42,34,0.08)]">
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-soft-gold via-soft-gold/70 to-transparent"
            />

            <div className="border-b border-warm-nude/50 bg-cream/40 px-6 py-5 text-center sm:px-8 sm:py-6">
              <p className="text-sm font-medium tracking-[0.24em] text-soft-gold uppercase">
                Complimentary Discovery Conversation
              </p>
              <p className="mt-2 font-serif text-xl text-chocolate sm:text-2xl">
                One-on-one with Jennifer Huggins
              </p>
            </div>

            <div className="bg-white/80 p-3 sm:p-5 lg:p-6">
              <CalendlyEmbed className="min-h-[620px] sm:min-h-[700px]" />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
