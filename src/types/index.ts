export type ServiceItem = {
  title: string;
  description: string;
};

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  challenge: string;
  approach: string;
  results: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  organization: string;
};

export type PartnerAudience = {
  title: string;
  description: string;
  cta: string;
};

export type WhoWeServeAudience = {
  title: string;
  description: string;
  capabilities: string[];
  cta: string;
  href: string;
};

export type DiscoveryStep = {
  step: string;
  title: string;
  description: string;
};

export type CollectiveMember = {
  name: string;
  title: string;
  focus: string;
  bio: string;
  image?: string;
};

export type SpeakingTopicGroup = {
  cluster: string;
  topics: string[];
};

export type SectionVariant =
  | "cream"
  | "white"
  | "warm-nude"
  | "chocolate"
  | "aubergine";
