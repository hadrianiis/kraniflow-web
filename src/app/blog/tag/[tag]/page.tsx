import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPostsByTag } from '@/lib/blog';
import BlogGrid from '@/components/UI/Blog/BlogGrid';

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = await params;
  const posts = await getBlogPostsByTag(tag);
  
  if (posts.length === 0) {
    return {
      title: 'Tag nenájdený | Raft Blog',
    };
  }

  const tagName = decodeURIComponent(tag);

  return {
    title: `Články s tagom "${tagName}" | Raft Blog`,
    description: `Objavte všetky články s tagom "${tagName}" na našom blogu o finančnom plánovaní a investovaní.`,
    keywords: `${tagName}, blog, finančné poradenstvo, investovanie`,
    openGraph: {
      title: `Články s tagom "${tagName}" | Raft Blog`,
      description: `Objavte všetky články s tagom "${tagName}" na našom blogu.`,
      type: 'website',
    },
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const posts = await getBlogPostsByTag(tag);
  const tagName = decodeURIComponent(tag);
  
  if (posts.length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tag: #{tagName}
          </h1>
          <p className="text-xl md:text-2xl text-emerald-200">
            {posts.length} článkov s tagom "{tagName}"
          </p>
        </div>
      </section>
      
      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <BlogGrid initialPosts={posts} showFilters={false} />
      </div>
    </main>
  );
} 