import { NextResponse } from 'next/server';
import { config } from '@/lib/config';

export async function GET() {
  return NextResponse.json({
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    config: {
      features: config.features,
      wordpress: {
        apiUrl: config.wordpress.apiUrl ? 'Set' : 'Not set',
        siteUrl: config.wordpress.siteUrl ? 'Set' : 'Not set',
        siteId: config.wordpress.siteId ? 'Set' : 'Not set',
        username: config.wordpress.username ? 'Set' : 'Not set',
        appPassword: config.wordpress.appPassword ? 'Set' : 'Not set',
      }
    },
    environmentVariables: {
      USE_WORDPRESS: process.env.USE_WORDPRESS,
      WORDPRESS_API_URL: process.env.WORDPRESS_API_URL ? 'Set' : 'Not set',
      WORDPRESS_SITE_URL: process.env.WORDPRESS_SITE_URL ? 'Set' : 'Not set',
      WORDPRESS_SITE_ID: process.env.WORDPRESS_SITE_ID ? 'Set' : 'Not set',
      WORDPRESS_USERNAME: process.env.WORDPRESS_USERNAME ? 'Set' : 'Not set',
      WORDPRESS_APP_PASSWORD: process.env.WORDPRESS_APP_PASSWORD ? 'Set' : 'Not set',
    }
  });
}
