import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostDetail from '@/components/UI/Blog/BlogPostDetail';
import RelatedPosts from '@/components/UI/Blog/RelatedPosts';
import { getBlogPost, getRelatedPosts } from '@/lib/blog';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Článok nenájdený | Raft Blog',
    };
  }

  return {
    title: `${post.title} | Raft Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      images: [post.image],
      authors: [post.author],
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(params.slug, post.category, post.tags);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <BlogPostDetail post={post} />
      
      {relatedPosts.length > 0 && (
        <div className="container mx-auto px-4 py-12">
          <RelatedPosts posts={relatedPosts} />
        </div>
      )}
    </main>
  );
} 