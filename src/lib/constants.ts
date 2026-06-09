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
  { label: "Speaking", href: "/speaking" },
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
  topicsIntro:
    "Jennifer delivers keynotes, workshops, leadership experiences, and facilitated discussions designed to create awareness, inspire action, and drive meaningful organizational change.",
};

export const speakingTopics = [
  {
    cluster: "Career & Performance",
    description:
      "Helping professionals navigate growth, advancement, and long-term success.",
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
    description:
      "Building inclusive, accountable, high-performing teams.",
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
    description:
      "Creating meaningful dialogue that inspires action.",
    topics: [
      "Effective Communications",
      "Structured Communication",
      "Facilitation Skills — Facilitate with Fun",
      "ERG Roadmap Effectiveness",
    ],
  },
] as const;

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
    href: "/speaking",
  },
] satisfies WhoWeServeAudience[];

export const partnerContent = {
  label: "Partner With Us",
  title: "One conversation away.",
  description:
    "Coaching and advisory built on clarity, courage, and lasting change.",
};

export const bookACallPath = "/book-a-call";

export const discoveryConversationCta = {
  label: "Book a Discovery Conversation",
  ariaLabel: "Book a Leadership Discovery Conversation",
  href: bookACallPath,
} as const;

export const bookACallContent = {
  label: "Book a Discovery Conversation",
  hero: {
    headline: "Leadership Starts With a Conversation.",
    subheadline:
      "Meaningful transformation begins with clarity. This complimentary discovery conversation provides an opportunity to discuss your goals, leadership challenges, and the support needed to create lasting impact for yourself, your team, and your organization.",
    callout: "Complimentary 30-Minute Leadership Discovery Conversation",
    trustIndicators: [
      "20+ Years Leadership Experience",
      "Fortune 500 Experience",
      "National Speaker & Facilitator",
    ],
  },
  booking: {
    label: "Your Conversation",
    title: "Select a time that works for you.",
    description:
      "Choose an available slot below for a complimentary, confidential discovery conversation with Jennifer Huggins.",
  },
  whatToExpect: {
    label: "What To Expect",
    title: "A thoughtful conversation designed around your goals.",
    items: [
      {
        title: "Discovery & Goals",
        description:
          "Explore your current priorities, opportunities, and desired outcomes.",
      },
      {
        title: "Leadership Challenges",
        description:
          "Discuss leadership, organizational, career, or team-related challenges you may be navigating.",
      },
      {
        title: "Recommended Next Steps",
        description:
          "Identify potential strategies, solutions, and partnership opportunities aligned to your goals.",
      },
    ],
  },
  closing: {
    headline: "Ready to Take the Next Step?",
    subheadline:
      "Every meaningful transformation begins with a conversation. Let's explore what's possible together.",
    cta: {
      label: "Book Your Discovery Conversation",
      ariaLabel: "Book your leadership discovery conversation",
    },
  },
};

export const closingCtaContent = {
  headline: "Ready to Lead Differently?",
  subheadline:
    "Whether you're navigating a career transition, developing your leadership team, or planning a transformational event, Jennifer is ready to partner with you.",
  cta: discoveryConversationCta,
  secondaryLink: {
    label: "Learn More About Jennifer",
    href: "/founder",
  },
};

export type WorkshopAgendaItem = {
  time: string;
  title: string;
};

export type WorkshopDeliverablePage =
  | {
      id: string;
      tabLabel: string;
      pageNumber: number;
      variant: "cover";
      title: string;
      subtitle: string;
      preparedFor: string;
      sessionFormat: string;
    }
  | {
      id: string;
      tabLabel: string;
      pageNumber: number;
      variant: "overview";
      sectionTitle: string;
      introduction: string;
      objectives: string[];
      focusAreas: string[];
    }
  | {
      id: string;
      tabLabel: string;
      pageNumber: number;
      variant: "agenda";
      sectionTitle: string;
      introduction: string;
      items: WorkshopAgendaItem[];
    }
  | {
      id: string;
      tabLabel: string;
      pageNumber: number;
      variant: "discussion";
      sectionTitle: string;
      introduction: string;
      topics: { title: string; prompt: string }[];
    }
  | {
      id: string;
      tabLabel: string;
      pageNumber: number;
      variant: "action";
      sectionTitle: string;
      introduction: string;
      framework: string[];
      commitments: string[];
    };

export const leadershipExperiencesPath = "/leadership-experiences";

export const featuredLeadershipExperienceTeaser = {
  label: "Featured Leadership Experience",
  title: "Marketing Leadership Offsite",
  description:
    "A sample of Jennifer's workshop design and facilitation approach — helping senior marketing leaders build inclusive cultures and translate dialogue into action.",
  theme: "Inclusive Leadership · Talent Development · Workforce Belonging",
  audience: "Senior Marketing Leaders",
  format: "2-Hour Interactive Leadership Workshop",
  cta: {
    label: "View Full Leadership Experience",
    href: leadershipExperiencesPath,
  },
  sampleCta: {
    label: "Explore a Sample Leadership Experience",
    href: leadershipExperiencesPath,
  },
};

export const leadershipExperiencesContent = {
  label: "Leadership Experiences",
  title: "Facilitation and workshop design that drives lasting change.",
  subheadline:
    "Jennifer partners with organizations to design leadership experiences that strengthen culture, activate leaders, and translate dialogue into meaningful action.",
  introduction:
    "Every leadership experience is intentionally designed to create meaningful dialogue, inspire action, and drive lasting organizational impact.",
  approach: {
    label: "Design Philosophy",
    title: "How Jennifer Designs Transformational Experiences",
    description:
      "A proven methodology for building sessions that engage executives, surface honest dialogue, and move teams toward accountable outcomes.",
    pillars: [
      {
        title: "Strategic Workshop Design",
        description:
          "Every experience is tailored to your organization's goals, culture, and the leadership moments that matter most.",
      },
      {
        title: "Leadership Development",
        description:
          "Programs that strengthen confidence, executive presence, and influence — for emerging and established leaders alike.",
      },
      {
        title: "Facilitation Expertise",
        description:
          "Brave, inclusive spaces where dialogue is honest, thoughtful, and designed to unlock collective insight.",
      },
      {
        title: "Action-Oriented Experiences",
        description:
          "Sessions structured to move leaders from awareness to clarity — with commitments they can carry forward.",
      },
      {
        title: "Executive Engagement",
        description:
          "Formats that respect senior leaders' time while driving meaningful conversation and accountable outcomes.",
      },
    ],
  },
  sampleExperience: {
    label: "In Practice",
    title: "A recent leadership engagement.",
    description:
      "This marketing leadership offsite illustrates how Jennifer's design methodology comes to life — from session architecture to the facilitation materials that support it.",
  },
  featured: {
    label: "Client Experience",
    title: "Marketing Leadership Offsite",
    theme:
      "Inclusive Leadership · Talent Development · Workforce Belonging",
    overview: {
      label: "Experience Design",
      title: "Shaped for senior marketing leaders.",
      audience: "Senior Marketing Leaders",
      format: "2-Hour Interactive Leadership Workshop",
      focusAreas: [
        "Inclusive Leadership",
        "Talent Engagement",
        "Workforce Belonging",
        "Leadership Accountability",
        "Inclusive Marketing",
      ],
    },
    agenda: {
      label: "Session Architecture",
      title: "Intentionally structured from opening to close.",
      items: [
        { time: "2:00 PM", title: "Inclusive Leadership in Action" },
        { time: "2:15 PM", title: "Inclusive Marketing and Design" },
        { time: "3:00 PM", title: "Goal Setting and Action" },
        { time: "3:10 PM", title: "Inclusive Talent Engagement" },
        { time: "3:50 PM", title: "Closing Thoughts" },
      ] satisfies WorkshopAgendaItem[],
    },
    discussionTopics: {
      label: "Dialogue Framework",
      title: "Themes that guide meaningful conversation.",
      topics: [
        "Psychological Safety",
        "Career Mobility",
        "Inclusive Hiring",
        "Workforce Belonging",
        "Leadership Accountability",
        "Brand Representation",
      ],
    },
  },
  deliverable: {
    label: "Design Proof Point",
    title: "Curriculum and facilitation materials.",
    description:
      "Supporting proof of Jennifer's workshop design expertise — selected pages from the client-ready curriculum created for this engagement.",
    confidentiality: "Confidential Sample · The Kaye Collective",
    pages: [
      {
        id: "cover",
        tabLabel: "Cover",
        pageNumber: 1,
        variant: "cover",
        title: "Marketing Leadership Offsite",
        subtitle: "Workshop Curriculum & Facilitation Guide",
        preparedFor: "Senior Marketing Leaders",
        sessionFormat: "2-Hour Interactive Leadership Workshop",
      },
      {
        id: "overview",
        tabLabel: "Overview",
        pageNumber: 2,
        variant: "overview",
        sectionTitle: "Session Overview",
        introduction:
          "This workshop is designed to help senior marketing leaders strengthen inclusive leadership practices, deepen talent engagement, and build cultures of belonging that translate into brand impact.",
        objectives: [
          "Explore inclusive leadership in action across marketing organizations",
          "Examine the connection between inclusive marketing and brand trust",
          "Identify actionable steps for talent engagement and accountability",
          "Align on shared commitments for post-session follow-through",
        ],
        focusAreas: [
          "Inclusive Leadership",
          "Talent Engagement",
          "Workforce Belonging",
          "Leadership Accountability",
          "Inclusive Marketing",
        ],
      },
      {
        id: "agenda",
        tabLabel: "Agenda",
        pageNumber: 3,
        variant: "agenda",
        sectionTitle: "Session Flow",
        introduction:
          "A structured arc moving leaders from dialogue to clarity — with intentional transitions that keep energy high and outcomes tangible.",
        items: [
          { time: "2:00 PM", title: "Inclusive Leadership in Action" },
          { time: "2:15 PM", title: "Inclusive Marketing and Design" },
          { time: "3:00 PM", title: "Goal Setting and Action" },
          { time: "3:10 PM", title: "Inclusive Talent Engagement" },
          { time: "3:50 PM", title: "Closing Thoughts" },
        ],
      },
      {
        id: "discussion",
        tabLabel: "Discussion Guide",
        pageNumber: 4,
        variant: "discussion",
        sectionTitle: "Facilitation Framework",
        introduction:
          "Guided discussion prompts designed to create psychological safety, surface honest perspectives, and move the group toward shared understanding.",
        topics: [
          {
            title: "Psychological Safety",
            prompt:
              "Where do our teams feel empowered to speak up — and where do we still have work to do?",
          },
          {
            title: "Workforce Belonging",
            prompt:
              "What does belonging look like in our marketing organization today?",
          },
          {
            title: "Brand Representation",
            prompt:
              "How do our external narratives reflect the diversity of the audiences we serve?",
          },
        ],
      },
      {
        id: "action",
        tabLabel: "Action Plan",
        pageNumber: 5,
        variant: "action",
        sectionTitle: "Goal Setting & Commitments",
        introduction:
          "Leaders leave with clarity on what they will do differently — individually and as a collective — in the weeks following the session.",
        framework: [
          "What will I start, stop, or continue as a leader?",
          "What support does my team need to sustain momentum?",
          "What is one commitment I will make visible to others?",
        ],
        commitments: [
          "Individual leadership action",
          "Team alignment priority",
          "Organizational follow-up milestone",
        ],
      },
    ] satisfies WorkshopDeliverablePage[],
  },
  clientOutcomes: {
    label: "Client Outcomes",
    title: "What Clients Walk Away With",
    outcomes: [
      "Greater Leadership Confidence",
      "Stronger Team Alignment",
      "Clear Action Plans",
      "Sustainable Organizational Change",
    ],
  },
  closing: {
    headline: "Ready to Create a Custom Leadership Experience?",
    subheadline:
      "Every organization is unique. Jennifer partners with leaders and teams to design experiences that create meaningful dialogue, inspire action, and drive lasting impact.",
    primaryCta: {
      label: "Schedule a Discovery Call",
    },
    secondaryCta: {
      label: "Partner With Jennifer",
      href: "/partner-with-us",
    },
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

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jkayehuggins/",
    ariaLabel: "Visit Jennifer Huggins on LinkedIn",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/leadinspired?utm_source=qr",
    ariaLabel: "Visit Jennifer Huggins on Instagram",
  },
] as const;

export const footerContent = {
  founderStatement:
    "I founded The Kaye Collective on a simple belief: no one transforms alone. My work is to walk alongside leaders — with clarity, courage, and a commitment to transformation that endures.",
  social: socialLinks,
};
