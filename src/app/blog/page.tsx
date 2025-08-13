import { Metadata } from 'next';
import BlogHero from '@/components/UI/Blog/BlogHero';
import BlogGrid from '@/components/UI/Blog/BlogGrid';
import { Wrapper, Inner, ContentSection } from './styles';

export const metadata: Metadata = {
  title: 'Blog | Raft - Finančná sloboda a investovanie',
  description: 'Objavte najnovšie články o finančnom plánovaní, investovaní a dosiahnutí finančnej slobody. Expertné rady a tipy od našich finančných poradcov.',
  keywords: 'blog, finančné poradenstvo, investovanie, finančná sloboda, finančné plánovanie',
  openGraph: {
    title: 'Blog | Raft - Finančná sloboda a investovanie',
    description: 'Objavte najnovšie články o finančnom plánovaní, investovaní a dosiahnutí finančnej slobody.',
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <Wrapper>
      <BlogHero />
      
      <ContentSection>
        <Inner>
          <BlogGrid />
        </Inner>
      </ContentSection>
    </Wrapper>
  );
} 