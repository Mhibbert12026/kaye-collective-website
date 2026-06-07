import { founderBio, siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { SectionHeading, SectionLabel } from "@/components/ui/SectionWrapper";

type FounderBioContentProps = {
  paragraphs?: string[];
  showFullBio?: boolean;
  showCredentials?: boolean;
  showCta?: boolean;
};

export function FounderBioContent({
  paragraphs,
  showFullBio = true,
  showCredentials = false,
  showCta = true,
}: FounderBioContentProps) {
  const bioParagraphs = paragraphs ?? founderBio.paragraphs;
  const displayParagraphs = showFullBio
    ? bioParagraphs
    : bioParagraphs.slice(0, 2);

  return (
    <>
      <SectionLabel>Meet the Founder</SectionLabel>
      <SectionHeading as="h2">{founderBio.name}</SectionHeading>
      <p className="mt-2 text-lg text-aubergine">{founderBio.title}</p>
      <p className="mt-2 font-medium text-mocha">{founderBio.tagline}</p>

      <div className="mt-6 space-y-4 leading-relaxed text-mocha">
        {displayParagraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>

      {showCredentials && (
        <p className="mt-8 text-sm text-mocha">
          Based in {siteConfig.location}
        </p>
      )}

      {showCta && (
        <Button href="/partner-with-us" className="mt-8">
          Work With Jennifer
        </Button>
      )}
    </>
  );
}
