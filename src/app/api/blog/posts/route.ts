import { NextRequest, NextResponse } from 'next/server';
import { getBlogPosts } from '@/lib/blog';
import { BlogFilters } from '@/types/blog';

// Enhanced API with better error handling and validation
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const filters: BlogFilters = body || {};

    // Enhanced validation with better error messages
    const validatedFilters: BlogFilters = {
      page: Math.max(1, Number(filters.page) || 1),
      limit: Math.min(50, Math.max(1, Number(filters.limit) || 10)),
      ...(typeof filters.search === 'string' && filters.search.trim() && { search: filters.search.trim() }),
      ...(typeof filters.category === 'string' && filters.category.trim() && { category: filters.category.trim() }),
      ...(Array.isArray(filters.tags) && filters.tags.length > 0 && { tags: filters.tags.filter(tag => typeof tag === 'string') }),
      ...(typeof filters.author === 'string' && filters.author.trim() && { author: filters.author.trim() }),
      sortBy: ['newest', 'oldest', 'title', 'popular'].includes(filters.sortBy || '') 
        ? (filters.sortBy as 'newest' | 'oldest' | 'popular' | 'title')
        : 'newest',
    };

    console.log('📝 Blog API POST request:', validatedFilters);

    const result = await getBlogPosts(validatedFilters);

    // Enhanced response with metadata
    const response = NextResponse.json({
      success: true,
      data: result,
      meta: {
        timestamp: new Date().toISOString(),
        filters: validatedFilters,
        source: 'wordpress-api'
      }
    });
    
    // Optimized cache headers
    response.headers.set('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
    response.headers.set('X-API-Version', '2.0');
    
    return response;
  } catch (error) {
    console.error('❌ Blog API POST Error:', error);
    
    // Enhanced error response
    const errorResponse = {
      success: false,
      error: 'Internal Server Error',
      message: 'Nepodarilo sa načítať blog posty',
      timestamp: new Date().toISOString(),
      details: process.env.NODE_ENV === 'development' ? error : undefined
    };
    
    return NextResponse.json(errorResponse, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    // Parse query parameters from URL
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const category = searchParams.get('category');
    const author = searchParams.get('author');
    const tags = searchParams.get('tags');
    
    const filters: BlogFilters = {
      page: Number(searchParams.get('page')) || 1,
      limit: Number(searchParams.get('limit')) || 10,
      ...(search && { search }),
      ...(category && { category }),
      ...(author && { author }),
      sortBy: (searchParams.get('sortBy') as 'newest' | 'oldest' | 'popular' | 'title') || 'newest',
      ...(tags && { tags: tags.split(',').filter(Boolean) })
    };

    console.log('📝 Blog API GET request:', filters);

    const result = await getBlogPosts(filters);
    
    const response = NextResponse.json({
      success: true,
      data: result,
      meta: {
        timestamp: new Date().toISOString(),
        filters,
        source: 'wordpress-api'
      }
    });
    
    response.headers.set('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
    response.headers.set('X-API-Version', '2.0');
    
    return response;
  } catch (error) {
    console.error('❌ Blog API GET Error:', error);
    
    const errorResponse = {
      success: false,
      error: 'Internal Server Error',
      message: 'Nepodarilo sa načítať blog posty',
      timestamp: new Date().toISOString(),
      details: process.env.NODE_ENV === 'development' ? error : undefined
    };
    
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
