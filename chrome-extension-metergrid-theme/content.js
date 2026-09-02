(function () {
  const STYLE_ID = 'hubspot-theme-changer-styles';
  let currentThemeName = 'default';
  let observer = null;
  let userExcludedPages = [];

  const BLOCKED_PAGES = [
    '/',
    '/design-manager/',
    '/data-agent/',
    '/breeze-knowledge/',
    '/layout-editor/'
  ];

  function isBlockedPage() {
    const path = window.location.pathname;
    const normalizedPath = path.replace(/\/$/, '') || '/';

    if (BLOCKED_PAGES.some(pattern => {
      if (pattern instanceof RegExp) return pattern.test(path);
      if (pattern === '/') return normalizedPath === '/';
      return path.includes(pattern);
    })) {
      return true;
    }

    return userExcludedPages.some(pattern => {
      const normalizedPattern = pattern.replace(/\/$/, '') || '/';
      if (normalizedPattern === '/') return normalizedPath === '/';
      return normalizedPath.includes(normalizedPattern);
    });
  }

  function generateCSS(colors, elementOverrides) {
    if (!colors) return '';

    const cssVars = Object.entries(colors).map(([key, value]) => `${key}: ${value} !important;`).join('\n        ');

    let css = `
      :root,
      html,
      html[data-hubspot-theme],
      html[data-hubspot-theme="canvas-light"],
      html[data-hubspot-theme="canvas-dark"] {
        ${cssVars}
      }
    `;

    if (elementOverrides) {
      css += elementOverrides;
    }

    return css;
  }

  function ensureStyleAtEnd() {
    const styleEl = document.getElementById(STYLE_ID);
    if (styleEl && styleEl.parentNode === document.head) {
      const lastChild = document.head.lastElementChild;
      if (lastChild !== styleEl) {
        document.head.appendChild(styleEl);
      }
    }
  }

  function applyTheme(themeName) {
    currentThemeName = themeName;
    let styleEl = document.getElementById(STYLE_ID);

    if (themeName === 'default' || !themeName || isBlockedPage()) {
      if (styleEl) styleEl.remove();
      stopObserver();
      return;
    }

    const theme = (typeof HUBSPOT_THEMES_V2 !== 'undefined' ? HUBSPOT_THEMES_V2 : HUBSPOT_THEMES)[themeName];
    if (!theme || !theme.colors) {
      if (styleEl) styleEl.remove();
      stopObserver();
      return;
    }

    const css = generateCSS(theme.colors, theme.elementOverrides);

    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = STYLE_ID;
    }

    styleEl.textContent = css;
    document.head.appendChild(styleEl);

    startObserver();
  }

  function startObserver() {
    if (observer) return;

    observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          for (const node of mutation.addedNodes) {
            if (node.nodeType === 1 && (node.tagName === 'STYLE' || node.tagName === 'LINK')) {
              ensureStyleAtEnd();
              return;
            }
          }
        }
      }
    });

    observer.observe(document.head, { childList: true });
  }

  function stopObserver() {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  }

  function init() {
    chrome.storage.local.get(['excludedPages'], (localResult) => {
      userExcludedPages = localResult.excludedPages || [];

      chrome.storage.sync.get(['selectedTheme'], (result) => {
        const theme = result.selectedTheme || 'default';
        applyTheme(theme);
      });
    });

    chrome.storage.onChanged.addListener((changes, namespace) => {
      if (namespace === 'sync' && changes.selectedTheme) {
        applyTheme(changes.selectedTheme.newValue);
      }
      if (namespace === 'local' && changes.excludedPages) {
        userExcludedPages = changes.excludedPages.newValue || [];
        applyTheme(currentThemeName);
      }
    });
  }

  if (document.head) {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})();
