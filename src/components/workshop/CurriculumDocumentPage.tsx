import type { WorkshopDeliverablePage } from "@/lib/constants";
import { BrandMonogram } from "@/components/ui/BrandMonogram";
import { DocumentPageWatermark } from "@/components/workshop/DocumentPageWatermark";
import { cn } from "@/lib/utils";

type CurriculumDocumentPageProps = {
  page: WorkshopDeliverablePage;
  confidentiality: string;
  className?: string;
};

function DocumentHeader({ label }: { label: string }) {
  return (
    <p className="text-[0.625rem] font-medium tracking-[0.22em] text-mocha/80 uppercase sm:text-[0.6875rem]">
      {label}
    </p>
  );
}

function DocumentFooter({
  pageNumber,
  confidentiality,
}: {
  pageNumber: number;
  confidentiality: string;
}) {
  return (
    <footer className="mt-auto flex items-end justify-between border-t border-warm-nude/50 pt-3">
      <p className="text-[0.625rem] tracking-[0.12em] text-mocha/70 uppercase">
        {confidentiality}
      </p>
      <p className="font-serif text-sm text-aubergine/80">{pageNumber}</p>
    </footer>
  );
}

function CoverPage({
  page,
  confidentiality,
}: {
  page: Extract<WorkshopDeliverablePage, { variant: "cover" }>;
  confidentiality: string;
}) {
  return (
    <>
      <div className="relative z-10 flex flex-1 flex-col justify-center text-center">
        <BrandMonogram size="lg" opacity={15} className="mx-auto mb-6" />
        <DocumentHeader label="The Kaye Collective" />
        <h3 className="mt-8 font-serif text-[1.625rem] leading-[1.12] tracking-tight text-chocolate sm:text-3xl">
          {page.title}
        </h3>
        <p className="mx-auto mt-4 max-w-[16rem] text-sm leading-[1.7] text-mocha sm:text-base">
          {page.subtitle}
        </p>
        <div className="mx-auto mt-8 h-px w-16 bg-soft-gold/60" />
        <dl className="mx-auto mt-8 space-y-3 text-sm text-mocha sm:text-[0.9375rem]">
          <div>
            <dt className="text-[0.625rem] tracking-[0.18em] text-mocha/70 uppercase">
              Prepared For
            </dt>
            <dd className="mt-1 font-medium text-chocolate">{page.preparedFor}</dd>
          </div>
          <div>
            <dt className="text-[0.625rem] tracking-[0.18em] text-mocha/70 uppercase">
              Session Format
            </dt>
            <dd className="mt-1 font-medium text-chocolate">{page.sessionFormat}</dd>
          </div>
        </dl>
      </div>
      <DocumentFooter pageNumber={page.pageNumber} confidentiality={confidentiality} />
    </>
  );
}

function OverviewPage({
  page,
  confidentiality,
}: {
  page: Extract<WorkshopDeliverablePage, { variant: "overview" }>;
  confidentiality: string;
}) {
  return (
    <>
      <div className="relative z-10 flex flex-1 flex-col">
        <DocumentHeader label={page.sectionTitle} />
        <p className="mt-4 text-[0.8125rem] leading-[1.75] text-mocha sm:text-sm">
          {page.introduction}
        </p>
        <div className="mt-6">
          <p className="text-[0.625rem] font-medium tracking-[0.18em] text-aubergine uppercase">
            Session Objectives
          </p>
          <ul className="mt-3 space-y-2">
            {page.objectives.map((objective) => (
              <li
                key={objective}
                className="flex items-start gap-2 text-[0.8125rem] leading-[1.65] text-mocha sm:text-sm"
              >
                <span
                  aria-hidden
                  className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-soft-gold"
                />
                {objective}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <p className="text-[0.625rem] font-medium tracking-[0.18em] text-aubergine uppercase">
            Focus Areas
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {page.focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-warm-nude/70 bg-cream/60 px-2.5 py-1 text-[0.6875rem] text-mocha"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
      <DocumentFooter pageNumber={page.pageNumber} confidentiality={confidentiality} />
    </>
  );
}

function AgendaPage({
  page,
  confidentiality,
}: {
  page: Extract<WorkshopDeliverablePage, { variant: "agenda" }>;
  confidentiality: string;
}) {
  return (
    <>
      <div className="relative z-10 flex flex-1 flex-col">
        <DocumentHeader label={page.sectionTitle} />
        <p className="mt-4 text-[0.8125rem] leading-[1.75] text-mocha sm:text-sm">
          {page.introduction}
        </p>
        <div className="mt-6 space-y-0">
          {page.items.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "grid grid-cols-[3.25rem_1fr] gap-3 border-b border-warm-nude/45 py-2.5 last:border-b-0",
                index === 0 && "border-t border-warm-nude/45",
              )}
            >
              <time className="font-serif text-[0.8125rem] tabular-nums text-aubergine sm:text-sm">
                {item.time}
              </time>
              <p className="text-[0.8125rem] leading-[1.5] text-chocolate sm:text-sm">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <DocumentFooter pageNumber={page.pageNumber} confidentiality={confidentiality} />
    </>
  );
}

function DiscussionPage({
  page,
  confidentiality,
}: {
  page: Extract<WorkshopDeliverablePage, { variant: "discussion" }>;
  confidentiality: string;
}) {
  return (
    <>
      <div className="relative z-10 flex flex-1 flex-col">
        <DocumentHeader label={page.sectionTitle} />
        <p className="mt-4 text-[0.8125rem] leading-[1.75] text-mocha sm:text-sm">
          {page.introduction}
        </p>
        <div className="mt-5 space-y-4">
          {page.topics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-lg border border-warm-nude/50 bg-cream/35 px-3 py-3"
            >
              <p className="font-serif text-[0.9375rem] text-chocolate sm:text-base">
                {topic.title}
              </p>
              <p className="mt-1.5 text-[0.75rem] leading-[1.65] text-mocha/90 italic sm:text-[0.8125rem]">
                {topic.prompt}
              </p>
            </div>
          ))}
        </div>
      </div>
      <DocumentFooter pageNumber={page.pageNumber} confidentiality={confidentiality} />
    </>
  );
}

function ActionPage({
  page,
  confidentiality,
}: {
  page: Extract<WorkshopDeliverablePage, { variant: "action" }>;
  confidentiality: string;
}) {
  return (
    <>
      <div className="relative z-10 flex flex-1 flex-col">
        <DocumentHeader label={page.sectionTitle} />
        <p className="mt-4 text-[0.8125rem] leading-[1.75] text-mocha sm:text-sm">
          {page.introduction}
        </p>
        <div className="mt-5">
          <p className="text-[0.625rem] font-medium tracking-[0.18em] text-aubergine uppercase">
            Reflection Framework
          </p>
          <ul className="mt-3 space-y-2">
            {page.framework.map((item) => (
              <li
                key={item}
                className="rounded-md border border-dashed border-warm-nude/60 px-3 py-2 text-[0.75rem] leading-[1.6] text-mocha sm:text-[0.8125rem]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5">
          <p className="text-[0.625rem] font-medium tracking-[0.18em] text-aubergine uppercase">
            Commitment Areas
          </p>
          <ul className="mt-3 space-y-2">
            {page.commitments.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-[0.8125rem] text-mocha sm:text-sm"
              >
                <span
                  aria-hidden
                  className="h-3 w-3 shrink-0 rounded-sm border border-warm-nude/80 bg-white"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <DocumentFooter pageNumber={page.pageNumber} confidentiality={confidentiality} />
    </>
  );
}

export function CurriculumDocumentPage({
  page,
  confidentiality,
  className,
}: CurriculumDocumentPageProps) {
  return (
    <article
      className={cn(
        "relative flex aspect-[8.5/11] w-full flex-col overflow-hidden rounded-[3px] border border-warm-nude/60",
        "bg-[linear-gradient(180deg,#ffffff_0%,#fbf8f4_100%)]",
        "p-6 shadow-[0_24px_60px_rgba(59,42,34,0.14),0_4px_16px_rgba(59,42,34,0.06)] sm:p-7 lg:p-8",
        className,
      )}
    >
      <DocumentPageWatermark />

      {page.variant === "cover" && (
        <CoverPage page={page} confidentiality={confidentiality} />
      )}
      {page.variant === "overview" && (
        <OverviewPage page={page} confidentiality={confidentiality} />
      )}
      {page.variant === "agenda" && (
        <AgendaPage page={page} confidentiality={confidentiality} />
      )}
      {page.variant === "discussion" && (
        <DiscussionPage page={page} confidentiality={confidentiality} />
      )}
      {page.variant === "action" && (
        <ActionPage page={page} confidentiality={confidentiality} />
      )}
    </article>
  );
}
