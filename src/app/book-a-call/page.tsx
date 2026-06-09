import type { Metadata } from "next";
import { bookACallContent } from "@/lib/constants";
import { BookACallBookingSection } from "@/components/book-a-call/BookACallBookingSection";
import { BookACallClosingCta } from "@/components/book-a-call/BookACallClosingCta";
import { BookACallHero } from "@/components/book-a-call/BookACallHero";
import { SectionIntro } from "@/components/content/SectionIntro";
import { AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedStagger";
import { BrandWatermark } from "@/components/ui/BrandWatermark";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ValuePillarCard } from "@/components/ui/ValuePillarCard";
import { sectionContentGap } from "@/lib/layout";
import { stagger } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Book a Discovery Conversation",
  description:
    "Schedule a complimentary leadership discovery conversation with Jennifer Huggins — executive coaching and advisory for leaders navigating change, growth, and transformation.",
};

export default function BookACallPage() {
  const { whatToExpect } = bookACallContent;

  return (
    <div className="relative bg-cream">
      <BrandWatermark />

      <div className="relative z-10">
        <BookACallHero />

        <SectionDivider
          variant="editorial"
          fade="cream-white"
          marker="Book"
        />

        <BookACallBookingSection />

        <SectionDivider variant="monogram" fade="white-warm-ivory" />

        <SectionWrapper variant="warm-ivory">
          <SectionIntro
            label={whatToExpect.label}
            title={whatToExpect.title}
            centered
            delay={stagger.child}
          />
          <AnimatedStagger
            className={`${sectionContentGap} mx-auto grid max-w-5xl gap-8 lg:grid-cols-3 lg:gap-10`}
          >
            {whatToExpect.items.map((item) => (
              <AnimatedItem key={item.title} className="h-full">
                <ValuePillarCard
                  title={item.title}
                  description={item.description}
                />
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </SectionWrapper>

        <SectionDivider
          variant="diamond"
          fade="warm-ivory-chocolate"
          tone="dark"
        />

        <BookACallClosingCta />
      </div>
    </div>
  );
}
