/**
 * Adds interpretive uncertainty regions to ideologikarta.html without changing
 * the underlying representative coordinates. The ellipses are analytical
 * ranges, not statistical confidence intervals.
 */

const ranges = {
  'Politisk Kompass': {
    kommunism: [42, 112], socialdemokrati: [48, 58], socialliberalism: [44, 44],
    ekologism: [65, 70], liberalism: [42, 42], nyliberalism: [40, 82],
    libertarianism: [30, 30], ordoliberalism: [38, 84], konservatism: [70, 58],
    socialism: [56, 105], nationalism: [130, 72], fascism: [82, 34],
  },
  'Nolan-diagrammet': {
    kommunism: [45, 110], socialdemokrati: [52, 58], socialliberalism: [42, 42],
    ekologism: [70, 60], liberalism: [42, 42], nyliberalism: [36, 95],
    libertarianism: [28, 28], ordoliberalism: [38, 90], konservatism: [65, 65],
    socialism: [55, 100], nationalism: [135, 75], fascism: [95, 34],
  },
  'Kulturell karta': {
    kommunism: [90, 105], socialdemokrati: [80, 75], socialliberalism: [65, 60],
    ekologism: [82, 62], liberalism: [80, 75], nyliberalism: [105, 100],
    libertarianism: [85, 80], ordoliberalism: [110, 100], konservatism: [85, 78],
    socialism: [100, 105], nationalism: [95, 85], fascism: [80, 65],
  },
  'GAL–TAN-diagrammet': {
    kommunism: [45, 105], socialdemokrati: [52, 55], socialliberalism: [45, 42],
    ekologism: [55, 34], liberalism: [50, 62], nyliberalism: [38, 100],
    libertarianism: [34, 42], ordoliberalism: [40, 110], konservatism: [68, 52],
    socialism: [58, 92], nationalism: [130, 38], fascism: [85, 30],
  },
};

const ideologyOrder = [
  'fascism', 'liberalism', 'kommunism', 'socialliberalism', 'socialdemokrati',
  'konservatism', 'nationalism', 'nyliberalism', 'ordoliberalism',
  'socialism', 'ekologism', 'libertarianism',
];

const SVG_NS = 'http://www.w3.org/2000/svg';

function installStyles() {
  if (document.getElementById('ideology-uncertainty-styles')) return;
  const style = document.createElement('style');
  style.id = 'ideology-uncertainty-styles';
  style.textContent = `
    .map-range {
      cursor: pointer;
      fill-opacity: 0.14;
      stroke-opacity: 0.38;
      stroke-width: 1.4;
      transition: fill-opacity .18s ease, stroke-opacity .18s ease, stroke-width .18s ease;
      outline: none;
    }
    .map-range:hover,
    .map-range:focus-visible {
      fill-opacity: 0.22;
      stroke-opacity: 0.72;
      stroke-width: 2.2;
    }
    .map-center {
      pointer-events: none;
      stroke: rgba(255,255,255,.9);
      stroke-width: 1;
    }
    .map-point .point-label { pointer-events: none; }
  `;
  document.head.appendChild(style);
}

function updateMethodNote() {
  const notes = document.querySelectorAll('.chart-footer-layer .note-text');
  if (notes[0]) {
    notes[0].textContent = 'Not: Skuggad yta = rimligt placeringsområde; liten punkt = representativ placering.';
  }
  if (notes[1]) {
    notes[1].textContent = 'Områdena speglar definitionsval och intern variation; de är inte statistiska konfidensintervall.';
  }

  const desc = document.getElementById('map-svg-desc');
  if (desc) {
    desc.textContent = 'Tvådimensionell ideologisk karta. Skuggade ellipser visar rimliga placeringsområden och den lilla punkten en representativ placering.';
  }
}

function currentRanges() {
  const title = document.getElementById('svgTitle')?.textContent?.trim();
  return ranges[title] || null;
}

function enhancePoints() {
  const mapDots = document.getElementById('ideologyMapDots');
  const compassRanges = currentRanges();
  if (!mapDots || !compassRanges) return;

  const points = [...mapDots.querySelectorAll('.map-point')];
  points.forEach((group, visibleIndex) => {
    if (group.querySelector('.map-range')) return;

    const dot = group.querySelector('.map-dot');
    const label = group.querySelector('.point-label');
    if (!dot || !label) return;

    const aria = dot.getAttribute('aria-label') || '';
    const labelText = label.textContent?.trim() || '';
    let ideologyId = ideologyOrder.find(id => aria.toLowerCase().includes(id));

    if (!ideologyId) {
      const normalized = labelText.toLowerCase();
      const aliases = {
        'klassisk liberalism': 'liberalism',
        'socialdemokrati': 'socialdemokrati',
        'socialliberalism': 'socialliberalism',
        'kommunism': 'kommunism',
        'ekologism': 'ekologism',
        'nyliberalism': 'nyliberalism',
        'libertarianism': 'libertarianism',
        'ordoliberalism': 'ordoliberalism',
        'konservatism': 'konservatism',
        'socialism': 'socialism',
        'nationalism': 'nationalism',
        'fascism': 'fascism',
      };
      ideologyId = aliases[normalized];
    }

    const range = compassRanges[ideologyId];
    if (!range) return;

    const [rx, ry] = range;
    const cx = dot.getAttribute('cx');
    const cy = dot.getAttribute('cy');
    const fill = dot.getAttribute('fill');

    const ellipse = document.createElementNS(SVG_NS, 'ellipse');
    ellipse.setAttribute('cx', cx);
    ellipse.setAttribute('cy', cy);
    ellipse.setAttribute('rx', rx);
    ellipse.setAttribute('ry', ry);
    ellipse.setAttribute('fill', fill);
    ellipse.setAttribute('stroke', fill);
    ellipse.setAttribute('class', 'map-range');
    ellipse.setAttribute('role', 'button');
    ellipse.setAttribute('tabindex', '0');
    ellipse.setAttribute('aria-label', `${labelText}: öppna information; skuggad yta visar rimligt placeringsområde`);

    const activate = () => dot.click();
    ellipse.addEventListener('click', activate);
    ellipse.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        activate();
      }
    });

    dot.setAttribute('r', '3.5');
    dot.setAttribute('class', 'map-center');
    dot.setAttribute('tabindex', '-1');
    dot.removeAttribute('role');
    dot.removeAttribute('aria-label');

    label.setAttribute('y', Number(cy) - ry - 8);
    group.insertBefore(ellipse, dot);
  });
}

export function mountIdeologyUncertainty() {
  installStyles();
  updateMethodNote();

  const mapDots = document.getElementById('ideologyMapDots');
  if (!mapDots) return;

  enhancePoints();

  const observer = new MutationObserver(() => {
    updateMethodNote();
    enhancePoints();
  });
  observer.observe(mapDots, { childList: true });
}

mountIdeologyUncertainty();
