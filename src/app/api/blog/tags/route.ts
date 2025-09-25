import { NextResponse } from 'next/server';
import { wordpressAPI } from '@/lib/wordpress';

// API endpoint for blog tags
export async function GET() {
  try {
    console.log('📝 Blog API GET tags');

    const tags = await wordpressAPI.getTags();

    const response = NextResponse.json({
      success: true,
      data: tags,
      meta: {
        timestamp: new Date().toISOString(),
        count: tags.length
      }
    });

    // Cache tags for longer time
    response.headers.set('Cache-Control', 'public, s-maxage=1800, stale-while-revalidate=3600');
    response.headers.set('X-API-Version', '2.0');

    return response;
  } catch (error) {
    console.error('❌ Blog API GET tags Error:', error);

    const errorResponse = {
      success: false,
      error: 'Internal Server Error',
      message: 'Nepodarilo sa načítať tagy',
      timestamp: new Date().toISOString(),
      details: process.env.NODE_ENV === 'development' ? error : undefined
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
