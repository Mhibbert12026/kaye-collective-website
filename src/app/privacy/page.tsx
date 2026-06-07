import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  SectionHeading,
  SectionWrapper,
} from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <SectionWrapper variant="cream" className="pt-22">
      <AnimatedSection duration="slow">
        <SectionHeading as="h1">Privacy Policy</SectionHeading>
        <div className="prose prose-stone mt-8 max-w-3xl space-y-6 text-mocha">
          <p>Last updated: {new Date().getFullYear()}</p>
          <p>
            The Kaye Collective is committed to safeguarding your privacy. This
            policy outlines how we collect, use, and protect information when you
            interact with our website or services.
          </p>
          <h2 className="font-serif text-xl text-chocolate">
            Information we collect
          </h2>
          <p>
            We may collect contact information (name, email, organization, role)
            and any details you provide through our contact form or scheduling
            tools.
          </p>
          <h2 className="font-serif text-xl text-chocolate">How we use it</h2>
          <p>
            Information is used to respond to inquiries, deliver services, and
            improve your experience. We do not sell or rent personal information
            to third parties.
          </p>
          <h2 className="font-serif text-xl text-chocolate">Contact</h2>
          <p>
            For privacy-related questions, please reach out through our contact
            form.
          </p>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
