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
    imageSrc: string;
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

export interface FounderContent {
  name: string;
  role: string;
  location: string;
  imageSrc: string;
  imageAlt: string;
  focus: string[];
  body: string[];
}

export interface ContactContent {
  title: string;
  summary: string;
  email: ActionLink;
  linkedin: ActionLink;
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
    byline: string;
    markSrc: string;
  };
  nav: NavItem[];
  hero: HeroContent;
  services: {
    title: string;
    intro: string;
    items: ServiceItem[];
  };
  experience: {
    title: string;
    intro: string;
    items: ExperienceItem[];
  };
  founder: FounderContent;
  contact: ContactContent;
  legal: {
    companyName: string;
    vatId: string;
    location: string;
    email: ActionLink;
    linkedin: ActionLink;
    podcast: ActionLink;
  };
  plausible: {
    domain: string;
    src: string;
  };
}

export const site: SiteContent = {
  meta: {
    url: "https://booncon.com",
    domain: "booncon.com",
    defaultTitle: "booncon | AI, automation and digital change",
    defaultDescription:
      "booncon is the Helsinki-based studio of Lukas Hafner. Pragmatic AI, automation and digital change work for companies that need sharper systems and better ways of working.",
    privacyTitle: "Privacy policy | booncon",
    privacyDescription:
      "Privacy information for booncon.com, including controller details, hosting, analytics and direct contact handling.",
    ogImage: "https://booncon.com/assets/lukas.jpg",
  },
  brand: {
    name: "booncon",
    byline: "Lukas Hafner",
    markSrc: "/icon-192x192.png",
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "Experience", href: "#experience" },
    { label: "Lukas", href: "#lukas" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "booncon / Lukas Hafner",
    title:
      "AI, automation and digital change with less theatre and more traction.",
    summary:
      "booncon helps companies make better decisions about how work gets done, where automation belongs, and which digital bets are actually worth making.",
    primaryCta: {
      label: "Start a conversation",
      href: "mailto:hello@booncon.com?subject=Hi%20booncon!",
    },
    panel: {
      eyebrow: "Typical focus areas",
      summary:
        "Independent strategy and hands-on delivery support for teams that want movement, not more deckware.",
      imageSrc: "/assets/hero-office-bw.jpg",
      imageAlt: "Desk and office details",
      items: [
        "AI opportunity mapping",
        "Workflow automation",
        "Digital operating models",
        "Founder-level advisory",
      ],
    },
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
        title: "Digital systems review",
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
        name: "Pixels Helsinki",
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
          "Helped launch an interactive children's publishing concept that blended storytelling, product and digital production.",
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
  },
  founder: {
    name: "Lukas Jakob Hafner",
    role: "Founder, advisor and builder",
    location: "Helsinki, Finland",
    imageSrc: "/assets/lukas.jpg",
    imageAlt: "Portrait of Lukas Hafner",
    focus: [
      "AI and automation",
      "Digital strategy",
      "Product and systems thinking",
    ],
    body: [
      "Lukas brings together a background in technology and design with more than a decade of experience building companies, products and change initiatives.",
      "His work sits between strategy and implementation: clarifying the direction, pressure-testing the real constraints and helping teams move from intent to action.",
      "He is especially interested in the point where business design, internal culture and practical automation meet.",
    ],
  },
  contact: {
    title: "Need a clearer next step?",
    summary:
      "If you are exploring AI, rethinking the way work flows through the company or trying to make digital change less vague, Lukas is happy to talk.",
    email: {
      label: "Email Lukas",
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
  },
  plausible: {
    domain: "booncon.com",
    src: "https://stats.booncon.com/js/index.js",
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
