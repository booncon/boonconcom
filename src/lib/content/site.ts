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
  /** Trusted HTML: may contain <em>. */
  title: string;
  /** Struck through one by one under the headline. */
  chores: string[];
  done: string;
  ctaLead: string;
}

export interface ServiceItem {
  title: string;
  summary: string;
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
  name: string;
  role: string;
  location: string;
  imageAlt: string;
  lead: string;
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

export interface AppItem {
  /** URL segment: /apps/<slug>/. Icon and screenshots live in src/lib/assets/apps/<slug>/. */
  slug: string;
  name: string;
  tagline: string;
  platforms: string[];
  /** Omit until the app is live; the page then says "Coming soon". */
  appStoreUrl?: string;
  description: string[];
  faq?: { question: string; answer: string }[];
  privacy: string[];
}

export interface SiteContent {
  meta: {
    url: string;
    domain: string;
    defaultTitle: string;
    defaultDescription: string;
    privacyTitle: string;
    privacyDescription: string;
    appsTitle: string;
    appsDescription: string;
    ogImage: string;
  };
  brand: {
    name: string;
    markSrc: string;
  };
  nav: NavItem[];
  hero: HeroContent;
  services: {
    items: ServiceItem[];
  };
  experience: {
    items: ExperienceItem[];
    kpis?: KpiItem[];
  };
  apps: {
    visible: boolean;
    intro: string;
    items: AppItem[];
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

// Publishes the Apps section: menu item, homepage row, footer link and the /apps pages.
// Also add /apps/ and each app page back to static/sitemap.xml when turning it on.
const showApps = false;

export const site: SiteContent = {
  meta: {
    url: "https://booncon.com",
    domain: "booncon.com",
    defaultTitle: "booncon | AI and automation consulting in Helsinki",
    defaultDescription:
      "booncon is Lukas Jakob Hafner's consultancy in Helsinki. I help companies find where AI and automation actually save time, then build it with them.",
    privacyTitle: "Privacy policy | booncon",
    privacyDescription:
      "Privacy information for booncon.com, including controller details, hosting, analytics and direct contact handling.",
    appsTitle: "Apps | booncon",
    appsDescription:
      "Small iPhone, iPad and Mac apps built and sold by booncon in Helsinki.",
    ogImage: "https://booncon.com/assets/hero-office-bw.jpg",
  },
  brand: {
    name: "booncon",
    markSrc: "/icon-192x192.png",
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    ...(showApps ? [{ label: "Apps", href: "#apps" }] : []),
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    title: "I help companies put AI to work where it <em>actually</em> saves time.",
    chores: ["Copy-paste", "re-typing", "chasing approvals", "monthly reports", "inbox triage"],
    done: "Done.",
    ctaLead: "Email me at",
  },
  services: {
    items: [
      {
        title: "AI and automation strategy",
        summary:
          "Find the use cases that are worth it, set sensible guardrails, and turn the rest into a plan you can start on Monday.",
      },
      {
        title: "Workflows and operating models",
        summary:
          "Look at how decisions and information really move through the company, then remove the steps nobody would miss.",
      },
      {
        title: "Systems and data",
        summary:
          "An honest look at your stack and internal tools: what helps, and what quietly slows you down.",
      },
      {
        title: "Hands-on advisory",
        summary:
          "Workshops, prototypes and follow-through with the people who make the calls. When a project needs more hands, I bring in partners I trust.",
      },
    ],
  },
  experience: {
    items: [
      {
        name: "SelectAM",
        href: "https://www.selectam.io",
        role: "Co-founder",
        summary: "Industrial technology",
      },
      {
        name: "Torggler",
        href: "https://www.torggler.com",
        role: "Advisor",
        summary: "Long-term digital transformation",
      },
      {
        name: "booncon Pixels",
        href: "http://www.valve.fi/",
        role: "Co-founder",
        summary: "Digital agency, now Valve",
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
  apps: {
    visible: showApps,
    intro: "Small tools I build and sell myself.",
    items: [
      // ponytail: placeholder until the first real app is listed. Replace before merging.
      {
        slug: "example",
        name: "Example app",
        tagline: "Placeholder until the first app is listed here.",
        platforms: ["iPhone", "iPad", "Mac"],
        description: [
          "A short paragraph on what the app does and who it's for.",
          "A second paragraph for the detail that makes it worth downloading.",
        ],
        faq: [
          {
            question: "How do I restore a purchase?",
            answer: "Open Settings in the app and tap Restore purchases.",
          },
        ],
        privacy: [
          "Example app doesn't collect personal data. Everything you enter stays on your device and, if you use iCloud, in your own iCloud account.",
          "The app doesn't use third-party analytics or advertising.",
        ],
      },
    ],
  },
  founder: {
    name: "Lukas Jakob Hafner",
    role: "Master Maker",
    location: "Helsinki, Finland",
    imageAlt: "Portrait of Lukas Hafner",
    lead: "I'm Lukas, a strategist and builder in Helsinki. Tinkerer at heart.",
    body: [
      "Most digital change gets stuck between advice and implementation. I started booncon to close that gap. You work directly with the person designing and building your automation, not with an account manager or a slide deck.",
      "Before booncon I co-founded a digital agency and a few ventures, and advised companies through long transformations. That's where I learned to translate between leadership, operations and the people writing the code.",
      "booncon started under the motto \"working with friends\". The focus has moved to AI and systems; the way of working hasn't. Away from client work you'll find me trying new gadgets, throwing a frisbee or brewing the next batch of beer.",
    ],
  },
  contact: {
    title: "Coffee or a call?",
    summary:
      "If you're looking at AI, rethinking how work moves through the company, or just want a second opinion, get in touch. I'm always happy to talk.",
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
