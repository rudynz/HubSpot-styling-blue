const THEMES_V2_DATA = {
  palettes: {
    metergrid: {
      name: "metergrid",
      description: "metergrid CI/CD - helles Grundlayout wie die Light-Themes, Akzente in metergrid-Navy/Blau",
      category: "metergrid",
      preview: { bodyBg: "#fcfdfe", headerBg: "#ffffff", sidebarBg: "#ffffff", cardBg: "#fcfdfe" },
      tokens: {
        surfaceBase: "#fcfdfe", surfaceRaised: "#fcfdfe", surfaceHover: "#f2f6fb", surfacePressed: "#d6e4f7",
        textPrimary: "#1e2a4a", textSecondary: "#5d7182", textDisabled: "#9ca3af", textOnFill: "#ffffff",
        accent1: "#005edf", accent2: "#264ca6", accent3: "#5d8ae0", accent4: "#a9c3e8",
        interactive: "#005edf", interactiveHover: "#264ca6", interactivePressed: "#002c96",
        brand: "#005edf", brandHover: "#264ca6", brandPressed: "#002c96", brandSubtle: "#e6f0fd",
        borderDefault: "#cfdcf0", borderSubtle: "#e6edf7", borderHover: "#a9c3e8", borderAccent: "#005edf",
        statusAlert: "#dc2626", statusAlertHover: "#b91c1c", statusAlertPressed: "#991b1b", statusAlertSubtle: "#fef2f2", statusAlertText: "#dc2626",
        statusPositive: "#16a34a", statusPositiveHover: "#15803d", statusPositivePressed: "#166534", statusPositiveSubtle: "#e0faf2", statusPositiveText: "#002c96",
        statusCaution: "#ca8a04", statusCautionHover: "#a16207", statusCautionPressed: "#854d0e", statusCautionSubtle: "#fefce8", statusCautionText: "#ca8a04",
        statusInfo: "#0284c7", statusInfoHover: "#0369a1", statusInfoPressed: "#075985", statusInfoSubtle: "#f0f9ff", statusInfoText: "#0284c7",
        navBg: "#ffffff", navIcon: "#005edf", navIconHover: "#264ca6", navText: "#1e2a4a",
        cardBg: "#fcfdfe", cardBorder: "#cfdcf0", cardHover: "#f2f6fb",
        buttonPrimaryBg: "#005edf", buttonPrimaryText: "#ffffff", buttonSecondaryBg: "#ffffff", buttonSecondaryText: "#005edf", buttonSecondaryBorder: "#cfdcf0",
        inputBg: "#ffffff", inputBorder: "#cfdcf0", inputFocus: "#005edf", inputText: "#1e2a4a", inputPlaceholder: "#9ca3af",
        tableBg: "#ffffff", tableHeaderBg: "#fcfdfe", tableRowHover: "#f2f6fb", tableBorder: "#cfdcf0",
        modalBg: "#ffffff", modalBorder: "#cfdcf0", tooltipBg: "#1e2a4a", tooltipText: "#ffffff",
        badgeBg: "#e6f0fd", badgeText: "#002c96", progressBg: "#e6edf7", progressFill: "#005edf",
        gradientPrimary: null, gradientAccent: null
      }
    },

    metergrid_dark: {
      name: "metergrid dark",
      description: "metergrid CI/CD - Topbar + Sidebar durchgehend Navy, Content bleibt hell",
      category: "metergrid",
      preview: { bodyBg: "#fcfdfe", headerBg: "#002c96", sidebarBg: "#002c96", cardBg: "#fcfdfe" },
      tokens: {
        surfaceBase: "#fcfdfe", surfaceRaised: "#fcfdfe", surfaceHover: "#f2f6fb", surfacePressed: "#005edf",
        textPrimary: "#1e2a4a", textSecondary: "#5d7182", textDisabled: "#9ca3af", textOnFill: "#ffffff",
        accent1: "#005edf", accent2: "#264ca6", accent3: "#5d8ae0", accent4: "#a9c3e8",
        interactive: "#005edf", interactiveHover: "#264ca6", interactivePressed: "#002c96",
        brand: "#005edf", brandHover: "#264ca6", brandPressed: "#002c96", brandSubtle: "#e6f0fd",
        borderDefault: "#cfdcf0", borderSubtle: "#e6edf7", borderHover: "#a9c3e8", borderAccent: "#005edf",
        statusAlert: "#dc2626", statusAlertHover: "#b91c1c", statusAlertPressed: "#991b1b", statusAlertSubtle: "#fef2f2", statusAlertText: "#dc2626",
        statusPositive: "#16a34a", statusPositiveHover: "#15803d", statusPositivePressed: "#166534", statusPositiveSubtle: "#e0faf2", statusPositiveText: "#002c96",
        statusCaution: "#ca8a04", statusCautionHover: "#a16207", statusCautionPressed: "#854d0e", statusCautionSubtle: "#fefce8", statusCautionText: "#ca8a04",
        statusInfo: "#0284c7", statusInfoHover: "#0369a1", statusInfoPressed: "#075985", statusInfoSubtle: "#f0f9ff", statusInfoText: "#0284c7",
        navBg: "#002c96", navIcon: "#c9d4e8", navIconHover: "#ffffff", navText: "#c9d4e8",
        cardBg: "#fcfdfe", cardBorder: "#cfdcf0", cardHover: "#f2f6fb",
        buttonPrimaryBg: "#005edf", buttonPrimaryText: "#ffffff", buttonSecondaryBg: "#ffffff", buttonSecondaryText: "#005edf", buttonSecondaryBorder: "#cfdcf0",
        inputBg: "#ffffff", inputBorder: "#cfdcf0", inputFocus: "#005edf", inputText: "#1e2a4a", inputPlaceholder: "#9ca3af",
        tableBg: "#ffffff", tableHeaderBg: "#fcfdfe", tableRowHover: "#f2f6fb", tableBorder: "#cfdcf0",
        modalBg: "#ffffff", modalBorder: "#cfdcf0", tooltipBg: "#1e2a4a", tooltipText: "#ffffff",
        badgeBg: "#e6f0fd", badgeText: "#002c96", progressBg: "#e6edf7", progressFill: "#005edf",
        gradientPrimary: null, gradientAccent: null
      }
    },

    psychedelic_lsd: {
      name: "Psychedelic LSD 🍄🌈",
      description: "Joke-Theme. Nicht fuer Dauerbetrieb (oder Epilepsie) geeignet.",
      category: "joke",
      preview: { bodyBg: "#0a0014", headerBg: "#ff00ea", sidebarBg: "#ff00ea", cardBg: "#1a0033" },
      tokens: {
        surfaceBase: "#0a0014", surfaceRaised: "#1a0033", surfaceHover: "#ff00ea", surfacePressed: "#00ff9f",
        textPrimary: "#00ff9f", textSecondary: "#ff00ea", textDisabled: "#6b21a8", textOnFill: "#0a0014",
        accent1: "#ff00ea", accent2: "#00fff9", accent3: "#faff00", accent4: "#ff5f00",
        interactive: "#faff00", interactiveHover: "#00fff9", interactivePressed: "#ff00ea",
        brand: "#ff5f00", brandHover: "#faff00", brandPressed: "#ff00ea", brandSubtle: "#3d0a3d",
        borderDefault: "#00fff9", borderSubtle: "#6b21a8", borderHover: "#faff00", borderAccent: "#ff00ea",
        statusAlert: "#ff0044", statusAlertHover: "#ff5c85", statusAlertPressed: "#c2003a", statusAlertSubtle: "#3d000f", statusAlertText: "#ff5c85",
        statusPositive: "#00ff9f", statusPositiveHover: "#5fffc4", statusPositivePressed: "#00c47f", statusPositiveSubtle: "#003d26", statusPositiveText: "#00ff9f",
        statusCaution: "#faff00", statusCautionHover: "#ffff66", statusCautionPressed: "#c2c200", statusCautionSubtle: "#3d3d00", statusCautionText: "#faff00",
        statusInfo: "#00fff9", statusInfoHover: "#66fffb", statusInfoPressed: "#00c2bd", statusInfoSubtle: "#003d3b", statusInfoText: "#00fff9",
        navBg: "#ff00ea", navIcon: "#faff00", navIconHover: "#00fff9", navText: "#0a0014",
        cardBg: "#1a0033", cardBorder: "#ff00ea", cardHover: "#3d0a3d",
        buttonPrimaryBg: "#faff00", buttonPrimaryText: "#0a0014", buttonSecondaryBg: "#1a0033", buttonSecondaryText: "#00fff9", buttonSecondaryBorder: "#ff00ea",
        inputBg: "#1a0033", inputBorder: "#00fff9", inputFocus: "#faff00", inputText: "#00ff9f", inputPlaceholder: "#a21caf",
        tableBg: "#0a0014", tableHeaderBg: "#ff00ea", tableRowHover: "#3d0a3d", tableBorder: "#00fff9",
        modalBg: "#1a0033", modalBorder: "#ff00ea", tooltipBg: "#faff00", tooltipText: "#0a0014",
        badgeBg: "#00fff9", badgeText: "#0a0014", progressBg: "#3d0a3d", progressFill: "#ff5f00",
        gradientPrimary: "linear-gradient(135deg, #ff00ea 0%, #00fff9 25%, #faff00 50%, #ff5f00 75%, #00ff9f 100%)",
        gradientAccent: "linear-gradient(90deg, #ff00ea, #00fff9, #faff00, #ff5f00, #00ff9f, #ff00ea)"
      }
    },

    // ==========================================
    // BLOCK COLOR THEMES (Dark monochromatic)
    // ==========================================

    crimson_red: {
      name: "Crimson Red",
      description: "Vivid red on pure dark backgrounds",
      category: "block",
      preview: { bodyBg: "#0d0d0d", headerBg: "#1a1a1a", sidebarBg: "#1a1a1a", cardBg: "#1a1a1a" },
      tokens: {
        surfaceBase: "#0d0d0d", surfaceRaised: "#1a1a1a", surfaceHover: "#2a2a2a", surfacePressed: "#3a3a3a",
        textPrimary: "#ffffff", textSecondary: "#ff6666", textDisabled: "#666666", textOnFill: "#ffffff",
        accent1: "#ff3333", accent2: "#ff5555", accent3: "#ff7777", accent4: "#ff9999",
        interactive: "#ff3333", interactiveHover: "#ff5555", interactivePressed: "#cc2929",
        brand: "#ff3333", brandHover: "#ff5555", brandPressed: "#cc2929", brandSubtle: "#330d0d",
        borderDefault: "#333333", borderSubtle: "#262626", borderHover: "#444444", borderAccent: "#ff3333",
        statusAlert: "#ff3333", statusAlertHover: "#ff5555", statusAlertPressed: "#cc2929", statusAlertSubtle: "#331111", statusAlertText: "#ff5555",
        statusPositive: "#00cc66", statusPositiveHover: "#33d685", statusPositivePressed: "#00a352", statusPositiveSubtle: "#003319", statusPositiveText: "#00cc66",
        statusCaution: "#ffcc00", statusCautionHover: "#ffd633", statusCautionPressed: "#cca300", statusCautionSubtle: "#332900", statusCautionText: "#ffcc00",
        statusInfo: "#0099ff", statusInfoHover: "#33adff", statusInfoPressed: "#007acc", statusInfoSubtle: "#001a33", statusInfoText: "#0099ff",
        navBg: "#1a1a1a", navIcon: "#ff3333", navIconHover: "#ff5555", navText: "#ffffff",
        cardBg: "#1a1a1a", cardBorder: "#333333", cardHover: "#2a2a2a",
        buttonPrimaryBg: "#ff3333", buttonPrimaryText: "#ffffff", buttonSecondaryBg: "#1a1a1a", buttonSecondaryText: "#ffffff", buttonSecondaryBorder: "#333333",
        inputBg: "#1a1a1a", inputBorder: "#333333", inputFocus: "#ff3333", inputText: "#ffffff", inputPlaceholder: "#666666",
        tableBg: "#0d0d0d", tableHeaderBg: "#1a1a1a", tableRowHover: "#2a2a2a", tableBorder: "#333333",
        modalBg: "#1a1a1a", modalBorder: "#333333", tooltipBg: "#2a2a2a", tooltipText: "#ffffff",
        badgeBg: "#2a2a2a", badgeText: "#ffffff", progressBg: "#2a2a2a", progressFill: "#ff3333",
        gradientPrimary: null, gradientAccent: null
      }
    },

    midnight_blue: {
      name: "Midnight Blue",
      description: "Vivid blue on pure dark backgrounds",
      category: "block",
      preview: { bodyBg: "#0d0d0d", headerBg: "#1a1a1a", sidebarBg: "#1a1a1a", cardBg: "#1a1a1a" },
      tokens: {
        surfaceBase: "#0d0d0d", surfaceRaised: "#1a1a1a", surfaceHover: "#2a2a2a", surfacePressed: "#3a3a3a",
        textPrimary: "#ffffff", textSecondary: "#66b3ff", textDisabled: "#666666", textOnFill: "#ffffff",
        accent1: "#0099ff", accent2: "#33adff", accent3: "#66c2ff", accent4: "#99d6ff",
        interactive: "#0099ff", interactiveHover: "#33adff", interactivePressed: "#007acc",
        brand: "#0099ff", brandHover: "#33adff", brandPressed: "#007acc", brandSubtle: "#001a33",
        borderDefault: "#333333", borderSubtle: "#262626", borderHover: "#444444", borderAccent: "#0099ff",
        statusAlert: "#ff4444", statusAlertHover: "#ff6666", statusAlertPressed: "#cc3333", statusAlertSubtle: "#331111", statusAlertText: "#ff6666",
        statusPositive: "#00cc66", statusPositiveHover: "#33d685", statusPositivePressed: "#00a352", statusPositiveSubtle: "#003319", statusPositiveText: "#00cc66",
        statusCaution: "#ffcc00", statusCautionHover: "#ffd633", statusCautionPressed: "#cca300", statusCautionSubtle: "#332900", statusCautionText: "#ffcc00",
        statusInfo: "#0099ff", statusInfoHover: "#33adff", statusInfoPressed: "#007acc", statusInfoSubtle: "#001a33", statusInfoText: "#0099ff",
        navBg: "#1a1a1a", navIcon: "#0099ff", navIconHover: "#33adff", navText: "#ffffff",
        cardBg: "#1a1a1a", cardBorder: "#333333", cardHover: "#2a2a2a",
        buttonPrimaryBg: "#0099ff", buttonPrimaryText: "#ffffff", buttonSecondaryBg: "#1a1a1a", buttonSecondaryText: "#ffffff", buttonSecondaryBorder: "#333333",
        inputBg: "#1a1a1a", inputBorder: "#333333", inputFocus: "#0099ff", inputText: "#ffffff", inputPlaceholder: "#666666",
        tableBg: "#0d0d0d", tableHeaderBg: "#1a1a1a", tableRowHover: "#2a2a2a", tableBorder: "#333333",
        modalBg: "#1a1a1a", modalBorder: "#333333", tooltipBg: "#2a2a2a", tooltipText: "#ffffff",
        badgeBg: "#2a2a2a", badgeText: "#ffffff", progressBg: "#2a2a2a", progressFill: "#0099ff",
        gradientPrimary: null, gradientAccent: null
      }
    },

    hubspot_orange: {
      name: "HubSpot Orange",
      description: "Vibrant orange on pure dark backgrounds",
      category: "block",
      preview: { bodyBg: "#0d0d0d", headerBg: "#1a1a1a", sidebarBg: "#1a1a1a", cardBg: "#1a1a1a" },
      tokens: {
        surfaceBase: "#0d0d0d", surfaceRaised: "#1a1a1a", surfaceHover: "#2a2a2a", surfacePressed: "#3a3a3a",
        textPrimary: "#ffffff", textSecondary: "#ff9966", textDisabled: "#666666", textOnFill: "#ffffff",
        accent1: "#ff6600", accent2: "#ff8533", accent3: "#ffa366", accent4: "#ffc299",
        interactive: "#ff6600", interactiveHover: "#ff8533", interactivePressed: "#cc5200",
        brand: "#ff6600", brandHover: "#ff8533", brandPressed: "#cc5200", brandSubtle: "#331a00",
        borderDefault: "#333333", borderSubtle: "#262626", borderHover: "#444444", borderAccent: "#ff6600",
        statusAlert: "#ff4444", statusAlertHover: "#ff6666", statusAlertPressed: "#cc3333", statusAlertSubtle: "#331111", statusAlertText: "#ff6666",
        statusPositive: "#00cc66", statusPositiveHover: "#33d685", statusPositivePressed: "#00a352", statusPositiveSubtle: "#003319", statusPositiveText: "#00cc66",
        statusCaution: "#ffcc00", statusCautionHover: "#ffd633", statusCautionPressed: "#cca300", statusCautionSubtle: "#332900", statusCautionText: "#ffcc00",
        statusInfo: "#0099ff", statusInfoHover: "#33adff", statusInfoPressed: "#007acc", statusInfoSubtle: "#001a33", statusInfoText: "#0099ff",
        navBg: "#1a1a1a", navIcon: "#ff6600", navIconHover: "#ff8533", navText: "#ffffff",
        cardBg: "#1a1a1a", cardBorder: "#333333", cardHover: "#2a2a2a",
        buttonPrimaryBg: "#ff6600", buttonPrimaryText: "#ffffff", buttonSecondaryBg: "#1a1a1a", buttonSecondaryText: "#ffffff", buttonSecondaryBorder: "#333333",
        inputBg: "#1a1a1a", inputBorder: "#333333", inputFocus: "#ff6600", inputText: "#ffffff", inputPlaceholder: "#666666",
        tableBg: "#0d0d0d", tableHeaderBg: "#1a1a1a", tableRowHover: "#2a2a2a", tableBorder: "#333333",
        modalBg: "#1a1a1a", modalBorder: "#333333", tooltipBg: "#2a2a2a", tooltipText: "#ffffff",
        badgeBg: "#2a2a2a", badgeText: "#ffffff", progressBg: "#2a2a2a", progressFill: "#ff6600",
        gradientPrimary: null, gradientAccent: null
      }
    },

    ocean_teal: {
      name: "Ocean Teal",
      description: "Vivid teal on pure dark backgrounds",
      category: "block",
      preview: { bodyBg: "#0d0d0d", headerBg: "#1a1a1a", sidebarBg: "#1a1a1a", cardBg: "#1a1a1a" },
      tokens: {
        surfaceBase: "#0d0d0d", surfaceRaised: "#1a1a1a", surfaceHover: "#2a2a2a", surfacePressed: "#3a3a3a",
        textPrimary: "#ffffff", textSecondary: "#66e6cc", textDisabled: "#666666", textOnFill: "#ffffff",
        accent1: "#00ccaa", accent2: "#33d6bb", accent3: "#66e0cc", accent4: "#99ebdd",
        interactive: "#00ccaa", interactiveHover: "#33d6bb", interactivePressed: "#00a388",
        brand: "#00ccaa", brandHover: "#33d6bb", brandPressed: "#00a388", brandSubtle: "#003329",
        borderDefault: "#333333", borderSubtle: "#262626", borderHover: "#444444", borderAccent: "#00ccaa",
        statusAlert: "#ff4444", statusAlertHover: "#ff6666", statusAlertPressed: "#cc3333", statusAlertSubtle: "#331111", statusAlertText: "#ff6666",
        statusPositive: "#00cc66", statusPositiveHover: "#33d685", statusPositivePressed: "#00a352", statusPositiveSubtle: "#003319", statusPositiveText: "#00cc66",
        statusCaution: "#ffcc00", statusCautionHover: "#ffd633", statusCautionPressed: "#cca300", statusCautionSubtle: "#332900", statusCautionText: "#ffcc00",
        statusInfo: "#0099ff", statusInfoHover: "#33adff", statusInfoPressed: "#007acc", statusInfoSubtle: "#001a33", statusInfoText: "#0099ff",
        navBg: "#1a1a1a", navIcon: "#00ccaa", navIconHover: "#33d6bb", navText: "#ffffff",
        cardBg: "#1a1a1a", cardBorder: "#333333", cardHover: "#2a2a2a",
        buttonPrimaryBg: "#00ccaa", buttonPrimaryText: "#ffffff", buttonSecondaryBg: "#1a1a1a", buttonSecondaryText: "#ffffff", buttonSecondaryBorder: "#333333",
        inputBg: "#1a1a1a", inputBorder: "#333333", inputFocus: "#00ccaa", inputText: "#ffffff", inputPlaceholder: "#666666",
        tableBg: "#0d0d0d", tableHeaderBg: "#1a1a1a", tableRowHover: "#2a2a2a", tableBorder: "#333333",
        modalBg: "#1a1a1a", modalBorder: "#333333", tooltipBg: "#2a2a2a", tooltipText: "#ffffff",
        badgeBg: "#2a2a2a", badgeText: "#ffffff", progressBg: "#2a2a2a", progressFill: "#00ccaa",
        gradientPrimary: null, gradientAccent: null
      }
    },

    golden_yellow: {
      name: "Golden Yellow",
      description: "Vivid gold on pure dark backgrounds",
      category: "block",
      preview: { bodyBg: "#0d0d0d", headerBg: "#1a1a1a", sidebarBg: "#1a1a1a", cardBg: "#1a1a1a" },
      tokens: {
        surfaceBase: "#0d0d0d", surfaceRaised: "#1a1a1a", surfaceHover: "#2a2a2a", surfacePressed: "#3a3a3a",
        textPrimary: "#ffffff", textSecondary: "#ffdd66", textDisabled: "#666666", textOnFill: "#1a1a1a",
        accent1: "#ffcc00", accent2: "#ffd633", accent3: "#ffe066", accent4: "#ffeb99",
        interactive: "#ffcc00", interactiveHover: "#ffd633", interactivePressed: "#cca300",
        brand: "#ffcc00", brandHover: "#ffd633", brandPressed: "#cca300", brandSubtle: "#332900",
        borderDefault: "#333333", borderSubtle: "#262626", borderHover: "#444444", borderAccent: "#ffcc00",
        statusAlert: "#ff4444", statusAlertHover: "#ff6666", statusAlertPressed: "#cc3333", statusAlertSubtle: "#331111", statusAlertText: "#ff6666",
        statusPositive: "#00cc66", statusPositiveHover: "#33d685", statusPositivePressed: "#00a352", statusPositiveSubtle: "#003319", statusPositiveText: "#00cc66",
        statusCaution: "#ffcc00", statusCautionHover: "#ffd633", statusCautionPressed: "#cca300", statusCautionSubtle: "#332900", statusCautionText: "#ffd633",
        statusInfo: "#0099ff", statusInfoHover: "#33adff", statusInfoPressed: "#007acc", statusInfoSubtle: "#001a33", statusInfoText: "#0099ff",
        navBg: "#1a1a1a", navIcon: "#ffcc00", navIconHover: "#ffd633", navText: "#ffffff",
        cardBg: "#1a1a1a", cardBorder: "#333333", cardHover: "#2a2a2a",
        buttonPrimaryBg: "#ffcc00", buttonPrimaryText: "#1a1a1a", buttonSecondaryBg: "#1a1a1a", buttonSecondaryText: "#ffffff", buttonSecondaryBorder: "#333333",
        inputBg: "#1a1a1a", inputBorder: "#333333", inputFocus: "#ffcc00", inputText: "#ffffff", inputPlaceholder: "#666666",
        tableBg: "#0d0d0d", tableHeaderBg: "#1a1a1a", tableRowHover: "#2a2a2a", tableBorder: "#333333",
        modalBg: "#1a1a1a", modalBorder: "#333333", tooltipBg: "#2a2a2a", tooltipText: "#ffffff",
        badgeBg: "#2a2a2a", badgeText: "#ffffff", progressBg: "#2a2a2a", progressFill: "#ffcc00",
        gradientPrimary: null, gradientAccent: null
      }
    },

    forest_green: {
      name: "Forest Green",
      description: "Vivid green on pure dark backgrounds",
      category: "block",
      preview: { bodyBg: "#0d0d0d", headerBg: "#1a1a1a", sidebarBg: "#1a1a1a", cardBg: "#1a1a1a" },
      tokens: {
        surfaceBase: "#0d0d0d", surfaceRaised: "#1a1a1a", surfaceHover: "#2a2a2a", surfacePressed: "#3a3a3a",
        textPrimary: "#ffffff", textSecondary: "#66e699", textDisabled: "#666666", textOnFill: "#ffffff",
        accent1: "#00cc66", accent2: "#33d685", accent3: "#66e0a3", accent4: "#99ebc2",
        interactive: "#00cc66", interactiveHover: "#33d685", interactivePressed: "#00a352",
        brand: "#00cc66", brandHover: "#33d685", brandPressed: "#00a352", brandSubtle: "#003319",
        borderDefault: "#333333", borderSubtle: "#262626", borderHover: "#444444", borderAccent: "#00cc66",
        statusAlert: "#ff4444", statusAlertHover: "#ff6666", statusAlertPressed: "#cc3333", statusAlertSubtle: "#331111", statusAlertText: "#ff6666",
        statusPositive: "#00cc66", statusPositiveHover: "#33d685", statusPositivePressed: "#00a352", statusPositiveSubtle: "#003319", statusPositiveText: "#00cc66",
        statusCaution: "#ffcc00", statusCautionHover: "#ffd633", statusCautionPressed: "#cca300", statusCautionSubtle: "#332900", statusCautionText: "#ffcc00",
        statusInfo: "#0099ff", statusInfoHover: "#33adff", statusInfoPressed: "#007acc", statusInfoSubtle: "#001a33", statusInfoText: "#0099ff",
        navBg: "#1a1a1a", navIcon: "#00cc66", navIconHover: "#33d685", navText: "#ffffff",
        cardBg: "#1a1a1a", cardBorder: "#333333", cardHover: "#2a2a2a",
        buttonPrimaryBg: "#00cc66", buttonPrimaryText: "#ffffff", buttonSecondaryBg: "#1a1a1a", buttonSecondaryText: "#ffffff", buttonSecondaryBorder: "#333333",
        inputBg: "#1a1a1a", inputBorder: "#333333", inputFocus: "#00cc66", inputText: "#ffffff", inputPlaceholder: "#666666",
        tableBg: "#0d0d0d", tableHeaderBg: "#1a1a1a", tableRowHover: "#2a2a2a", tableBorder: "#333333",
        modalBg: "#1a1a1a", modalBorder: "#333333", tooltipBg: "#2a2a2a", tooltipText: "#ffffff",
        badgeBg: "#2a2a2a", badgeText: "#ffffff", progressBg: "#2a2a2a", progressFill: "#00cc66",
        gradientPrimary: null, gradientAccent: null
      }
    },

    // ==========================================
    // LIGHT MODE BLOCK THEMES
    // ==========================================

    crimson_red_light: {
      name: "Crimson Red Light",
      description: "Vivid red on clean white backgrounds",
      category: "light",
      preview: { bodyBg: "#f8fafc", headerBg: "#ffffff", sidebarBg: "#ffffff", cardBg: "#ffffff" },
      tokens: {
        surfaceBase: "#f8fafc", surfaceRaised: "#ffffff", surfaceHover: "#fef2f2", surfacePressed: "#fee2e2",
        textPrimary: "#1a1a1a", textSecondary: "#4b5563", textDisabled: "#9ca3af", textOnFill: "#1a1a1a",
        accent1: "#ff3333", accent2: "#ff5555", accent3: "#ff7777", accent4: "#ff9999",
        interactive: "#dc2626", interactiveHover: "#b91c1c", interactivePressed: "#991b1b",
        brand: "#ff3333", brandHover: "#ff5555", brandPressed: "#cc2929", brandSubtle: "#fef2f2",
        borderDefault: "#e5e7eb", borderSubtle: "#f3f4f6", borderHover: "#d1d5db", borderAccent: "#ff3333",
        statusAlert: "#dc2626", statusAlertHover: "#b91c1c", statusAlertPressed: "#991b1b", statusAlertSubtle: "#fef2f2", statusAlertText: "#dc2626",
        statusPositive: "#16a34a", statusPositiveHover: "#15803d", statusPositivePressed: "#166534", statusPositiveSubtle: "#f0fdf4", statusPositiveText: "#16a34a",
        statusCaution: "#ca8a04", statusCautionHover: "#a16207", statusCautionPressed: "#854d0e", statusCautionSubtle: "#fefce8", statusCautionText: "#ca8a04",
        statusInfo: "#0284c7", statusInfoHover: "#0369a1", statusInfoPressed: "#075985", statusInfoSubtle: "#f0f9ff", statusInfoText: "#0284c7",
        navBg: "#ffffff", navIcon: "#ff3333", navIconHover: "#cc2929", navText: "#1a1a1a",
        cardBg: "#ffffff", cardBorder: "#e5e7eb", cardHover: "#fef2f2",
        buttonPrimaryBg: "#ff3333", buttonPrimaryText: "#1a1a1a", buttonSecondaryBg: "#ffffff", buttonSecondaryText: "#1a1a1a", buttonSecondaryBorder: "#e5e7eb",
        inputBg: "#ffffff", inputBorder: "#e5e7eb", inputFocus: "#ff3333", inputText: "#1a1a1a", inputPlaceholder: "#9ca3af",
        tableBg: "#ffffff", tableHeaderBg: "#f8fafc", tableRowHover: "#fef2f2", tableBorder: "#e5e7eb",
        modalBg: "#ffffff", modalBorder: "#e5e7eb", tooltipBg: "#1a1a1a", tooltipText: "#ffffff",
        badgeBg: "#fef2f2", badgeText: "#dc2626", progressBg: "#e5e7eb", progressFill: "#ff3333",
        gradientPrimary: null, gradientAccent: null
      }
    },

    midnight_blue_light: {
      name: "Midnight Blue Light",
      description: "Vivid blue on clean white backgrounds",
      category: "light",
      preview: { bodyBg: "#f8fafc", headerBg: "#ffffff", sidebarBg: "#ffffff", cardBg: "#ffffff" },
      tokens: {
        surfaceBase: "#f8fafc", surfaceRaised: "#ffffff", surfaceHover: "#eff6ff", surfacePressed: "#dbeafe",
        textPrimary: "#1a1a1a", textSecondary: "#4b5563", textDisabled: "#9ca3af", textOnFill: "#1a1a1a",
        accent1: "#0099ff", accent2: "#33adff", accent3: "#66c2ff", accent4: "#99d6ff",
        interactive: "#2563eb", interactiveHover: "#1d4ed8", interactivePressed: "#1e40af",
        brand: "#0099ff", brandHover: "#33adff", brandPressed: "#007acc", brandSubtle: "#eff6ff",
        borderDefault: "#e5e7eb", borderSubtle: "#f3f4f6", borderHover: "#d1d5db", borderAccent: "#0099ff",
        statusAlert: "#dc2626", statusAlertHover: "#b91c1c", statusAlertPressed: "#991b1b", statusAlertSubtle: "#fef2f2", statusAlertText: "#dc2626",
        statusPositive: "#16a34a", statusPositiveHover: "#15803d", statusPositivePressed: "#166534", statusPositiveSubtle: "#f0fdf4", statusPositiveText: "#16a34a",
        statusCaution: "#ca8a04", statusCautionHover: "#a16207", statusCautionPressed: "#854d0e", statusCautionSubtle: "#fefce8", statusCautionText: "#ca8a04",
        statusInfo: "#0284c7", statusInfoHover: "#0369a1", statusInfoPressed: "#075985", statusInfoSubtle: "#f0f9ff", statusInfoText: "#0284c7",
        navBg: "#ffffff", navIcon: "#0099ff", navIconHover: "#007acc", navText: "#1a1a1a",
        cardBg: "#ffffff", cardBorder: "#e5e7eb", cardHover: "#eff6ff",
        buttonPrimaryBg: "#0099ff", buttonPrimaryText: "#1a1a1a", buttonSecondaryBg: "#ffffff", buttonSecondaryText: "#1a1a1a", buttonSecondaryBorder: "#e5e7eb",
        inputBg: "#ffffff", inputBorder: "#e5e7eb", inputFocus: "#0099ff", inputText: "#1a1a1a", inputPlaceholder: "#9ca3af",
        tableBg: "#ffffff", tableHeaderBg: "#f8fafc", tableRowHover: "#eff6ff", tableBorder: "#e5e7eb",
        modalBg: "#ffffff", modalBorder: "#e5e7eb", tooltipBg: "#1a1a1a", tooltipText: "#ffffff",
        badgeBg: "#eff6ff", badgeText: "#2563eb", progressBg: "#e5e7eb", progressFill: "#0099ff",
        gradientPrimary: null, gradientAccent: null
      }
    },

    hubspot_orange_light: {
      name: "HubSpot Orange Light",
      description: "Vibrant orange on clean white backgrounds",
      category: "light",
      preview: { bodyBg: "#f8fafc", headerBg: "#ffffff", sidebarBg: "#ffffff", cardBg: "#ffffff" },
      tokens: {
        surfaceBase: "#f8fafc", surfaceRaised: "#ffffff", surfaceHover: "#fff7ed", surfacePressed: "#ffedd5",
        textPrimary: "#1a1a1a", textSecondary: "#4b5563", textDisabled: "#9ca3af", textOnFill: "#1a1a1a",
        accent1: "#ff6600", accent2: "#ff8533", accent3: "#ffa366", accent4: "#ffc299",
        interactive: "#ea580c", interactiveHover: "#c2410c", interactivePressed: "#9a3412",
        brand: "#ff6600", brandHover: "#ff8533", brandPressed: "#cc5200", brandSubtle: "#fff7ed",
        borderDefault: "#e5e7eb", borderSubtle: "#f3f4f6", borderHover: "#d1d5db", borderAccent: "#ff6600",
        statusAlert: "#dc2626", statusAlertHover: "#b91c1c", statusAlertPressed: "#991b1b", statusAlertSubtle: "#fef2f2", statusAlertText: "#dc2626",
        statusPositive: "#16a34a", statusPositiveHover: "#15803d", statusPositivePressed: "#166534", statusPositiveSubtle: "#f0fdf4", statusPositiveText: "#16a34a",
        statusCaution: "#ca8a04", statusCautionHover: "#a16207", statusCautionPressed: "#854d0e", statusCautionSubtle: "#fefce8", statusCautionText: "#ca8a04",
        statusInfo: "#0284c7", statusInfoHover: "#0369a1", statusInfoPressed: "#075985", statusInfoSubtle: "#f0f9ff", statusInfoText: "#0284c7",
        navBg: "#ffffff", navIcon: "#ff6600", navIconHover: "#cc5200", navText: "#1a1a1a",
        cardBg: "#ffffff", cardBorder: "#e5e7eb", cardHover: "#fff7ed",
        buttonPrimaryBg: "#ff6600", buttonPrimaryText: "#1a1a1a", buttonSecondaryBg: "#ffffff", buttonSecondaryText: "#1a1a1a", buttonSecondaryBorder: "#e5e7eb",
        inputBg: "#ffffff", inputBorder: "#e5e7eb", inputFocus: "#ff6600", inputText: "#1a1a1a", inputPlaceholder: "#9ca3af",
        tableBg: "#ffffff", tableHeaderBg: "#f8fafc", tableRowHover: "#fff7ed", tableBorder: "#e5e7eb",
        modalBg: "#ffffff", modalBorder: "#e5e7eb", tooltipBg: "#1a1a1a", tooltipText: "#ffffff",
        badgeBg: "#fff7ed", badgeText: "#ea580c", progressBg: "#e5e7eb", progressFill: "#ff6600",
        gradientPrimary: null, gradientAccent: null
      }
    },

    ocean_teal_light: {
      name: "Ocean Teal Light",
      description: "Vivid teal on clean white backgrounds",
      category: "light",
      preview: { bodyBg: "#f8fafc", headerBg: "#ffffff", sidebarBg: "#ffffff", cardBg: "#ffffff" },
      tokens: {
        surfaceBase: "#f8fafc", surfaceRaised: "#ffffff", surfaceHover: "#f0fdfa", surfacePressed: "#ccfbf1",
        textPrimary: "#1a1a1a", textSecondary: "#4b5563", textDisabled: "#9ca3af", textOnFill: "#1a1a1a",
        accent1: "#00ccaa", accent2: "#33d6bb", accent3: "#66e0cc", accent4: "#99ebdd",
        interactive: "#0d9488", interactiveHover: "#0f766e", interactivePressed: "#115e59",
        brand: "#00ccaa", brandHover: "#33d6bb", brandPressed: "#00a388", brandSubtle: "#f0fdfa",
        borderDefault: "#e5e7eb", borderSubtle: "#f3f4f6", borderHover: "#d1d5db", borderAccent: "#00ccaa",
        statusAlert: "#dc2626", statusAlertHover: "#b91c1c", statusAlertPressed: "#991b1b", statusAlertSubtle: "#fef2f2", statusAlertText: "#dc2626",
        statusPositive: "#16a34a", statusPositiveHover: "#15803d", statusPositivePressed: "#166534", statusPositiveSubtle: "#f0fdf4", statusPositiveText: "#16a34a",
        statusCaution: "#ca8a04", statusCautionHover: "#a16207", statusCautionPressed: "#854d0e", statusCautionSubtle: "#fefce8", statusCautionText: "#ca8a04",
        statusInfo: "#0284c7", statusInfoHover: "#0369a1", statusInfoPressed: "#075985", statusInfoSubtle: "#f0f9ff", statusInfoText: "#0284c7",
        navBg: "#ffffff", navIcon: "#00ccaa", navIconHover: "#00a388", navText: "#1a1a1a",
        cardBg: "#ffffff", cardBorder: "#e5e7eb", cardHover: "#f0fdfa",
        buttonPrimaryBg: "#00ccaa", buttonPrimaryText: "#1a1a1a", buttonSecondaryBg: "#ffffff", buttonSecondaryText: "#1a1a1a", buttonSecondaryBorder: "#e5e7eb",
        inputBg: "#ffffff", inputBorder: "#e5e7eb", inputFocus: "#00ccaa", inputText: "#1a1a1a", inputPlaceholder: "#9ca3af",
        tableBg: "#ffffff", tableHeaderBg: "#f8fafc", tableRowHover: "#f0fdfa", tableBorder: "#e5e7eb",
        modalBg: "#ffffff", modalBorder: "#e5e7eb", tooltipBg: "#1a1a1a", tooltipText: "#ffffff",
        badgeBg: "#f0fdfa", badgeText: "#0d9488", progressBg: "#e5e7eb", progressFill: "#00ccaa",
        gradientPrimary: null, gradientAccent: null
      }
    },

    golden_yellow_light: {
      name: "Golden Yellow Light",
      description: "Vivid gold on clean white backgrounds",
      category: "light",
      preview: { bodyBg: "#f8fafc", headerBg: "#ffffff", sidebarBg: "#ffffff", cardBg: "#ffffff" },
      tokens: {
        surfaceBase: "#f8fafc", surfaceRaised: "#ffffff", surfaceHover: "#fefce8", surfacePressed: "#fef9c3",
        textPrimary: "#1a1a1a", textSecondary: "#4b5563", textDisabled: "#9ca3af", textOnFill: "#1a1a1a",
        accent1: "#ffcc00", accent2: "#ffd633", accent3: "#ffe066", accent4: "#ffeb99",
        interactive: "#ca8a04", interactiveHover: "#a16207", interactivePressed: "#854d0e",
        brand: "#ffcc00", brandHover: "#ffd633", brandPressed: "#cca300", brandSubtle: "#fefce8",
        borderDefault: "#e5e7eb", borderSubtle: "#f3f4f6", borderHover: "#d1d5db", borderAccent: "#ffcc00",
        statusAlert: "#dc2626", statusAlertHover: "#b91c1c", statusAlertPressed: "#991b1b", statusAlertSubtle: "#fef2f2", statusAlertText: "#dc2626",
        statusPositive: "#16a34a", statusPositiveHover: "#15803d", statusPositivePressed: "#166534", statusPositiveSubtle: "#f0fdf4", statusPositiveText: "#16a34a",
        statusCaution: "#ca8a04", statusCautionHover: "#a16207", statusCautionPressed: "#854d0e", statusCautionSubtle: "#fefce8", statusCautionText: "#ca8a04",
        statusInfo: "#0284c7", statusInfoHover: "#0369a1", statusInfoPressed: "#075985", statusInfoSubtle: "#f0f9ff", statusInfoText: "#0284c7",
        navBg: "#ffffff", navIcon: "#ffcc00", navIconHover: "#cca300", navText: "#1a1a1a",
        cardBg: "#ffffff", cardBorder: "#e5e7eb", cardHover: "#fefce8",
        buttonPrimaryBg: "#ffcc00", buttonPrimaryText: "#1a1a1a", buttonSecondaryBg: "#ffffff", buttonSecondaryText: "#1a1a1a", buttonSecondaryBorder: "#e5e7eb",
        inputBg: "#ffffff", inputBorder: "#e5e7eb", inputFocus: "#ffcc00", inputText: "#1a1a1a", inputPlaceholder: "#9ca3af",
        tableBg: "#ffffff", tableHeaderBg: "#f8fafc", tableRowHover: "#fefce8", tableBorder: "#e5e7eb",
        modalBg: "#ffffff", modalBorder: "#e5e7eb", tooltipBg: "#1a1a1a", tooltipText: "#ffffff",
        badgeBg: "#fefce8", badgeText: "#ca8a04", progressBg: "#e5e7eb", progressFill: "#ffcc00",
        gradientPrimary: null, gradientAccent: null
      }
    },

    forest_green_light: {
      name: "Forest Green Light",
      description: "Vivid green on clean white backgrounds",
      category: "light",
      preview: { bodyBg: "#f8fafc", headerBg: "#ffffff", sidebarBg: "#ffffff", cardBg: "#ffffff" },
      tokens: {
        surfaceBase: "#f8fafc", surfaceRaised: "#ffffff", surfaceHover: "#f0fdf4", surfacePressed: "#dcfce7",
        textPrimary: "#1a1a1a", textSecondary: "#4b5563", textDisabled: "#9ca3af", textOnFill: "#1a1a1a",
        accent1: "#00cc66", accent2: "#33d685", accent3: "#66e0a3", accent4: "#99ebc2",
        interactive: "#16a34a", interactiveHover: "#15803d", interactivePressed: "#166534",
        brand: "#00cc66", brandHover: "#33d685", brandPressed: "#00a352", brandSubtle: "#f0fdf4",
        borderDefault: "#e5e7eb", borderSubtle: "#f3f4f6", borderHover: "#d1d5db", borderAccent: "#00cc66",
        statusAlert: "#dc2626", statusAlertHover: "#b91c1c", statusAlertPressed: "#991b1b", statusAlertSubtle: "#fef2f2", statusAlertText: "#dc2626",
        statusPositive: "#16a34a", statusPositiveHover: "#15803d", statusPositivePressed: "#166534", statusPositiveSubtle: "#f0fdf4", statusPositiveText: "#16a34a",
        statusCaution: "#ca8a04", statusCautionHover: "#a16207", statusCautionPressed: "#854d0e", statusCautionSubtle: "#fefce8", statusCautionText: "#ca8a04",
        statusInfo: "#0284c7", statusInfoHover: "#0369a1", statusInfoPressed: "#075985", statusInfoSubtle: "#f0f9ff", statusInfoText: "#0284c7",
        navBg: "#ffffff", navIcon: "#00cc66", navIconHover: "#00a352", navText: "#1a1a1a",
        cardBg: "#ffffff", cardBorder: "#e5e7eb", cardHover: "#f0fdf4",
        buttonPrimaryBg: "#00cc66", buttonPrimaryText: "#1a1a1a", buttonSecondaryBg: "#ffffff", buttonSecondaryText: "#1a1a1a", buttonSecondaryBorder: "#e5e7eb",
        inputBg: "#ffffff", inputBorder: "#e5e7eb", inputFocus: "#00cc66", inputText: "#1a1a1a", inputPlaceholder: "#9ca3af",
        tableBg: "#ffffff", tableHeaderBg: "#f8fafc", tableRowHover: "#f0fdf4", tableBorder: "#e5e7eb",
        modalBg: "#ffffff", modalBorder: "#e5e7eb", tooltipBg: "#1a1a1a", tooltipText: "#ffffff",
        badgeBg: "#f0fdf4", badgeText: "#16a34a", progressBg: "#e5e7eb", progressFill: "#00cc66",
        gradientPrimary: null, gradientAccent: null
      }
    },

    pastel: {
      name: "Pastel Dream",
      description: "Soft purple pastels, easy on the eyes",
      category: "special",
      preview: { bodyBg: "#1a1625", headerBg: "#2d2640", sidebarBg: "#2d2640", cardBg: "#2d2640" },
      tokens: {
        surfaceBase: "#1a1625", surfaceRaised: "#2d2640", surfaceHover: "#3d3555", surfacePressed: "#4d456a",
        textPrimary: "#fdf4ff", textSecondary: "#e9d5ff", textDisabled: "#a78bfa", textOnFill: "#ffffff",
        accent1: "#c4b5fd", accent2: "#fbcfe8", accent3: "#99f6e4", accent4: "#fde68a",
        interactive: "#c4b5fd", interactiveHover: "#ddd6fe", interactivePressed: "#a78bfa",
        brand: "#fbcfe8", brandHover: "#fce7f3", brandPressed: "#f9a8d4", brandSubtle: "#500724",
        borderDefault: "#a78bfa", borderSubtle: "#7c3aed", borderHover: "#c4b5fd", borderAccent: "#fbcfe8",
        statusAlert: "#fca5a5", statusAlertHover: "#fecaca", statusAlertPressed: "#f87171", statusAlertSubtle: "#3d1515", statusAlertText: "#fecaca",
        statusPositive: "#86efac", statusPositiveHover: "#bbf7d0", statusPositivePressed: "#4ade80", statusPositiveSubtle: "#0a3d1a", statusPositiveText: "#bbf7d0",
        statusCaution: "#fde68a", statusCautionHover: "#fef3c7", statusCautionPressed: "#fcd34d", statusCautionSubtle: "#3d2a00", statusCautionText: "#fef3c7",
        statusInfo: "#a5f3fc", statusInfoHover: "#cffafe", statusInfoPressed: "#67e8f9", statusInfoSubtle: "#0a3d4d", statusInfoText: "#cffafe",
        navBg: "#2d2640", navIcon: "#c4b5fd", navIconHover: "#ddd6fe", navText: "#fdf4ff",
        cardBg: "#2d2640", cardBorder: "#a78bfa", cardHover: "#3d3555",
        buttonPrimaryBg: "#c4b5fd", buttonPrimaryText: "#1a1625", buttonSecondaryBg: "#2d2640", buttonSecondaryText: "#fdf4ff", buttonSecondaryBorder: "#a78bfa",
        inputBg: "#2d2640", inputBorder: "#a78bfa", inputFocus: "#c4b5fd", inputText: "#fdf4ff", inputPlaceholder: "#a78bfa",
        tableBg: "#1a1625", tableHeaderBg: "#2d2640", tableRowHover: "#3d3555", tableBorder: "#a78bfa",
        modalBg: "#2d2640", modalBorder: "#a78bfa", tooltipBg: "#3d3555", tooltipText: "#fdf4ff",
        badgeBg: "#3d3555", badgeText: "#fdf4ff", progressBg: "#3d3555", progressFill: "#99f6e4",
        gradientPrimary: "linear-gradient(135deg, #c4b5fd 0%, #fbcfe8 50%, #99f6e4 100%)",
        gradientAccent: "linear-gradient(90deg, #c4b5fd, #fbcfe8, #fde68a, #99f6e4)"
      }
    },
    cyberpunk: {
      name: "Cyberpunk",
      description: "Neon pink & cyan with sci-fi vibes",
      category: "special",
      preview: { bodyBg: "#0d0221", headerBg: "#1a0a2e", sidebarBg: "#1a0a2e", cardBg: "#1a0a2e" },
      tokens: {
        surfaceBase: "#0d0221", surfaceRaised: "#1a0a2e", surfaceHover: "#2d1b4e", surfacePressed: "#3d2a5f",
        textPrimary: "#f0abfc", textSecondary: "#c084fc", textDisabled: "#6b21a8", textOnFill: "#ffffff",
        accent1: "#22d3ee", accent2: "#f43f5e", accent3: "#d946ef", accent4: "#facc15",
        interactive: "#22d3ee", interactiveHover: "#67e8f9", interactivePressed: "#06b6d4",
        brand: "#f43f5e", brandHover: "#fb7185", brandPressed: "#e11d48", brandSubtle: "#4c0519",
        borderDefault: "#d946ef", borderSubtle: "#a21caf", borderHover: "#e879f9", borderAccent: "#22d3ee",
        statusAlert: "#ff2a6d", statusAlertHover: "#ff6b9d", statusAlertPressed: "#d91a5a", statusAlertSubtle: "#3d0a1f", statusAlertText: "#ff4d7f",
        statusPositive: "#05ffa1", statusPositiveHover: "#5fffc4", statusPositivePressed: "#00d488", statusPositiveSubtle: "#0a3d2a", statusPositiveText: "#2affb2",
        statusCaution: "#facc15", statusCautionHover: "#fde047", statusCautionPressed: "#eab308", statusCautionSubtle: "#3d3000", statusCautionText: "#fde047",
        statusInfo: "#22d3ee", statusInfoHover: "#67e8f9", statusInfoPressed: "#06b6d4", statusInfoSubtle: "#0a2d3d", statusInfoText: "#67e8f9",
        navBg: "#1a0a2e", navIcon: "#22d3ee", navIconHover: "#67e8f9", navText: "#f0abfc",
        cardBg: "#1a0a2e", cardBorder: "#d946ef", cardHover: "#2d1b4e",
        buttonPrimaryBg: "#f43f5e", buttonPrimaryText: "#ffffff", buttonSecondaryBg: "#1a0a2e", buttonSecondaryText: "#f0abfc", buttonSecondaryBorder: "#d946ef",
        inputBg: "#1a0a2e", inputBorder: "#d946ef", inputFocus: "#22d3ee", inputText: "#f0abfc", inputPlaceholder: "#6b21a8",
        tableBg: "#0d0221", tableHeaderBg: "#1a0a2e", tableRowHover: "#2d1b4e", tableBorder: "#d946ef",
        modalBg: "#1a0a2e", modalBorder: "#d946ef", tooltipBg: "#2d1b4e", tooltipText: "#f0abfc",
        badgeBg: "#2d1b4e", badgeText: "#f0abfc", progressBg: "#2d1b4e", progressFill: "#22d3ee",
        gradientPrimary: "linear-gradient(135deg, #22d3ee 0%, #d946ef 50%, #f43f5e 100%)",
        gradientAccent: "linear-gradient(90deg, #22d3ee, #d946ef, #f43f5e, #facc15)"
      }
    },

    purple_cyan: {
      name: "Purple Cyan",
      description: "Electric purple meets vibrant cyan",
      category: "duo",
      preview: { bodyBg: "#0f0a1a", headerBg: "#1a1530", sidebarBg: "#1a1530", cardBg: "#1a1530" },
      tokens: {
        surfaceBase: "#0f0a1a", surfaceRaised: "#1a1530", surfaceHover: "#0a1520", surfacePressed: "#0d1a28",
        textPrimary: "#f3e8ff", textSecondary: "#c4b5fd", textDisabled: "#6b5b95", textOnFill: "#ffffff",
        accent1: "#a78bfa", accent2: "#22d3ee", accent3: "#c084fc", accent4: "#67e8f9",
        interactive: "#22d3ee", interactiveHover: "#67e8f9", interactivePressed: "#06b6d4",
        brand: "#a78bfa", brandHover: "#c4b5fd", brandPressed: "#8b5cf6", brandSubtle: "#2e1065",
        borderDefault: "#6b5b95", borderSubtle: "#1a1530", borderHover: "#155e75", borderAccent: "#22d3ee",
        statusAlert: "#f87171", statusAlertHover: "#fca5a5", statusAlertPressed: "#ef4444", statusAlertSubtle: "#450a0a", statusAlertText: "#fca5a5",
        statusPositive: "#4ade80", statusPositiveHover: "#86efac", statusPositivePressed: "#22c55e", statusPositiveSubtle: "#052e16", statusPositiveText: "#4ade80",
        statusCaution: "#fbbf24", statusCautionHover: "#fcd34d", statusCautionPressed: "#f59e0b", statusCautionSubtle: "#422006", statusCautionText: "#fbbf24",
        statusInfo: "#22d3ee", statusInfoHover: "#67e8f9", statusInfoPressed: "#06b6d4", statusInfoSubtle: "#083344", statusInfoText: "#67e8f9",
        navBg: "#1a1530", navIcon: "#22d3ee", navIconHover: "#67e8f9", navText: "#f3e8ff",
        cardBg: "#1a1530", cardBorder: "#6b5b95", cardHover: "#0a1520",
        buttonPrimaryBg: "#a78bfa", buttonPrimaryText: "#ffffff", buttonSecondaryBg: "#1a1530", buttonSecondaryText: "#f3e8ff", buttonSecondaryBorder: "#6b5b95",
        inputBg: "#1a1530", inputBorder: "#6b5b95", inputFocus: "#22d3ee", inputText: "#f3e8ff", inputPlaceholder: "#6b5b95",
        tableBg: "#0f0a1a", tableHeaderBg: "#1a1530", tableRowHover: "#0a1520", tableBorder: "#6b5b95",
        modalBg: "#1a1530", modalBorder: "#6b5b95", tooltipBg: "#0d1a28", tooltipText: "#f3e8ff",
        badgeBg: "#0a1520", badgeText: "#f3e8ff", progressBg: "#0a1520", progressFill: "#22d3ee",
        gradientPrimary: "linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)",
        gradientAccent: "linear-gradient(90deg, #a78bfa, #c084fc, #22d3ee, #67e8f9)"
      }
    },

    rose_gold: {
      name: "Rose Gold",
      description: "Elegant rose pink with gold accents",
      category: "duo",
      preview: { bodyBg: "#1a0f14", headerBg: "#2d1a22", sidebarBg: "#2d1a22", cardBg: "#2d1a22" },
      tokens: {
        surfaceBase: "#1a0f14", surfaceRaised: "#2d1a22", surfaceHover: "#1a1508", surfacePressed: "#2d2510",
        textPrimary: "#fdf2f8", textSecondary: "#f9a8d4", textDisabled: "#9f5070", textOnFill: "#ffffff",
        accent1: "#f472b6", accent2: "#fbbf24", accent3: "#fb7185", accent4: "#fcd34d",
        interactive: "#f472b6", interactiveHover: "#f9a8d4", interactivePressed: "#ec4899",
        brand: "#fbbf24", brandHover: "#fcd34d", brandPressed: "#f59e0b", brandSubtle: "#451a03",
        borderDefault: "#9f5070", borderSubtle: "#2d1a22", borderHover: "#92400e", borderAccent: "#fbbf24",
        statusAlert: "#f87171", statusAlertHover: "#fca5a5", statusAlertPressed: "#ef4444", statusAlertSubtle: "#450a0a", statusAlertText: "#fca5a5",
        statusPositive: "#4ade80", statusPositiveHover: "#86efac", statusPositivePressed: "#22c55e", statusPositiveSubtle: "#052e16", statusPositiveText: "#4ade80",
        statusCaution: "#fbbf24", statusCautionHover: "#fcd34d", statusCautionPressed: "#f59e0b", statusCautionSubtle: "#422006", statusCautionText: "#fbbf24",
        statusInfo: "#38bdf8", statusInfoHover: "#7dd3fc", statusInfoPressed: "#0ea5e9", statusInfoSubtle: "#0c4a6e", statusInfoText: "#7dd3fc",
        navBg: "#2d1a22", navIcon: "#f472b6", navIconHover: "#f9a8d4", navText: "#fdf2f8",
        cardBg: "#2d1a22", cardBorder: "#9f5070", cardHover: "#1a1508",
        buttonPrimaryBg: "#fbbf24", buttonPrimaryText: "#1a0f14", buttonSecondaryBg: "#2d1a22", buttonSecondaryText: "#fdf2f8", buttonSecondaryBorder: "#9f5070",
        inputBg: "#2d1a22", inputBorder: "#9f5070", inputFocus: "#f472b6", inputText: "#fdf2f8", inputPlaceholder: "#9f5070",
        tableBg: "#1a0f14", tableHeaderBg: "#2d1a22", tableRowHover: "#1a1508", tableBorder: "#9f5070",
        modalBg: "#2d1a22", modalBorder: "#9f5070", tooltipBg: "#2d2510", tooltipText: "#fdf2f8",
        badgeBg: "#1a1508", badgeText: "#fdf2f8", progressBg: "#1a1508", progressFill: "#f472b6",
        gradientPrimary: "linear-gradient(135deg, #f472b6 0%, #fbbf24 100%)",
        gradientAccent: "linear-gradient(90deg, #f472b6, #fb7185, #fbbf24, #fcd34d)"
      }
    },

    emerald_copper: {
      name: "Emerald Copper",
      description: "Rich emerald greens with copper warmth",
      category: "duo",
      preview: { bodyBg: "#0a1510", headerBg: "#15261e", sidebarBg: "#15261e", cardBg: "#15261e" },
      tokens: {
        surfaceBase: "#0a1510", surfaceRaised: "#15261e", surfaceHover: "#1a0f08", surfacePressed: "#2a1a10",
        textPrimary: "#ecfdf5", textSecondary: "#6ee7b7", textDisabled: "#4a7c5f", textOnFill: "#ffffff",
        accent1: "#10b981", accent2: "#f97316", accent3: "#34d399", accent4: "#fb923c",
        interactive: "#10b981", interactiveHover: "#34d399", interactivePressed: "#059669",
        brand: "#f97316", brandHover: "#fb923c", brandPressed: "#ea580c", brandSubtle: "#431407",
        borderDefault: "#4a7c5f", borderSubtle: "#15261e", borderHover: "#9a3412", borderAccent: "#f97316",
        statusAlert: "#f87171", statusAlertHover: "#fca5a5", statusAlertPressed: "#ef4444", statusAlertSubtle: "#450a0a", statusAlertText: "#fca5a5",
        statusPositive: "#10b981", statusPositiveHover: "#34d399", statusPositivePressed: "#059669", statusPositiveSubtle: "#052e16", statusPositiveText: "#34d399",
        statusCaution: "#fbbf24", statusCautionHover: "#fcd34d", statusCautionPressed: "#f59e0b", statusCautionSubtle: "#422006", statusCautionText: "#fbbf24",
        statusInfo: "#38bdf8", statusInfoHover: "#7dd3fc", statusInfoPressed: "#0ea5e9", statusInfoSubtle: "#0c4a6e", statusInfoText: "#7dd3fc",
        navBg: "#15261e", navIcon: "#10b981", navIconHover: "#34d399", navText: "#ecfdf5",
        cardBg: "#15261e", cardBorder: "#4a7c5f", cardHover: "#1a0f08",
        buttonPrimaryBg: "#f97316", buttonPrimaryText: "#ffffff", buttonSecondaryBg: "#15261e", buttonSecondaryText: "#ecfdf5", buttonSecondaryBorder: "#4a7c5f",
        inputBg: "#15261e", inputBorder: "#4a7c5f", inputFocus: "#10b981", inputText: "#ecfdf5", inputPlaceholder: "#4a7c5f",
        tableBg: "#0a1510", tableHeaderBg: "#15261e", tableRowHover: "#1a0f08", tableBorder: "#4a7c5f",
        modalBg: "#15261e", modalBorder: "#4a7c5f", tooltipBg: "#2a1a10", tooltipText: "#ecfdf5",
        badgeBg: "#1a0f08", badgeText: "#ecfdf5", progressBg: "#1a0f08", progressFill: "#10b981",
        gradientPrimary: "linear-gradient(135deg, #10b981 0%, #f97316 100%)",
        gradientAccent: "linear-gradient(90deg, #10b981, #34d399, #f97316, #fb923c)"
      }
    },

    clean_light: {
      name: "Clean Light",
      description: "Minimal white with subtle gray accents",
      category: "special",
      preview: { bodyBg: "#f8fafc", headerBg: "#ffffff", sidebarBg: "#ffffff", cardBg: "#ffffff" },
      tokens: {
        surfaceBase: "#f8fafc", surfaceRaised: "#ffffff", surfaceHover: "#f1f5f9", surfacePressed: "#e2e8f0",
        textPrimary: "#0f172a", textSecondary: "#475569", textDisabled: "#94a3b8", textOnFill: "#ffffff",
        accent1: "#3b82f6", accent2: "#6366f1", accent3: "#60a5fa", accent4: "#818cf8",
        interactive: "#3b82f6", interactiveHover: "#2563eb", interactivePressed: "#1d4ed8",
        brand: "#6366f1", brandHover: "#4f46e5", brandPressed: "#4338ca", brandSubtle: "#eef2ff",
        borderDefault: "#e2e8f0", borderSubtle: "#f1f5f9", borderHover: "#cbd5e1", borderAccent: "#3b82f6",
        statusAlert: "#ef4444", statusAlertHover: "#dc2626", statusAlertPressed: "#b91c1c", statusAlertSubtle: "#fef2f2", statusAlertText: "#dc2626",
        statusPositive: "#22c55e", statusPositiveHover: "#16a34a", statusPositivePressed: "#15803d", statusPositiveSubtle: "#f0fdf4", statusPositiveText: "#16a34a",
        statusCaution: "#f59e0b", statusCautionHover: "#d97706", statusCautionPressed: "#b45309", statusCautionSubtle: "#fffbeb", statusCautionText: "#d97706",
        statusInfo: "#0ea5e9", statusInfoHover: "#0284c7", statusInfoPressed: "#0369a1", statusInfoSubtle: "#f0f9ff", statusInfoText: "#0284c7",
        navBg: "#ffffff", navIcon: "#3b82f6", navIconHover: "#2563eb", navText: "#0f172a",
        cardBg: "#ffffff", cardBorder: "#e2e8f0", cardHover: "#f8fafc",
        buttonPrimaryBg: "#6366f1", buttonPrimaryText: "#ffffff", buttonSecondaryBg: "#ffffff", buttonSecondaryText: "#0f172a", buttonSecondaryBorder: "#e2e8f0",
        inputBg: "#ffffff", inputBorder: "#e2e8f0", inputFocus: "#3b82f6", inputText: "#0f172a", inputPlaceholder: "#94a3b8",
        tableBg: "#ffffff", tableHeaderBg: "#f8fafc", tableRowHover: "#f1f5f9", tableBorder: "#e2e8f0",
        modalBg: "#ffffff", modalBorder: "#e2e8f0", tooltipBg: "#0f172a", tooltipText: "#ffffff",
        badgeBg: "#f1f5f9", badgeText: "#475569", progressBg: "#e2e8f0", progressFill: "#3b82f6",
        gradientPrimary: null, gradientAccent: null
      }
    },

    arctic_light: {
      name: "Arctic Light",
      description: "Cool blue-tinted clean aesthetic",
      category: "special",
      preview: { bodyBg: "#f0f9ff", headerBg: "#ffffff", sidebarBg: "#ffffff", cardBg: "#ffffff" },
      tokens: {
        surfaceBase: "#f0f9ff", surfaceRaised: "#ffffff", surfaceHover: "#e0f2fe", surfacePressed: "#bae6fd",
        textPrimary: "#0c4a6e", textSecondary: "#0369a1", textDisabled: "#7dd3fc", textOnFill: "#ffffff",
        accent1: "#0ea5e9", accent2: "#06b6d4", accent3: "#38bdf8", accent4: "#22d3ee",
        interactive: "#0ea5e9", interactiveHover: "#0284c7", interactivePressed: "#0369a1",
        brand: "#06b6d4", brandHover: "#0891b2", brandPressed: "#0e7490", brandSubtle: "#ecfeff",
        borderDefault: "#bae6fd", borderSubtle: "#e0f2fe", borderHover: "#7dd3fc", borderAccent: "#0ea5e9",
        statusAlert: "#ef4444", statusAlertHover: "#dc2626", statusAlertPressed: "#b91c1c", statusAlertSubtle: "#fef2f2", statusAlertText: "#dc2626",
        statusPositive: "#22c55e", statusPositiveHover: "#16a34a", statusPositivePressed: "#15803d", statusPositiveSubtle: "#f0fdf4", statusPositiveText: "#16a34a",
        statusCaution: "#f59e0b", statusCautionHover: "#d97706", statusCautionPressed: "#b45309", statusCautionSubtle: "#fffbeb", statusCautionText: "#d97706",
        statusInfo: "#0ea5e9", statusInfoHover: "#0284c7", statusInfoPressed: "#0369a1", statusInfoSubtle: "#f0f9ff", statusInfoText: "#0284c7",
        navBg: "#ffffff", navIcon: "#0ea5e9", navIconHover: "#0284c7", navText: "#0c4a6e",
        cardBg: "#ffffff", cardBorder: "#bae6fd", cardHover: "#e0f2fe",
        buttonPrimaryBg: "#06b6d4", buttonPrimaryText: "#ffffff", buttonSecondaryBg: "#ffffff", buttonSecondaryText: "#0c4a6e", buttonSecondaryBorder: "#bae6fd",
        inputBg: "#ffffff", inputBorder: "#bae6fd", inputFocus: "#0ea5e9", inputText: "#0c4a6e", inputPlaceholder: "#7dd3fc",
        tableBg: "#ffffff", tableHeaderBg: "#f0f9ff", tableRowHover: "#e0f2fe", tableBorder: "#bae6fd",
        modalBg: "#ffffff", modalBorder: "#bae6fd", tooltipBg: "#0c4a6e", tooltipText: "#f0f9ff",
        badgeBg: "#e0f2fe", badgeText: "#0369a1", progressBg: "#bae6fd", progressFill: "#0ea5e9",
        gradientPrimary: null, gradientAccent: null
      }
    },

    nord: {
      name: "Nord",
      description: "Arctic-inspired cold blue palette",
      category: "special",
      preview: { bodyBg: "#2e3440", headerBg: "#3b4252", sidebarBg: "#3b4252", cardBg: "#3b4252" },
      tokens: {
        surfaceBase: "#2e3440", surfaceRaised: "#3b4252", surfaceHover: "#434c5e", surfacePressed: "#4c566a",
        textPrimary: "#eceff4", textSecondary: "#d8dee9", textDisabled: "#4c566a", textOnFill: "#2e3440",
        accent1: "#88c0d0", accent2: "#81a1c1", accent3: "#5e81ac", accent4: "#8fbcbb",
        interactive: "#88c0d0", interactiveHover: "#8fbcbb", interactivePressed: "#5e81ac",
        brand: "#81a1c1", brandHover: "#88c0d0", brandPressed: "#5e81ac", brandSubtle: "#3b4252",
        borderDefault: "#4c566a", borderSubtle: "#3b4252", borderHover: "#d8dee9", borderAccent: "#88c0d0",
        statusAlert: "#bf616a", statusAlertHover: "#d08770", statusAlertPressed: "#bf616a", statusAlertSubtle: "#3b2d30", statusAlertText: "#bf616a",
        statusPositive: "#a3be8c", statusPositiveHover: "#b4c896", statusPositivePressed: "#8caa72", statusPositiveSubtle: "#2d3a2d", statusPositiveText: "#a3be8c",
        statusCaution: "#ebcb8b", statusCautionHover: "#f0d599", statusCautionPressed: "#d9b86c", statusCautionSubtle: "#3a3526", statusCautionText: "#ebcb8b",
        statusInfo: "#88c0d0", statusInfoHover: "#8fbcbb", statusInfoPressed: "#5e81ac", statusInfoSubtle: "#2d3a40", statusInfoText: "#88c0d0",
        navBg: "#3b4252", navIcon: "#88c0d0", navIconHover: "#8fbcbb", navText: "#eceff4",
        cardBg: "#3b4252", cardBorder: "#4c566a", cardHover: "#434c5e",
        buttonPrimaryBg: "#81a1c1", buttonPrimaryText: "#2e3440", buttonSecondaryBg: "#3b4252", buttonSecondaryText: "#eceff4", buttonSecondaryBorder: "#4c566a",
        inputBg: "#3b4252", inputBorder: "#4c566a", inputFocus: "#88c0d0", inputText: "#eceff4", inputPlaceholder: "#4c566a",
        tableBg: "#2e3440", tableHeaderBg: "#3b4252", tableRowHover: "#434c5e", tableBorder: "#4c566a",
        modalBg: "#3b4252", modalBorder: "#4c566a", tooltipBg: "#434c5e", tooltipText: "#eceff4",
        badgeBg: "#434c5e", badgeText: "#eceff4", progressBg: "#434c5e", progressFill: "#88c0d0",
        gradientPrimary: null, gradientAccent: null
      }
    },

    dracula: {
      name: "Dracula",
      description: "Dark purple with vibrant accents",
      category: "special",
      preview: { bodyBg: "#282a36", headerBg: "#44475a", sidebarBg: "#44475a", cardBg: "#44475a" },
      tokens: {
        surfaceBase: "#282a36", surfaceRaised: "#44475a", surfaceHover: "#4d5066", surfacePressed: "#565970",
        textPrimary: "#f8f8f2", textSecondary: "#6272a4", textDisabled: "#44475a", textOnFill: "#282a36",
        accent1: "#bd93f9", accent2: "#ff79c6", accent3: "#50fa7b", accent4: "#8be9fd",
        interactive: "#bd93f9", interactiveHover: "#caa9fa", interactivePressed: "#a66ffa",
        brand: "#ff79c6", brandHover: "#ff92d0", brandPressed: "#ff5fb5", brandSubtle: "#44475a",
        borderDefault: "#6272a4", borderSubtle: "#44475a", borderHover: "#bd93f9", borderAccent: "#ff79c6",
        statusAlert: "#ff5555", statusAlertHover: "#ff6e6e", statusAlertPressed: "#ff3c3c", statusAlertSubtle: "#3d2a2a", statusAlertText: "#ff5555",
        statusPositive: "#50fa7b", statusPositiveHover: "#69fb8f", statusPositivePressed: "#3bfa67", statusPositiveSubtle: "#2a3d2e", statusPositiveText: "#50fa7b",
        statusCaution: "#f1fa8c", statusCautionHover: "#f4fb9d", statusCautionPressed: "#e6f76e", statusCautionSubtle: "#3d3d2a", statusCautionText: "#f1fa8c",
        statusInfo: "#8be9fd", statusInfoHover: "#a0edfd", statusInfoPressed: "#6de4fd", statusInfoSubtle: "#2a3a3d", statusInfoText: "#8be9fd",
        navBg: "#44475a", navIcon: "#bd93f9", navIconHover: "#caa9fa", navText: "#f8f8f2",
        cardBg: "#44475a", cardBorder: "#6272a4", cardHover: "#4d5066",
        buttonPrimaryBg: "#ff79c6", buttonPrimaryText: "#282a36", buttonSecondaryBg: "#44475a", buttonSecondaryText: "#f8f8f2", buttonSecondaryBorder: "#6272a4",
        inputBg: "#44475a", inputBorder: "#6272a4", inputFocus: "#bd93f9", inputText: "#f8f8f2", inputPlaceholder: "#6272a4",
        tableBg: "#282a36", tableHeaderBg: "#44475a", tableRowHover: "#4d5066", tableBorder: "#6272a4",
        modalBg: "#44475a", modalBorder: "#6272a4", tooltipBg: "#4d5066", tooltipText: "#f8f8f2",
        badgeBg: "#4d5066", badgeText: "#f8f8f2", progressBg: "#4d5066", progressFill: "#bd93f9",
        gradientPrimary: "linear-gradient(135deg, #bd93f9 0%, #ff79c6 100%)",
        gradientAccent: "linear-gradient(90deg, #bd93f9, #ff79c6, #50fa7b, #8be9fd)"
      }
    },

    monokai: {
      name: "Monokai",
      description: "Classic code editor dark theme",
      category: "special",
      preview: { bodyBg: "#272822", headerBg: "#3e3d32", sidebarBg: "#3e3d32", cardBg: "#3e3d32" },
      tokens: {
        surfaceBase: "#272822", surfaceRaised: "#3e3d32", surfaceHover: "#49483e", surfacePressed: "#54534a",
        textPrimary: "#f8f8f2", textSecondary: "#a6a99c", textDisabled: "#75715e", textOnFill: "#272822",
        accent1: "#a6e22e", accent2: "#f92672", accent3: "#66d9ef", accent4: "#e6db74",
        interactive: "#66d9ef", interactiveHover: "#80e0f2", interactivePressed: "#4dcde8",
        brand: "#f92672", brandHover: "#fa4f8a", brandPressed: "#e60c5a", brandSubtle: "#3e2d32",
        borderDefault: "#49483e", borderSubtle: "#3e3d32", borderHover: "#75715e", borderAccent: "#a6e22e",
        statusAlert: "#f92672", statusAlertHover: "#fa4f8a", statusAlertPressed: "#e60c5a", statusAlertSubtle: "#3e2d32", statusAlertText: "#f92672",
        statusPositive: "#a6e22e", statusPositiveHover: "#b6e854", statusPositivePressed: "#8cc618", statusPositiveSubtle: "#2e3d22", statusPositiveText: "#a6e22e",
        statusCaution: "#e6db74", statusCautionHover: "#eae28a", statusCautionPressed: "#d9cc54", statusCautionSubtle: "#3e3d22", statusCautionText: "#e6db74",
        statusInfo: "#66d9ef", statusInfoHover: "#80e0f2", statusInfoPressed: "#4dcde8", statusInfoSubtle: "#223d3e", statusInfoText: "#66d9ef",
        navBg: "#3e3d32", navIcon: "#a6e22e", navIconHover: "#b6e854", navText: "#f8f8f2",
        cardBg: "#3e3d32", cardBorder: "#49483e", cardHover: "#49483e",
        buttonPrimaryBg: "#f92672", buttonPrimaryText: "#272822", buttonSecondaryBg: "#3e3d32", buttonSecondaryText: "#f8f8f2", buttonSecondaryBorder: "#49483e",
        inputBg: "#3e3d32", inputBorder: "#49483e", inputFocus: "#66d9ef", inputText: "#f8f8f2", inputPlaceholder: "#75715e",
        tableBg: "#272822", tableHeaderBg: "#3e3d32", tableRowHover: "#49483e", tableBorder: "#49483e",
        modalBg: "#3e3d32", modalBorder: "#49483e", tooltipBg: "#49483e", tooltipText: "#f8f8f2",
        badgeBg: "#49483e", badgeText: "#f8f8f2", progressBg: "#49483e", progressFill: "#a6e22e",
        gradientPrimary: null, gradientAccent: null
      }
    },

    gruvbox: {
      name: "Gruvbox Dark",
      description: "Retro groove with earthy colors",
      category: "special",
      preview: { bodyBg: "#282828", headerBg: "#3c3836", sidebarBg: "#3c3836", cardBg: "#3c3836" },
      tokens: {
        surfaceBase: "#282828", surfaceRaised: "#3c3836", surfaceHover: "#504945", surfacePressed: "#665c54",
        textPrimary: "#ebdbb2", textSecondary: "#a89984", textDisabled: "#665c54", textOnFill: "#282828",
        accent1: "#b8bb26", accent2: "#fb4934", accent3: "#83a598", accent4: "#fabd2f",
        interactive: "#83a598", interactiveHover: "#8ec07c", interactivePressed: "#689d6a",
        brand: "#fb4934", brandHover: "#fc6252", brandPressed: "#cc241d", brandSubtle: "#3c2828",
        borderDefault: "#504945", borderSubtle: "#3c3836", borderHover: "#665c54", borderAccent: "#b8bb26",
        statusAlert: "#fb4934", statusAlertHover: "#fc6252", statusAlertPressed: "#cc241d", statusAlertSubtle: "#3c2828", statusAlertText: "#fb4934",
        statusPositive: "#b8bb26", statusPositiveHover: "#c4c83d", statusPositivePressed: "#98971a", statusPositiveSubtle: "#2e3c28", statusPositiveText: "#b8bb26",
        statusCaution: "#fabd2f", statusCautionHover: "#fbc750", statusCautionPressed: "#d79921", statusCautionSubtle: "#3c3828", statusCautionText: "#fabd2f",
        statusInfo: "#83a598", statusInfoHover: "#8ec07c", statusInfoPressed: "#689d6a", statusInfoSubtle: "#283c36", statusInfoText: "#83a598",
        navBg: "#3c3836", navIcon: "#b8bb26", navIconHover: "#c4c83d", navText: "#ebdbb2",
        cardBg: "#3c3836", cardBorder: "#504945", cardHover: "#504945",
        buttonPrimaryBg: "#fb4934", buttonPrimaryText: "#282828", buttonSecondaryBg: "#3c3836", buttonSecondaryText: "#ebdbb2", buttonSecondaryBorder: "#504945",
        inputBg: "#3c3836", inputBorder: "#504945", inputFocus: "#83a598", inputText: "#ebdbb2", inputPlaceholder: "#665c54",
        tableBg: "#282828", tableHeaderBg: "#3c3836", tableRowHover: "#504945", tableBorder: "#504945",
        modalBg: "#3c3836", modalBorder: "#504945", tooltipBg: "#504945", tooltipText: "#ebdbb2",
        badgeBg: "#504945", badgeText: "#ebdbb2", progressBg: "#504945", progressFill: "#b8bb26",
        gradientPrimary: null, gradientAccent: null
      }
    },

    solarized_dark: {
      name: "Solarized Dark",
      description: "Precision colors for machines and people",
      category: "special",
      preview: { bodyBg: "#002b36", headerBg: "#073642", sidebarBg: "#073642", cardBg: "#073642" },
      tokens: {
        surfaceBase: "#002b36", surfaceRaised: "#073642", surfaceHover: "#0a4251", surfacePressed: "#0d5260",
        textPrimary: "#839496", textSecondary: "#657b83", textDisabled: "#586e75", textOnFill: "#002b36",
        accent1: "#268bd2", accent2: "#2aa198", accent3: "#859900", accent4: "#b58900",
        interactive: "#268bd2", interactiveHover: "#359bd5", interactivePressed: "#1a7ac0",
        brand: "#2aa198", brandHover: "#3bb0a7", brandPressed: "#1d8d85", brandSubtle: "#073642",
        borderDefault: "#073642", borderSubtle: "#002b36", borderHover: "#586e75", borderAccent: "#268bd2",
        statusAlert: "#dc322f", statusAlertHover: "#e34441", statusAlertPressed: "#c92623", statusAlertSubtle: "#3c2828", statusAlertText: "#dc322f",
        statusPositive: "#859900", statusPositiveHover: "#95a817", statusPositivePressed: "#6f7f00", statusPositiveSubtle: "#283c28", statusPositiveText: "#859900",
        statusCaution: "#b58900", statusCautionHover: "#c29717", statusCautionPressed: "#9a7400", statusCautionSubtle: "#3c3828", statusCautionText: "#b58900",
        statusInfo: "#268bd2", statusInfoHover: "#359bd5", statusInfoPressed: "#1a7ac0", statusInfoSubtle: "#0a3d5c", statusInfoText: "#268bd2",
        navBg: "#073642", navIcon: "#268bd2", navIconHover: "#359bd5", navText: "#839496",
        cardBg: "#073642", cardBorder: "#0a4251", cardHover: "#0a4251",
        buttonPrimaryBg: "#2aa198", buttonPrimaryText: "#002b36", buttonSecondaryBg: "#073642", buttonSecondaryText: "#839496", buttonSecondaryBorder: "#0a4251",
        inputBg: "#073642", inputBorder: "#0a4251", inputFocus: "#268bd2", inputText: "#839496", inputPlaceholder: "#586e75",
        tableBg: "#002b36", tableHeaderBg: "#073642", tableRowHover: "#0a4251", tableBorder: "#0a4251",
        modalBg: "#073642", modalBorder: "#0a4251", tooltipBg: "#0a4251", tooltipText: "#839496",
        badgeBg: "#0a4251", badgeText: "#839496", progressBg: "#0a4251", progressFill: "#268bd2",
        gradientPrimary: null, gradientAccent: null
      }
    }
  }
};

function buildCssVariablesV2(p) {
  return {
    "--trellis-color-fill-surface-default": p.surfaceBase,
    "--trellis-color-fill-surface-raised": p.surfaceRaised,
    "--trellis-color-fill-surface-recessed": p.surfaceRaised,
    "--trellis-color-fill-surface-overlay": p.surfaceRaised,
    "--trellis-color-fill-surface-default-hover": p.surfaceRaised,
    "--trellis-color-fill-surface-default-pressed": p.surfaceHover,
    "--trellis-color-fill-surface-recessed-hover": p.surfaceRaised,
    "--trellis-color-fill-surface-recessed-pressed": p.surfaceHover,
    "--trellis-color-text-core-default": p.textPrimary,
    "--trellis-color-text-core-subtle": p.textSecondary,
    "--trellis-color-text-core-disabled": p.textDisabled,
    "--trellis-color-text-core-on-fill-default": p.textOnFill,
    "--trellis-color-text-interactive-default": p.interactive,
    "--trellis-color-text-interactive-default-hover": p.interactiveHover,
    "--trellis-color-text-interactive-default-pressed": p.interactivePressed,
    "--trellis-color-text-interactive-default-disabled": p.textDisabled,
    "--trellis-color-text-interactive-on-fill": p.textOnFill,
    "--trellis-color-text-interactive-on-fill-default": p.textOnFill,
    "--trellis-color-text-interactive-on-fill-hover": p.textOnFill,
    "--trellis-color-text-interactive-on-fill-pressed": p.textOnFill,
    "--trellis-color-text-interactive-on-fill-subtle": p.interactiveHover,
    "--trellis-color-specialty-text-core-alt-default": p.textPrimary,
    "--trellis-color-specialty-text-interactive-alt-default": p.interactive,
    "--trellis-color-specialty-text-interactive-alt-hover": p.interactiveHover,
    "--trellis-color-specialty-text-interactive-alt-pressed": p.interactivePressed,
    "--trellis-color-text-primary-default": p.textOnFill,
    "--trellis-color-text-primary-subtle": p.textOnFill,
    "--trellis-color-text-primary-disabled": p.textDisabled,
    "--trellis-color-text-primary-on-fill-default": p.textOnFill,
    "--trellis-color-text-primary-on-fill-subtle": p.textSecondary,
    "--trellis-color-text-secondary-default": p.brand,
    "--trellis-color-text-secondary-disabled": p.textDisabled,
    "--trellis-color-text-tertiary-default": p.textSecondary,
    "--trellis-color-text-tertiary-disabled": p.textDisabled,
    "--trellis-color-text-inverse-default": p.textOnFill,
    "--trellis-color-text-inverse-default-alt": p.textPrimary,
    "--trellis-color-text-inverse-hover": p.interactiveHover,
    "--trellis-color-text-inverse-pressed": p.textOnFill,
    "--trellis-color-text-inverse-disabled": p.textDisabled,
    "--trellis-color-text-inverse-disabled-alt": p.textDisabled,
    "--trellis-color-text-brand-default": p.brand,
    "--trellis-color-text-brand-on-fill-default": p.textOnFill,
    "--trellis-color-text-brand-on-fill-subtle": p.brandHover,
    "--trellis-color-text-alert-default": p.statusAlertText,
    "--trellis-color-text-alert-hover": p.statusAlertHover,
    "--trellis-color-text-alert-pressed": p.statusAlertPressed,
    "--trellis-color-text-alert-on-fill": p.textOnFill,
    "--trellis-color-text-alert-on-fill-default": p.textOnFill,
    "--trellis-color-text-alert-on-fill-subtle": p.statusAlertHover,
    "--trellis-color-text-positive-default": p.statusPositiveText,
    "--trellis-color-text-positive-on-fill-default": p.textOnFill,
    "--trellis-color-text-positive-on-fill-alt": p.statusPositiveSubtle,
    "--trellis-color-text-positive-on-fill-subtle": p.statusPositiveHover,
    "--trellis-color-text-caution-default": p.statusCautionText,
    "--trellis-color-text-caution-on-fill-default": "#1F1F1F",
    "--trellis-color-text-caution-on-fill-alt": p.statusCautionSubtle,
    "--trellis-color-text-caution-on-fill-subtle": p.statusCautionHover,
    "--trellis-color-text-info-default": p.statusInfoText,
    "--trellis-color-text-info-on-fill-default": p.textOnFill,
    "--trellis-color-text-info-on-fill-subtle": p.statusInfoHover,
    "--trellis-color-border-core-default": p.borderDefault,
    "--trellis-color-border-core-subtle": p.borderSubtle,
    "--trellis-color-border-core-hover": p.borderHover,
    "--trellis-color-border-core-pressed": p.borderHover,
    "--trellis-color-border-core-disabled": p.borderSubtle,
    "--trellis-color-border-core-subtle-hover": p.borderDefault,
    "--trellis-color-border-core-subtle-pressed": p.borderHover,
    "--trellis-color-border-core-on-fill-default": p.textOnFill,
    "--trellis-color-border-primary-default": "hsla(0,0%,8%,0)",
    "--trellis-color-border-primary-disabled": "hsla(0,0%,8%,0)",
    "--trellis-color-border-primary-on-fill": p.textOnFill,
    "--trellis-color-border-primary-on-fill-default": p.textOnFill,
    "--trellis-color-border-primary-subtle": p.borderHover,
    "--trellis-color-border-primary-subtle-default": p.borderHover,
    "--trellis-color-border-primary-subtle-hover": p.textDisabled,
    "--trellis-color-border-primary-subtle-pressed": p.textSecondary,
    "--trellis-color-border-secondary-default": p.brand,
    "--trellis-color-border-secondary-default-alt": p.brand,
    "--trellis-color-border-secondary-disabled": "transparent",
    "--trellis-color-border-tertiary-default": p.borderHover,
    "--trellis-color-border-tertiary-disabled": "transparent",
    "--trellis-color-border-inverse-default": p.textOnFill,
    "--trellis-color-border-inverse-default-alt": p.textOnFill,
    "--trellis-color-border-inverse-disabled": "hsla(0,0%,8%,0)",
    "--trellis-color-border-inverse-disabled-alt": "hsla(0,0%,8%,0)",
    "--trellis-color-border-interactive-default": p.interactive,
    "--trellis-color-border-interactive-pressed": p.interactivePressed,
    "--trellis-color-border-brand-default": p.brand,
    "--trellis-color-border-surface-default": p.borderDefault,
    "--trellis-color-fill-field-default": p.inputBg,
    "--trellis-color-fill-field-default-alt": p.surfaceBase,
    "--trellis-color-fill-field-hover": p.surfaceHover,
    "--trellis-color-fill-field-pressed": p.surfaceHover,
    "--trellis-color-fill-field-disabled": p.surfaceRaised,
    "--trellis-color-fill-primary-default": p.buttonPrimaryBg,
    "--trellis-color-fill-primary-hover": p.brandHover,
    "--trellis-color-fill-primary-pressed": p.brandPressed,
    "--trellis-color-fill-primary-disabled": p.surfaceHover,
    "--trellis-color-fill-primary-subtle": p.surfaceRaised,
    "--trellis-color-fill-secondary-default": p.buttonSecondaryBg,
    "--trellis-color-fill-secondary-default-alt": p.surfaceBase,
    "--trellis-color-fill-secondary-hover": p.surfaceHover,
    "--trellis-color-fill-secondary-hover-alt": p.surfaceHover,
    "--trellis-color-fill-secondary-pressed": p.surfacePressed,
    "--trellis-color-fill-secondary-pressed-alt": p.surfacePressed,
    "--trellis-color-fill-secondary-disabled": p.surfaceRaised,
    "--trellis-color-fill-secondary-disabled-alt": p.surfaceRaised,
    "--trellis-color-fill-secondary-subtle": p.surfaceBase,
    "--trellis-color-fill-tertiary-default": p.surfaceRaised,
    "--trellis-color-fill-tertiary-hover": p.surfaceHover,
    "--trellis-color-fill-tertiary-pressed": p.surfacePressed,
    "--trellis-color-fill-tertiary-disabled": p.surfaceRaised,
    "--trellis-color-fill-tertiary-alt": p.surfaceBase,
    "--trellis-color-fill-tertiary-subtle": p.surfaceBase,
    "--trellis-color-fill-transparent-default": "transparent",
    "--trellis-color-fill-transparent-hover": "rgba(255, 255, 255, 0.1)",
    "--trellis-color-fill-transparent-pressed": "rgba(255, 255, 255, 0.15)",
    "--trellis-color-fill-transparent-disabled": p.surfaceRaised,
    "--trellis-color-fill-inverse-default": "hsla(0,0%,8%,0)",
    "--trellis-color-fill-inverse-default-alt": p.textOnFill,
    "--trellis-color-fill-inverse-hover": "hsla(0,0%,100%,.08)",
    "--trellis-color-fill-inverse-hover-alt": p.textOnFill,
    "--trellis-color-fill-inverse-pressed": "hsla(0,0%,100%,.11)",
    "--trellis-color-fill-inverse-pressed-alt": p.textOnFill,
    "--trellis-color-fill-inverse-disabled": p.surfaceRaised,
    "--trellis-color-fill-inverse-disabled-alt": p.surfaceRaised,
    "--trellis-color-fill-inverse-subtle": p.surfacePressed,
    "--trellis-color-fill-brand-default": p.brand,
    "--trellis-color-fill-brand-hover": p.brandHover,
    "--trellis-color-fill-brand-pressed": p.brandPressed,
    "--trellis-color-fill-brand-subtle": p.brandSubtle,
    "--trellis-color-fill-alert-default": p.statusAlert,
    "--trellis-color-fill-alert-hover": p.statusAlertHover,
    "--trellis-color-fill-alert-pressed": p.statusAlertPressed,
    "--trellis-color-fill-alert-subtle": p.statusAlertSubtle,
    "--trellis-color-fill-positive-default": p.statusPositive,
    "--trellis-color-fill-positive-hover": p.statusPositiveHover,
    "--trellis-color-fill-positive-pressed": p.statusPositivePressed,
    "--trellis-color-fill-positive-subtle": p.statusPositiveSubtle,
    "--trellis-color-fill-caution-default": p.statusCaution,
    "--trellis-color-fill-caution-hover": p.statusCautionHover,
    "--trellis-color-fill-caution-pressed": p.statusCautionPressed,
    "--trellis-color-fill-caution-subtle": p.statusCautionSubtle,
    "--trellis-color-fill-info-default": p.statusInfo,
    "--trellis-color-fill-info-hover": p.statusInfoHover,
    "--trellis-color-fill-info-pressed": p.statusInfoPressed,
    "--trellis-color-fill-info-subtle": p.statusInfoSubtle,
    "--trellis-color-icon-core-default": p.textSecondary,
    "--trellis-color-icon-core-subtle": p.textDisabled,
    "--trellis-color-icon-core-disabled": p.borderHover,
    "--trellis-color-icon-core-on-fill-default": p.textOnFill,
    "--trellis-color-icon-primary-default": p.textOnFill,
    "--trellis-color-icon-primary-hover": p.textOnFill,
    "--trellis-color-icon-primary-pressed": p.textOnFill,
    "--trellis-color-icon-primary-disabled": p.textDisabled,
    "--trellis-color-icon-primary-on-fill-default": p.textOnFill,
    "--trellis-color-icon-secondary-default": p.brand,
    "--trellis-color-icon-secondary-subtle": p.textOnFill,
    "--trellis-color-icon-secondary-disabled": p.textDisabled,
    "--trellis-color-icon-tertiary-default": p.textSecondary,
    "--trellis-color-icon-tertiary-disabled": p.textDisabled,
    "--trellis-color-icon-inverse-default": p.textOnFill,
    "--trellis-color-icon-inverse-default-alt": p.textPrimary,
    "--trellis-color-icon-inverse-hover": p.interactiveHover,
    "--trellis-color-icon-inverse-pressed": p.textOnFill,
    "--trellis-color-icon-inverse-disabled": p.textDisabled,
    "--trellis-color-icon-interactive-default": p.interactive,
    "--trellis-color-icon-interactive-hover": p.interactiveHover,
    "--trellis-color-icon-interactive-pressed": p.interactivePressed,
    "--trellis-color-icon-interactive-disabled": p.textDisabled,
    "--trellis-color-icon-interactive-on-fill-default": p.textOnFill,
    "--trellis-color-icon-brand-default": p.brandHover,
    "--trellis-color-icon-brand-on-fill-default": p.brandSubtle,
    "--trellis-color-icon-alert-default": p.statusAlert,
    "--trellis-color-icon-alert-hover": p.statusAlertHover,
    "--trellis-color-icon-alert-pressed": p.statusAlertPressed,
    "--trellis-color-icon-alert-on-fill-default": p.textOnFill,
    "--trellis-color-icon-positive-default": p.statusPositiveText,
    "--trellis-color-icon-positive-on-fill-default": p.textOnFill,
    "--trellis-color-icon-caution-default": p.statusCautionText,
    "--trellis-color-icon-caution-on-fill-default": "#1F1F1F",
    "--trellis-color-icon-info-default": p.statusInfoText,
    "--trellis-color-icon-info-on-fill-default": p.textOnFill,
    "--trellis-color-specialty-table-header-default": p.tableHeaderBg,
    "--trellis-color-specialty-table-header-hover": p.tableRowHover,
    "--trellis-color-specialty-table-header-pressed": p.surfacePressed,
    "--trellis-color-specialty-table-zebra-stripe-default": p.tableBg,
    "--trellis-color-specialty-link-on-fill-default": p.textOnFill,
    "--trellis-color-specialty-link-on-fill-hover": p.interactiveHover,
    "--trellis-color-specialty-link-on-fill-pressed": p.textOnFill,
    "--trellis-color-specialty-link-on-fill-disabled": p.textDisabled,
    "--trellis-color-specialty-scrim": "rgba(0, 0, 0, 0.7)",
    "--trellis-color-specialty-scrim-alt": "rgba(0, 0, 0, 0.5)",
    "--trellis-color-global-shell-fill-surface-default": p.surfaceBase,
    "--trellis-color-global-shell-fill-surface-panel-default": p.navBg,
    "--trellis-color-global-shell-fill-nav-item-default": "transparent",
    "--trellis-color-global-shell-fill-nav-item-hover": p.surfaceHover,
    "--trellis-color-global-shell-fill-nav-item-selected": p.surfacePressed,
    "--trellis-color-global-shell-fill-sub-nav-item-default": "transparent",
    "--trellis-color-global-shell-fill-sub-nav-item-hover": p.surfaceHover,
    "--trellis-color-global-shell-fill-sub-nav-item-selected": p.surfacePressed,
    "--trellis-color-global-shell-fill-search-default": p.inputBg,
    "--trellis-color-global-shell-fill-search-hover": p.surfaceHover,
    "--trellis-color-global-shell-fill-logo-default": p.brand,
    "--trellis-color-global-shell-text-nav-item-default": p.navText,
    "--trellis-color-global-shell-text-nav-item-hover": p.textOnFill,
    "--trellis-color-global-shell-text-nav-item-selected": p.textOnFill,
    "--trellis-color-global-shell-icon-nav-item-default": p.navIcon,
    "--trellis-color-global-shell-icon-nav-item-hover": p.navIconHover,
    "--trellis-color-global-shell-icon-nav-item-selected": p.textOnFill,
    "--trellis-color-global-shell-icon-nav-item-subtle": p.textSecondary,
    "--trellis-color-global-shell-border-default": p.borderDefault,
    "--trellis-color-global-shell-border-dark": p.borderSubtle,
    "--trellis-color-global-shell-border-subtle": p.borderHover,
    "--trellis-color-fill-transitional-table-default": p.tableHeaderBg,
    "--trellis-color-fill-transitional-tabs-default": p.surfaceRaised,
    "--trellis-color-fill-transitional-tabs-pressed": p.surfaceHover,
    "--trellis-color-fill-transitional-popover": p.modalBg,
    "--trellis-color-fill-transitional-shadow": "rgba(0, 0, 0, 0.5)",
    "--view-tabs-inactive-bg-color": p.surfaceRaised,
    "--data-agent-background-color-light": p.surfaceRaised
  };
}

/*
  metergrid-Erweiterung: HubSpots Redesign nutzt inzwischen eine zweite,
  deutlich groessere Variablenfamilie (--trellis-color-fwc-*, "Framework
  Web Components": Buttons, Links, Inputs, Tabellen) sowie ein paar
  weitere neue global-shell-/specialty-Variablen, die buildCssVariablesV2
  oben (Original der Extension) noch nicht kennt. Per Live-DevTools-Export
  aus einem echten HubSpot-Portal ermittelt (~660 neue Variablen), dann
  automatisiert klassifiziert:
    - Tag/Badge/Ribbon-Farben (nutzerwaehlbare Label-Farben), Breeze/
      Copilot-Submarke, Report-Chart-/Highlight-Farben, Alert/Caution/
      Positive/Info/Danger (Status-/Funktionsfarben) bleiben UNANGETASTET
      (kein Eintrag hier) - HubSpots eigene Werte fuer die jeweils
      aktive Palette gelten weiter.
    - Variablen, deren Live-Wert transparent/rgba(...,0) war (unsichtbare
      Link-Unterstriche, randlose Tabellen, ein Ghost-Bookmark-Icon)
      bleiben bewusst transparent, unabhaengig vom Variablennamen -
      sonst wuerden sie bei JEDER Palette faelschlich sichtbar.
    - Der Rest wird ueber Token-Referenzen (p.interactive, p.textPrimary,
      ...) gemappt, genau wie im Original oben - funktioniert dadurch
      fuer JEDE Palette korrekt, nicht nur fuer metergrid.
*/
function buildCssVariablesV2Extended(p) {
  return {
    "--trellis-color-border-container-default": p.borderDefault,
    "--trellis-color-border-secondary-disabled-alt": p.borderSubtle,
    "--trellis-color-fill-inverse-primary": p.interactive,
    "--trellis-color-fwc-button-border-core-default": p.borderDefault,
    "--trellis-color-fwc-button-border-core-hover": p.borderHover,
    "--trellis-color-fwc-button-border-core-on-fill-default": p.textOnFill,
    "--trellis-color-fwc-button-border-inverse-default": p.interactive,
    "--trellis-color-fwc-button-border-inverse-default-alt": p.interactive,
    "--trellis-color-fwc-button-border-inverse-disabled": p.borderSubtle,
    "--trellis-color-fwc-button-border-primary-default": p.interactive,
    "--trellis-color-fwc-button-border-primary-hover": p.borderHover,
    "--trellis-color-fwc-button-border-primary-pressed": p.interactivePressed,
    "--trellis-color-fwc-button-border-secondary-default": p.interactive,
    "--trellis-color-fwc-button-border-secondary-default-alt": p.interactive,
    "--trellis-color-fwc-button-border-secondary-disabled": p.borderSubtle,
    "--trellis-color-fwc-button-border-secondary-disabled-alt": p.borderSubtle,
    "--trellis-color-fwc-button-border-secondary-toolbar-default": p.interactive,
    "--trellis-color-fwc-button-border-secondary-toolbar-disabled": p.borderSubtle,
    "--trellis-color-fwc-button-border-tertiary-default": p.interactive,
    "--trellis-color-fwc-button-border-tertiary-disabled": p.borderSubtle,
    "--trellis-color-fwc-button-fill-field-default-alt": p.surfaceBase,
    "--trellis-color-fwc-button-fill-inverse-default": p.surfaceBase,
    "--trellis-color-fwc-button-fill-inverse-default-alt": p.surfaceBase,
    "--trellis-color-fwc-button-fill-inverse-disabled": p.borderSubtle,
    "--trellis-color-fwc-button-fill-inverse-disabled-alt": p.borderSubtle,
    "--trellis-color-fwc-button-fill-inverse-hover": p.surfaceHover,
    "--trellis-color-fwc-button-fill-inverse-hover-alt": p.surfaceHover,
    "--trellis-color-fwc-button-fill-inverse-pressed": p.interactive,
    "--trellis-color-fwc-button-fill-inverse-pressed-alt": p.interactive,
    "--trellis-color-fwc-button-fill-primary-default": p.interactive,
    "--trellis-color-fwc-button-fill-primary-disabled": p.borderSubtle,
    "--trellis-color-fwc-button-fill-primary-hover": p.surfaceHover,
    "--trellis-color-fwc-button-fill-primary-pressed": p.interactive,
    "--trellis-color-fwc-button-fill-secondary-default": p.textOnFill,
    "--trellis-color-fwc-button-fill-secondary-default-alt": p.textOnFill,
    "--trellis-color-fwc-button-fill-secondary-disabled": p.borderSubtle,
    "--trellis-color-fwc-button-fill-secondary-disabled-alt": p.borderSubtle,
    "--trellis-color-fwc-button-fill-secondary-hover": p.surfaceHover,
    "--trellis-color-fwc-button-fill-secondary-hover-alt": p.surfaceHover,
    "--trellis-color-fwc-button-fill-secondary-pressed": p.interactive,
    "--trellis-color-fwc-button-fill-secondary-pressed-alt": p.interactive,
    "--trellis-color-fwc-button-fill-surface-default": p.surfaceRaised,
    "--trellis-color-fwc-button-fill-surface-raised": p.surfaceRaised,
    "--trellis-color-fwc-button-fill-tertiary-default": p.surfaceRaised,
    "--trellis-color-fwc-button-fill-tertiary-disabled": p.borderSubtle,
    "--trellis-color-fwc-button-fill-tertiary-hover": p.surfaceHover,
    "--trellis-color-fwc-button-fill-tertiary-pressed": p.interactive,
    "--trellis-color-fwc-button-specialty-link-on-fill-alt-default": p.textOnFill,
    "--trellis-color-fwc-button-specialty-link-on-fill-alt-pressed": p.textOnFill,
    "--trellis-color-fwc-button-specialty-link-on-fill-default": p.textOnFill,
    "--trellis-color-fwc-button-specialty-link-on-fill-disabled": p.textDisabled,
    "--trellis-color-fwc-button-specialty-link-on-fill-hover": p.textOnFill,
    "--trellis-color-fwc-button-specialty-link-on-fill-pressed": p.textOnFill,
    "--trellis-color-fwc-button-specialty-secondary-toolbar-disabled": p.textDisabled,
    "--trellis-color-fwc-button-specialty-secondary-toolbar-hover": p.surfaceHover,
    "--trellis-color-fwc-button-specialty-secondary-toolbar-pressed": p.interactive,
    "--trellis-color-fwc-button-specialty-tertiary-on-fill-default": p.textOnFill,
    "--trellis-color-fwc-button-specialty-tertiary-on-fill-disabled": p.textDisabled,
    "--trellis-color-fwc-button-specialty-tertiary-on-fill-hover": p.textOnFill,
    "--trellis-color-fwc-button-specialty-tertiary-on-fill-pressed": p.textOnFill,
    "--trellis-color-fwc-button-specialty-text-core-alt-default": p.textPrimary,
    "--trellis-color-fwc-button-specialty-text-interactive-alt-default": p.interactive,
    "--trellis-color-fwc-button-specialty-text-interactive-alt-hover": p.interactiveHover,
    "--trellis-color-fwc-button-specialty-text-interactive-alt-pressed": p.interactivePressed,
    "--trellis-color-fwc-button-text-core-default": p.textPrimary,
    "--trellis-color-fwc-button-text-core-disabled": p.textDisabled,
    "--trellis-color-fwc-button-text-interactive-default": p.interactive,
    "--trellis-color-fwc-button-text-interactive-default-disabled": p.textDisabled,
    "--trellis-color-fwc-button-text-interactive-default-hover": p.interactiveHover,
    "--trellis-color-fwc-button-text-interactive-default-pressed": p.interactivePressed,
    "--trellis-color-fwc-button-text-inverse-default": p.textPrimary,
    "--trellis-color-fwc-button-text-inverse-default-alt": p.textPrimary,
    "--trellis-color-fwc-button-text-inverse-disabled": p.textDisabled,
    "--trellis-color-fwc-button-text-inverse-disabled-alt": p.textDisabled,
    "--trellis-color-fwc-button-text-inverse-hover": p.interactiveHover,
    "--trellis-color-fwc-button-text-inverse-pressed": p.interactivePressed,
    "--trellis-color-fwc-button-text-primary-default": p.textOnFill,
    "--trellis-color-fwc-button-text-primary-disabled": p.textDisabled,
    "--trellis-color-fwc-button-text-secondary-default": p.textPrimary,
    "--trellis-color-fwc-button-text-secondary-disabled": p.textDisabled,
    "--trellis-color-fwc-button-text-secondary-toolbar-default": p.textPrimary,
    "--trellis-color-fwc-button-text-secondary-toolbar-disabled": p.textDisabled,
    "--trellis-color-fwc-button-text-tertiary-default": p.textPrimary,
    "--trellis-color-fwc-button-text-tertiary-disabled": p.textDisabled,
    "--trellis-color-fwc-link-icon-core-default": p.textPrimary,
    "--trellis-color-fwc-link-icon-interactive-default": p.interactive,
    "--trellis-color-fwc-link-icon-interactive-on-fill-default": p.textOnFill,
    "--trellis-color-fwc-link-specialty-link-on-fill-alt-default": p.textOnFill,
    "--trellis-color-fwc-link-specialty-link-on-fill-alt-disabled": p.textDisabled,
    "--trellis-color-fwc-link-specialty-link-on-fill-alt-hover": p.textOnFill,
    "--trellis-color-fwc-link-specialty-link-on-fill-alt-pressed": p.textOnFill,
    "--trellis-color-fwc-link-specialty-link-on-fill-default": p.textOnFill,
    "--trellis-color-fwc-link-specialty-link-on-fill-disabled": p.textDisabled,
    "--trellis-color-fwc-link-specialty-link-on-fill-hover": p.textOnFill,
    "--trellis-color-fwc-link-specialty-link-on-fill-pressed": p.textOnFill,
    "--trellis-color-fwc-link-specialty-text-core-alt-default": p.textPrimary,
    "--trellis-color-fwc-link-specialty-text-interactive-alt-default": p.interactive,
    "--trellis-color-fwc-link-specialty-text-interactive-alt-hover": p.interactiveHover,
    "--trellis-color-fwc-link-specialty-text-interactive-alt-pressed": p.interactivePressed,
    "--trellis-color-fwc-link-text-core-default": p.textPrimary,
    "--trellis-color-fwc-link-text-core-disabled": p.textDisabled,
    "--trellis-color-fwc-link-text-interactive-default": p.interactive,
    "--trellis-color-fwc-link-text-interactive-default-disabled": p.textDisabled,
    "--trellis-color-fwc-link-text-interactive-default-hover": p.interactiveHover,
    "--trellis-color-fwc-link-text-interactive-default-pressed": p.interactivePressed,
    "--trellis-color-fwc-link-underline-hover": p.interactiveHover,
    "--trellis-color-fwc-link-underline-pressed": p.interactivePressed,
    "--trellis-color-fwc-loadingspinner-indicator-ghost": p.interactive,
    "--trellis-color-fwc-loadingspinner-indicator-link": p.interactive,
    "--trellis-color-fwc-loadingspinner-indicator-onfill": p.interactive,
    "--trellis-color-fwc-loadingspinner-indicator-primary": p.interactive,
    "--trellis-color-fwc-loadingspinner-indicator-success": p.interactive,
    "--trellis-color-fwc-loadingspinner-indicator-tertiary": p.interactive,
    "--trellis-color-fwc-loadingspinner-ring-link": p.textPrimary,
    "--trellis-color-fwc-loadingspinner-ring-onfill": p.surfaceBase,
    "--trellis-color-fwc-progress-fill-empty": p.surfaceBase,
    "--trellis-color-fwc-progress-text-default": p.textPrimary,
    "--trellis-color-fwc-radio-border-default": p.interactive,
    "--trellis-color-fwc-radio-border-readonly": p.interactive,
    "--trellis-color-fwc-radio-fill-readonly-indicator": p.interactive,
    "--trellis-color-fwc-radio-text-readonly": p.textPrimary,
    "--trellis-color-fwc-searchinput-border-default": p.interactive,
    "--trellis-color-fwc-selectable-border-default": p.interactive,
    "--trellis-color-fwc-selectable-border-selected": p.interactive,
    "--trellis-color-fwc-table-header-text-default": p.textPrimary,
    "--trellis-color-fwc-textinput-border-readonly": p.interactive,
    "--trellis-color-fwc-textinput-fill-readonly": p.surfaceBase,
    "--trellis-color-fwc-toggle-border-readonly": p.interactive,
    "--trellis-color-global-shell-border-search-btn-border-default": p.interactive,
    "--trellis-color-global-shell-border-search-btn-border-hover": p.borderHover,
    "--trellis-color-global-shell-border-search-field-border-default": p.interactive,
    "--trellis-color-global-shell-fill-editortitle-hover": p.surfaceHover,
    "--trellis-color-global-shell-icon-bookmark-hover": p.interactiveHover,
    "--trellis-color-global-shell-icon-bookmark-selected": p.textPrimary,
    "--trellis-color-global-shell-icon-copilot-default": p.textPrimary,
    "--trellis-color-global-shell-text-copilot-default": p.textPrimary,
    "--trellis-color-global-shell-text-copilot-hover": p.interactiveHover,
    "--trellis-color-global-shell-text-nav-item-default-subtle": p.textSecondary,
    "--trellis-color-global-shell-text-nav-item-hover-subtle": p.interactiveHover,
    "--trellis-color-global-shell-text-nav-item-selected-subtle": p.textSecondary,
    "--trellis-color-icon-brand-on-fill-subtle": p.textOnFill,
    "--trellis-color-icon-interactive-on-fill-hover": p.textOnFill,
    "--trellis-color-icon-interactive-on-fill-pressed": p.textOnFill,
    "--trellis-color-icon-interactive-on-fill-subtle": p.textOnFill,
    "--trellis-color-icon-inverse-disabled-alt": p.textDisabled,
    "--trellis-color-icon-primary-on-fill-subtle": p.textOnFill,
    "--trellis-color-specialty-filter-pressed": p.interactive,
    "--trellis-color-specialty-link-on-fill-alt-default": p.textOnFill,
    "--trellis-color-specialty-link-on-fill-alt-disabled": p.textDisabled,
    "--trellis-color-specialty-link-on-fill-alt-hover": p.textOnFill,
    "--trellis-color-specialty-link-on-fill-alt-pressed": p.textOnFill,
    "--trellis-color-specialty-tertiary-on-fill-default": p.textOnFill,
    "--trellis-color-specialty-tertiary-on-fill-disabled": p.textDisabled,
    "--trellis-color-specialty-tertiary-on-fill-hover": p.textOnFill,
    "--trellis-color-specialty-tertiary-on-fill-pressed": p.textOnFill,
    "--trellis-color-breeze-border-tertiary-default": "transparent",
    "--trellis-color-breeze-border-tertiary-hover": "transparent",
    "--trellis-color-breeze-border-tertiary-pressed": "transparent",
    "--trellis-color-breeze-fill-badge-default": "transparent",
    "--trellis-color-breeze-fill-feedback-default": "transparent",
    "--trellis-color-breeze-fill-tertiary-default": "transparent",
    "--trellis-color-breeze-fill-transparent-defauilt": "transparent",
    "--trellis-color-fill-inverse-default-transparent": "transparent",
    "--trellis-color-fill-inverse-disabled-transparent": "transparent",
    "--trellis-color-fill-transitional-scroll-default-gradient-color-2": "transparent",
    "--trellis-color-fill-transitional-scroll-fadeout-gradient-color-2": "transparent",
    "--trellis-color-fwc-button-border-inverse-disabled-alt": "transparent",
    "--trellis-color-fwc-button-border-primary-disabled": "transparent",
    "--trellis-color-fwc-button-border-transitional-tertiary-default": "transparent",
    "--trellis-color-fwc-button-fill-transitional-tertiary-default": "transparent",
    "--trellis-color-fwc-button-fill-transparent-default": "transparent",
    "--trellis-color-fwc-button-specialty-tertiary-transparent-default": "transparent",
    "--trellis-color-fwc-button-specialty-tertiary-transparent-disabled": "transparent",
    "--trellis-color-fwc-link-underline-default": "transparent",
    "--trellis-color-fwc-link-underline-disabled": "transparent",
    "--trellis-color-fwc-link-underline-inherit-idle": "transparent",
    "--trellis-color-fwc-table-border-color-default": "transparent",
    "--trellis-color-fwc-table-header-divider-color-default": "transparent",
    "--trellis-color-fwc-table-header-top-border-color-default": "transparent",
    "--trellis-color-global-shell-icon-bookmark-default": "transparent",
    "--trellis-color-specialty-tertiary-transparent-default": "transparent",
    "--trellis-color-specialty-tertiary-transparent-disabled": "transparent",
    "--trellis-color-temp-future-border-primary-default": "transparent",
    "--trellis-color-temp-future-border-primary-disabled": "transparent",    "--trellis-color-fwc-loadingspinner-ring-primary": p.interactive,
    "--trellis-color-fwc-loadingspinner-ring-ghost": p.interactive,
    "--trellis-color-fwc-loadingspinner-ring-tertiary": p.interactive,
    "--trellis-color-fwc-button-specialty-secondary-toolbar-default": p.textPrimary,
    "--trellis-color-fwc-table-divider-color-emphasis": p.borderDefault,
  };
}

function buildElementOverridesV2(p) {
  return `
    /* V2 Data-Driven Theme Overrides */
    
    /* GLOBAL TOOLBAR - data-test-id selectors from extraction */
    [data-test-id="hs-global-toolbar"] {
      background-color: ${p.navBg} !important;
    }
    
    [data-test-id="hs-vertical-nav"] {
      background-color: ${p.navBg} !important;
    }
    
    [data-test-id="global-search-input-react"] {
      background-color: transparent !important;
      color: ${p.inputText} !important;
    }
    
    form#hs-search-react,
    [class*="StyledSearchForm"] {
      background-color: ${p.inputBg} !important;
      border-color: ${p.inputBorder} !important;
    }
    
    /* NAVIGATION ICONS */
    [data-test-id^="vertical-nav-icon__"] {
      fill: ${p.navIcon} !important;
    }
    
    [data-test-id="nav-favorite-icon"] {
      fill: ${p.navIcon} !important;
    }
    
    [data-location="global-toolbar"],
    [data-location="vertical-nav"],
    i18n-string
    {
      color: ${p.textPrimary} !important;
    }
    /* metergrid-Fix: das urspruengliche "span" in obigem Selektor war viel zu
       breit - hat mit !important JEDEN <span> ueberschrieben, auch bewusst
       hell gestylten Text auf dunklem Hintergrund (z.B. Badge-Zaehler wie
       "35"/"7.285": weisser Text auf rgb(20,20,20)-Pille). Ergebnis: dunkel-
       blauer statt weisser Text auf dunklem Grund - unlesbar. Betraf alle
       Themes der Original-Extension, nicht nur metergrid. */

    [class*="DialogHeader__StyledHeaderInner"],
    [class*="SidebarContainer"],
    [class*="ListeningStreamsTypeSidebar"],
    [class*="ViewerRelatedConditions__StyledConditionContentBox"],
    [class*="ReturnExperience__CenterBreakpoint"]
{
      background-color: ${p.surfaceBase} !important
}

    [class*="InboxContainer"]{
      background-color: transparent !important;
}

    [data-location="global-toolbar"]:hover,
    [data-location="vertical-nav"]:hover {
      background-color: ${p.surfaceHover} !important;
    }
    
    /* COPILOT SIDEBAR */

    [class*="BranchLabel__StyledBranchLabelBody"],
    aside.copilot-sidebar-container {
      background-color: ${p.surfaceRaised} !important;
      color: ${p.textPrimary} !important;
    }
    
    /* PAGE TEMPLATES */
    [class*="AbstractPageTemplate__StyledPage"],
    [class*="AbstractPageTemplate__"],
    [class*="AbstractPageSection__StyledSection"],
    [class*="PageSection__"],
    [class*="AbstractPageGridContent__Outer"] {
      background-color: ${p.surfaceBase} !important;
    }
    
    main, [role="main"], [class*="PageContent"], [class*="MainContent"], [class*="ContentArea"] {
      background-color: ${p.surfaceBase} !important;
    }
    
    body {
      background-color: ${p.surfaceBase} !important;
      color: ${p.textPrimary} !important;
    }
    
    /* VERTICAL NAV */
    #hs-vertical-nav,
    [class*="VerticalNavContainer__VNCMask"],
    [class*="VerticalNavContainer__VNCContent"],
    [class*="VerticalNavContainer__VNCMain"],
    [class*="VerticalNavContainer__VNCFooter"] {
      background-color: ${p.navBg} !important;
    }
    
    [class*="VerticalNavMenuItem__Li"],
    #hs-vertical-nav [role="menuitem"] {
      background-color: transparent !important;
      color: ${p.navText} !important;
    }
    
    #hs-vertical-nav button[role="menuitem"],
    #hs-vertical-nav a[role="menuitem"] {
      color: ${p.navText} !important;
      background-color: transparent !important;
    }
    
    #hs-vertical-nav [role="menuitem"]:hover {
      background-color: ${p.surfaceHover} !important;
    }
    
    #hs-vertical-nav svg, #hs-vertical-nav svg path {
      fill: ${p.navIcon} !important;
    }
    
    #hs-vertical-nav [role="menuitem"]:hover svg,
    #hs-vertical-nav [role="menuitem"]:hover svg path {
      fill: ${p.navIconHover} !important;
    }
    
    /* GLOBAL TOOLBAR */
    #hs-global-toolbar,
    [class*="GlobalToolbarHeader__StyledHeader"] {
      background-color: ${p.navBg} !important;
    }
    
    [class*="Header__Outer"], [class*="Header__InnerWrapper"], [class*="Header__"] {
      background-color: transparent !important;
    }
    
    [class*="GlobalToolbarItem__StyledListItem"] > button:hover,
    [class*="GlobalToolbarItem__StyledListItem"] > a:hover {
      background-color: ${p.surfaceHover} !important;
    }
    
    /* CARDS */
    [class*="SelectableBox"], [class*="Card__"], [class*="Panel__"] {
      background-color: ${p.cardBg} !important;
      color: ${p.textPrimary} !important;
      border-color: ${p.cardBorder} !important;
    }
    
    [class*="Tile__StyledTile"], [class*="CardWrapper__Outer"], [class*="CardSection__StyledCardSection"] {
      background-color: ${p.cardBg} !important;
      border-color: ${p.cardBorder} !important;
    }
    
    [data-test-id="ecosystem-app-card"], [data-test-id="ecosystem-app-card"] > div {
      background-color: ${p.cardBg} !important;
      border-color: ${p.cardBorder} !important;
    }
    
    [data-test-id="ecosystem-app-card"]:hover, [class*="CardWrapper__Outer"]:hover {
      background-color: ${p.cardHover} !important;
      border-color: ${p.borderHover} !important;
    }
    
    /* MODALS & POPUPS */
    [class*="Modal__"], [role="dialog"] {
      background-color: ${p.modalBg} !important;
      color: ${p.textPrimary} !important;
      border-color: ${p.modalBorder} !important;
    }
    
    [class*="Popover__"], [class*="Dropdown__"], [class*="Menu__"], [role="menu"], [role="listbox"] {
      background-color: ${p.modalBg} !important;
      color: ${p.textPrimary} !important;
      border-color: ${p.modalBorder} !important;
    }
    
    /* TABLES */
    table, [class*="Table__"], [class*="DataTable"], [role="grid"], [role="table"] {
      background-color: ${p.tableBg} !important;
      border-color: ${p.tableBorder} !important;
    }
    
    table thead th, [class*="Table__"] thead th, th, thead, thead tr {
      background-color: ${p.tableHeaderBg} !important;
      color: ${p.textPrimary} !important;
      border-color: ${p.tableBorder} !important;
    }
    
    tbody, tr, td {
      background-color: ${p.tableBg} !important;
      border-color: ${p.tableBorder} !important;
    }
    
    tbody tr:hover td, tbody tr:hover th, [class*="RowComponent__StyledRowComponent"]:hover {
      background-color: ${p.tableRowHover} !important;
    }
    
    [class*="IndexTableContainer"], [class*="TableWrapper"], [class*="TableContainer"], [class*="ListContainer"] {
      background-color: ${p.tableBg} !important;
    }
    
    [data-test-id="table-top-bar"] {
      background-color: ${p.tableHeaderBg} !important;
    }
    
    /* INPUTS */
    input, textarea, select, [class*="Input__"], [class*="TextArea__"], [class*="Select__"],
    [role="textbox"], [role="searchbox"], [role="combobox"] {
      background-color: ${p.inputBg} !important;
      color: ${p.inputText} !important;
      border-color: ${p.inputBorder} !important;
    }
    
    input::placeholder, textarea::placeholder {
      color: ${p.inputPlaceholder} !important;
    }
    
    input:focus, textarea:focus, select:focus {
      border-color: ${p.inputFocus} !important;
    }
    
    [class*="SearchInput__Wrapper"], [class*="SearchInputWrapper"] {
      background-color: ${p.inputBg} !important;
      border-color: ${p.inputBorder} !important;
    }
    
    [role="search"], [role="search"] input {
      background-color: ${p.inputBg} !important;
      color: ${p.inputText} !important;
      border-color: ${p.inputBorder} !important;
    }
    
    /* BUTTONS */
    [class*="PrivateButton__StyledButton"][data-button-use="tertiary-light"],
    [class*="PrivateButton__StyledButton"][data-button-use="tertiary-extra-light"],
    [class*="PrivateButton__StyledButton"][data-button-use="secondary"],
    [class*="PrivateButton__StyledButton"][data-button-use="form"],
    [class*="PrivateButton__StyledButton"][data-button-use="transparent"],
    [class*="PrivateButton__StyledButton"][data-button-use="primary-white"],
    [class*="PrivateButton__StyledButton"][data-button-use="tertiary"] {
      background-color: ${p.buttonSecondaryBg} !important;
      color: ${p.buttonSecondaryText} !important;
      border-color: ${p.buttonSecondaryBorder} !important;
    }
    
    [class*="PrivateButton__StyledButton"]:hover {
      background-color: ${p.surfaceHover} !important;
    }
    
    
    [class*="PrivateButtonLink__StyledButtonLink"] {
      color: ${p.interactive} !important;
      background-color: transparent !important;
    }
    
    [class*="PrivateButtonLink__StyledButtonLink"]:hover {
      color: ${p.interactiveHover} !important;
    }
    
    /* BADGES/TAGS: bewusst NICHT pauschal umgefaerbt (metergrid-Fix) -
       das wuerde auch rote Fehler-/Mahn-Badges auf die Theme-Akzentfarbe
       umfaerben und die Status-Semantik zerstoeren (rot = ueberfaellig
       soll rot bleiben). HubSpots eigene Badge-/Tag-Farben gelten weiter. */

    /* TABS */
    [role="tablist"] {
      background-color: ${p.surfaceBase} !important;
    }
    
    [role="tablist"] button {
      background-color: ${p.surfaceBase} !important;
      color: ${p.textPrimary} !important;
    }
    
    [class*="Tabs__StyledTabs"], [class*="Tabs__StyledWrapper"], [class*="Tabs__StyledList"] {
      background-color: ${p.surfaceBase} !important;
    }
    
    [class*="TabComponent-"], [class*="ViewTab__StyledTabComponent"], [class*="ViewTab__"] {
      background-color: ${p.surfaceRaised} !important;
      color: ${p.textPrimary} !important;
      border-color: ${p.borderDefault} !important;
    }
    
    [data-tab-link="true"] {
      color: ${p.textSecondary} !important;
      background-color: transparent !important;
    }
    
    [data-tab-link="true"]:hover {
      color: ${p.textPrimary} !important;
      background-color: ${p.surfaceHover} !important;
    }
    
    [data-tab-link="true"][data-tab-selected="true"],
    [data-tab-link="true"][aria-current="page"] {
      color: ${p.interactive} !important;
    }
    
    /* TEXT & LINKS */
    h1, h2, h3, h4, h5, h6, [class*="Heading__"], [class*="Title__"] {
      color: ${p.textPrimary} !important;
    }
    
    a:not([role="button"]) {
      color: ${p.interactive} !important;
    }
    
    a:not([role="button"]):hover {
      color: ${p.interactiveHover} !important;
    }
    
    [class*="Text__StyledText"], [class*="Text__TextElement"] {
      color: ${p.textPrimary} !important;
    }
    
    [data-link-use="dark"][class*="Link__StyledLink"] {
      color: ${p.interactive} !important;
    }
    
    [data-link-use="dark"][class*="Link__StyledLink"]:hover {
      color: ${p.interactiveHover} !important;
    }
    
    /* BORDERS */
    [class*="Border__"], [class*="Divider__"], hr, [class*="HR__StyledHR"] {
      border-color: ${p.borderDefault} !important;
      background-color: ${p.borderDefault} !important;
    }
    
    /* MENUS */
    #accounts-menu-content, [class*="MenuButton__StyledMenu"] {
      background-color: ${p.modalBg} !important;
      border-color: ${p.modalBorder} !important;
    }
    
    #accounts-menu-content > li, #accounts-menu-content [role="menuitem"],
    [class*="MenuButton__StyledMenu"] > li, [class*="MenuButton__StyledMenu"] [role="menuitem"] {
      background-color: ${p.modalBg} !important;
    }
    
    #accounts-menu-content > li:hover, #accounts-menu-content [role="menuitem"]:hover,
    [class*="MenuButton__StyledMenu"] > li:hover, [class*="MenuButton__StyledMenu"] [role="menuitem"]:hover,
    [role="menuitem"]:hover {
      background-color: ${p.surfaceHover} !important;
    }
    
    [class*="MenuItem__StyledLink"] {
      background-color: transparent !important;
      color: ${p.textPrimary} !important;
    }
    
    /* SETTINGS SIDEBAR */
    [class*="SidebarPage__SidebarInner"], [class*="SettingsPage__StyledDiv"],
    [class*="AbstractPageGridContent__Sidebar"] {
      background-color: ${p.surfaceBase} !important;
    }
    
    [class*="SideNavItem__StyledCustomLink"] {
      color: ${p.textPrimary} !important;
    }
    
    [class*="SideNavItem__StyledCustomLink"]:hover {
      background-color: ${p.surfaceHover} !important;
    }
    
    [class*="SideNavItem__StyledCustomLink"][aria-current="true"] {
      background-color: ${p.surfaceRaised} !important;
      color: ${p.interactive} !important;
    }
    
    /* CHECKBOXES */
    [class*="Checkbox__CheckboxIndicator"] {
      background-color: ${p.inputBg} !important;
      border-color: ${p.inputBorder} !important;
    }
    
    [class*="CheckboxCell"], [class*="CheckboxCell__"] {
      background-color: ${p.tableBg} !important;
    }
    
    /* TYPEAHEAD */
    [class*="TypeaheadResultsItem__StyledItem"] {
      background-color: transparent !important;
    }
    
    [class*="TypeaheadResultsItem__StyledItem"]:hover,
    [class*="TypeaheadResultsItem__StyledItem"][aria-selected="true"] {
      background-color: ${p.surfaceHover} !important;
    }
    
    [class*="TypeaheadResultsItem__StyledContentWrapper"],
    [class*="TypeaheadResultsItem__StyledContentLabel"],
    [data-option-text="true"] {
      color: ${p.textPrimary} !important;
    }
    
    [class*="TypeaheadSearch__StyledTypeaheadSearch"] {
      background-color: ${p.inputBg} !important;
    }
    
    /* PROGRESS */
    [class*="ProgressBar__ProgressBarWrapper"], [class*="Progress__ProgressWrapper"] {
      background-color: ${p.progressBg} !important;
    }
    
    [class*="Progress__ProgressBar"] {
      background-color: ${p.progressFill} !important;
    }
    
    /* TOOLTIP */
    [class*="ArrowContainer__StyledDiv"] {
      background-color: ${p.tooltipBg} !important;
      color: ${p.tooltipText} !important;
    }
    
    /* ALERTS: bewusst NICHT umgefaerbt (metergrid-Fix) - Alert-Boxen
       (Fehler/Warnung/Erfolg) sollen ihre eigene Warnfarbe behalten
       statt in der Theme-Akzentfarbe zu verschwinden. */

    /* AVATAR */
    [class*="AvatarContentWrapper__AvatarContentHolder"] {
      background-color: ${p.surfaceHover} !important;
    }
    
    /* MISC WRAPPERS */
    [class*="TFlex__StyledFlex"], [class*="Flex__FlexWrapper"], [class*="Flex__StyledFlex"],
    [class*="View__"] > div, [class*="Content__Wrapper"], [class*="ContentWrapper"] {
      background-color: transparent !important;
    }
    
    /* FILTERS */
    [class*="FilterButton"], [class*="QuickFilter"] {
      background-color: ${p.inputBg} !important;
      color: ${p.textPrimary} !important;
      border-color: ${p.inputBorder} !important;
    }
    
    [class*="FilterDropdown"], [class*="FilterMenu"], [class*="FilterPopover"] {
      background-color: ${p.modalBg} !important;
      color: ${p.textPrimary} !important;
    }
    
    /* PAGINATION */
    nav[aria-label*="Pagination"], nav[aria-label*="Pagination"] button {
      background-color: ${p.surfaceBase} !important;
      color: ${p.textPrimary} !important;
    }
    
    nav[aria-label="Pagination"] [class*="PrivateButton__StyledButton"] {
      border: none !important;
      background-color: transparent !important;
    }
    
    nav[aria-label="Pagination"] [class*="PrivateButton__StyledButton"]:hover {
      background-color: ${p.surfaceHover} !important;
    }
    
    /* COPILOT */
    .copilot-app-container {
      background-color: ${p.surfaceBase} !important;
      color: ${p.textPrimary} !important;
    }
    
    /* SCROLLBARS */
    ::-webkit-scrollbar { width: 12px; height: 12px; }
    ::-webkit-scrollbar-track { background: ${p.surfaceBase}; }
    ::-webkit-scrollbar-thumb { background: ${p.surfaceHover}; border-radius: 6px; border: 2px solid ${p.surfaceBase}; }
    ::-webkit-scrollbar-thumb:hover { background: ${p.surfacePressed}; }
    ::-webkit-scrollbar-corner { background: ${p.surfaceBase}; }
    * { scrollbar-color: ${p.surfaceHover} ${p.surfaceBase}; }
    
    [class*="Overhang__StyledOverhang"], [class*="ScrollOverhang"], [class*="scroll-shadow"], [class*="ScrollShadow"] {
      box-shadow: none !important;
      background: transparent !important;
      background-image: none !important;
    }
    
    /* ============================================
       HIGHCHARTS / CHARTS THEMING
       ============================================ */
    
    /* Chart container and background */
    svg.highcharts-root {
      background-color: ${p.surfaceRaised} !important;
    }
    
    rect.highcharts-background {
      fill: ${p.surfaceRaised} !important;
    }
    
    /* Axes */
    .highcharts-axis-line,
    path.highcharts-axis-line {
      stroke: ${p.borderDefault} !important;
    }
    
    .highcharts-grid-line,
    path.highcharts-grid-line {
      stroke: ${p.borderSubtle} !important;
    }
    
    /* Axis labels and titles */
    .highcharts-axis-labels text,
    .highcharts-xaxis-labels text,
    .highcharts-yaxis-labels text,
    text.highcharts-axis-title,
    g.highcharts-axis-labels text {
      fill: ${p.textSecondary} !important;
      color: ${p.textSecondary} !important;
    }
    
    /* Legend */
    .highcharts-legend text,
    g.highcharts-legend text,
    .highcharts-legend-item text {
      fill: ${p.textPrimary} !important;
      color: ${p.textPrimary} !important;
    }
    
    .highcharts-legend-box {
      fill: ${p.surfaceRaised} !important;
      stroke: ${p.borderDefault} !important;
    }
    
    /* Data labels */
    .highcharts-data-label text,
    g.highcharts-data-labels text,
    .highcharts-data-label-box {
      fill: ${p.textPrimary} !important;
      color: ${p.textPrimary} !important;
    }
    
    tspan.highcharts-text-outline {
      stroke: ${p.surfaceRaised} !important;
      fill: ${p.surfaceRaised} !important;
    }
    
    /* Tooltip */
    .highcharts-tooltip-box {
      fill: ${p.tooltipBg} !important;
      stroke: ${p.borderDefault} !important;
    }
    
    .highcharts-tooltip text,
    .highcharts-tooltip tspan {
      fill: ${p.tooltipText} !important;
      color: ${p.tooltipText} !important;
    }
    
    /* Legend navigation */
    .highcharts-legend-nav-active {
      fill: ${p.interactive} !important;
    }
    
    .highcharts-legend-nav-inactive {
      fill: ${p.textDisabled} !important;
    }
    
    text.highcharts-legend-navigation {
      fill: ${p.textSecondary} !important;
    }
    
    /* Chart end markers */
    div[id^="highcharts-end-of-chart-marker"] {
      color: ${p.textPrimary} !important;
    }
    
    /* ============================================
       REACT FLOW (DATA MODEL OVERVIEW) THEMING
       ============================================ */
    
    /* Flow container */
    [data-test-id="react-flow-wrapper"],
    .dmo-graph-container {
      background-color: ${p.surfaceBase} !important;
    }
    
    /* Nodes */
    [data-test-id^="node-bg-"] {
      background-color: ${p.cardBg} !important;
      border-color: ${p.cardBorder} !important;
    }
    
    [data-test-id^="card-wrapper-node-"] {
      background-color: ${p.cardBg} !important;
      color: ${p.textPrimary} !important;
      border-color: ${p.cardBorder} !important;
    }
    
    [data-test-id^="card-wrapper-node-"]:hover {
      background-color: ${p.cardHover} !important;
      border-color: ${p.borderHover} !important;
    }
    
    /* Node color blocks */
    [data-test-id="color-block"] {
      border-color: ${p.borderDefault} !important;
    }
    
    /* Edges */
    .react-flow__edge path,
    path.react-flow__edge-path {
      stroke: ${p.borderDefault} !important;
    }
    
    .react-flow__edge:hover path {
      stroke: ${p.interactive} !important;
    }
    
    /* Handles */
    .react-flow__handle {
      background-color: ${p.surfaceHover} !important;
      border-color: ${p.borderDefault} !important;
    }
    
    .react-flow__handle.connectable:hover {
      background-color: ${p.interactive} !important;
    }
    
    /* Controls */
    .react-flow__controls,
    [data-testid="rf__controls"] {
      background-color: ${p.surfaceRaised} !important;
      border-color: ${p.borderDefault} !important;
    }
    
    .react-flow__controls button {
      background-color: ${p.surfaceRaised} !important;
      color: ${p.textPrimary} !important;
      border-color: ${p.borderDefault} !important;
    }
    
    .react-flow__controls button:hover {
      background-color: ${p.surfaceHover} !important;
    }
    
    /* Mini map */
    .react-flow__minimap {
      background-color: ${p.surfaceRaised} !important;
    }
    
    /* Truncated text in nodes */
    [data-test-id="truncated-text"] {
      color: ${p.textPrimary} !important;
    }
    
    /* Tour/intro modal */
    [data-test-id="tour-intro-modal"],
    [data-component-name="ModalDialog"] {
      background-color: ${p.modalBg} !important;
      color: ${p.textPrimary} !important;
    }

    [class*="DialogBody__StyledDialogBody"]{
      background-color: transparent !important;
    }

    [class*="AbstractDeviceFrame__StyledDisplayWrapper"]{
      background-color: white !important;
}
    
    /* ============================================
       HELP DESK THEMING
       ============================================ */
    
    /* Main layout */
    [data-test-id="dash-left"],
    [data-test-id="dash-right"] {
      background-color: ${p.surfaceBase} !important;
      color: ${p.textPrimary} !important;
    }
    
    /* Thread history */
    .ThreadHistoryWrapper-hCBekJ,
    [class*="ThreadHistoryWrapper-"] {
      background-color: ${p.surfaceBase} !important;
    }
    
    /* Message content */
    [data-test-id="primary-message-content-wrapper"] {
      background-color: ${p.surfaceRaised} !important;
      color: ${p.textPrimary} !important;
    }
    
    /* Metadata editor */
    [data-test-id="metadata-editor-wrapper"] {
      background-color: ${p.surfaceRaised} !important;
      border-color: ${p.borderDefault} !important;
    }
    
    /* Channel label */
    [data-test-id="selected-channel-label"] {
      color: ${p.textSecondary} !important;
    }
    
    /* Reply history toggle */
    [data-test-id="InsertableReplyHistoryToggleButton"] {
      background-color: ${p.surfaceRaised} !important;
      color: ${p.textPrimary} !important;
    }
    
    /* Prosemirror editor menu */
    .ProsemirrorMenu__StyledWrapper-kaA-DfX,
    [class*="ProsemirrorMenu__StyledWrapper-"],
    .prosemirror-controls {
      background-color: ${p.surfaceRaised} !important;
      border-color: ${p.borderDefault} !important;
    }
    
    /* Ticket sidebar */
    [data-onboarding="help-desk-ticket-sidebar-wrapper"] {
      background-color: ${p.surfaceBase} !important;
    }
    
    /* Help desk nav sidebar */
    [data-test-id="nav-sidebar"] {
      background-color: ${p.navBg} !important;
    }
    
    /* Help desk search */
    [data-test-id="help-desk-search-input"] {
      background-color: ${p.inputBg} !important;
      color: ${p.inputText} !important;
      border-color: ${p.inputBorder} !important;
    }
    
    /* Agent status indicator */
    [data-test-id="agent-status-available-indicator"] {
      background-color: ${p.statusPositive} !important;
    }
    
    /* Note banner */
    [data-alert-type="info"].alert-dismissable {
      background-color: ${p.statusInfoSubtle} !important;
      border-color: ${p.statusInfo} !important;
      color: ${p.textPrimary} !important;
    }
    
    /* ============================================
       DASHBOARD WIDGET THEMING
       ============================================ */
    
    /* Dashboard container */
    [data-test-id="dashboard-container"],
    [data-scroll-container="dashboard-container"] {
      background-color: ${p.surfaceBase} !important;
    }
    
    /* Dashboard page */
    [data-test-id="dashboard-page"] {
      background-color: ${p.surfaceBase} !important;
    }
    
    /* Page header */
    [data-test-id="page-header"] {
      background-color: ${p.surfaceBase} !important;
      color: ${p.textPrimary} !important;
    }
    
    /* Dashboard widgets */
    [data-test-id="dashboard-widget"] {
      background-color: ${p.cardBg} !important;
      border-color: ${p.cardBorder} !important;
    }
    
    /* Report cards */
    [data-test-id="report-card-v2--card-wrapper"] {
      background-color: ${p.cardBg} !important;
      border-color: ${p.cardBorder} !important;
    }
    
    /* Date range labels */
    [data-test-id="inline-date-range-and-frequency-label"] {
      color: ${p.textSecondary} !important;
    }
    
    /* Expandable sidebar */
    [data-test-id="expandable-sidebar"],
    [data-test-id="floating-sidebar"] {
      background-color: ${p.surfaceRaised} !important;
      border-color: ${p.borderDefault} !important;
    }
    
    /* Drag handle icon */
    [data-test-id="drag-and-drop-icon"] {
      color: ${p.textSecondary} !important;
    }
    
    /* Data quality dashboard */
    [data-test-id="properties-dashboard-card"] {
      background-color: ${p.cardBg} !important;
      border-color: ${p.cardBorder} !important;
    }
    
    /* ============================================
       ACADEMY / LEARNING CENTER THEMING
       ============================================ */
    
    /* Abstract page template header */
    [data-test-id="abstract-page-template-header"] {
      background-color: ${p.surfaceBase} !important;
    }
    
    /* Learning content cards */
    [data-test-id="learning-content-card"] {
      background-color: ${p.cardBg} !important;
      border-color: ${p.cardBorder} !important;
      color: ${p.textPrimary} !important;
    }
    
    [data-test-id="learning-content-card"]:hover {
      background-color: ${p.cardHover} !important;
      border-color: ${p.borderHover} !important;
    }
    
    /* Lesson navigator */
    [data-test-id="lesson-navigator-container"] {
      background-color: ${p.surfaceRaised} !important;
      border-color: ${p.borderDefault} !important;
    }
    
    /* Sidebar navigator */
    #sidebarNavigator {
      background-color: ${p.surfaceRaised} !important;
    }
    
    /* Grow recommendations card */
    [data-test-id="grow-recommendations-card-wrapper"] {
      background-color: ${p.cardBg} !important;
      border-color: ${p.cardBorder} !important;
    }
    
    /* Step icons */
    [data-test-id="step-icon"] {
      background-color: ${p.surfaceHover} !important;
      border-color: ${p.borderDefault} !important;
    }
    
    [data-test-id="step-icon"][data-is-completed="true"] {
      background-color: ${p.statusPositiveSubtle} !important;
      border-color: ${p.statusPositive} !important;
    }
    
    [data-test-id="step-icon"][data-is-active="true"] {
      background-color: ${p.interactive} !important;
      border-color: ${p.interactiveHover} !important;
    }
    
    /* Filter type search */
    [data-test-id="filter-type-search"] {
      background-color: ${p.inputBg} !important;
      color: ${p.inputText} !important;
      border-color: ${p.inputBorder} !important;
    }
    
    /* Colored sections */
    .colored-section,
    .banner--top {
      background-color: ${p.surfaceRaised} !important;
    }
    
    /* ============================================
       MARKETPLACE / STOREFRONT THEMING
       ============================================ */
    
    /* Storefront header */
    [data-test-id="storefront-header"] {
      background-color: ${p.navBg} !important;
      color: ${p.textPrimary} !important;
    }
    
    /* Storefront search */
    [data-test-id="storefront-search-bar"] {
      background-color: ${p.inputBg} !important;
      color: ${p.inputText} !important;
      border-color: ${p.inputBorder} !important;
    }
    
    /* Main section */
    .MainSection-fsVwSg,
    [class*="MainSection-"] {
      background-color: ${p.surfaceBase} !important;
    }
    
    /* Connected apps container */
    [data-test-id="connected-apps-ui-container"] {
      background-color: ${p.surfaceBase} !important;
    }
    
    /* Connected apps table */
    [data-test-id="connected-apps-table"] {
      background-color: ${p.tableBg} !important;
      border-color: ${p.tableBorder} !important;
    }
    
    [data-test-id="app-column-header"],
    [data-test-id="status-column-header"],
    [data-test-id="installed-date-column-header"],
    [data-test-id="installed-by-column-header"],
    [data-test-id="last-activity-column-header"],
    [data-test-id="actions-column-header"] {
      background-color: ${p.tableHeaderBg} !important;
      color: ${p.textPrimary} !important;
    }
    
    [data-test-id="app-connections-user-cell"] {
      background-color: ${p.tableBg} !important;
    }
    
    /* ============================================
       CRM FRAMEWORK TABLE THEMING
       ============================================ */
    
    /* Framework data table */
    [data-test-id="framework-data-table"] {
      background-color: ${p.tableBg} !important;
      border-color: ${p.tableBorder} !important;
    }
    
    /* CRM table cells */
    [data-test-id="crm-table-cell"] {
      background-color: ${p.tableBg} !important;
      color: ${p.textPrimary} !important;
      border-color: ${p.tableBorder} !important;
    }
    
    [data-test-id="crm-table-cell"][data-test-hover-cell="true"]:hover {
      background-color: ${p.tableRowHover} !important;
    }
    
    /* CRM listing filter bar */
    [data-test-id="crm-listing-filter-bar"] {
      background-color: ${p.surfaceBase} !important;
    }
    
    /* CRM listing search input */
    [data-test-id="crm-listing-search-input"] {
      background-color: ${p.inputBg} !important;
      color: ${p.inputText} !important;
      border-color: ${p.inputBorder} !important;
    }
    
    /* Table top bar */
    [data-test-id="table-top-bar"] {
      background-color: ${p.surfaceRaised} !important;
      border-color: ${p.borderDefault} !important;
    }
    
    /* View tabs DnD */
    [data-test-id="view-tabs-dnd-v2"] {
      background-color: ${p.surfaceBase} !important;
    }
    
    [data-test-id^="view-tab-"],
    [data-onboarding="view-tab"] {
      background-color: ${p.surfaceRaised} !important;
      color: ${p.textPrimary} !important;
      border-color: ${p.borderDefault} !important;
    }
    
    [data-test-id^="view-tab-"]:hover {
      background-color: ${p.surfaceHover} !important;
    }
    
    /* Checkbox select all */
    [data-test-id="checkbox-select-all-container"] {
      background-color: ${p.tableHeaderBg} !important;
    }
    
    /* Header components */
    [data-test-id="header-component"],
    [data-test-id="header-component-with-help-text"],
    [data-test-id="multiline-header-component"] {
      color: ${p.textPrimary} !important;
    }
    
    /* CRM listing table cells */
    [data-test-id="crm-listing-table-cell"] {
      color: ${p.textPrimary} !important;
    }
    
    /* Folder tabs */
    [data-test-id="crm-listing-folder-tab"] {
      background-color: ${p.surfaceRaised} !important;
      color: ${p.textPrimary} !important;
    }
    
    /* ============================================
       SVG ICON UNIVERSAL THEMING
       ============================================ */
    
    /* All styled icons */
    svg[data-icon-name].StyledIcon-jibXlG,
    svg[class*="StyledIcon-"] {
      fill: ${p.textSecondary} !important;
      color: ${p.textSecondary} !important;
    }
    
    /* Icons in buttons - inherit button color */
    button svg[data-icon-name],
    [role="button"] svg[data-icon-name] {
      fill: currentColor !important;
      color: currentColor !important;
    }
    
    /* Icons on hover */
    button:hover svg[data-icon-name],
    [role="button"]:hover svg[data-icon-name],
    a:hover svg[data-icon-name] {
      fill: ${p.textPrimary} !important;
    }
    
    /* Navigation icons (override general) */
    #hs-vertical-nav svg[data-icon-name],
    [data-test-id="hs-vertical-nav"] svg[data-icon-name] {
      fill: ${p.navIcon} !important;
    }
    
    /* Interactive/link icons */
    a svg[data-icon-name],
    [data-link-use] svg[data-icon-name] {
      fill: ${p.interactive} !important;
    }
    
    /* Status icons */
    svg[data-icon-name="Success"] {
      fill: ${p.statusPositive} !important;
    }
    
    svg[data-icon-name="Info"] {
      fill: ${p.statusInfo} !important;
    }
    
    svg[data-icon-name="Favorite"] {
      fill: ${p.brand} !important;
    }
    
    /* SVG data name icons */
    svg[data-svg-name] {
      fill: ${p.textSecondary} !important;
    }
    
    /* Specific icon paths that need fill */
    svg[data-icon-name] path,
    svg[class*="StyledIcon-"] path {
      fill: inherit !important;
    }
    
    /* Polygon elements in icons */
    svg polygon {
      fill: ${p.textSecondary} !important;
    }
    
    /* ============================================
       ADDITIONAL COMPONENT THEMING
       ============================================ */
    
    /* Brand kit and brand voice cards */
    [data-test-id="brand-kit-overview-card"],
    [data-test-id="brand-voice-card"] {
      background-color: ${p.cardBg} !important;
      border-color: ${p.cardBorder} !important;
    }
    
    /* Industry classification table */
    [data-test-id="industry-classification-table"] {
      background-color: ${p.tableBg} !important;
      border-color: ${p.tableBorder} !important;
    }
    
    /* Records right sidebar */
    [data-test-id="records-right-sidebar"],
    .StyledRightSidebar-cUBXJb,
    [class*="StyledRightSidebar-"] {
      background-color: ${p.surfaceRaised} !important;
      border-color: ${p.borderDefault} !important;
    }
    
    /* Record page sidebars */
    [data-selenium-test="left-sidebar-container"],
    [data-selenium-test="right-sidebar-container"] {
      background-color: ${p.surfaceRaised} !important;
    }
    
    /* Sidebar page */
    [data-test-id="sidebar-page"],
    [data-reagan-test="settings-page"] {
      background-color: ${p.surfaceBase} !important;
    }
    
    /* Pipeline select */
    [data-test-id="pipeline-select"] {
      background-color: ${p.inputBg} !important;
      color: ${p.inputText} !important;
      border-color: ${p.inputBorder} !important;
    }
    
    /* Stage table */
    [data-selenium-test="stage-table"] {
      background-color: ${p.tableBg} !important;
      border-color: ${p.tableBorder} !important;
    }
    
    [data-selenium-test="stage-table"] th,
    .WideHeader-kAoRjW,
    [class*="WideHeader-"] {
      background-color: ${p.tableHeaderBg} !important;
      color: ${p.textPrimary} !important;
    }
    
    /* Stage label inputs */
    [data-onboarding="stage-label"] {
      background-color: ${p.inputBg} !important;
      color: ${p.inputText} !important;
      border-color: ${p.inputBorder} !important;
    }
    
    /* Pipeline rule cells */
    [data-test-id^="pipeline-rule-cell-"] {
      background-color: ${p.tableBg} !important;
    }
    
    /* Meetings links table */
    [data-selenium-test="meetings-links-table"] {
      background-color: ${p.tableBg} !important;
      border-color: ${p.tableBorder} !important;
    }
    
    [data-selenium-test="meetings-search-input"] {
      background-color: ${p.inputBg} !important;
      color: ${p.inputText} !important;
      border-color: ${p.inputBorder} !important;
    }
    
    [data-selenium-test="meeting-link-name"] {
      color: ${p.interactive} !important;
    }
    
    /* Feature table */
    [data-test-id="feature-table-head"],
    [data-test-id^="feature-table-"] {
      background-color: ${p.tableHeaderBg} !important;
    }
    
    [data-test-id="translated-feature"] {
      color: ${p.textPrimary} !important;
    }
    
    /* Pricing/merch cards */
    [data-selenium-id$="-merch-card"] {
      background-color: ${p.cardBg} !important;
      border-color: ${p.cardBorder} !important;
    }
    
    /* DMO header filter section */
    [data-test-id="dmo-header-filter-section"] {
      background-color: ${p.surfaceBase} !important;
    }
    
    /* Comments widget */
    #hs_cos_wrapper_comments,
    [data-hs-cos-type="module"] {
      background-color: ${p.surfaceBase} !important;
      color: ${p.textPrimary} !important;
    }
    
    /* Line items table */
    .line-items__table-h2 {
      color: ${p.textPrimary} !important;
    }
    
    #line-items__table-body {
      background-color: ${p.tableBg} !important;
    }
    
    .item-name {
      color: ${p.textPrimary} !important;
    }
    
    .currency__content {
      color: ${p.textPrimary} !important;
    }
    
    .totals__row {
      background-color: ${p.tableHeaderBg} !important;
      color: ${p.textPrimary} !important;
    }
    
    .line-items__total-name {
      color: ${p.textPrimary} !important;
    }
    
    /* Segments index */
    [data-test-id="segments-index"] {
      background-color: ${p.surfaceBase} !important;
    }
    
    /* Notification badge */
    span[id^="notification-badge-"] {
      background-color: ${p.brand} !important;
      color: ${p.textOnFill} !important;
    }
    
    /* Radio content */
    span[id^="radio-content-"] {
      color: ${p.textPrimary} !important;
    }
    
    /* ============================================
       V1 PORTED RULES - Enhanced Coverage
       ============================================ */
    
    /* Navigation enhancements - stroke for some icons */
    #hs-vertical-nav svg path,
    [class*="VerticalNavContainer"] svg path,
    [class*="VNCMask"] svg path {
      stroke: ${p.navIcon} !important;
    }
    
    #hs-vertical-nav [role="menuitem"]:hover svg path {
      stroke: ${p.navIconHover} !important;
    }
    
    /* Nav scroll arrows and blocking elements */
    [class*="VerticalNavContainer__StyledScrollArrow"],
    [class*="VerticalNavMenu__BlockingElement"] {
      background-color: ${p.navBg} !important;
    }
    
    /* Help button and sprocket logo hover */
    [class*="HelpButton__StyledHelpButton"]:hover,
    [class*="GlobalToolbarSprocket__StyledLogoContainer"] > a:hover {
      background-color: ${p.surfaceHover} !important;
    }
    
    /* Tile sections need transparent bg */
    [class*="TileSection__StyledTileSection"] {
      background-color: transparent !important;
    }
    
    /* Table row striping */
    [class*="RowComponent__StyledRowComponent"] {
      background-color: ${p.tableHeaderBg} !important;
    }
    
    [class*="RowComponent__StyledRowComponent"]:nth-child(even) {
      background-color: ${p.tableBg} !important;
    }
    
    /* CRM-specific data tables */
    [class*="CrmDataTable__"],
    [class*="CrmDataTable__"] table,
    [class*="CrmDataTable__"] tbody,
    [class*="CrmDataTable__"] tr,
    [class*="CrmDataTable__"] td {
      background-color: ${p.tableBg} !important;
      color: ${p.textPrimary} !important;
    }
    
    /* Table container components */
    [class*="StyledTableComponents__TableContainer"],
    [class*="StyledTableComponents__ScrollWindowPresentational"],
    [class*="ScrollOverhang__Wrapper"] {
      background-color: ${p.tableBg} !important;
      border-color: ${p.tableBorder} !important;
    }
    
    /* Table cell internals */
    [class*="CellContent"],
    [class*="CellWrapper"] {
      background-color: transparent !important;
      color: ${p.textPrimary} !important;
    }
    
    [class*="TableHoverCell__StyledTableHoverCell"] {
      background-color: inherit !important;
    }
    
    /* Input field internals */
    [class*="TextInput__StyledInput"] {
      background-color: transparent !important;
      color: ${p.inputText} !important;
    }
    
    [class*="StyledSearchInput"] {
      color: ${p.inputText} !important;
    }
    
    [class*="StyledSearchInput"]::placeholder {
      color: ${p.inputPlaceholder} !important;
    }
    
    [class*="Wrappers__SearchInputWrapper"] {
      background-color: ${p.inputBg} !important;
      border-color: ${p.inputBorder} !important;
    }
    
    /* Button internal containers need transparency */
    [class*="PrivateButton__StyledButtonTextContainer"],
    [class*="AbstractDropdown__StyledButtonContents"],
    [class*="AbstractDropdown__StyledDropdownButtonLabel"] {
      background-color: transparent !important;
    }
    
    /* Tag internal wrappers */
    [class*="Tag__FlexWrapper"],
    [class*="Tag__ContentWrapper"] {
      background-color: transparent !important;
      color: inherit !important;
    }
    
    /* Tab active indicator */
    [class*="Tab__TabIndicator"] {
      background-color: ${p.interactive} !important;
    }
    
    /* Tab component buttons and icons */
    [class*="TabComponent"] [class*="PrivateButton__StyledButton"] {
      background-color: transparent !important;
      border: none !important;
    }
    
    [class*="TabComponent"] [class*="PrivateButton__StyledButton"] svg {
      fill: ${p.textPrimary} !important;
      color: ${p.textPrimary} !important;
    }
    
    [data-more-tabs="true"] {
      background-color: transparent !important;
    }
    
    /* Abstract element text */
    [class*="AbstractElement__StyledTag"] {
      color: ${p.textSecondary} !important;
    }
    
    /* View and Flex border colors */
    [class*="View__StyledView"] {
      border-color: ${p.borderDefault} !important;
    }
    
    [class*="Flex__StyledFlex"] {
      border-block-start-color: ${p.borderDefault} !important;
      border-block-end-color: ${p.borderDefault} !important;
      border-inline-start-color: ${p.borderDefault} !important;
      border-inline-end-color: ${p.borderDefault} !important;
    }
    
    /* List separators */
    [class*="List__StyledVerticalSeparator"] {
      background-color: ${p.borderDefault} !important;
    }
    
    /* User preferences menu details */
    [class*="UserPreferences__UserPrefTextContainer"] *,
    [class*="UserPreferences__UserName"],
    [class*="UserPreferences__UserEmail"] {
      color: ${p.textPrimary} !important;
    }
    
    [class*="UserPreferences__UserLink"] {
      color: ${p.interactive} !important;
    }
    
    [class*="MenuItem__StyledLink"]:hover [class*="UserPreferences__UserLink"] {
      color: ${p.interactiveHover} !important;
    }
    
    [class*="MenuPickerSubmenuItem__StyledLabel"],
    [class*="PortalPickerSubmenuItem__StyledSpan"] {
      color: ${p.textPrimary} !important;
    }
    
    [class*="MenuItemWithSubmenu__StyledButton"],
    [class*="MenuItemWithSubmenu__StyledButton"] p {
      color: ${p.textPrimary} !important;
    }
    
    [class*="MenuItemWithSubmenu__StyledButton"]:hover {
      background-color: ${p.surfaceHover} !important;
    }
    
    [class*="MenuItemWithSubmenu__StyledButton"] svg,
    [class*="ArrowRightIcon__StyledSvg"] {
      fill: ${p.textSecondary} !important;
    }
    
    [class*="ExternalLinkIcon__StyledSvg"] {
      fill: ${p.interactive} !important;
    }
    
    [class*="TrellisThemeMenuGroup__StyledMenuGroup"],
    [class*="TrellisThemeMenuGroup__TitleContainer"],
    [class*="TrellisOpt__StyledMenuItem"],
    [class*="TrellisOpt__LinkContainer"] {
      background-color: ${p.modalBg} !important;
      color: ${p.textPrimary} !important;
    }
    
    [class*="InviteLink__StyledMenuItem"] {
      background-color: ${p.modalBg} !important;
    }
    
    [class*="InviteLink__StyledMenuItem"]:hover {
      background-color: ${p.surfaceHover} !important;
    }
    
    [class*="AccountFooter__StyledListItem"],
    [class*="AccountFooter__StyledMenuList"] {
      background-color: ${p.modalBg} !important;
      border-color: ${p.modalBorder} !important;
    }
    
    [class*="AccountFooter__StyledMenuList"] li {
      background-color: ${p.modalBg} !important;
    }
    
    [class*="AccountFooter__StyledMenuList"] li:hover {
      background-color: ${p.surfaceHover} !important;
    }
    
    .accounts__primary-text,
    .accounts__primary-text-container {
      color: ${p.textPrimary} !important;
    }
    
    /* SideNav section headings */
    [class*="SideNav__StyledNav"] [class*="Heading__StyledHeading"] {
      color: ${p.textSecondary} !important;
    }
    
    /* Back link in settings */
    [class*="BackLink__StyledLink"] {
      color: ${p.textPrimary} !important;
    }
    
    [class*="BackLink__StyledLink"]:hover {
      background-color: ${p.surfaceHover} !important;
    }
    
    /* Multi-column layouts */
    [class*="MultiColumn__StyledMultiColumn"],
    .fvQPGp,
 [class*="View__"] >  [class*="CardSection__StyledCardSection"]
    {
      background-color: ${p.surfaceBase} !important;
      color: ${p.textPrimary} !important;
    }
    
    /* Form control labels */
    [class*="FormControl__StyledInnerLabel"] {
      color: ${p.textPrimary} !important;
    }
    
    /* React-Select (legacy select component) */
    .Select-control {
      background-color: ${p.inputBg} !important;
      border-color: ${p.inputBorder} !important;
    }
    
    .Select-control:hover {
      border-color: ${p.borderHover} !important;
    }
    
    .Select-multi-value-wrapper {
      background-color: transparent !important;
    }
    
    .Select-input,
    .Select-input input {
      background-color: transparent !important;
      color: ${p.inputText} !important;
    }
    
    .Select-placeholder {
      color: ${p.inputPlaceholder} !important;
    }
    
    .Select-arrow-zone {
      background-color: transparent !important;
    }
    
    .Select-arrow {
      border-color: ${p.textSecondary} transparent transparent !important;
    }
    
    .Select-menu-outer {
      background-color: ${p.modalBg} !important;
      border-color: ${p.modalBorder} !important;
    }
    
    .Select-option, .Select-option-group-label {
      background-color: ${p.modalBg} !important;
      color: ${p.textPrimary} !important;
    }
    
    .Select-option:hover,
    .Select-option.is-focused {
      background-color: ${p.surfaceHover} !important;
    }
    
    .Select-option.is-selected {
      background-color: ${p.surfacePressed} !important;
    }
    
    .Select-value,
    .Select-value-label {
      color: ${p.textPrimary} !important;
    }
    
    /* Shimmer loading states */
    [class*="Shimmer__ShimmerFill"],
    [class*="Shimmer__"] {
      background-color: ${p.surfaceHover} !important;
    }
    
    /* Actions menu active state */
    [class*="ActionsMenustyles__StyledMenuOption"]:active {
      background-color: ${p.surfaceHover} !important;
    }
    
    /* Expandable preferences in settings */
    [class*="ExpandablePreference__ClickableHeaderView"]:hover {
      background-color: ${p.surfaceHover} !important;
    }
    
    [class*="ExpandableSection__ExpandableWrapper"],
    [class*="PreferencesListActionBar__LinksContainer"],
    [class*="PreferencesListActionBar__IconGrid"] {
      background-color: transparent !important;
    }
    
    [data-test-id="preference-group-primary-bucket"],
    [data-test-id="preferences-list-action-search"] {
      background-color: ${p.surfaceBase} !important;
    }
    
    /* Extension footer */
    [data-test-id="extension-footer"] {
      background-color: transparent !important;
    }
    
    /* Ecosystem app cards and sliders */
    [class*="EcosystemCardMedium__StyledUnderlineOnHover"] {
      color: ${p.textPrimary} !important;
    }
    
    [class*="EcosystemSlider__ArrowButtonWrapper"] button {
      background-color: ${p.buttonSecondaryBg} !important;
      border-color: ${p.buttonSecondaryBorder} !important;
    }
    
    [class*="EcosystemSlider__ArrowButtonWrapper"] button:hover {
      background-color: ${p.surfaceHover} !important;
    }
    
    /* GRADIENTS for themed backgrounds */
    ${p.gradientPrimary ? `
    [class*="ProgressBar__ProgressBarWrapper"]::after,
    [class*="Progress__ProgressWrapper"]::after {
      content: "";
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: ${p.gradientAccent};
      opacity: 0.1;
      pointer-events: none;
    }
    ` : ''}

    /* ============================================
       DATA-DRIVEN RULES (from UI map extraction)
       Calendar/Contacts page elements
       ============================================ */

    /* CRM Index Page Container */
    div#crm[data-selenium-test="crm-index-page"],
    [data-test-table-version="v2"] {
      background-color: ${p.surfaceBase} !important;
      color: ${p.textPrimary} !important;
    }

    /* Global Search Input */
    input#global-search-input,
    [class*="StyledSearchInput-"] {
      background-color: transparent !important;
      color: ${p.textOnFill} !important;
    }

    /* Search Icon */
    [class*="StyledSearchIcon-"] {
      fill: ${p.textOnFill} !important;
    }

    /* Keyboard Shortcut Key */
    [class*="StyledKey-"] {
      color: ${p.textOnFill} !important;
      border-color: ${p.borderDefault} !important;
    }

    /* Global Toolbar Divider */
    [class*="GlobalToolbarDivider-"] {
      background-color: ${p.borderDefault} !important;
    }

    /* Vertical Nav Scroll Arrow */
    [class*="VerticalNavContainer__StyledScrollArrow-"] {
      background-color: ${p.navBg} !important;
      border-color: ${p.borderDefault} !important;
    }

    /* Expand/Collapse Icon */
    [class*="ExpandCollapseIcon__Outline-"] {
      fill: ${p.textOnFill} !important;
    }

    [class*="ExpandCollapseIcon__InnerArrow-"] {
      fill: ${p.navIcon} !important;
    }

    /* Object Switcher Dropdown */
    [data-test-id="object-switcher__dropdown"] {
      background-color: ${p.surfaceRaised} !important;
      color: ${p.textPrimary} !important;
      border-color: ${p.borderDefault} !important;
    }

    [data-test-id="object-switcher__dropdown"]:hover {
      background-color: ${p.surfaceHover} !important;
    }

    /* Dropdown Caret */
    [data-test-id="dropdown-caret"],
    [class*="DropdownCaret__StyledCaret-"] {
      border-top-color: ${p.textSecondary} !important;
    }

    /* Tab Components - Selected State */
    [class*="TabComponent-"][aria-selected="true"],
    [data-test-id^="view-tab-"][aria-selected="true"] {
      background-color: ${p.surfaceRaised} !important;
      color: ${p.textPrimary} !important;
      border-color: ${p.borderDefault} !important;
      border-bottom-color: ${p.surfaceRaised} !important;
    }

    /* Tab Components - Unselected State */
    [class*="TabComponent-"][aria-selected="false"],
    [data-test-id^="view-tab-"][aria-selected="false"] {
      background-color: ${p.surfaceBase} !important;
      color: ${p.textSecondary} !important;
      border-color: ${p.borderDefault} !important;
    }

    [class*="TabComponent-"][aria-selected="false"]:hover,
    [data-test-id^="view-tab-"][aria-selected="false"]:hover {
      background-color: ${p.surfaceHover} !important;
      color: ${p.textPrimary} !important;
    }

    /* View Title Text */
    [data-test-id^="view-title-"],
    [class*="Text__StyledText-"] {
      color: ${p.textPrimary} !important;
    }

    /* Add View Menu Button */
    [data-test-id="add-view-menu-button"] {
      background-color: ${p.surfaceRaised} !important;
      color: ${p.textSecondary} !important;
      border-color: ${p.borderDefault} !important;
    }

    [data-test-id="add-view-menu-button"]:hover {
      background-color: ${p.surfaceHover} !important;
      color: ${p.textPrimary} !important;
    }

    /* View Tab Menu and Close Button (transparent) */
    [data-test-id="view-tab-menu"],
    [data-test-id^="close-view-"] {
      background-color: transparent !important;
    }

    [data-test-id="view-tab-menu"] svg,
    [data-test-id^="close-view-"] svg {
      fill: ${p.textSecondary} !important;
    }

    [data-test-id="view-tab-menu"]:hover svg,
    [data-test-id^="close-view-"]:hover svg {
      fill: ${p.textPrimary} !important;
    }

    /* Index Topbar Dropdown (actions menu) */
    [data-selenium-test="index-topbar-dropdown"] {
      background-color: ${p.surfaceRaised} !important;
      color: ${p.textSecondary} !important;
      border-color: ${p.borderDefault} !important;
    }

    [data-selenium-test="index-topbar-dropdown"]:hover {
      background-color: ${p.surfaceHover} !important;
    }

    /* Create Object Dropdown (primary button) */
    [data-test-id="create-object-dropdown"] {
      background-color: ${p.brand} !important;
      color: ${p.textOnFill} !important;
    }

    [data-test-id="create-object-dropdown"]:hover {
      background-color: ${p.brandHover} !important;
    }

    /* Floating Action Button */
    [class*="FloatingActionButton__Fab-"] {
      background-color: ${p.interactive} !important;
      background-image: linear-gradient(89deg, ${p.interactive}, ${p.interactiveHover}) !important;
      color: ${p.textOnFill} !important;
    }

    [class*="FloatingActionButton__Fab-"]:hover {
      background-color: ${p.interactiveHover} !important;
    }

    /* Flex Containers (main content area) */
    [class*="Flex__StyledFlex-"] {
      background-color: transparent !important;
      border-color: ${p.borderDefault} !important;
    }

[data-test-id="abstract-page-template-header"] > [class*="Flex__StyledFlex-"]{
      background-color: ${p.surfacePressed} !important;
}

    /* Specific i18n text in nav */
    [data-key="nav.icons.breezeAssistant"] {
      color: ${p.textOnFill} !important;
    }

    [data-key*="nav.globalToolbar"] {
      color: ${p.textOnFill} !important;
    }

    /* SVG Icon Base */
    [class*="SVGIconBase__StyledSVGIconBase-"] {
      fill: ${p.navIcon} !important;
    }

    /* Render Nav Component Iframe */
    [class*="RenderNavComponent__StyledIframe-"] {
      background-color: ${p.surfaceBase} !important;
    }

    /* Filter Dropdowns - External Option Enum */
    [data-test-id^="external-option-enum-"] {
      background-color: ${p.surfaceRaised} !important;
      color: ${p.textPrimary} !important;
      border-color: ${p.borderDefault} !important;
    }

    [data-test-id^="external-option-enum-"]:hover {
      background-color: ${p.surfaceHover} !important;
    }

    /* Date Data Filter Dropdown */
    [data-test-id="date-data-filter-dropdown"] {
      background-color: ${p.surfaceRaised} !important;
      color: ${p.textPrimary} !important;
      border-color: ${p.borderDefault} !important;
    }

    [data-test-id="date-data-filter-dropdown"]:hover {
      background-color: ${p.surfaceHover} !important;
    }

    /* Vertical Nav Menu Item Toggles */
    [data-test-id$="-toggle"][data-location="vertical-nav"] {
      color: ${p.navText} !important;
    }

    [data-test-id$="-toggle"][data-location="vertical-nav"]:hover {
      background-color: ${p.surfaceHover} !important;
    }

    /* Vertical Nav Icon specific fills */
    [data-test-id^="vertical-nav-icon__"] {
      fill: ${p.navIcon} !important;
    }

    /* Active/Selected nav item */
    [data-test-id$="-toggle"][aria-expanded="true"] {
      color: ${p.textOnFill} !important;
    }

    [data-test-id$="-toggle"][aria-expanded="true"] [data-test-id^="vertical-nav-icon__"] {
      fill: ${p.textOnFill} !important;
    }

    /* Global Toolbar Items with data-location */
    [data-location="global-toolbar"] {
      color: ${p.navText} !important;
    }

    [data-location="global-toolbar"]:hover {
      background-color: ${p.surfaceHover} !important;
    }

    /* Object Create Menu */
    [data-test-id="object-create-menu"] {
      background-color: ${p.modalBg} !important;
      border-color: ${p.modalBorder} !important;
    }

    /* Mini Trial Guide Button */
    [data-test-id="mini-trial-guide-button"] {
      color: ${p.navText} !important;
    }

    /* Calling Nav Component Icon */
    [class*="CallingNavComponentIcon__StyledToggleButton-"] {
      color: ${p.navText} !important;
    }

    [class*="CallingNavComponentIcon__StyledToggleButton-"]:hover {
      background-color: ${p.surfaceHover} !important;
    }

    /* In-App Help Iframe container */
    #in-app-help-iframe {
      background-color: ${p.surfaceBase} !important;
    }

    /* Bookmarks Group Toggle */
    [data-test-id="@@nav-item/bookmarks-group-toggle"] {
      color: ${p.navText} !important;
    }

    /* Nav Favorite Icon */
    [data-test-id="nav-favorite-icon"] {
      fill: ${p.navIcon} !important;
    }

    /* Expand Collapse Button */
    [data-test-id="isPinned-false"],
    [data-test-id="isPinned-true"] {
      color: ${p.navText} !important;
    }

    /* ============================================
       CALENDAR VIEW THEMING
       ============================================ */

    /* Calendar Header (day names row) */
    [data-test-id="month-calendar-header"] {
      background-color: ${p.tableHeaderBg} !important;
      color: ${p.textPrimary} !important;
      border-color: ${p.borderDefault} !important;
    }

    /* Calendar Shell */
    [class*="CalendarViewShell__InnerShell-"] {
      background-color: ${p.surfaceBase} !important;
    }

    /* Month Calendar Grid */
    [class*="MonthCalendarStyles__MonthGrid-"] {
      background-color: ${p.surfaceBase} !important;
      border-color: ${p.borderDefault} !important;
    }

    /* Calendar Row Wrapper */
    [class*="MonthCalendarStyles__RowWrapper-"] {
      background-color: ${p.surfaceRaised} !important;
      border-color: ${p.borderDefault} !important;
    }

    /* Calendar Row (week row) */
    [class*="MonthCalendarStyles__Row-"] {
      background-color: ${p.surfaceRaised} !important;
      border-color: ${p.borderDefault} !important;
    }

    /* Calendar Week cells */
    [class*="MonthCalendarStyles__Week-"] {
      background-color: ${p.surfaceRaised} !important;
      border-color: ${p.borderDefault} !important;
      color: ${p.textPrimary} !important;
    }

    /* Calendar Events Wrapper */
    [class*="MonthCalendarStyles__EventsWrapper-"] {
      background-color: transparent !important;
    }

    /* Calendar Event chips */
    [class*="MonthCalendarStyles__Event-"] {
      background-color: ${p.cardBg} !important;
      border-color: ${p.borderDefault} !important;
      color: ${p.textPrimary} !important;
    }

    [class*="MonthCalendarStyles__Event-"]:hover {
      background-color: ${p.cardHover} !important;
      border-color: ${p.borderHover} !important;
    }

    /* Calendar day headers (Sunday, Monday, etc.) */
    [class*="MonthCalendarStyles__MonthGrid-"] h6,
    [data-test-id="month-calendar-header"] h6,
    [class*="MonthCalendarStyles"] [role="heading"] {
      color: ${p.textSecondary} !important;
    }

    /* Calendar day numbers */
    [class*="MonthCalendarStyles__Week-"] p,
    [class*="MonthCalendarStyles__Row-"] p {
      color: ${p.textPrimary} !important;
    }

    /* Calendar navigation buttons (Month dropdown, Today, arrows) */
    [class*="MonthCalendarStyles"] button,
    [class*="CalendarViewShell"] button {
      background-color: ${p.surfaceRaised} !important;
      color: ${p.textPrimary} !important;
      border-color: ${p.borderDefault} !important;
    }

    [class*="MonthCalendarStyles"] button:hover,
    [class*="CalendarViewShell"] button:hover {
      background-color: ${p.surfaceHover} !important;
    }

    /* Calendar group buttons (Month/Today navigation) */
    [class*="MonthCalendarStyles"] [role="group"] button,
    [class*="CalendarViewShell"] [role="group"] button {
      background-color: ${p.surfaceRaised} !important;
      border-color: ${p.borderDefault} !important;
    }

    /* Scroll Overhang in calendar */
    [class*="ScrollOverhang__Wrapper-"] {
      background-color: ${p.surfaceBase} !important;
    }

    /* Calendar cell borders */
    [class*="MonthCalendarStyles__Week-"]::after,
    [class*="MonthCalendarStyles__Row-"]::after {
      border-color: ${p.borderDefault} !important;
    }

    /* Event text styling */
    [class*="MonthCalendarStyles__Event-"] span,
    [class*="MonthCalendarStyles__Event-"] p {
      color: ${p.textPrimary} !important;
    }

    /* ============================================
       SIDEBAR / LEFT PANEL THEMING
       (Contact list, calendar sidebar)
       ============================================ */

    /* Scroll Container */
    [class*="ScrollContainer__DefaultScrollContainer-"] {
      background-color: ${p.surfaceRaised} !important;
    }

    /* Scroll Overhang elements */
    [class*="Overhang__StyledOverhang-"] {
      background-color: transparent !important;
      background-image: none !important;
    }

    /* Scroll Overhang Wrapper */
    [class*="ScrollOverhang__Wrapper-"] {
      background-color: ${p.surfaceRaised} !important;
    }

    /* Contact list item rows */
    [class*="sc-AxjAm"][role="button"],
    div[role="button"][class*="sc-"] {
      background-color: transparent !important;
    }

    [class*="sc-AxjAm"][role="button"]:hover,
    div[role="button"][class*="sc-"]:hover {
      background-color: ${p.surfaceHover} !important;
    }

    /* Avatar Container Wrapper */
    [class*="AvatarContainer__AvatarWrapper-"] {
      background-color: transparent !important;
    }

    /* Avatar Content Holder - override inline styles */
    [class*="AvatarContentWrapper__AvatarContentHolder-"],
    [data-test-id="content-holder"] {
      background-color: ${p.surfaceHover} !important;
    }

    /* Avatar text SVG */
    [class*="TextSvg__StyledTextSvg-"] {
      fill: ${p.textPrimary} !important;
    }

    /* Box styled containers */
    [class*="Box__StyledBox-"] {
      background-color: transparent !important;
    }

    /* Paginator navigation */
    [class*="Paginator__StyledNav-"] {
      background-color: transparent !important;
    }

    /* Paginator buttons */
    [class*="Paginator__StyledNav-"] button {
      background-color: transparent !important;
      color: ${p.textSecondary} !important;
    }

    [class*="Paginator__StyledNav-"] button:hover:not([aria-disabled="true"]) {
      background-color: ${p.surfaceHover} !important;
      color: ${p.textPrimary} !important;
    }

    [class*="Paginator__StyledNav-"] button[data-active="true"] {
      color: ${p.textPrimary} !important;
    }

    /* Truncate String text */
    [class*="TruncateString__TruncateStringContainer-"],
    [class*="TruncateString__TruncateStringInner-"] {
      color: ${p.textPrimary} !important;
    }

    /* Links in contact list */
    [class*="Link__StyledLink-"][data-link-use="dark"] {
      color: ${p.interactive} !important;
    }

    [class*="Link__StyledLink-"][data-link-use="dark"]:hover {
      color: ${p.interactiveHover} !important;
    }

    /* Private Button styling for sidebar buttons */
    [class*="PrivateButton__StyledButton-"][data-button-use="transparent"] {
      color: ${p.textPrimary} !important;
    }

    [class*="PrivateButton__StyledButton-"][data-button-use="transparent"]:hover {
      background-color: ${p.surfaceHover} !important;
    }

    [class*="PrivateButton__StyledButton-"][data-button-use="tertiary-light"] {
      background-color: transparent !important;
      color: ${p.textSecondary} !important;
    }

    [class*="PrivateButton__StyledButton-"][data-button-use="tertiary-light"]:hover {
      background-color: ${p.surfaceHover} !important;
      color: ${p.textPrimary} !important;
    }

    /* Record count badge */
    [data-test-id="record-count"] {
      background-color: ${p.surfaceHover} !important;
      color: ${p.textSecondary} !important;
    }

    /* View styled view inside scroll containers */
    [class*="ScrollContainer__DefaultScrollContainer-"] [class*="View__StyledView-"] {
      background-color: ${p.surfaceRaised} !important;
    }

    /* ============================================
       SETTINGS PAGE THEMING
       (From UI map extraction: settings/user-preferences/profile)
       ============================================ */

    /* Settings page body override */
    body.hubspot.sticky-global-toolbar.ui-app {
      background-color: ${p.surfaceBase} !important;
      color: ${p.textPrimary} !important;
    }

    /* Settings select dropdowns */
    [data-test-id="language-select"],
    [data-test-id="locale-select"],
    [data-test-id="country-select"],
    [data-test-id="default-home-select"] {
      background-color: ${p.inputBg} !important;
      color: ${p.inputText} !important;
      border-color: ${p.inputBorder} !important;
    }

    [data-test-id="language-select"]:hover,
    [data-test-id="locale-select"]:hover,
    [data-test-id="country-select"]:hover,
    [data-test-id="default-home-select"]:hover {
      background-color: ${p.surfaceHover} !important;
      border-color: ${p.borderHover} !important;
    }

    /* BreakString component (text truncation) */
    [class*="BreakString__StyledBreakString-"],
    [class*="BreakString__"] {
      color: ${p.textPrimary} !important;
    }

    /* Accounts menu button hover */
    button#hs-global-toolbar-accounts:hover,
    [data-test-id="hs-global-toolbar-accounts"]:hover {
      background-color: ${p.surfaceHover} !important;
    }

    /* Settings page specific sections */
    [data-reagan-test="settings-page"],
    [data-test-id="settings-content"] {
      background-color: ${p.surfaceBase} !important;
    }

    /* Settings page cards */
    [data-test-id="profile-card"],
    [data-test-id="preferences-card"],
    [data-test-id="notifications-card"] {
      background-color: ${p.cardBg} !important;
      border-color: ${p.cardBorder} !important;
    }

    /* Settings nav items with aria-current */
    [class*="SideNavItem__StyledCustomLink-"][aria-current="page"],
    [class*="SideNavItem__"][aria-current="true"] {
      background-color: ${p.surfaceRaised} !important;
      color: ${p.interactive} !important;
    }

    /* Menu items in dropdowns */
    [role="option"],
    [role="listbox"] [role="option"] {
      background-color: ${p.modalBg} !important;
      color: ${p.textPrimary} !important;
    }

    [role="option"]:hover,
    [role="option"][data-highlighted="true"],
    [role="option"][aria-selected="true"] {
      background-color: ${p.surfaceHover} !important;
    }

    /* Dropdown portal/overlay containers */
    [class*="DropdownOverlay__"],
    [class*="DropdownPortal__"] {
      background-color: ${p.modalBg} !important;
      border-color: ${p.modalBorder} !important;
    }

    /* Abstract dropdowns */
    [class*="AbstractDropdown__StyledDropdown-"],
    [class*="AbstractDropdown__DropdownContainer-"] {
      background-color: ${p.modalBg} !important;
      border-color: ${p.modalBorder} !important;
    }

    /* Help button styling */
    button.HelpButton__StyledHelpButton-kJWFLt,
    [class*="HelpButton__StyledHelpButton-"] {
      color: ${p.navText} !important;
    }

    [class*="HelpButton__StyledHelpButton-"]:hover {
      background-color: ${p.surfaceHover} !important;
    }

    /* Calling toggle button */
    button.CallingNavComponentIcon__StyledToggleButton-bMIzqm,
    [class*="CallingNavComponentIcon__StyledToggleButton-"] {
      color: ${p.navText} !important;
    }

    /* List box containers */
    [role="listbox"] {
      background-color: ${p.modalBg} !important;
      border-color: ${p.modalBorder} !important;
    }

    /* Combobox input containers */
    [role="combobox"] {
      background-color: ${p.inputBg} !important;
      color: ${p.inputText} !important;
      border-color: ${p.inputBorder} !important;
    }

    /* Search input containers with combobox role */
    [role="combobox"] input {
      background-color: transparent !important;
      color: ${p.inputText} !important;
    }

    /* Profile image containers */
    [data-test-id="profile-image"],
    [data-test-id="user-avatar"] {
      border-color: ${p.borderDefault} !important;
    }

    /* Settings form labels */
    [class*="FormLabel__"],
    [class*="Label__StyledLabel-"] {
      color: ${p.textPrimary} !important;
    }

    /* Settings form helper text */
    [class*="FormHelperText__"],
    [class*="HelperText__"] {
      color: ${p.textSecondary} !important;
    }

    /* Info icon SVG fills */
    svg[data-icon-name="info"],
    svg[data-icon-name="question"] {
      fill: ${p.textSecondary} !important;
    }

    /* =========================================================================
       WORKFLOW ACTIONS PANEL
       ========================================================================= */

    /* End markers (workflow termination points) - fix white background */
    [class*="EndMarker__StyledEndMarkerBody"] {
      background-color: ${p.surfaceRaised} !important;
      color: ${p.textPrimary} !important;
      border-color: ${p.borderDefault} !important;
    }

    /* Quick action buttons (Delay, Branch, Go to workflow, etc.) */
    [class*="QuickActionStyledComponents__StyledQuickAction"] {
      background-color: ${p.surfaceRaised} !important;
      color: ${p.textPrimary} !important;
      border-color: ${p.borderDefault} !important;
    }

    [class*="QuickActionStyledComponents__StyledQuickAction"]:hover {
      background-color: ${p.surfaceHover} !important;
      border-color: ${p.borderHover} !important;
    }

    [class*="QuickActionStyledComponents__StyledQuickAction"][aria-disabled="true"] {
      background-color: ${p.surfaceBase} !important;
      color: ${p.textDisabled} !important;
    }

    /* Quick action container */
    [class*="QuickActionStyledComponents__StyledQuickActionContainer"] {
      background-color: transparent !important;
    }

    /* AI Assistant Banner in actions panel */
    [class*="ActionsList__AiAssistantBannerContainer"] {
      background-color: ${p.surfaceRaised} !important;
      border-color: ${p.borderDefault} !important;
    }

    /* Actions panel sections */
    [data-test-id="all-actions-page"] [class*="Section__StyledSection"] {
      background-color: ${p.surfaceRaised} !important;
    }

[class*="PanelBody__StyledPanelBody"]{
      background-color: transparent !important;
}

[class*="IconHolder__StyledIconHolder"]{
      background-color: ${p.surfaceBase} !important;
}

[class*="AutomationBuilderCardStyles__StyledActionCardBody"]{
      background-image: none !important;
}

    /* Expandable category rows in actions panel */
    [data-test-id="new-action-category"] [role="button"] {
      background-color: transparent !important;
      color: ${p.textPrimary} !important;
    }

    [data-test-id="new-action-category"] [role="button"]:hover {
      background-color: ${p.surfaceHover} !important;
    }

    /* =========================================================================
       TOGGLE/SWITCH COMPONENTS
       ========================================================================= */

    /* Toggle track - unchecked state needs darker background */
    [class*="Toggle__Switch-"]:not([data-checked="true"]) {
      background-color: ${p.surfaceHover} !important;
    }

    /* Toggle text inside switch */
    [class*="Toggle__Text-"] {
      color: ${p.textSecondary} !important;
    }

    /* =========================================================================
       FORM BUTTONS
       ========================================================================= */

    /* Form buttons need light text - these have dark text rgb(51, 71, 91) */
    [class*="PrivateButton__StyledButton"][data-button-use="form"] {
      background-color: ${p.inputBg} !important;
      color: ${p.textPrimary} !important;
      border-color: ${p.inputBorder} !important;
    }

    [class*="PrivateButton__StyledButton"][data-button-use="form"]:hover {
      background-color: ${p.surfaceHover} !important;
    }

    /* =========================================================================
       EMAIL SUBJECT LINES & TIMELINE
       ========================================================================= */

    /* Email subject lines in timeline */
    strong[data-test-id="email-subject-line"],
    [class*="PreviewEventSubject__StyledStrong"] {
      color: ${p.textPrimary} !important;
    }

    /* Email event names */
    i18n-string[data-key="crm-events.email.name"],
    i18n-string[data-key*="crm-events"][data-key*=".name"] {
      color: ${p.textPrimary} !important;
    }

    /* =========================================================================
       ACADEMY WIZARD & SELECTABLE BOXES
       ========================================================================= */

    /* Academy selectable box labels - have dark text rgb(51, 71, 91) */
    [class*="SelectableBox__StyledInnerBox"] i18n-string,
    [class*="SelectableBox__"] span,
    [class*="SelectableBox__StyledInnerBox"] {
      color: ${p.textPrimary} !important;
    }

    /* =========================================================================
       DATA STUDIO
       ========================================================================= */

    /* Data Studio containers */
    [data-test-id="dataset-container"],
    [class*="DatasetView__"] {
      background-color: ${p.surfaceBase} !important;
      color: ${p.textPrimary} !important;
    }

    /* =========================================================================
       PROSPECTING SIDEBAR
       ========================================================================= */

    /* Prospecting sidebar panel */
    [class*="ProspectingSidebar__"],
    [data-test-id*="prospecting-sidebar"] {
      background-color: ${p.surfaceRaised} !important;
    }

    /* =========================================================================
       DUPLICATES MANAGER
       ========================================================================= */

    /* Duplicate record comparison cards */
    [data-test-id*="duplicate-card"],
    [class*="DuplicateCard__"] {
      background-color: ${p.cardBg} !important;
      color: ${p.textPrimary} !important;
      border-color: ${p.cardBorder} !important;
    }

    /* =========================================================================
       ENRICHMENT SETTINGS
       ========================================================================= */

    /* Enrichment toggle row containers */
    [class*="EnrichmentToggle__"],
    [data-test-id*="enrichment-toggle"] {
      background-color: ${p.surfaceRaised} !important;
    }

    /* =========================================================================
       SALES FORECASTING
       ========================================================================= */

    /* Pipeline selector dropdowns in settings */
    [class*="PipelineSelect__"],
    [data-test-id*="pipeline-select"] select,
    [data-test-id*="pipeline-select"] [role="listbox"] {
      background-color: ${p.inputBg} !important;
      color: ${p.inputText} !important;
    }

    /* =========================================================================
       DATA AGENT
       ========================================================================= */

    /* Data agent result cards */
    [class*="DataAgentResult__"],
    [data-test-id*="data-agent-result"] {
      background-color: ${p.cardBg} !important;
      color: ${p.textPrimary} !important;
      border-color: ${p.cardBorder} !important;
    }

    /* =========================================================================
       DIALOG / MODAL
       ========================================================================= */

    [class*="Dialog__StyledDialog-"] {
      background-color: ${p.modalBg} !important;
      border-color: ${p.modalBorder} !important;
    }

    [class*="DialogHeader__StyledDialogHeader-"] {
      background: linear-gradient(135deg, ${p.surfaceRaised} 0%, ${p.surfaceBase} 100%) !important;
      border-bottom: 1px solid ${p.borderDefault} !important;
    }

    [class*="DialogHeader__StyledHeaderInner-"] {
      color: ${p.textPrimary} !important;
    }

    [class*="DialogHeader__StyledHeaderInner-"] h2,
    [class*="DialogHeader__StyledHeaderInner-"] [class*="Text__StyledText-"] {
      color: ${p.textPrimary} !important;
    }

    [class*="DialogBody__StyledDialogBody-"] {
      background-color: ${p.modalBg} !important;
      color: ${p.textPrimary} !important;
    }

    [class*="DialogFooter__StyledFooter-"] {
      background: linear-gradient(135deg, ${p.surfaceBase} 0%, ${p.surfaceRaised} 100%) !important;
      border-top: 1px solid ${p.borderDefault} !important;
    }

    /* =========================================================================
       KANBAN / CRM BOARD
       ========================================================================= */

    [class*="ColumnStyles__ColumnWrapper-"] {
      background-color: ${p.surfaceBase} !important;
    }

    [class*="ColumnStyles__LinearColumnHeaderBase-"] {
      background: linear-gradient(180deg, ${p.surfaceRaised} 0%, ${p.surfaceBase} 100%) !important;
      border-color: ${p.borderDefault} !important;
    }

    [class*="ColumnStyles__ColumnBodyBase-"] {
      background-color: ${p.surfaceBase} !important;
    }

    [class*="ColumnArrows__LeftArrowSvg-"] polygon,
    [class*="ColumnArrows__RightArrowSvg-"] polygon {
      fill: ${p.surfaceRaised} !important;
    }

    [class*="ColumnArrows__LeftArrowSvg-"] line,
    [class*="ColumnArrows__RightArrowSvg-"] line {
      stroke: ${p.borderDefault} !important;
    }

    [class*="CardWrapper__StyledUITile-"] {
      background-color: ${p.cardBg} !important;
      border-color: ${p.cardBorder} !important;
    }

    [class*="CardWrapper__StyledUITile-"]:hover,
    [class*="HoverWrapper__HoverContainer-"]:hover [class*="CardWrapper__StyledUITile-"] {
      background-color: ${p.surfaceHover} !important;
      border-color: ${p.borderHover} !important;
    }

    [class*="TitleSection__StyledTitleContainer-"],
    [class*="TitleSection__HoverContainer-"] {
      color: ${p.textPrimary} !important;
    }

    [class*="Title__TextTitle-"] {
      color: ${p.textPrimary} !important;
    }

    [class*="ContentWrapper__StyledContentWrapper-"] {
      color: ${p.textSecondary} !important;
    }

    [class*="CrmObjectBoardCard__StyledSection-"] {
      color: ${p.textSecondary} !important;
    }

    [data-test-id="cdb-column-name"] {
      color: ${p.textPrimary} !important;
    }

    [data-test-id="column-total-cards"] {
      color: ${p.textSecondary} !important;
    }

    [data-test-id="board-card-quick-actions-container"] button {
      color: ${p.textSecondary} !important;
    }

    [data-test-id="board-card-quick-actions-container"] button:hover {
      color: ${p.textPrimary} !important;
      background-color: ${p.surfaceHover} !important;
    }
  `;
}

function buildThemeV2(name, description, palette) {
  return {
    name,
    description,
    colors: {
      ...buildCssVariablesV2(palette.tokens),
      ...buildCssVariablesV2Extended(palette.tokens)
    },
    elementOverrides: buildElementOverridesV2(palette.tokens),
    preview: palette.preview
  };
}

const THEME_CATEGORIES = {
  metergrid: { name: "metergrid", description: "metergrid CI/CD", order: 0 },
  block: { name: "Dark", description: "Dark monochromatic themes", order: 1 },
  duo: { name: "Duo", description: "Two-tone accent themes", order: 2 },
  light: { name: "Light", description: "Bright and clean", order: 3 },
  special: { name: "Classic", description: "Popular color schemes", order: 4 },
  joke: { name: "🍄 Fun", description: "Not for daily use", order: 5 }
};

function buildAllThemes() {
  const themes = {
    default: {
      name: "Default",
      description: "Original HubSpot theme",
      category: null,
      colors: null,
      preview: null
    }
  };

  for (const [key, palette] of Object.entries(THEMES_V2_DATA.palettes)) {
    themes[key] = {
      ...buildThemeV2(palette.name, palette.description, palette),
      category: palette.category
    };
  }

  return themes;
}

const HUBSPOT_THEMES_V2 = buildAllThemes();

if (typeof window !== 'undefined') {
  window.HUBSPOT_THEMES_V2 = HUBSPOT_THEMES_V2;
  window.THEMES_V2_DATA = THEMES_V2_DATA;
  window.THEME_CATEGORIES = THEME_CATEGORIES;
}
