'use client';

import { BlogPost, BlogPagination } from '@/types/blog';
import { memo, useMemo, Suspense } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { useRouter, useSearchParams } from 'next/navigation';
import Pagination from '../Pagination';

// Dynamic import for BlogCard with lazy loading (unused but kept for potential future use)
// const BlogCard = dynamic(() => import('../BlogCard'), {
//   ssr: true,
//   loading: () => (
//     <div style={{ 
//       height: '300px', 
//       background: '#f5f5f5', 
//       borderRadius: '8px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center'
//     }}>
//       Načítavam...
//     </div>
//   )
// });

interface BlogGridProps {
  posts: BlogPost[];
  pagination?: BlogPagination;
  onPageChange?: (page: number) => void;
  className?: string | undefined;
}

// Styled components - improved responsiveness
const BlogContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 480px) {
    padding: 0 1.25rem;
  }

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 0 2rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2.5rem;
  }

  @media (min-width: 1280px) {
    padding: 0 3rem;
  }
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--Text-Primary, #1a1a1a);
  text-align: center;
  margin: 0 0 3rem 0;
  line-height: 1.2;
  letter-spacing: -0.02em;

  @media (min-width: 640px) {
    font-size: 3rem;
    margin-bottom: 3.5rem;
  }

  @media (min-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 4rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;

  /* Small mobile */
  @media (min-width: 480px) {
    gap: 1.25rem;
  }

  /* Large mobile / Small tablet */
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  /* Tablet */
  @media (min-width: 768px) {
    gap: 1.75rem;
  }

  /* Large tablet / Small desktop */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  /* Large desktop */
  @media (min-width: 1280px) {
    gap: 2.25rem;
  }
`;

const CardWrapper = styled.div`
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  
  &:hover {
    transform: scale(1.02);
  }
  
  &:active {
    transform: scale(0.98);
  }
`;

// Lazy load BlogCard for better performance
const LazyBlogCard = dynamic(() => import('../BlogCard'), {
  loading: () => (
    <div style={{ 
      height: '300px', 
      background: '#f5f5f5', 
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#666'
    }}>
      Načítavam...
    </div>
  ),
  ssr: false
});

// Individual blog card component
const BlogCardItem = memo(function BlogCardItem({ 
  post, 
  index 
}: { 
  post: BlogPost; 
  index: number;
}) {
  return (
    <CardWrapper>
      <Suspense fallback={
        <div style={{ 
          height: '300px', 
          background: '#f5f5f5', 
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666'
        }}>
          Načítavam...
        </div>
      }>
        <LazyBlogCard
          post={post}
          index={index}
          variant="compact"
        />
      </Suspense>
    </CardWrapper>
  );
});

// Empty state component
const EmptyState = memo(function EmptyState({ className }: { className?: string | undefined }) {
  return (
    <BlogContainer className={className}>
      <BlogTitle>Blog</BlogTitle>
      <div style={{ 
        textAlign: 'center', 
        padding: '2rem',
        color: '#666'
      }}>
        Žiadne články nie sú k dispozícii.
      </div>
    </BlogContainer>
  );
});

// Main component
const BlogGrid = memo(function BlogGrid({ 
  posts, 
  pagination, 
  onPageChange, 
  className 
}: BlogGridProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Memoize the posts to prevent unnecessary re-renders
  const memoizedPosts = useMemo(() => posts, [posts]);

  // Handle page change with URL navigation
  const handlePageChange = (page: number) => {
    if (onPageChange) {
      onPageChange(page);
    } else {
      const params = new URLSearchParams(searchParams.toString());
      
      if (page === 1) {
        params.delete('page');
      } else {
        params.set('page', page.toString());
      }
      
      const newUrl = params.toString() 
        ? `/blog?${params.toString()}`
        : '/blog';
      
      router.push(newUrl);
    }
  };

  // Early return for empty posts
  if (!memoizedPosts || memoizedPosts.length === 0) {
    return <EmptyState className={className} />;
  }

  return (
    <BlogContainer className={className}>
      <BlogTitle>Blog</BlogTitle>
      <GridContainer>
        {memoizedPosts.map((post, index) => (
          <BlogCardItem
            key={`${post.id}-${post.slug}`}
            post={post}
            index={index}
          />
        ))}
      </GridContainer>
      
      {/* Pagination */}
      {pagination && (
        <Pagination
          currentPage={pagination.page}
          totalPages={pagination.totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </BlogContainer>
  );
});

BlogGrid.displayName = 'BlogGrid';

export default BlogGrid;