import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { siteContent } from '../src/site-content.js';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = resolve(rootDir, 'public');

const sectionOrder = ['services', 'experience', 'lukas', 'contact'];

const escapeHtml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const linkAttributes = (href, external = false) =>
  external
    ? `href="${escapeHtml(href)}" target="_blank" rel="noreferrer noopener"`
    : `href="${escapeHtml(href)}"`;

const navMarkup = (page) => {
  const links =
    page === 'home'
      ? siteContent.nav
      : [
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/#contact' },
          { label: 'Podcast', href: siteContent.legal.podcastHref, external: true },
        ];

  return `
    <header class="site-header">
      <a class="brand" href="/" aria-label="${escapeHtml(siteContent.siteName)} home">
        <img class="brand__mark" src="/icon-192x192.png" alt="" width="48" height="48" />
        <span class="brand__text-wrap">
          <span class="brand__name">${escapeHtml(siteContent.siteName)}</span>
          <span class="brand__meta">Lukas Hafner</span>
        </span>
      </a>
      <nav class="site-nav" aria-label="Primary">
        ${links
          .map(
            (item) => `
              <a
                class="site-nav__link"
                data-nav-link
                ${linkAttributes(item.href, item.external)}
              >${escapeHtml(item.label)}</a>
            `,
          )
          .join('')}
      </nav>
    </header>
  `;
};

const footerMarkup = () => `
  <footer class="site-footer">
    <div class="site-footer__primary">
      <p class="site-footer__eyebrow">booncon oy</p>
      <p class="site-footer__meta">${escapeHtml(siteContent.legal.location)} / VAT ${escapeHtml(
        siteContent.legal.vatId,
      )}</p>
    </div>
    <div class="site-footer__links">
      <a href="${siteContent.legal.emailHref}">${escapeHtml(siteContent.legal.email)}</a>
      <a href="${siteContent.legal.linkedinHref}" target="_blank" rel="noreferrer noopener">LinkedIn</a>
      <a href="${siteContent.legal.podcastHref}" target="_blank" rel="noreferrer noopener">bitsandpieces.fm</a>
      <a href="/privacy/">Privacy</a>
    </div>
    <p class="site-footer__copyright">Copyright <span data-year></span> ${escapeHtml(
      siteContent.legal.companyName,
    )}</p>
  </footer>
`;

const heroMarkup = () => `
  <section class="hero" id="top" data-section="top">
    <div class="hero__copy reveal" data-reveal>
      <p class="eyebrow">${escapeHtml(siteContent.hero.eyebrow)}</p>
      <h1>${escapeHtml(siteContent.hero.title)}</h1>
      <p class="hero__summary">${escapeHtml(siteContent.hero.summary)}</p>
      <div class="hero__actions">
        <a class="button button--primary" href="${siteContent.hero.primaryCtaHref}">${escapeHtml(
          siteContent.hero.primaryCtaLabel,
        )}</a>
        <a
          class="button button--ghost"
          href="${siteContent.hero.secondaryCtaHref}"
          target="_blank"
          rel="noreferrer noopener"
        >${escapeHtml(siteContent.hero.secondaryCtaLabel)}</a>
      </div>
    </div>
    <aside class="hero__panel reveal" data-reveal>
      <div class="hero__media-wrap">
        <img
          class="hero__image"
          src="/assets/hero-office-bw.jpg"
          alt="Desk and office details"
          width="1200"
          height="800"
        />
        <p class="hero__panel-badge">Independent advisory</p>
      </div>
      <div class="hero__panel-inner">
        <p class="hero__panel-kicker">Typical focus areas</p>
        <p class="hero__note">${escapeHtml(siteContent.hero.note)}</p>
        <ul class="chip-list" aria-label="Key areas">
          ${siteContent.hero.highlights
            .map((item) => `<li class="chip-list__item">${escapeHtml(item)}</li>`)
            .join('')}
        </ul>
      </div>
    </aside>
  </section>
`;

const introMarkup = () => `
  <section class="section section--intro" aria-labelledby="intro-title">
    <div class="section__header reveal" data-reveal>
      <p class="eyebrow">Overview</p>
      <h2 id="intro-title">${escapeHtml(siteContent.intro.title)}</h2>
    </div>
    <div class="stack stack--large reveal" data-reveal>
      ${siteContent.intro.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}
    </div>
  </section>
`;

const servicesMarkup = () => `
  <section class="section" id="services" data-section="services" aria-labelledby="services-title">
    <div class="section__header reveal" data-reveal>
      <p class="eyebrow">Services</p>
      <h2 id="services-title">${escapeHtml(siteContent.servicesTitle)}</h2>
      <p class="section__intro">${escapeHtml(siteContent.servicesIntro)}</p>
    </div>
    <div class="services-grid">
      ${siteContent.services
        .map(
          (service) => `
            <article class="card reveal" data-reveal>
              <h3>${escapeHtml(service.title)}</h3>
              <p>${escapeHtml(service.summary)}</p>
              <ul class="detail-list">
                ${service.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join('')}
              </ul>
            </article>
          `,
        )
        .join('')}
    </div>
  </section>
`;

const experienceMarkup = () => `
  <section
    class="section section--contrast"
    id="experience"
    data-section="experience"
    aria-labelledby="experience-title"
  >
    <div class="section__header reveal" data-reveal>
      <p class="eyebrow">Experience</p>
      <h2 id="experience-title">${escapeHtml(siteContent.experienceTitle)}</h2>
      <p class="section__intro">${escapeHtml(siteContent.experienceIntro)}</p>
    </div>
    <div class="experience-grid">
      ${siteContent.experience
        .map(
          (item) => `
            <article class="card card--link reveal" data-reveal>
              <p class="card__meta">${escapeHtml(item.role)}</p>
              <h3>${escapeHtml(item.name)}</h3>
              <p>${escapeHtml(item.summary)}</p>
              <a href="${item.href}" target="_blank" rel="noreferrer noopener">Visit site</a>
            </article>
          `,
        )
        .join('')}
    </div>
  </section>
`;

const founderMarkup = () => `
  <section class="section section--profile" id="lukas" data-section="lukas" aria-labelledby="lukas-title">
    <div class="profile-card reveal" data-reveal>
      <div class="profile-card__media">
        <img
          class="profile-card__image"
          src="/assets/lukas.jpg"
          alt="${escapeHtml(siteContent.founder.name)} portrait"
          width="1000"
          height="1000"
        />
      </div>
      <div class="profile-card__body">
        <p class="eyebrow">Founder</p>
        <h2 id="lukas-title">${escapeHtml(siteContent.founder.name)}</h2>
        <p class="profile-card__role">${escapeHtml(siteContent.founder.role)} / ${escapeHtml(
          siteContent.founder.location,
        )}</p>
        <ul class="chip-list chip-list--compact" aria-label="Focus areas">
          ${siteContent.founder.focus
            .map((focus) => `<li class="chip-list__item">${escapeHtml(focus)}</li>`)
            .join('')}
        </ul>
        <div class="stack">
          ${siteContent.founder.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}
        </div>
      </div>
    </div>
  </section>
`;

const contactMarkup = () => `
  <section
    class="section section--contact"
    id="contact"
    data-section="contact"
    aria-labelledby="contact-title"
  >
    <div class="contact-card reveal" data-reveal>
      <div class="section__header section__header--compact">
        <p class="eyebrow">Contact</p>
        <h2 id="contact-title">${escapeHtml(siteContent.contact.title)}</h2>
        <p class="section__intro">${escapeHtml(siteContent.contact.summary)}</p>
      </div>
      <div class="contact-card__actions">
        <a class="button button--primary" href="${siteContent.contact.emailHref}">${escapeHtml(
          siteContent.contact.emailLabel,
        )}</a>
        <a
          class="button button--ghost"
          href="${siteContent.contact.linkedinHref}"
          target="_blank"
          rel="noreferrer noopener"
        >${escapeHtml(siteContent.contact.linkedinLabel)}</a>
      </div>
    </div>
  </section>
`;

const privacyMarkup = () => `
  <div class="privacy-layout">
    <section class="section section--privacy">
      <div class="section__header reveal" data-reveal>
        <p class="eyebrow">Privacy</p>
        <h1>Privacy policy</h1>
        <p class="section__intro">${escapeHtml(siteContent.privacyIntro)}</p>
      </div>
      <div class="prose">
        ${siteContent.privacySections
          .map(
            (section) => `
              <section class="prose__section reveal" data-reveal>
                <h2>${escapeHtml(section.title)}</h2>
                ${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}
                ${
                  section.bullets
                    ? `<ul>${section.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join('')}</ul>`
                    : ''
                }
              </section>
            `,
          )
          .join('')}
      </div>
    </section>
  </div>
`;

const jsonLd = () =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteContent.siteName,
    url: siteContent.url,
    email: siteContent.legal.email,
    areaServed: 'Europe',
    sameAs: [siteContent.legal.linkedinHref, siteContent.legal.podcastHref],
    founder: {
      '@type': 'Person',
      name: siteContent.founder.name,
    },
  });

const documentMarkup = ({ title, description, path, mainClass, bodyMarkup, scriptEntry }) => `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${escapeHtml(`${siteContent.url}${path}`)}" />
    <meta property="og:image" content="${escapeHtml(`${siteContent.url}${siteContent.ogImagePath}`)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${escapeHtml(`${siteContent.url}${siteContent.ogImagePath}`)}" />
    <link rel="icon" type="image/png" href="/favicon-32x32.png" />
    <link rel="apple-touch-icon" href="/icon-192x192.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="canonical" href="${escapeHtml(`${siteContent.url}${path}`)}" />
    <script type="application/ld+json">${jsonLd()}</script>
    <script defer data-domain="${escapeHtml(siteContent.plausible.domain)}" src="${escapeHtml(
      siteContent.plausible.src,
    )}"></script>
    <script>
      window.plausible =
        window.plausible ||
        function () {
          (window.plausible.q = window.plausible.q || []).push(arguments);
        };
    </script>
    <script type="module" src="${scriptEntry}"></script>
  </head>
  <body class="${mainClass}">
    <a class="skip-link" href="#content">Skip to content</a>
    <div class="site-shell">
      ${navMarkup(path === '/privacy/' ? 'privacy' : 'home')}
      <main id="content" class="site-main">
        ${bodyMarkup}
      </main>
      ${footerMarkup()}
    </div>
  </body>
</html>
`;

const renderHomePage = () =>
  documentMarkup({
    title: siteContent.defaultTitle,
    description: siteContent.defaultDescription,
    path: '/',
    mainClass: 'page page--home',
    scriptEntry: '/src/home.ts',
    bodyMarkup: `
      <div class="content-shell">
        ${heroMarkup()}
        ${introMarkup()}
        ${servicesMarkup()}
        ${experienceMarkup()}
        ${founderMarkup()}
        ${contactMarkup()}
      </div>
    `,
  });

const renderPrivacyPage = () =>
  documentMarkup({
    title: 'Privacy policy | booncon',
    description:
      'Privacy information for booncon.com, including controller details, hosting, analytics and direct contact handling.',
    path: '/privacy/',
    mainClass: 'page page--privacy',
    scriptEntry: '/src/privacy.ts',
    bodyMarkup: privacyMarkup(),
  });

const renderRobots = () => `User-agent: *
Allow: /

Sitemap: ${siteContent.url}/sitemap.xml
`;

const renderSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${['', '/privacy/']
  .map(
    (pathname) => `  <url>
    <loc>${siteContent.url}${pathname}</loc>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

const renderManifest = () =>
  JSON.stringify(
    {
      name: siteContent.siteName,
      short_name: siteContent.siteName,
      start_url: '/',
      scope: '/',
      display: 'standalone',
      background_color: '#f4efe3',
      theme_color: '#0f1f28',
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    null,
    2,
  );

const writeIfChanged = async (filePath, content) => {
  let current = '';
  try {
    current = await readFile(filePath, 'utf8');
  } catch {
    // Intentionally empty: file does not exist yet.
  }

  if (current === content) {
    return;
  }

  await mkdir(dirname(filePath), { recursive: true });
  await writeFile(filePath, content, 'utf8');
};

const homePage = renderHomePage();

await Promise.all([
  writeIfChanged(resolve(rootDir, 'index.html'), homePage),
  writeIfChanged(resolve(rootDir, 'privacy/index.html'), renderPrivacyPage()),
  writeIfChanged(resolve(publicDir, 'robots.txt'), renderRobots()),
  writeIfChanged(resolve(publicDir, 'sitemap.xml'), renderSitemap()),
  writeIfChanged(resolve(publicDir, 'site.webmanifest'), renderManifest()),
]);

for (const sectionId of sectionOrder) {
  if (!homePage.includes(`data-section="${sectionId}"`)) {
    throw new Error(`Missing section markup for ${sectionId}`);
  }
}
