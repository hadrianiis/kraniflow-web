import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPostsByAuthor } from '@/lib/blog';
import BlogGrid from '@/components/UI/Blog/BlogGrid';

interface AuthorPageProps {
  params: Promise<{
    author: string;
  }>;
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { author } = await params;
  const posts = await getBlogPostsByAuthor(author);
  
  if (posts.length === 0) {
    return {
      title: 'Autor nenájdený | Raft Blog',
    };
  }

  const authorName = decodeURIComponent(author);

  return {
    title: `Články autora ${authorName} | Raft Blog`,
    description: `Objavte všetky články autora ${authorName} na našom blogu o finančnom plánovaní a investovaní.`,
    keywords: `${authorName}, autor, blog, finančné poradenstvo, investovanie`,
    openGraph: {
      title: `Články autora ${authorName} | Raft Blog`,
      description: `Objavte všetky články autora ${authorName} na našom blogu.`,
      type: 'profile',
    },
  };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { author } = await params;
  const posts = await getBlogPostsByAuthor(author);
  const authorName = decodeURIComponent(author);
  
  if (posts.length === 0) {
    notFound();
  }

  const authorInfo = posts[0]; // Get first post to extract author info

  return (
    <main className="min-h-screen bg-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="mb-8">
            <img
              src={authorInfo.author.avatar}
              alt={authorInfo.author.name}
              className="w-32 h-32 rounded-full border-4 border-white/20 mx-auto mb-6"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {authorInfo.author.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200 mb-8">
            {posts.length} článkov na našom blogu
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto">
            <p className="text-blue-100 leading-relaxed">
              Expert na finančné poradenstvo s viac ako 15-ročnými skúsenosťami. 
              Špecializuje sa na investičné stratégie, dôchodkové plánovanie a daňové optimalizácie.
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <BlogGrid initialPosts={posts} showFilters={false} />
      </div>
    </main>
  );
} 