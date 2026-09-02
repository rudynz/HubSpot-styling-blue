document.addEventListener('DOMContentLoaded', () => {
  const tabsNav = document.getElementById('tabsNav');
  const tabsContent = document.getElementById('tabsContent');
  const excludeBtn = document.getElementById('excludeBtn');
  const excludeBtnText = document.getElementById('excludeBtnText');
  const excludeIcon = document.getElementById('excludeIcon');
  const excludeHint = document.getElementById('excludeHint');
  const exclusionSection = document.getElementById('exclusionSection');
  
  let activeTab = 'all';

  let currentTabUrl = null;
  let currentPathname = null;

  function getPathnamePattern(pathname) {
    const parts = pathname.split('/').filter(Boolean);
    
    while (parts.length > 1 && /^\d+$/.test(parts[parts.length - 1])) {
      parts.pop();
    }
    
    return '/' + parts.join('/');
  }

  async function initExclusionButton() {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      
      if (!tab?.url?.includes('hubspot.com')) {
        exclusionSection.style.display = 'none';
        return;
      }

      currentTabUrl = tab.url;
      const url = new URL(tab.url);
      currentPathname = getPathnamePattern(url.pathname);

      const result = await chrome.storage.local.get(['excludedPages']);
      const excludedPages = result.excludedPages || [];
      const isExcluded = excludedPages.includes(currentPathname);

      updateExclusionUI(isExcluded);
      excludeHint.textContent = `Pattern: ${currentPathname}`;

    } catch (err) {
      console.error('Error initializing exclusion button:', err);
      exclusionSection.style.display = 'none';
    }
  }

  function updateExclusionUI(isExcluded) {
    if (isExcluded) {
      excludeBtn.classList.add('excluded');
      excludeBtnText.textContent = 'Page excluded from theme';
      excludeIcon.textContent = '✓';
    } else {
      excludeBtn.classList.remove('excluded');
      excludeBtnText.textContent = 'Exclude page from theme';
      excludeIcon.textContent = '🚫';
    }
  }

  async function toggleExclusion() {
    if (!currentPathname) return;

    try {
      const result = await chrome.storage.local.get(['excludedPages']);
      let excludedPages = result.excludedPages || [];
      
      const isCurrentlyExcluded = excludedPages.includes(currentPathname);

      if (isCurrentlyExcluded) {
        excludedPages = excludedPages.filter(p => p !== currentPathname);
      } else {
        excludedPages.push(currentPathname);
      }

      await chrome.storage.local.set({ excludedPages });
      updateExclusionUI(!isCurrentlyExcluded);

      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (tab?.id) {
        chrome.tabs.reload(tab.id);
      }

    } catch (err) {
      console.error('Error toggling exclusion:', err);
    }
  }

  excludeBtn.addEventListener('click', toggleExclusion);

  const resetBtn = document.getElementById('resetBtn');
  resetBtn.addEventListener('dblclick', async () => {
    await chrome.storage.local.set({ excludedPages: [] });
    excludeHint.textContent = 'All exclusions cleared';
    updateExclusionUI(false);
  });
  
  function createThemeCard(key, theme, selectedTheme) {
    const card = document.createElement('div');
    card.className = `theme-card ${key === selectedTheme ? 'selected' : ''}`;
    card.dataset.theme = key;
    
    const accent = document.createElement('div');
    accent.className = 'theme-accent';
    const paletteData = typeof THEMES_V2_DATA !== 'undefined' ? THEMES_V2_DATA.palettes[key] : null;
    if (paletteData?.tokens?.interactive) {
      accent.style.background = paletteData.tokens.interactive;
    } else {
      accent.style.background = '#71717a';
    }
    
    const info = document.createElement('div');
    info.className = 'theme-info';
    
    const name = document.createElement('div');
    name.className = 'theme-name';
    name.textContent = theme.name;
    
    info.appendChild(name);
    
    card.appendChild(accent);
    card.appendChild(info);
    
    card.addEventListener('click', () => selectTheme(key));
    
    return card;
  }

  function switchTab(tabKey) {
    activeTab = tabKey;
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabKey);
    });
    
    document.querySelectorAll('.tab-panel').forEach(panel => {
      panel.classList.toggle('active', panel.dataset.tab === tabKey);
    });
  }

  function renderThemes(selectedTheme) {
    tabsNav.innerHTML = '';
    tabsContent.innerHTML = '';
    
    const themes = typeof HUBSPOT_THEMES_V2 !== 'undefined' ? HUBSPOT_THEMES_V2 : HUBSPOT_THEMES;
    const categories = typeof THEME_CATEGORIES !== 'undefined' ? THEME_CATEGORIES : null;
    
    if (!categories) {
      const panel = document.createElement('div');
      panel.className = 'tab-panel active';
      panel.dataset.tab = 'all';
      
      Object.entries(themes).forEach(([key, theme]) => {
        panel.appendChild(createThemeCard(key, theme, selectedTheme));
      });
      
      tabsContent.appendChild(panel);
      return;
    }
    
    const allTab = { name: 'All', order: 0 };
    const allCategories = [['all', allTab], ...Object.entries(categories).sort((a, b) => a[1].order - b[1].order)];
    
    for (const [catKey, catInfo] of allCategories) {
      const btn = document.createElement('button');
      btn.className = `tab-btn ${catKey === activeTab ? 'active' : ''}`;
      btn.dataset.tab = catKey;
      btn.textContent = catInfo.name;
      btn.addEventListener('click', () => switchTab(catKey));
      tabsNav.appendChild(btn);
      
      const panel = document.createElement('div');
      panel.className = `tab-panel ${catKey === activeTab ? 'active' : ''}`;
      panel.dataset.tab = catKey;
      
      if (catKey === 'all') {
        if (themes.default) {
          panel.appendChild(createThemeCard('default', themes.default, selectedTheme));
        }
        Object.entries(themes).forEach(([key, theme]) => {
          if (key !== 'default') {
            panel.appendChild(createThemeCard(key, theme, selectedTheme));
          }
        });
      } else {
        const categoryThemes = Object.entries(themes)
          .filter(([key, theme]) => theme.category === catKey);
        
        for (const [key, theme] of categoryThemes) {
          panel.appendChild(createThemeCard(key, theme, selectedTheme));
        }
      }
      
      tabsContent.appendChild(panel);
    }
  }
  
  function selectTheme(themeName) {
    chrome.storage.sync.set({ selectedTheme: themeName }, () => {
      renderThemes(themeName);
      
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]?.url?.includes('hubspot.com')) {
          chrome.tabs.reload(tabs[0].id);
        }
      });
    });
  }
  
  chrome.storage.sync.get(['selectedTheme'], (result) => {
    renderThemes(result.selectedTheme || 'default');
  });

  initExclusionButton();
});
