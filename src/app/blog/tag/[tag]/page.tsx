import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPostsByTag } from '@/lib/blog';
import BlogGrid from '@/components/UI/Blog/BlogGrid';
import {
  Container,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  ContentSection
} from './styles';

interface TagPageProps {
  params: {
    tag: string;
  };
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const posts = await getBlogPostsByTag(params.tag);
  
  if (posts.length === 0) {
    return {
      title: 'Tag nenájdený | Raft Blog',
    };
  }

  const tagName = decodeURIComponent(params.tag);

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
  const posts = await getBlogPostsByTag(params.tag);
  const tagName = decodeURIComponent(params.tag);
  
  if (posts.length === 0) {
    notFound();
  }

  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroTitle>
            Tag: #{tagName}
          </HeroTitle>
          <HeroSubtitle>
            {posts.length} článkov s tagom "{tagName}"
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>
      
      {/* Blog Grid */}
      <ContentSection>
        <BlogGrid initialPosts={posts} showFilters={false} />
      </ContentSection>
    </Container>
  );
} 