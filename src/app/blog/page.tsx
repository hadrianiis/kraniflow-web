import { Metadata } from 'next';
import { Wrapper, Inner, ContentSection } from './styles';
import { BlogGrid } from '@/components/UI/Blog';
import { getBlogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog | KranioFlow - Kraniosakrálna terapia',
  description: 'Objavte najnovšie články o kraniosakrálnej terapii, zdraví a wellness. Expertné rady a tipy od našich terapeutov.',
  keywords: 'blog, kraniosakrálna terapia, zdravie, wellness, terapeutické rady',
  openGraph: {
    title: 'Blog | KranioFlow - Kraniosakrálna terapia',
    description: 'Objavte najnovšie články o kraniosakrálnej terapii, zdraví a wellness.',
    type: 'website',
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  
  return (
    <Wrapper>
      <ContentSection>
        <Inner>
          <BlogGrid initialPosts={posts} showFilters={false} />
        </Inner>
      </ContentSection>
    </Wrapper>
  );
} 