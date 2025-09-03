import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostDetail from '@/components/UI/Blog/BlogPostDetail';
import RelatedPosts from '@/components/UI/Blog/RelatedPosts';
import { getBlogPost, getRelatedPosts } from '@/lib/blog';
import { Wrapper, Inner } from './styles';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Článok nenájdený | KranioFlow Blog',
    };
  }

  return {
    title: `${post.title} | KranioFlow Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      images: [post.featuredImage],
      authors: [post.author.name],
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug, post.category, post.tags);

  return (
    <Wrapper>
      <Inner>
        <BlogPostDetail post={post} />
        
        {relatedPosts.length > 0 && (
          <RelatedPosts posts={relatedPosts} />
        )}
      </Inner>
    </Wrapper>
  );
} 