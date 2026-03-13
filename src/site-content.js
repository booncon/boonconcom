/**
 * @typedef {{
 *   label: string;
 *   href: string;
 *   external?: boolean;
 * }} NavItem
 *
 * @typedef {{
 *   eyebrow: string;
 *   title: string;
 *   summary: string;
 *   primaryCtaLabel: string;
 *   primaryCtaHref: string;
 *   secondaryCtaLabel: string;
 *   secondaryCtaHref: string;
 *   highlights: string[];
 *   note: string;
 * }} HeroContent
 *
 * @typedef {{
 *   title: string;
 *   body: string[];
 * }} IntroContent
 *
 * @typedef {{
 *   title: string;
 *   summary: string;
 *   bullets: string[];
 * }} Service
 *
 * @typedef {{
 *   name: string;
 *   href: string;
 *   role: string;
 *   summary: string;
 * }} ExperienceItem
 *
 * @typedef {{
 *   name: string;
 *   role: string;
 *   location: string;
 *   focus: string[];
 *   body: string[];
 * }} FounderContent
 *
 * @typedef {{
 *   title: string;
 *   summary: string;
 *   emailLabel: string;
 *   emailHref: string;
 *   linkedinLabel: string;
 *   linkedinHref: string;
 * }} ContactContent
 *
 * @typedef {{
 *   companyName: string;
 *   vatId: string;
 *   location: string;
 *   email: string;
 *   emailHref: string;
 *   linkedinHref: string;
 *   podcastHref: string;
 * }} LegalContent
 *
 * @typedef {{
 *   domain: string;
 *   src: string;
 * }} PlausibleContent
 *
 * @typedef {{
 *   title: string;
 *   paragraphs: string[];
 *   bullets?: string[];
 * }} PrivacySection
 *
 * @typedef {{
 *   siteName: string;
 *   domain: string;
 *   url: string;
 *   defaultTitle: string;
 *   defaultDescription: string;
 *   ogImagePath: string;
 *   nav: NavItem[];
 *   hero: HeroContent;
 *   intro: IntroContent;
 *   servicesTitle: string;
 *   servicesIntro: string;
 *   services: Service[];
 *   experienceTitle: string;
 *   experienceIntro: string;
 *   experience: ExperienceItem[];
 *   founder: FounderContent;
 *   contact: ContactContent;
 *   legal: LegalContent;
 *   plausible: PlausibleContent;
 *   privacyIntro: string;
 *   privacySections: PrivacySection[];
 * }} SiteContent
 */

/** @type {SiteContent} */
export const siteContent = {
  siteName: "booncon",
  domain: "booncon.com",
  url: "https://booncon.com",
  defaultTitle: "booncon | AI, automation and digital change",
  defaultDescription:
    "booncon is the Helsinki-based studio of Lukas Hafner. Pragmatic AI, automation and digital change work for companies that need sharper systems and better ways of working.",
  ogImagePath: "/assets/lukas.jpg",
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
    primaryCtaLabel: "Start a conversation",
    primaryCtaHref: "mailto:hello@booncon.com?subject=Hi%20booncon!",
    highlights: [
      "AI opportunity mapping",
      "Workflow automation",
      "Digital operating models",
      "Founder-level advisory",
    ],
    note: "Independent strategy and hands-on delivery support for teams that want movement, not more deckware.",
  },
  intro: {
    title: "A small studio with a systems view",
    body: [
      "booncon is the consulting practice of Lukas Hafner, a Helsinki-based strategist and maker working across business, product, technology and ways of working.",
      "The studio grew out of years spent co-founding ventures, advising companies in transition and translating between leadership, operations and digital teams. Today the work is focused on making AI and automation genuinely useful instead of decorative.",
      "When change needs both clarity and someone who can help make it real, that is where booncon fits best.",
    ],
  },
  servicesTitle: "Where booncon can help",
  servicesIntro:
    "The work usually starts with a sharp diagnostic and quickly turns into concrete priorities, experiments and implementation support.",
  services: [
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
  experienceTitle: "Selected experience",
  experienceIntro:
    "booncon draws on founder, operator and advisory work across digital products, service design and business transformation.",
  experience: [
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
  founder: {
    name: "Lukas Jakob Hafner",
    role: "Founder, advisor and builder",
    location: "Helsinki, Finland",
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
    emailLabel: "Email Lukas",
    emailHref: "mailto:hello@booncon.com?subject=Hi%20booncon!",
    linkedinLabel: "booncon on LinkedIn",
    linkedinHref: "https://www.linkedin.com/company/booncon/",
  },
  legal: {
    companyName: "booncon oy",
    vatId: "FI24323170",
    location: "Helsinki, Finland",
    email: "hello@booncon.com",
    emailHref: "mailto:hello@booncon.com?subject=Hi%20booncon!",
    linkedinHref: "https://www.linkedin.com/company/booncon/",
    podcastHref: "https://bitsandpieces.fm",
  },
  plausible: {
    domain: "booncon.com",
    src: "https://stats.booncon.com/js/index.js",
  },
  privacyIntro:
    "This website is a small, mostly static company site for booncon oy. It does not have user accounts, newsletters or a contact form. The only personal data handled is what is needed to operate the site, understand aggregate traffic and respond if you contact booncon directly.",
  privacySections: [
    {
      title: "Controller",
      paragraphs: [
        "booncon oy is the controller for personal data processed through this website.",
        "Address: Suvilahdenkatu 4 B 24, 00500 Helsinki, Finland. Email: hello@booncon.com. Website: https://booncon.com.",
      ],
    },
    {
      title: "What is collected",
      paragraphs: [
        "If you browse this site, the hosting provider may process standard technical request data such as IP address, user agent, requested URL and timestamp in server logs.",
        "The site also uses self-hosted Plausible Analytics to understand aggregate traffic and page usage. Plausible is configured without cross-site tracking cookies and is used to see general trends rather than identify individual visitors.",
        "If you contact booncon by email or through LinkedIn, the information you send is processed so your message can be handled and replied to.",
      ],
      bullets: [
        "Hosting and security logs",
        "Anonymous or aggregate analytics data",
        "Contact details and message content you send voluntarily",
      ],
    },
    {
      title: "Why it is processed",
      paragraphs: [
        "The data is processed to keep the website available and secure, understand which pages are useful, and respond to inbound questions or project enquiries.",
        "The legal basis is usually legitimate interest for running and improving the website, and pre-contractual steps or legitimate interest when responding to direct enquiries.",
      ],
    },
    {
      title: "Processors and third parties",
      paragraphs: [
        "The website is intended to be hosted on GitHub Pages, which means GitHub may process technical request data as part of delivering the site.",
        "Analytics data is processed through Plausible at stats.booncon.com. If you leave this site through an external link such as LinkedIn, the privacy practices of that external service apply from that point onward.",
      ],
    },
    {
      title: "Retention",
      paragraphs: [
        "Server log retention is determined by the hosting setup and kept only as long as needed for operations and security.",
        "Analytics data is reviewed in aggregate. Direct email correspondence is retained only as long as needed to handle the conversation, the business relationship or applicable legal obligations.",
      ],
    },
    {
      title: "Your rights",
      paragraphs: [
        "You may request access to, correction of or deletion of personal data relating to you, as well as object to or restrict processing where applicable under data protection law.",
        "If you have any privacy-related questions, contact hello@booncon.com.",
      ],
    },
  ],
};
