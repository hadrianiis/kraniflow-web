// Environment configuration
export const config = {
  wordpress: {
    apiUrl: process.env.WORDPRESS_API_URL,
    siteUrl: process.env.WORDPRESS_SITE_URL,
    siteId: process.env.WORDPRESS_SITE_ID,
    username: process.env.WORDPRESS_USERNAME || '',
    appPassword: process.env.WORDPRESS_APP_PASSWORD || '',
  },
  google: {
    scriptUrl: process.env.GOOGLE_SCRIPT_URL,
    sheetId: process.env.GOOGLE_SHEET_ID,
    notificationEmail: process.env.NOTIFICATION_EMAIL,
  },
  app: {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    environment: process.env.NODE_ENV || 'development',
  },
  // Feature flags
  features: {
    useWordPress: process.env.USE_WORDPRESS === 'true',
    enableCaching: process.env.ENABLE_CACHING === 'true',
    useGoogleScript: process.env.USE_GOOGLE_SCRIPT === 'true',
  }
} as const;

// Validate required environment variables
if (config.features.useWordPress) {
  if (!config.wordpress.apiUrl) {
    throw new Error('WORDPRESS_API_URL environment variable is required when WordPress is enabled');
  }
  if (!config.wordpress.siteUrl) {
    throw new Error('WORDPRESS_SITE_URL environment variable is required when WordPress is enabled');
  }
  if (!config.wordpress.siteId) {
    throw new Error('WORDPRESS_SITE_ID environment variable is required when WordPress is enabled');
  }
}

if (config.features.useGoogleScript) {
  if (!config.google.scriptUrl) {
    throw new Error('GOOGLE_SCRIPT_URL environment variable is required when Google Script is enabled');
  }
  if (!config.google.sheetId) {
    throw new Error('GOOGLE_SHEET_ID environment variable is required when Google Script is enabled');
  }
  if (!config.google.notificationEmail) {
    throw new Error('NOTIFICATION_EMAIL environment variable is required when Google Script is enabled');
  }
}

// Security validations
if (config.google.scriptUrl && !config.google.scriptUrl.startsWith('https://script.google.com/')) {
  throw new Error('GOOGLE_SCRIPT_URL must be a valid Google Apps Script URL');
}

// Temporarily disabled for build - email validation
// if (config.google.notificationEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.google.notificationEmail)) {
//   throw new Error('NOTIFICATION_EMAIL must be a valid email address');
// }

// WordPress.com specific configuration
export const wordpressComConfig = {
  // WordPress.com public API doesn't require authentication for public posts
  isPublicApi: true,
  // Rate limiting for WordPress.com
  rateLimit: {
    requestsPerMinute: 60,
    requestsPerHour: 1000
  }
} as const;
