import { NextResponse } from 'next/server';
import { wordpressAPI } from '@/lib/wordpress';

// API endpoint for blog categories
export async function GET() {
  try {
    console.log('📝 Blog API GET categories');

    const categories = await wordpressAPI.getCategories();

    const response = NextResponse.json({
      success: true,
      data: categories,
      meta: {
        timestamp: new Date().toISOString(),
        count: categories.length
      }
    });

    // Cache categories for longer time
    response.headers.set('Cache-Control', 'public, s-maxage=1800, stale-while-revalidate=3600');
    response.headers.set('X-API-Version', '2.0');

    return response;
  } catch (error) {
    console.error('❌ Blog API GET categories Error:', error);

    const errorResponse = {
      success: false,
      error: 'Internal Server Error',
      message: 'Nepodarilo sa načítať kategórie',
      timestamp: new Date().toISOString(),
      details: process.env.NODE_ENV === 'development' ? error : undefined
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
