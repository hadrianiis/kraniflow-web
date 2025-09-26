import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cache } from 'react';
import BlogPostWrapper from '@/components/UI/Blog/BlogPostWrapper';
import { getBlogPost, getRelatedPosts } from '@/lib/blog';
import { StructuredData } from '@/components/SEO';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Cache the blog post data fetching for better performance
const getCachedBlogPost = cache(async (slug: string) => {
  return await getBlogPost(slug);
});

const getCachedRelatedPosts = cache(async (slug: string, category: string, tags: string[]) => {
  return await getRelatedPosts(slug, category, tags);
});

// Generate static params for better performance
export async function generateStaticParams() {
  try {
    // Get all blog posts to generate static params
    const { posts } = await import('@/lib/blog').then(module => 
      module.getBlogPosts({ limit: 100 }) // Get more posts for static generation
    );
    
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    // Fallback to empty array if there's an error
    return [];
  }
}

// Enhanced metadata generation with better SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const post = await getCachedBlogPost(slug);
    
    if (!post) {
      return {
        title: 'Článok nenájdený | KranioFlow Blog',
        description: 'Požadovaný článok nebol nájdený.',
        robots: {
          index: false,
          follow: false,
        },
      };
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kranioflow.com';
    const canonicalUrl = `${baseUrl}/blog/${slug}`;

    return generateSEOMetadata({
      title: `${post.title} | KranioFlow Blog`,
      description: post.excerpt,
      keywords: post.tags,
      canonical: canonicalUrl,
      ogImage: post.featuredImage.startsWith('http') 
        ? post.featuredImage 
        : `${baseUrl}${post.featuredImage}`,
      ogType: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      author: post.author.name,
      section: post.category,
      tags: post.tags,
    });
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Chyba | KranioFlow Blog',
      description: 'Nastala chyba pri načítaní článku.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  
  try {
    // Fetch post and related posts in parallel for better performance
    const [post, relatedPosts] = await Promise.all([
      getCachedBlogPost(slug),
      // We need to get the post first to get category and tags for related posts
      getCachedBlogPost(slug).then(async (post) => {
        if (!post) return [];
        return await getCachedRelatedPosts(post.slug, post.category, post.tags);
      }),
    ]);
    
    if (!post) {
      notFound();
    }

    return (
      <BlogPostWrapper post={post} relatedPosts={relatedPosts} />
    );
  } catch (error) {
    console.error('Error loading blog post:', error);
    notFound();
  }
} 