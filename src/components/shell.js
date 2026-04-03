/**
 * components/shell.js
 * Renders site-wide nav and footer, handles active link state.
 */

export function renderNav(activePage = '') {
  const pages = [
    { href: 'index.html',        label: 'Start' },
    { href: 'bibliotek.html',    label: 'Bibliotek' },
    { href: 'ekonomi.html',      label: 'Ekonomi' },
    { href: 'ideologikarta.html', label: 'Kartor' },
    { href: 'verktyg.html',      label: 'Verktyget' },
  ];

  const links = pages.map(p => {
    const isActive = p.href === activePage;
    return `<a href="${p.href}" class="${isActive ? 'active' : ''}">${p.label}</a>`;
  }).join('');

  return `
    <nav class="site-nav" role="navigation" aria-label="Huvudnavigation">
      <a href="index.html" class="nav-logo">
        Politiska<span>.</span>Alternativ
      </a>
      <button
        type="button"
        class="nav-toggle"
        aria-expanded="false"
        aria-controls="mobile-nav-links"
        aria-label="Öppna meny"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="nav-links">
        ${links}
      </div>
      <div id="mobile-nav-links" class="mobile-nav-links">
        ${links}
      </div>
    </nav>
  `;
}

export function renderFooter() {
  return `
    <footer class="site-footer" role="contentinfo">
      <span>© 2026 Politiska Alternativ</span>
      <span>Politiskt neutralt verktyg för demokratiskt tänkande</span>
    </footer>
  `;
}

/**
 * Mount nav + footer into the page shell.
 * Call once per page after DOM is ready.
 */
export function mountShell(activePage) {
  const navEl = document.getElementById('site-nav');
  const footerEl = document.getElementById('site-footer');
  if (navEl)    navEl.innerHTML    = renderNav(activePage);
  if (footerEl) footerEl.innerHTML = renderFooter();

  const navRoot = navEl?.querySelector('.site-nav');
  const toggle = navRoot?.querySelector('.nav-toggle');
  const mobileMenu = navRoot?.querySelector('.mobile-nav-links');
  const mobileLinks = mobileMenu?.querySelectorAll('a') ?? [];

  if (navRoot && toggle && mobileMenu) {
    const closeMenu = () => {
      navRoot.classList.remove('mobile-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Öppna meny');
    };

    const openMenu = () => {
      navRoot.classList.add('mobile-open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Stäng meny');
    };

    toggle.addEventListener('click', () => {
      const isOpen = navRoot.classList.contains('mobile-open');
      if (isOpen) closeMenu();
      else openMenu();
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) closeMenu();
    });
  }
}
