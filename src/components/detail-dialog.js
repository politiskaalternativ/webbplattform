const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

export function createDetailDialog({ overlay, panel, content, closeButton }) {
  let opener = null;
  let previousBodyOverflow = '';

  overlay.setAttribute('inert', '');

  function isOpen() {
    return overlay.classList.contains('open');
  }

  function getFocusableElements() {
    return [...panel.querySelectorAll(FOCUSABLE_SELECTOR)]
      .filter(element => element.getClientRects().length > 0);
  }

  function open(trigger) {
    const wasOpen = isOpen();

    if (!wasOpen) {
      opener = trigger ?? document.activeElement;
      previousBodyOverflow = document.body.style.overflow;
    }

    const title = content.querySelector('h2');
    if (title) {
      title.id ||= `${overlay.id}-title`;
      panel.setAttribute('aria-labelledby', title.id);
    }

    panel.scrollTop = 0;
    overlay.removeAttribute('inert');
    overlay.setAttribute('aria-hidden', 'false');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeButton.focus();
  }

  function close() {
    if (!isOpen()) return;

    overlay.classList.remove('open');

    if (opener?.isConnected && typeof opener.focus === 'function') {
      opener.focus();
    }

    overlay.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('inert', '');
    document.body.style.overflow = previousBodyOverflow;
    opener = null;
  }

  function handleKeydown(event) {
    if (!isOpen()) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      close();
      return;
    }

    if (event.key !== 'Tab') return;

    const focusableElements = getFocusableElements();
    if (focusableElements.length === 0) {
      event.preventDefault();
      panel.focus();
      return;
    }

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  closeButton.addEventListener('click', close);
  overlay.addEventListener('click', event => {
    if (event.target === overlay) close();
  });
  document.addEventListener('keydown', handleKeydown);

  return { open, close };
}
