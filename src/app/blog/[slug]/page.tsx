import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cache } from 'react';
import BlogPostWrapper from '@/components/UI/Blog/BlogPostWrapper';
import { getBlogPost, getRelatedPosts } from '@/lib/blog';

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

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://kranioflow.com';
    const canonicalUrl = `${baseUrl}/blog/${slug}`;

    return {
      title: `${post.title} | KranioFlow Blog`,
      description: post.excerpt,
      keywords: post.tags.join(', '),
      authors: [{ name: post.author.name }],
      creator: post.author.name,
      publisher: 'KranioFlow',
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        url: canonicalUrl,
        images: [
          {
            url: post.featuredImage.startsWith('http') 
              ? post.featuredImage 
              : `${baseUrl}${post.featuredImage}`,
            width: 800,
            height: 400,
            alt: post.title,
          },
        ],
        authors: [post.author.name],
        publishedTime: post.publishedAt,
        modifiedTime: post.updatedAt,
        section: post.category,
        tags: post.tags,
        siteName: 'KranioFlow',
        locale: 'sk_SK',
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: [post.featuredImage.startsWith('http') 
          ? post.featuredImage 
          : `${baseUrl}${post.featuredImage}`],
        creator: '@kranioflow',
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      category: 'health',
    };
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