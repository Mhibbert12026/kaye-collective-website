import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { calendlyUrl, cn } from "@/lib/utils";

type SchedulingCardProps = {
  className?: string;
};

export function SchedulingCard({ className }: SchedulingCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-warm-nude/80 bg-gradient-to-br from-white via-cream to-warm-nude/25 p-10 shadow-[0_8px_32px_rgba(59,42,34,0.07)] lg:p-12",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-soft-gold via-soft-gold/70 to-transparent"
      />
      <div
        aria-hidden
        className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-aubergine/5 blur-2xl"
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium tracking-[0.24em] text-soft-gold uppercase">
              Discovery Call
            </p>
            <h3 className="mt-3 font-serif text-3xl leading-tight text-chocolate lg:text-4xl">
              Leadership Consultation
            </h3>
          </div>
          <span
            aria-hidden
            className="hidden shrink-0 rounded-full border border-aubergine/15 bg-aubergine/5 p-3 sm:flex"
          >
            <Calendar className="h-5 w-5 text-aubergine" strokeWidth={1.5} />
          </span>
        </div>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-warm-nude bg-white/90 px-4 py-2.5 text-sm font-medium text-mocha">
          <Clock className="h-4 w-4 text-aubergine" strokeWidth={1.75} />
          30 Minutes
        </div>

        <p className="mt-6 max-w-md text-base leading-[1.75] text-mocha lg:text-lg lg:leading-[1.8]">
          A private conversation to explore your leadership goals, discuss what
          you&apos;re navigating, and determine how The Kaye Collective can
          support your next chapter.
        </p>

        <ul className="mt-6 space-y-2.5 text-sm text-mocha lg:text-base">
          <li className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-soft-gold" />
            One-on-one with Jennifer Huggins
          </li>
          <li className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-soft-gold" />
            Confidential, no-pressure conversation
          </li>
          <li className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-soft-gold" />
            Virtual or in-person options
          </li>
        </ul>

        <Button
          href={calendlyUrl}
          external
          variant="primary"
          className="mt-10 h-14 w-full px-10 text-base font-semibold tracking-[0.03em] sm:w-auto"
        >
          Schedule Your Call
        </Button>
      </div>
    </div>
  );
}
