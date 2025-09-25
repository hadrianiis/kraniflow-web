import { NextRequest, NextResponse } from 'next/server';
import { searchBlogPosts } from '@/lib/blog';

// API endpoint for blog search
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    const limit = Number(searchParams.get('limit')) || 20;

    if (!query || query.trim().length < 2) {
      return NextResponse.json({
        success: false,
        error: 'Bad Request',
        message: 'Vyhľadávací dotaz musí mať aspoň 2 znaky',
        timestamp: new Date().toISOString()
      }, { status: 400 });
    }

    console.log(`📝 Blog API search: "${query}"`);

    const posts = await searchBlogPosts(query.trim());

    // Limit results
    const limitedPosts = posts.slice(0, limit);

    const response = NextResponse.json({
      success: true,
      data: {
        posts: limitedPosts,
        query: query.trim(),
        total: posts.length,
        returned: limitedPosts.length
      },
      meta: {
        timestamp: new Date().toISOString(),
        searchQuery: query.trim()
      }
    });

    // Cache search results for shorter time
    response.headers.set('Cache-Control', 'public, s-maxage=180, stale-while-revalidate=300');
    response.headers.set('X-API-Version', '2.0');

    return response;
  } catch (error) {
    console.error('❌ Blog API search Error:', error);

    const errorResponse = {
      success: false,
      error: 'Internal Server Error',
      message: 'Nepodarilo sa vyhľadať články',
      timestamp: new Date().toISOString(),
      details: process.env.NODE_ENV === 'development' ? error : undefined
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
