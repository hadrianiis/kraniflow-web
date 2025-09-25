import { NextResponse } from 'next/server';
import { getBlogPosts } from '@/lib/blog';

export async function GET() {
  try {
    console.log('🔍 Testing blog posts...');
    
    const blogData = await getBlogPosts();
    
    return NextResponse.json({
      success: true,
      postsCount: blogData.posts.length,
      totalPosts: blogData.pagination.total,
      categoriesCount: blogData.categories.length,
      firstPost: blogData.posts[0] ? {
        id: blogData.posts[0].id,
        title: blogData.posts[0].title,
        slug: blogData.posts[0].slug
      } : null,
      allPosts: blogData.posts.map(post => ({
        id: post.id,
        title: post.title,
        slug: post.slug
      }))
    });

  } catch (error) {
    console.error('❌ Blog test error:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
