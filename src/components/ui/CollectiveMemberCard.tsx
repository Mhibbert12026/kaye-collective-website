import Image from "next/image";
import { TextLink } from "@/components/ui/TextLink";
import { cn } from "@/lib/utils";
import type { CollectiveMember } from "@/types";

type CollectiveMemberCardProps = {
  member: CollectiveMember;
  href?: string;
  className?: string;
};

export function CollectiveMemberCard({
  member,
  href,
  className,
}: CollectiveMemberCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-warm-nude bg-white p-6",
        className,
      )}
    >
      {member.image && (
        <div className="relative mb-4 aspect-square overflow-hidden rounded-2xl">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
            sizes="300px"
          />
        </div>
      )}
      <h3 className="font-serif text-lg text-chocolate">{member.name}</h3>
      <p className="mt-1 text-sm text-aubergine">{member.title}</p>
      <p className="mt-1 text-xs tracking-wide text-mocha uppercase">
        {member.focus}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-mocha">{member.bio}</p>
      {href && (
        <TextLink href={href} className="mt-4">
          Learn more →
        </TextLink>
      )}
    </div>
  );
}
