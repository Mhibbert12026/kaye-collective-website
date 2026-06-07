import type { WhoWeServeAudience } from "@/types";

export const siteConfig = {
  name: "The Kaye Collective",
  tagline: "Engaging Talent. Building Trust. Inspiring Change.",
  mission: "No One Transforms Alone",
  mantra: ["Live Inspired.", "Lead Inspired.", "Transform Inspired."],
  secondaryMantra: "Aspire to Inspire",
  location: "Richmond, VA",
};

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "Founder", href: "/founder" },
  { label: "Speaking", href: "/#speaking" },
];

export const heroContent = {
  eyebrow: siteConfig.tagline,
  headline: siteConfig.mission,
  mantra: [
    "The leaders who grow are the ones who dare to be transformed.",
  ],
  description:
    "Executive coaching and advisory for leaders navigating change, responsibility, and legacy-defining moments.",
  primaryCta: "Partner With Us",
  secondaryCta: "Explore Our Work",
};

export const manifestoContent = {
  label: "Our Mission",
  title: "No One Transforms Alone.",
  lead: "At The Kaye Collective, you are seen. You are heard. You are valued.",
  paragraphs: [
    "We build with intention — clear, kind, and anchored in accountability. Transformation takes mental toughness and emotional tenderness. No one transforms alone.",
  ],
  quote:
    "Leadership is not a title the world gives you. It is an offering you give to the world.",
};

export const editorialStatement = {
  eyebrow: "Aspire to Inspire",
  quote: [
    "Leadership is not a title the world gives you.",
    "It is an offering you give to the world.",
  ],
  supporting: "",
};

export const leadershipConnectionContent = {
  eyebrow: "No One Transforms Alone",
  headline: "Leadership grows through connection.",
  body: "Meaningful transformation happens when people feel seen, heard, challenged, and supported. Jennifer partners with leaders, teams, and organizations to navigate pivotal moments with clarity, courage, and intention.",
  cta: {
    label: "Explore Jennifer's Approach",
    href: "/about",
  },
};

export type LeadershipImpactStat = {
  primary: string;
  secondary: string;
};

export const leadershipImpactContent = {
  headline: "Leadership Impact",
  stats: [
    {
      primary: "20+",
      secondary: "Years of Leadership Experience",
    },
    {
      primary: "500+",
      secondary: "Leaders Coached and Developed",
    },
    {
      primary: "Fortune 500",
      secondary: "Organizations Supported",
    },
    {
      primary: "National",
      secondary: "Speaker and Facilitator",
    },
  ] satisfies LeadershipImpactStat[],
};

export type ImpactCardContent =
  | {
      type: "metric";
      primary: string;
      secondary: string;
    }
  | {
      type: "list";
      items: string[];
    };

export const resultsImpactContent = {
  label: "Results & Impact",
  headline: "Helping leaders and organizations create meaningful change.",
  subheadline:
    "From executive coaching and leadership development to facilitation and keynote speaking, Jennifer has spent decades helping people navigate growth, transformation, and impact.",
  cards: [
    {
      type: "list",
      items: [
        "Executive Coaching",
        "Leadership Development",
        "Facilitation",
      ],
    },
    {
      type: "list",
      items: ["Organizations", "Teams", "Leaders Served"],
    },
  ] satisfies ImpactCardContent[],
  clientsGain: {
    label: "What Clients Gain",
    items: [
      "Greater leadership confidence",
      "Stronger team alignment",
      "Clearer communication",
      "Sustainable transformation",
      "Increased organizational effectiveness",
    ],
  },
};

export const clientSuccessHighlightsContent = {
  headline: "Client Success Highlights",
  cards: [
    {
      title: "Leadership Development",
      description:
        "Helping emerging and established leaders build confidence, executive presence, and influence.",
    },
    {
      title: "Executive Coaching",
      description:
        "Supporting professionals through pivotal career transitions, leadership challenges, and growth opportunities.",
    },
    {
      title: "Organizational Transformation",
      description:
        "Facilitating alignment, communication, and culture-building initiatives that strengthen teams and improve outcomes.",
    },
  ],
};

export const valuePillars = [
  {
    title: "Tough & Tender",
    description:
      "Hard things done with mental toughness and emotional tenderness — stretching and supporting in equal measure.",
  },
  {
    title: "Clear is Kind",
    description:
      "Candor and care that does not diminish — because clarity unleashes growth.",
  },
  {
    title: "Benched. Not Broken.",
    description:
      "Even on the bench, you can still lead — with the techniques to transform and thrive.",
  },
];

export const servicesContent = {
  label: "The Work",
  title: "Shoulder to shoulder through pivotal moments.",
  closing: "Awareness. Trust. Action. Impact.",
};

export const leadershipDevelopmentContent = {
  label: "Facilitator",
  title: "Building cultures where teams thrive.",
  description:
    "Leadership circles, team retreats, and organizational transformation — brave spaces where people align and perform.",
};

export const executiveCoachingContent = {
  label: "Coach",
  title: "Partnership at pivotal moments.",
  description:
    "One-on-one coaching for clarity, confidence, and impact — Tough and Tender, always.",
};

export const organizationServices = [
  {
    title: "Leadership Development",
    description:
      "Facilitate executive teams toward greater clarity and sustained transformation via leadership development experiences, team effectiveness retreats, and culture journeys.",
  },
  {
    title: "Team Development",
    description:
      "Create brave spaces where people feel comfortable to share, think, and process their thoughts and emotions — deepening trust and aligning around what matters most.",
  },
  {
    title: "Organizational Transformation",
    description:
      "Combine executive coaching and strategic advisory to help clients lead in high-stakes, high-complexity environments — aligning workforce, leadership, and culture.",
  },
  {
    title: "Talent Programming",
    description:
      "Design, develop, and deliver custom talent programs that prepare high-potential professionals to compete, accelerate, and advance via leadership capabilities and value creation.",
  },
  {
    title: "Fractional HR Leadership",
    description:
      "Embedded advisory for organizations investing in people strategy, evolving business strategy, and transforming organizations with intention.",
  },
  {
    title: "Speaking & Facilitation",
    description:
      "Keynotes, panels, and moderated experiences that spark insight, engage audiences, and mobilize action — sessions that feel like conversation with an old friend.",
  },
];

export const individualServices = [
  {
    title: "Executive Coaching",
    description:
      "Advise and coach senior leaders to accelerate their impact and performance — expanding self-awareness, aligning with purpose, and building thriving cultures.",
  },
  {
    title: "Mid-Career Acceleration",
    description:
      "Support professionals ready to compete, advance, and lead with clarity, personal branding, and value creation — Jennifer's sweet spot is career navigation and advancement.",
  },
  {
    title: "Early Career Activation",
    description:
      "Prepare students and young professionals with winning behaviors, career navigation skills, and leadership foundations that support long-term growth.",
  },
  {
    title: "Life & Leadership Coaching",
    description:
      "Holistic partnership for leaders navigating career and life — anchored in accountability, sustainable success, and the courage to lead differently.",
  },
];

export const speakingContent = {
  label: "Speaking & Facilitation",
  title: "A gifted speaker and storyteller.",
  description:
    "Keynotes and facilitation that engage, empower, and feel like conversation with an old friend.",
  featuredTopics: ["Radical Candor", "Inclusive Leadership", "Personal Branding"],
};

export const speakingTopics = [
  {
    cluster: "Career & Performance",
    topics: [
      "Career Navigation & Winning Behaviors",
      "Mid-Career Acceleration",
      "Early Career Navigation — Understanding Winning Behavior",
      "Personal Branding",
      "Maximizing Performance",
      "Navigating Career and Life",
    ],
  },
  {
    cluster: "Leadership & Culture",
    topics: [
      "Inclusive Leadership",
      "Allyship",
      "Radical Candor",
      "Delivering Effective Feedback",
      "Inclusive Leadership Growth Lab",
      "Mentorship vs Sponsorship",
    ],
  },
  {
    cluster: "Communication & Facilitation",
    topics: [
      "Effective Communications",
      "Structured Communication",
      "Facilitation Skills — Facilitate with Fun",
      "ERG Roadmap Effectiveness",
    ],
  },
];

export const caseStudies = [
  {
    slug: "experian",
    client: "Experian",
    title: "Leadership Development for High-Potential Sales Professionals",
    challenge:
      "Experian recognized a gap in leadership representation and opportunities for high-potential Black and Brown male sales professionals. They wanted to design a development program focused on strengthening leadership capabilities and supporting long-term career growth within the company.",
    approach:
      "Jennifer led the team that designed a custom one-day, onsite workshop focused on leading practices and techniques to help participants build the skills and self-awareness needed to accelerate and advance their careers. The approach included focus groups and interviews, plus facilitated group and individual coaching to support continued learning post-workshop.",
    results: [
      "Secured and sustained senior leadership sponsorship and program participation",
      "100% participant satisfaction from program experience",
      'Earned an "Excellent" net promoter score rating',
    ],
  },
  {
    slug: "bcg",
    client: "Boston Consulting Group",
    title: "Career Navigation for First-Year Associates",
    challenge:
      "To address retention and advancement gaps among first-year Black and Latinx associates and consultants, BCG sought to develop a career navigation program aimed at strengthening performance and supporting long-term career growth within the firm.",
    approach:
      "Designed a custom 3-part virtual learning series targeting first-year undergraduate and MBA hires to support onboarding, career navigation, retention, and advancement. Conducted focus groups and interviews with senior leaders to understand first-year experiences and winning behaviors, leveraging a test-and-learn model to iterate and improve content.",
    results: [
      "Custom 3-part virtual learning series for undergraduate and MBA hires",
      "Focus groups with senior leaders to identify winning behaviors",
      "Test-and-learn model for continuous program improvement",
    ],
  },
  {
    slug: "compass-workshop",
    client: "Compass Workshop",
    title: "Multinational Leadership Development Program",
    challenge:
      "A multinational data broker and consumer credit reporting company recognized a gap in leadership representation and advancement opportunities. They needed a custom development program focused on strengthening leadership capabilities and supporting long-term career growth.",
    approach:
      "Designed a custom one-day, onsite workshop with focus groups and interviews to understand participant experiences and key behaviors linked to career advancement — followed by facilitated group and individual coaching for sustained development post-workshop.",
    results: [
      "Custom onsite workshop tailored to organizational context",
      "100% participant satisfaction from program experience",
      "Post-workshop coaching for sustained development",
    ],
  },
];

export const experienceContent = {
  label: "Client Experience",
  title: "Results that endure.",
  description:
    "Partnerships built on deeper connection — investing in people as the strong ground.",
};

export const whoWeServeContent = {
  label: "Who We Serve",
  title: "Designed for Leaders, Teams, and Organizations Ready to Grow.",
  description:
    "Coaching, advisory, and leadership development for those ready to create meaningful change.",
};

export type TrustedByLogo = {
  name: string;
  file: string;
  alt: string;
  /** Target max width in px — tuned per logo proportions for visual balance */
  displayWidth?: 120 | 140 | 160;
};

export const trustedByContent = {
  eyebrow: "Trusted by",
  headline:
    "Trusted by Leaders and Organizations Driving Meaningful Change",
  subheadline: "",
};

export const trustedByLogos: TrustedByLogo[] = [
  { name: "Deloitte", file: "deloitte.svg", alt: "Deloitte logo", displayWidth: 160 },
  { name: "Accenture", file: "accenture.svg", alt: "Accenture logo", displayWidth: 160 },
  { name: "KPMG", file: "kpmg.svg", alt: "KPMG logo", displayWidth: 120 },
  {
    name: "NBCUniversal",
    file: "nbcuniversal.svg",
    alt: "NBCUniversal logo",
    displayWidth: 160,
  },
  { name: "Humana", file: "humana.svg", alt: "Humana logo", displayWidth: 140 },
  { name: "Experian", file: "experian.svg", alt: "Experian logo", displayWidth: 140 },
  {
    name: "Boston Consulting Group",
    file: "bcg.svg",
    alt: "Boston Consulting Group logo",
    displayWidth: 160,
  },
  {
    name: "Management Leadership for Tomorrow",
    file: "mlt.svg",
    alt: "Management Leadership for Tomorrow logo",
    displayWidth: 160,
  },
];

export const clientLogos = trustedByLogos.map((logo) => logo.name);

export const whoWeServeAudiences = [
  {
    title: "Organizations",
    description:
      "Leadership development and organizational transformation that strengthens culture and accelerates performance.",
    capabilities: [
      "Leadership Development",
      "Team Effectiveness",
      "Organizational Transformation",
    ],
    cta: "Partner With Us",
    href: "/partner-with-us",
  },
  {
    title: "Leaders",
    description:
      "Executive coaching for professionals seeking clarity, confidence, and advancement.",
    capabilities: [
      "Executive Coaching",
      "Career Acceleration",
      "Leadership Growth",
    ],
    cta: "Work With Jennifer",
    href: "/founder",
  },
  {
    title: "Event Planners",
    description:
      "Keynotes, facilitation, and leadership experiences that inspire audiences and create lasting impact.",
    capabilities: [
      "Keynotes",
      "Facilitation",
      "Conference Experiences",
    ],
    cta: "Book a Speaking Engagement",
    href: "/#speaking",
  },
] satisfies WhoWeServeAudience[];

export const partnerContent = {
  label: "Partner With Us",
  title: "One conversation away.",
  description:
    "Coaching and advisory built on clarity, courage, and lasting change.",
};

export const closingCtaContent = {
  headline: "Ready to Lead Differently?",
  subheadline:
    "Whether you're navigating a career transition, developing your leadership team, or planning a transformational event, Jennifer is ready to partner with you.",
  cta: {
    label: "Schedule a Call",
  },
  secondaryLink: {
    label: "Learn More About Jennifer",
    href: "/founder",
  },
};

export const partnerAudiences = [
  {
    title: "Organizations",
    description:
      "For L&D leaders, talent strategists, and business leaders investing in leadership development, team effectiveness, and culture journeys that stick — for your people and your bottom line.",
    cta: "Start a Conversation",
  },
  {
    title: "Executives",
    description:
      "For senior leaders ready for a coaching partnership that meets you where you are, tunes in, and challenges you to grow — with clarity, courage, and a Tough and Tender approach.",
    cta: "Start a Conversation",
  },
  {
    title: "Event Planners",
    description:
      "For conference and event organizers seeking keynotes and facilitation that engage, empower, and mobilize — sessions that feel like conversation with an old friend.",
    cta: "Book Jennifer",
  },
];

export const founderContent = {
  homepageExcerpt:
    "Twenty years across consulting and corporate settings — coaching executives, building cultures, and guiding leaders through pivotal moments.",
  credentialsLine:
    "MBA, Darden · Certified Coach · Change Management & Design Thinking",
};

export const contactFormServices = [
  "Leadership Development",
  "Team Development",
  "Organizational Transformation",
  "Speaking",
  "Coaching",
];

export const founderBio = {
  name: "Jennifer K. Huggins",
  title: "Founder & Leadership Coach",
  tagline: "Human-centered leader who leads below the surface.",
  paragraphs: [
    "Jennifer K. Huggins is an empathetic leader who drives lasting change and impact. A client advocate and trusted advisor, she focuses on transformation and change. Her career spans 20 years, leading strategic and operational work in consulting and corporate settings. She has deep expertise in evolving business strategy and transforming organizations, specializing in accelerating transformation by aligning workforce, organizations, leadership, and culture.",
    "Jennifer is a talent strategist and leadership coach passionate about cultivating talent. She is a nurturer. She incubates talent. Her expectations are always high. She prepares, empowers, and mobilizes. She stretches and supports her clients. In addition to working with consulting teams and delivering client engagements, she has always focused on organizational development and performance throughout her career.",
    "She views coaching as a privileged position to guide others. She tunes in, actively listens, and guides you along your journey. She leverages the power of community and navigates candid conversation others avoid. Her sweet spot is helping clients with career navigation, acceleration, and advancement.",
    "A gifted speaker and storyteller, Jennifer masterfully weaves content and brings ideas to life. Her audience interaction creates learning environments that engage, empower, and mobilize. Her sessions feel like a conversation with an old friend. Jennifer is a high-energy professional with an innate ability to inspire, influence, and envision the future. She partners with clients at every step to empower them and elevate their thinking.",
  ],
  credentials: {
    education: [
      "BS, Florida A&M University",
      "MBA, University of Virginia, Darden School of Business",
    ],
    certifications: [
      "Change Management",
      "Coaching",
      "Design Thinking",
    ],
    experience: [
      "Deloitte",
      "Accenture",
      "KPMG",
      "Humana",
      "NBC Universal",
      "Management Leadership for Tomorrow",
    ],
  },
};

export const aboutContent = {
  story: [
    "At The Kaye Collective, you are seen. You are heard. You are valued. It is why we are here — to build meaningful connection that empowers you to transform, to learn, unlearn, heal, grow, and explore.",
    "We deliver in a clear and kind approach that does not diminish. We build with intention. We are anchored in accountability and sustainable success. We aim to be in connection and community with you to support your journey.",
    "We are deliberate about recovery and consistency. Transformation and transition take time. It takes mental toughness and at times emotional tenderness. At The Kaye Collective, we invest in coaching and teaching, so you have the techniques you need to transform, thrive, and create meaningful change.",
  ],
  nameMeaning:
    "Kaye, a name with Ancient Greek roots traced to the Titan goddess of magic, crossroads, and entrance-ways. Kaye means keeper of the keys, far-reaching one. In a world of turbulence, The Kaye Collective empowers leaders to achieve exceptional results by navigating challenges effectively. We tune in and help you unlock your greatness.",
  approach:
    "The Kaye Collective focuses on human-centric solutions that advance individuals, leaders, and teams. We provide space for you to grow and be seen and heard. We create space and experiences to act on growth plans and lead differently. We stand shoulder to shoulder and work through pivotal moments that often feel challenging, chaotic, or even messy.",
};

export const discoveryCallSteps = [
  {
    step: "01",
    title: "Connect",
    description:
      "Share where you are, what you're navigating, and what transformation looks like for you.",
  },
  {
    step: "02",
    title: "Explore",
    description:
      "We'll discuss how The Kaye Collective can partner with you — coaching, programs, or facilitation.",
  },
  {
    step: "03",
    title: "Align",
    description:
      "If we're a fit, we'll outline next steps with clarity and intention. Clear is kind.",
  },
];

export const testimonials: {
  quote: string;
  name: string;
  title: string;
  organization: string;
}[] = [];

export const leadershipQuote = manifestoContent.quote;

export const footerContent = {
  founderStatement:
    "I founded The Kaye Collective on a simple belief: no one transforms alone. My work is to walk alongside leaders — with clarity, courage, and a commitment to transformation that endures.",
  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com",
    },
  ],
};
