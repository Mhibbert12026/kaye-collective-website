"use client";

import { useState } from "react";
import { contactFormServices } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { FormSelect } from "@/components/ui/FormSelect";
import { FormSuccess } from "@/components/ui/FormSuccess";
import { FormTextarea } from "@/components/ui/FormTextarea";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  className?: string;
  onDark?: boolean;
};

export function ContactForm({ className, onDark }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <FormSuccess onDark={onDark} className={className} />;
  }

  return (
    <form
      className={cn("space-y-5", className)}
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full Name" name="name" required onDark={onDark} />
        <FormField
          label="Email"
          name="email"
          type="email"
          required
          onDark={onDark}
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Organization" name="organization" onDark={onDark} />
        <FormField label="Role / Title" name="role" onDark={onDark} />
      </div>
      <FormSelect
        label="Service of Interest"
        name="interest"
        options={contactFormServices}
        required
        onDark={onDark}
        placeholder="Select a service"
      />
      <FormTextarea
        label="Message"
        name="message"
        required
        onDark={onDark}
      />
      <Button type="submit" variant={onDark ? "gold" : "primary"}>
        Send Message
      </Button>
    </form>
  );
}
