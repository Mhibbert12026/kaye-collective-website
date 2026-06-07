import { Badge } from "@/components/ui/Badge";
import { founderBio } from "@/lib/constants";

type CredentialListProps = {
  variant?: "list" | "badges";
};

export function CredentialList({ variant = "list" }: CredentialListProps) {
  if (variant === "badges") {
    return (
      <div className="flex flex-wrap gap-2">
        {founderBio.credentials.experience.map((company) => (
          <Badge key={company}>{company}</Badge>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2">
      <CredentialGroup
        label="Education"
        items={founderBio.credentials.education}
      />
      <CredentialGroup
        label="Certifications"
        items={founderBio.credentials.certifications}
      />
    </div>
  );
}

function CredentialGroup({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  return (
    <div>
      <h2 className="text-xs tracking-[0.2em] text-soft-gold uppercase">
        {label}
      </h2>
      <ul className="mt-3 space-y-2 text-sm text-mocha">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function ExperienceBadges() {
  return (
    <div>
      <h2 className="text-xs tracking-[0.2em] text-soft-gold uppercase">
        Experience
      </h2>
      <div className="mt-3">
        <CredentialList variant="badges" />
      </div>
    </div>
  );
}
