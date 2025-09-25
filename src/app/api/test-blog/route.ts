import { NextResponse } from 'next/server';
import { getBlogPosts } from '@/lib/blog';
import { config } from '@/lib/config';

export async function GET() {
  try {
    console.log('🔍 Testing blog functionality...');
    
    const debugInfo = {
      timestamp: new Date().toISOString(),
      config: {
        useWordPress: config.features.useWordPress,
        wordpressApiUrl: config.wordpress.apiUrl ? 'Set' : 'Not set',
        wordpressSiteUrl: config.wordpress.siteUrl ? 'Set' : 'Not set',
        wordpressSiteId: config.wordpress.siteId ? 'Set' : 'Not set',
      },
      environment: {
        USE_WORDPRESS: process.env.USE_WORDPRESS,
        WORDPRESS_API_URL: process.env.WORDPRESS_API_URL ? 'Set' : 'Not set',
        WORDPRESS_SITE_URL: process.env.WORDPRESS_SITE_URL ? 'Set' : 'Not set',
        WORDPRESS_SITE_ID: process.env.WORDPRESS_SITE_ID ? 'Set' : 'Not set',
      }
    };

    console.log('📊 Debug info:', debugInfo);

    if (!config.features.useWordPress) {
      return NextResponse.json({
        ...debugInfo,
        error: 'WordPress is disabled',
        message: 'Set USE_WORDPRESS=true in Vercel environment variables'
      });
    }

    if (!config.wordpress.apiUrl) {
      return NextResponse.json({
        ...debugInfo,
        error: 'WordPress API URL not configured',
        message: 'Set WORDPRESS_API_URL in Vercel environment variables'
      });
    }

    // Try to fetch blog posts
    console.log('📰 Attempting to fetch blog posts...');
    const blogData = await getBlogPosts();
    
    return NextResponse.json({
      ...debugInfo,
      success: true,
      blogData: {
        postsCount: blogData.posts.length,
        totalPosts: blogData.pagination.total,
        categoriesCount: blogData.categories.length,
        samplePost: blogData.posts[0] ? {
          id: blogData.posts[0].id,
          title: blogData.posts[0].title,
          slug: blogData.posts[0].slug
        } : null
      }
    });

  } catch (error) {
    console.error('❌ Blog test error:', error);
    
    return NextResponse.json({
      timestamp: new Date().toISOString(),
      error: 'Blog test failed',
      message: error instanceof Error ? error.message : 'Unknown error',
      config: {
        useWordPress: config.features.useWordPress,
        wordpressApiUrl: config.wordpress.apiUrl ? 'Set' : 'Not set',
      }
    }, { status: 500 });
  }
}
