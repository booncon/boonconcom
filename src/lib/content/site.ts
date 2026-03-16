export interface NavItem {
  label: string;
  href: string;
}

export interface ActionLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  summary: string;
  primaryCta: ActionLink;
  panel: {
    eyebrow: string;
    summary: string;
    imageAlt: string;
    items: string[];
  };
}

export interface ServiceItem {
  title: string;
  summary: string;
  bullets: string[];
}

export interface ExperienceItem {
  name: string;
  href: string;
  role: string;
  summary: string;
}

export interface KpiItem {
  base: number;
  referenceYear: number;
  label: string;
  ratePerYear?: number;
  suffix?: string;
}

export interface FounderContent {
  title: string;
  name: string;
  role: string;
  location: string;
  imageAlt: string;
  focus: string[];
  body: string[];
}

export interface ContactContent {
  title: string;
  summary: string;
  address: string;
  phone: string;
  email: ActionLink;
  linkedin: ActionLink;
}

export interface OverviewContent {
  eyebrow: string;
  title: string;
  body: string[];
}

export interface SiteContent {
  meta: {
    url: string;
    domain: string;
    defaultTitle: string;
    defaultDescription: string;
    privacyTitle: string;
    privacyDescription: string;
    ogImage: string;
  };
  brand: {
    name: string;
    markSrc: string;
  };
  nav: NavItem[];
  hero: HeroContent;
  overview: OverviewContent;
  services: {
    title: string;
    intro: string;
    items: ServiceItem[];
  };
  experience: {
    title: string;
    intro: string;
    items: ExperienceItem[];
    kpis?: KpiItem[];
  };
  founder: FounderContent;
  contact: ContactContent;
  legal: {
    companyName: string;
    vatId: string;
    location: string;
    tagline: string;
    email: ActionLink;
    linkedin: ActionLink;
    podcast: ActionLink;
    github: ActionLink;
    asiakastieto: ActionLink;
  };
  plausible: {
    domain: string;
    /** Optional proxy API endpoint (e.g. https://stats.example.com/api/event). Omit to use Plausible’s default. */
    endpoint?: string;
  };
}

export const site: SiteContent = {
  meta: {
    url: "https://booncon.com",
    domain: "booncon.com",
    defaultTitle: "AI, automation and digital change. | booncon",
    defaultDescription:
      "booncon is the Helsinki-based studio led by Lukas Jakob Hafner. Pragmatic AI, automation and digital change work for companies that need sharper systems and better ways of working.",
    privacyTitle: "Privacy policy | booncon",
    privacyDescription:
      "Privacy information for booncon.com, including controller details, hosting, analytics and direct contact handling.",
    ogImage: "https://booncon.com/assets/hero-office-bw.jpg",
  },
  brand: {
    name: "booncon",
    markSrc: "/icon-192x192.png",
  },
  nav: [
    { label: "Intro", href: "#intro" },
    { label: "Services", href: "#services" },
    { label: "Experience", href: "#experience" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "booncon / Lukas Hafner",
    title:
      "AI, automation and digital change with less noise and more momentum.",
    summary:
      "booncon helps companies make better decisions about how work gets done and where automation belongs. We turn complex digital investments into tangible results. When the technology delivers, the professional experience becomes something people can actually love.",
    primaryCta: {
      label: "Start a conversation",
      href: "mailto:hello@booncon.com?subject=Hi%20booncon!",
    },
    panel: {
      eyebrow: "Typical focus areas",
      summary:
        "Independent strategy and hands-on delivery support for teams that want movement, not more deckware.",
      imageAlt: "Desk and office details",
      items: [
        "AI opportunity mapping",
        "Workflow automation",
        "Digital operating models",
        "Founder-level advisory",
      ],
    },
  },
  overview: {
    eyebrow: "Overview",
    title: "A small studio with a systems view",
    body: [
      "booncon is the consulting practice led by Lukas Jakob Hafner, a Helsinki-based strategist and maker working across business, product, technology and ways of working.",
      "The studio grew out of years spent co-founding ventures, advising companies in transition and translating between leadership, operations and digital teams.",
      "Today the work is focused on making AI and automation genuinely useful instead of decorative. While booncon operates as a lean studio, we regularly orchestrate trusted technical and design partners to scale implementation when a project demands it.",
      "When change needs both clarity and someone who can help make it real, that is where booncon fits best.",
    ],
  },
  services: {
    title: "Where booncon can help",
    intro:
      "The work usually starts with a sharp diagnostic and quickly turns into concrete priorities, experiments and implementation support.",
    items: [
      {
        title: "AI and automation strategy",
        summary:
          "Map the highest-value use cases, define guardrails and turn broad AI ambition into a practical roadmap.",
        bullets: [
          "Use-case prioritisation",
          "Tooling and governance",
          "Experiment design",
        ],
      },
      {
        title: "Workflow and operating model design",
        summary:
          "Improve how decisions, information and responsibility move through the organisation so teams can work faster with less friction.",
        bullets: ["Process redesign", "Team rituals", "Decision flow clarity"],
      },
      {
        title: "Core systems & data flows",
        summary:
          "Assess the current stack, internal tools and customer-facing touchpoints to understand what supports growth and what quietly gets in the way.",
        bullets: [
          "Stack review",
          "Content and data flows",
          "Implementation priorities",
        ],
      },
      {
        title: "Change sprints and trusted advisory",
        summary:
          "Work directly with decision makers through focused workshops, prototypes and follow-through that keeps the work moving.",
        bullets: ["Leadership workshops", "Action plans", "Hands-on sparring"],
      },
    ],
  },
  experience: {
    title: "Selected experience",
    intro:
      "booncon draws on founder, operator and advisory work across digital products, service design and business transformation.",
    items: [
      {
        name: "booncon Pixels",
        href: "https://pixels.fi",
        role: "Co-founder",
        summary:
          "Built a digital agency practice around product thinking, design and delivery for ambitious client work.",
      },
      {
        name: "Tiny Tin Box",
        href: "https://tinytinbox.com",
        role: "Venture builder",
        summary:
          "Launched an interactive children's publishing concept that blended storytelling, product and digital production.",
      },
      {
        name: "SelectAM",
        href: "https://www.selectam.io",
        role: "Co-founder",
        summary:
          "Shaped product, positioning and commercial thinking around a specialised industrial technology venture.",
      },
      {
        name: "Torggler",
        href: "https://www.torggler.com",
        role: "Advisor",
        summary:
          "Supported long-term digital transformation work with attention to systems, services and operational fit.",
      },
    ],
    kpis: [
      {
        base: 3100,
        referenceYear: 2024,
        ratePerYear: 77,
        label: "pizzas eaten",
      },
      { base: 5, referenceYear: 2024, label: "languages spoken" },
      {
        base: 0,
        referenceYear: 2024,
        ratePerYear: 0.01,
        label: "robots gone rogue",
      },
      {
        base: 127,
        referenceYear: 2026,
        ratePerYear: 8,
        label: "'but we've always done it this way' conversations",
      },
    ],
  },
  founder: {
    title: "The bridge between strategy and software",
    name: "Lukas Jakob Hafner",
    role: "Master Maker",
    location: "Helsinki, Finland",
    imageAlt: "Portrait of Lukas Hafner",
    focus: [
      "AI and automation",
      "Digital strategy",
      "Product and systems thinking",
    ],
    body: [
      "Most digital change gets stuck in the gap between high-level advice and actual implementation. I started booncon to close that gap. With over a decade of experience co-founding ventures and advising companies in transition, I bring a background that merges systems thinking with hands-on technical execution.",
      "My work is about pressure-testing constraints and helping teams move from intent to action. You don't get a junior account manager or a deck of slides; you get a direct partnership with the person designing and building your automation. booncon originally started under the motto 'Working with friends.' While the focus has shifted entirely to AI and digital systems, that ethos hasn't changed. Working with me is highly personal, direct, and built on the kind of trust you’d expect from a good friend.",
      "I am a tinkerer at heart. Whether I'm mapping AI opportunities or refining a workflow, I look for the point where business design, internal culture, and practical automation meet. When I'm not building systems for clients, you'll likely find me trying out new gadgets, throwing a frisbee, or refining my next batch of craft beer.",
    ],
  },
  contact: {
    title: "Need a clearer next step?",
    summary:
      "If you are exploring AI, rethinking the way work flows through the company or trying to make digital change less vague, let's grab a coffee or jump on a call. I’m always happy to talk.",
    address:
      "booncon oy, Suvilahdenkatu 4 B 24, c/o Hafner, 00500 Helsinki, Finland",
    phone: "+358 45 8980609",
    email: {
      label: "hello@booncon.com",
      href: "mailto:hello@booncon.com?subject=Hi%20booncon!",
    },
    linkedin: {
      label: "booncon on LinkedIn",
      href: "https://www.linkedin.com/company/booncon/",
      external: true,
    },
  },
  legal: {
    companyName: "booncon oy",
    vatId: "FI24323170",
    location: "Helsinki, Finland",
    tagline: "Working with friends.",
    email: {
      label: "hello@booncon.com",
      href: "mailto:hello@booncon.com?subject=Hi%20booncon!",
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/booncon/",
      external: true,
    },
    podcast: {
      label: "bitsandpieces.fm",
      href: "https://bitsandpieces.fm",
      external: true,
    },
    github: {
      label: "GitHub",
      href: "https://github.com/booncon",
      external: true,
    },
    asiakastieto: {
      label: "Asiakastieto AA",
      href: "https://www.asiakastieto.fi/web/fi/yritykset/booncon-oy/25484580/luottoluokitus",
    },
  },
  plausible: {
    domain: "booncon.com",
  },
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.brand.name,
  url: site.meta.url,
  email: site.legal.email.label,
  areaServed: "Europe",
  sameAs: [site.legal.linkedin.href, site.legal.podcast.href],
  founder: {
    "@type": "Person",
    name: site.founder.name,
  },
};
