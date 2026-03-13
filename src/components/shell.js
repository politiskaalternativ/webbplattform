/**
 * components/shell.js
 * Renders site-wide nav and footer, handles active link state.
 */

export function renderNav(activePage = '') {
  const pages = [
    { href: 'index.html',     label: 'Start' },
    { href: 'verktyg.html',   label: 'Verktyget' },
    { href: 'bibliotek.html', label: 'Bibliotek' },
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
      <div class="nav-links">
        ${links}
        <a href="verktyg.html" class="nav-cta">Skapa instruktion</a>
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
}
