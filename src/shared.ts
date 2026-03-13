import '@fontsource-variable/manrope';
import '@fontsource-variable/newsreader';

import './styles.css';

interface InitSiteOptions {
  trackSections?: boolean;
}

const setScrolledState = () => {
  document.body.dataset.scrolled = window.scrollY > 24 ? 'true' : 'false';
};

const revealElements = () => {
  const revealTargets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

  if (!('IntersectionObserver' in window)) {
    for (const target of revealTargets) {
      target.classList.add('is-visible');
    }
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          continue;
        }

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    },
    {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.2,
    },
  );

  for (const target of revealTargets) {
    observer.observe(target);
  }
};

const trackSections = () => {
  const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));
  const links = Array.from(
    document.querySelectorAll<HTMLAnchorElement>('[data-nav-link][href^="#"]'),
  );

  if (!sections.length || !links.length || !('IntersectionObserver' in window)) {
    return;
  }

  const linkBySection = new Map(
    links.map((link) => [link.getAttribute('href')?.replace('#', ''), link] as const),
  );

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

      if (!visibleEntry) {
        return;
      }

      const currentId = (visibleEntry.target as HTMLElement).dataset.section;

      for (const [sectionId, link] of linkBySection) {
        if (!sectionId) {
          continue;
        }

        if (sectionId === currentId) {
          link.setAttribute('aria-current', 'true');
        } else {
          link.removeAttribute('aria-current');
        }
      }
    },
    {
      rootMargin: '-30% 0px -55% 0px',
      threshold: [0.15, 0.35, 0.55],
    },
  );

  for (const section of sections) {
    observer.observe(section);
  }
};

export const initSite = ({ trackSections: shouldTrackSections = false }: InitSiteOptions = {}) => {
  for (const yearTarget of document.querySelectorAll<HTMLElement>('[data-year]')) {
    yearTarget.textContent = new Date().getFullYear().toString();
  }

  setScrolledState();
  window.addEventListener('scroll', setScrolledState, { passive: true });

  revealElements();

  if (shouldTrackSections) {
    trackSections();
  }

  window.requestAnimationFrame(() => {
    document.body.dataset.ready = 'true';
  });
};
