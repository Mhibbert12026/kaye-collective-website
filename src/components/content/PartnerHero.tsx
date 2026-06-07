import { partnerContent } from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";

type PartnerHeroProps = {
  title?: string;
  description?: string;
};

export function PartnerHero({
  title = partnerContent.title,
  description = partnerContent.description,
}: PartnerHeroProps) {
  return (
    <PageHero
      label={partnerContent.label}
      title={title}
      description={description}
      variant="chocolate"
    />
  );
}
