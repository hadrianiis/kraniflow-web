// Environment configuration
export const config = {
  wordpress: {
    apiUrl: process.env.WORDPRESS_API_URL,
    siteUrl: process.env.WORDPRESS_SITE_URL,
    siteId: process.env.WORDPRESS_SITE_ID,
    username: process.env.WORDPRESS_USERNAME || '',
    appPassword: process.env.WORDPRESS_APP_PASSWORD || '',
  },
  app: {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    environment: process.env.NODE_ENV || 'development',
  },
  // Feature flags
  features: {
    useWordPress: process.env.USE_WORDPRESS === 'true',
    enableCaching: process.env.ENABLE_CACHING === 'true',
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
