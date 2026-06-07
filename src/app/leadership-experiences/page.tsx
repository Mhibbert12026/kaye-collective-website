import type { Metadata } from "next";
import { leadershipExperiencesContent } from "@/lib/constants";
import { SectionIntro } from "@/components/content/SectionIntro";
import { BrandWatermark } from "@/components/ui/BrandWatermark";
import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ApproachPillarsGrid } from "@/components/workshop/ApproachPillarsGrid";
import { DiscussionTopicsGrid } from "@/components/workshop/DiscussionTopicsGrid";
import { LeadershipExperiencesIntro } from "@/components/workshop/LeadershipExperiencesIntro";
import { SampleDeliverablePreview } from "@/components/workshop/SampleDeliverablePreview";
import { WorkshopAgendaTimeline } from "@/components/workshop/WorkshopAgendaTimeline";
import { WorkshopClosingCta } from "@/components/workshop/WorkshopClosingCta";
import { WorkshopFeaturedBanner } from "@/components/workshop/WorkshopFeaturedBanner";
import { WorkshopOutcomesGrid } from "@/components/workshop/WorkshopOutcomesGrid";
import { WorkshopOverviewPanel } from "@/components/workshop/WorkshopOverviewPanel";
import { sectionContentGap } from "@/lib/layout";
import { stagger } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Leadership Experiences",
  description:
    "Jennifer Huggins designs transformational leadership experiences — strategic facilitation, workshop design, and sessions that drive lasting organizational impact.",
};

export default function LeadershipExperiencesPage() {
  const {
    label,
    title,
    subheadline,
    introduction,
    approach,
    sampleExperience,
    featured,
    deliverable,
    clientOutcomes,
    closing,
  } = leadershipExperiencesContent;

  return (
    <div className="relative bg-cream">
      <BrandWatermark />

      <div className="relative z-10">
        <PageHero
          label={label}
          title={title}
          description={subheadline}
          variant="cream"
        />

        <LeadershipExperiencesIntro statement={introduction} />

        <SectionWrapper id="approach" variant="warm-nude">
          <SectionIntro
            label={approach.label}
            title={approach.title}
            description={approach.description}
            brandMark
          />
          <ApproachPillarsGrid
            className={sectionContentGap}
            pillars={approach.pillars}
          />
        </SectionWrapper>

        <SectionWrapper id="sample-experience" variant="white">
          <SectionIntro
            label={sampleExperience.label}
            title={sampleExperience.title}
            description={sampleExperience.description}
            delay={stagger.child}
            brandMark
          />
        </SectionWrapper>

        <WorkshopFeaturedBanner
          label={featured.label}
          title={featured.title}
          theme={featured.theme}
        />

        <SectionWrapper id="overview" variant="cream">
          <SectionIntro
            label={featured.overview.label}
            title={featured.overview.title}
            delay={stagger.child * 2}
            brandMark
          />
          <WorkshopOverviewPanel
            className={sectionContentGap}
            audience={featured.overview.audience}
            format={featured.overview.format}
            focusAreas={featured.overview.focusAreas}
          />
        </SectionWrapper>

        <SectionWrapper id="agenda" variant="white">
          <SectionIntro
            label={featured.agenda.label}
            title={featured.agenda.title}
            delay={stagger.child * 3}
            brandMark
          />
          <WorkshopAgendaTimeline
            className={sectionContentGap}
            items={featured.agenda.items}
          />
        </SectionWrapper>

        <SectionWrapper id="discussion-topics" variant="cream">
          <SectionIntro
            label={featured.discussionTopics.label}
            title={featured.discussionTopics.title}
            delay={stagger.child * 4}
            brandMark
          />
          <DiscussionTopicsGrid
            className={sectionContentGap}
            topics={featured.discussionTopics.topics}
          />
        </SectionWrapper>

        <SectionWrapper id="deliverable" variant="white">
          <SectionIntro
            label={deliverable.label}
            title={deliverable.title}
            description={deliverable.description}
            delay={stagger.child * 5}
            brandMark
          />
          <SampleDeliverablePreview
            className={sectionContentGap}
            pages={deliverable.pages}
            confidentiality={deliverable.confidentiality}
          />
        </SectionWrapper>

        <SectionWrapper id="outcomes" variant="cream">
          <SectionIntro
            label={clientOutcomes.label}
            title={clientOutcomes.title}
            delay={stagger.child * 6}
            brandMark
          />
          <WorkshopOutcomesGrid
            className={sectionContentGap}
            outcomes={clientOutcomes.outcomes}
          />
        </SectionWrapper>

        <WorkshopClosingCta
          headline={closing.headline}
          subheadline={closing.subheadline}
          primaryCta={closing.primaryCta}
          secondaryCta={closing.secondaryCta}
        />
      </div>
    </div>
  );
}
