// Helper function to track page views
export const pageview = (url) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
};

// Helper function to track custom events
export const event = ({ action, category, label, value }) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Portfolio-specific tracking events
export const portfolioEvents = {
  // Navigation events
  navigation: (section) => event({
    action: 'navigation',
    category: 'Portfolio Navigation',
    label: `Navigated to ${section}`
  }),

  // Project interactions
  projectView: (projectName) => event({
    action: 'view',
    category: 'Projects',
    label: projectName
  }),

  projectClick: (projectName, link) => event({
    action: 'click',
    category: 'Projects',
    label: `${projectName} - ${link}`
  }),

  // Resume interactions
  resumeDownload: () => event({
    action: 'download',
    category: 'Resume',
    label: 'Downloaded Resume'
  }),

  // Contact form events
  formStart: () => event({
    action: 'start',
    category: 'Contact Form',
    label: 'Started filling form'
  }),

  formSubmit: (success) => event({
    action: 'submit',
    category: 'Contact Form',
    label: success ? 'Success' : 'Failed'
  }),

  // Theme preference
  themeSwitch: (theme) => event({
    action: 'switch',
    category: 'Theme',
    label: theme
  }),

  // Social links
  socialClick: (platform) => event({
    action: 'click',
    category: 'Social Links',
    label: platform
  }),

  // Portfolio sections visibility
  sectionView: (section) => event({
    action: 'view',
    category: 'Section Visibility',
    label: section
  })
};
