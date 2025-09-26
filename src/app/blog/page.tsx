import { Metadata } from 'next';
import { Wrapper, Inner, ContentSection } from './styles';
import dynamic from 'next/dynamic';
import { getBlogPosts } from '@/lib/blog';
import { Suspense } from 'react';
import { StructuredData } from '@/components/SEO';
import { generateMetadata } from '@/lib/seo';

// Dynamic imports for better code splitting
const BlogErrorBoundary = dynamic(() => import('@/components/UI/Blog/BlogGrid/ErrorBoundary'), {
  ssr: true,
  loading: () => <div>Načítavam blog...</div>
});

const BlogGrid = dynamic(() => import('@/components/UI/Blog/BlogGrid'), {
  ssr: true,
  loading: () => <div>Načítavam blog...</div>
});

const BlogLoading = dynamic(() => import('@/components/UI/Blog/BlogLoading'), {
  ssr: true
});

export const metadata: Metadata = generateMetadata({
  title: 'Blog | Kranioflow | Kraniosakrálna terapia',
  description: 'Objavte najnovšie články o kraniosakrálnej terapii, zdraví a wellness. Expertné rady a tipy od našich terapeutov v Brezne a na celom Slovensku.',
  keywords: [
    'blog kraniosakrálna terapia',
    'články o zdraví',
    'wellness blog',
    'terapeutické rady',
    'alternatívna medicína',
    'holistická terapia',
    'zdravie a wellness',
    'kranioflow blog',
    'terapia Brezno',
    'terapia Slovensko',
    'zdravotné tipy'
  ],
  ogImage: '/graphQl.svg',
});

// Enable ISR with 1 hour revalidation
export const revalidate = 3600;

// Generate static params for better performance
export async function generateStaticParams() {
  return [];
}

interface BlogPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = await searchParams;
  const currentPage = parseInt(resolvedSearchParams.page || '1', 10);
  const postsPerPage = 6; // Zobraz iba 6 článkov na stránku
  
  // Načítaj všetky články (API vracia všetky)
  const allBlogData = await getBlogPosts();
  
  // Vypočítaj pagináciu na frontend
  const totalPosts = allBlogData.posts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const postsForCurrentPage = allBlogData.posts.slice(startIndex, endIndex);
  
  // Vytvor pagination objekt pre frontend
  const pagination = {
    page: currentPage,
    limit: postsPerPage,
    total: totalPosts,
    totalPages: totalPages
  };
  
  // Debug logging
  console.log(`📊 Blog page data:`, {
    currentPage,
    postsPerPage,
    totalPosts,
    totalPages,
    postsOnPage: postsForCurrentPage.length,
    startIndex,
    endIndex
  });
  
  return (
    <Wrapper>
      <StructuredData
        title="Blog | Kranioflow | Kraniosakrálna terapia"
        description="Objavte najnovšie články o kraniosakrálnej terapii, zdraví a wellness. Expertné rady a tipy od našich terapeutov v Brezne a na celom Slovensku."
        type="WebSite"
        keywords={[
          'blog kraniosakrálna terapia',
          'články o zdraví',
          'wellness blog',
          'terapeutické rady',
          'alternatívna medicína',
          'holistická terapia',
          'zdravie a wellness',
          'kranioflow blog',
          'terapia Brezno',
          'terapia Slovensko',
          'zdravotné tipy'
        ]}
        breadcrumbs={[
          { name: 'Domov', url: '/' },
          { name: 'Blog', url: '/blog' }
        ]}
      />
      <ContentSection>
        <Inner>
          <BlogErrorBoundary>
            <Suspense fallback={<BlogLoading postsCount={6} showPagination={true} />}>
              <BlogGrid 
                posts={postsForCurrentPage} 
                pagination={pagination}
              />
            </Suspense>
          </BlogErrorBoundary>
        </Inner>
      </ContentSection>
    </Wrapper>
  );
} 