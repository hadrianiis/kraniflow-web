import { NextResponse } from 'next/server';
import { wordpressAPI } from '@/lib/wordpress';
import { config } from '@/lib/config';

export async function GET() {
  const results: {
    timestamp: string;
    config: {
      useWordPress: boolean;
      apiUrl: string;
      siteUrl: string;
    };
    tests: Record<string, any>;
    summary?: {
      totalTests: number;
      successfulTests: number;
      failedTests: number;
      successRate: string;
    };
  } = {
    timestamp: new Date().toISOString(),
    config: {
      useWordPress: config.features.useWordPress,
      apiUrl: config.wordpress.apiUrl || 'Not configured',
      siteUrl: config.wordpress.siteUrl || 'Not configured'
    },
    tests: {}
  };

  try {
    // Test 1: WordPress API Health Check
    console.log('🔍 Testing WordPress API health check...');
    const healthCheck = await wordpressAPI.healthCheck();
    results.tests.healthCheck = healthCheck;

    if (healthCheck.status === 'healthy') {
      // Test 2: WordPress API - Get Posts
      console.log('🔍 Testing WordPress API - Get Posts...');
      try {
        const apiPosts = await wordpressAPI.getPosts({});
        results.tests.apiPosts = {
          success: true,
          count: apiPosts.posts.length,
          total: apiPosts.total,
          samplePost: apiPosts.posts[0] ? {
            id: apiPosts.posts[0].id,
            title: apiPosts.posts[0].title,
            slug: apiPosts.posts[0].slug,
            publishedAt: apiPosts.posts[0].publishedAt
          } : null
        };
      } catch (error) {
        results.tests.apiPosts = {
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        };
      }

      // Test 3: WordPress API - Get Categories
      console.log('🔍 Testing WordPress API - Get Categories...');
      try {
        const categories = await wordpressAPI.getCategories();
        results.tests.apiCategories = {
          success: true,
          count: categories.length,
          sampleCategory: categories[0] ? {
            id: categories[0].id,
            name: categories[0].name,
            slug: categories[0].slug
          } : null
        };
      } catch (error) {
        results.tests.apiCategories = {
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        };
      }

      // Test 4: WordPress API - Get Tags
      console.log('🔍 Testing WordPress API - Get Tags...');
      try {
        const tags = await wordpressAPI.getTags();
        results.tests.apiTags = {
          success: true,
          count: tags.length,
          sampleTag: tags[0] ? {
            id: tags[0].id,
            name: tags[0].name,
            slug: tags[0].slug
          } : null
        };
      } catch (error) {
        results.tests.apiTags = {
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        };
      }

      // Test 5: WordPress API - Get Single Post (if we have posts)
      if (results.tests.apiPosts?.success && results.tests.apiPosts.samplePost) {
        console.log('🔍 Testing WordPress API - Get Single Post...');
        try {
          const singlePost = await wordpressAPI.getPostBySlug(results.tests.apiPosts.samplePost.slug);
          results.tests.apiSinglePost = {
            success: singlePost !== null,
            found: singlePost !== null,
            post: singlePost ? {
              id: singlePost.id,
              title: singlePost.title,
              slug: singlePost.slug
            } : null
          };
        } catch (error) {
          results.tests.apiSinglePost = {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
          };
        }
      }
    }

    // Test 6: WordPress API Search
    console.log('🔍 Testing WordPress API Search...');
    try {
      const searchResults = await wordpressAPI.searchPosts('terapia', {});
      results.tests.search = {
        success: true,
        count: searchResults.posts.length,
        total: searchResults.total,
        query: 'terapia',
        samplePost: searchResults.posts[0] ? {
          id: searchResults.posts[0].id,
          title: searchResults.posts[0].title,
          slug: searchResults.posts[0].slug,
          publishedAt: searchResults.posts[0].publishedAt
        } : null
      };
    } catch (error) {
      results.tests.search = {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }

    // Test 7: Cache Stats
    console.log('🔍 Testing Cache Stats...');
    try {
      const cacheStats = wordpressAPI.getCacheStats();
      results.tests.cacheStats = {
        success: true,
        size: cacheStats.size,
        keysCount: cacheStats.keys.length,
        keys: cacheStats.keys.slice(0, 5) // Show first 5 keys
      };
    } catch (error) {
      results.tests.cacheStats = {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }

    // Test 8: Authors Test
    console.log('🔍 Testing Authors...');
    try {
      const authors = await wordpressAPI.getAuthors();
      results.tests.authors = {
        success: true,
        count: authors.length,
        sampleAuthor: authors[0] ? {
          id: authors[0].id,
          name: authors[0].name,
          role: authors[0].role
        } : null
      };
    } catch (error) {
      results.tests.authors = {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }

    // Summary
    const totalTests = Object.keys(results.tests).length;
    const successfulTests = Object.values(results.tests).filter((test: any) => test.success).length;
    
    results.summary = {
      totalTests,
      successfulTests,
      failedTests: totalTests - successfulTests,
      successRate: `${Math.round((successfulTests / totalTests) * 100)}%`
    };

    return NextResponse.json(results, { 
      status: 200,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });

  } catch (error) {
    console.error('WordPress test error:', error);
    
    return NextResponse.json({
      timestamp: new Date().toISOString(),
      error: 'Test execution failed',
      message: error instanceof Error ? error.message : 'Unknown error',
      config: results.config,
      tests: results.tests
    }, { status: 500 });
  }
}