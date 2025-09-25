import { NextResponse } from 'next/server';
import { getWordPressAPI } from '@/lib/wordpress';
import { config } from '@/lib/config';

export async function GET() {
  try {
    // Check if WordPress is configured
    if (!config.features.useWordPress || !config.wordpress.apiUrl) {
      return NextResponse.json({
        status: 'disabled',
        message: 'WordPress integration is disabled',
        configured: false,
        apiUrl: config.wordpress.apiUrl || 'Not configured'
      });
    }

    // Use the new health check method
    const healthCheck = await getWordPressAPI().healthCheck();
    
    if (healthCheck.status === 'healthy') {
      // Get additional stats if healthy
      try {
        const totalPosts = await getWordPressAPI().getAllPostsCount();
        const cacheStats = getWordPressAPI().getCacheStats();
        
        return NextResponse.json({
          status: 'connected',
          message: healthCheck.message,
          configured: true,
          apiUrl: healthCheck.apiUrl,
          totalPosts: totalPosts,
          cacheStats: {
            size: cacheStats.size,
            keysCount: cacheStats.keys.length
          },
          timestamp: new Date().toISOString()
        });
      } catch (error) {
        // Health check passed but getting posts failed
        return NextResponse.json({
          status: 'partial',
          message: 'WordPress API is accessible but posts cannot be fetched',
          configured: true,
          apiUrl: healthCheck.apiUrl,
          error: error instanceof Error ? error.message : 'Unknown error',
          timestamp: new Date().toISOString()
        });
      }
    } else {
      return NextResponse.json({
        status: 'error',
        message: healthCheck.message,
        configured: true,
        apiUrl: healthCheck.apiUrl,
        error: healthCheck.lastError,
        timestamp: new Date().toISOString()
      }, { status: 500 });
    }
  } catch (error) {
    console.error('WordPress API connection error:', error);
    
    return NextResponse.json({
      status: 'error',
      message: 'Failed to connect to WordPress API',
      configured: true,
      apiUrl: config.wordpress.apiUrl || 'Not configured',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}
