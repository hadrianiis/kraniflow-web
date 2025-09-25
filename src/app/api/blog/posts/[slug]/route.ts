import { NextRequest, NextResponse } from 'next/server';
import { getBlogPost, getRelatedPosts } from '@/lib/blog';
import { BlogPost } from '@/types/blog';

// Enhanced API for individual blog posts
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const { searchParams } = new URL(request.url);
    const includeRelated = searchParams.get('includeRelated') === 'true';

    if (!slug) {
      return NextResponse.json({
        success: false,
        error: 'Bad Request',
        message: 'Slug parameter is required',
        timestamp: new Date().toISOString()
      }, { status: 400 });
    }

    console.log(`📝 Blog API GET post by slug: ${slug}`);

    const post = await getBlogPost(slug);

    if (!post) {
      return NextResponse.json({
        success: false,
        error: 'Not Found',
        message: 'Článok nebol nájdený',
        timestamp: new Date().toISOString()
      }, { status: 404 });
    }

    let relatedPosts: BlogPost[] = [];
    if (includeRelated) {
      try {
        relatedPosts = await getRelatedPosts(slug, post.category, post.tags);
      } catch (error) {
        console.warn('Failed to fetch related posts:', error);
        // Don't fail the entire request if related posts fail
      }
    }

    const response = NextResponse.json({
      success: true,
      data: {
        post,
        ...(includeRelated && { relatedPosts })
      },
      meta: {
        timestamp: new Date().toISOString(),
        slug,
        includeRelated
      }
    });

    // Cache individual posts longer
    response.headers.set('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=1200');
    response.headers.set('X-API-Version', '2.0');

    return response;
  } catch (error) {
    console.error('❌ Blog API GET post Error:', error);

    const errorResponse = {
      success: false,
      error: 'Internal Server Error',
      message: 'Nepodarilo sa načítať článok',
      timestamp: new Date().toISOString(),
      details: process.env.NODE_ENV === 'development' ? error : undefined
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
