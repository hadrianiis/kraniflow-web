// Environment configuration
export const config = {
  wordpress: {
    apiUrl: process.env.WORDPRESS_API_URL || 'https://public-api.wordpress.com/rest/v1.1/sites/248514061',
    siteUrl: process.env.WORDPRESS_SITE_URL || 'https://kranioflow.wordpress.com',
    siteId: process.env.WORDPRESS_SITE_ID || '248514061',
    username: process.env.WORDPRESS_USERNAME || '',
    appPassword: process.env.WORDPRESS_APP_PASSWORD || '',
  },
  app: {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
  // Feature flags
  features: {
    useWordPress: process.env.USE_WORDPRESS === 'true' || true, // Default to true, use WordPress data
    enableCaching: process.env.ENABLE_CACHING === 'true',
  }
} as const;

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
