'use client';

import { BlogPost } from '@/types/blog';
import { memo, useMemo } from 'react';
import styled from 'styled-components';
import BlogCard from '../BlogCard';

interface RelatedPostsSectionProps {
  posts: BlogPost[];
}

// Removed animation variants for better SSR performance

// Styled components
const Section = styled.section`
  margin-top: 4rem;
  margin-bottom: 100px;
  padding-top: 3rem;
  border-top: 1px solid #e5e5e5;
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  /* Responzívne breakpointy - synchronizované s BlogGrid */
  @media (min-width: 480px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (min-width: 1024px) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  @media (min-width: 1280px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  text-align: center;
  
  /* Responzívne breakpointy pre nadpis */
  @media (min-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 1.75rem;
  }

  @media (min-width: 768px) {
    font-size: 1.875rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.25rem;
    margin-bottom: 2.5rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;

  /* Responzívne breakpointy - úplne synchronizované s BlogGrid */
  @media (min-width: 480px) {
    gap: 1.25rem;
  }

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    gap: 1.75rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

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
      <BlogCard
        post={post}
        index={index}
        variant="compact"
      />
    </CardWrapper>
  );
});

// Main component
const RelatedPostsSection = memo(function RelatedPostsSection({ posts }: RelatedPostsSectionProps) {
  // Memoize the posts to prevent unnecessary re-renders
  const memoizedPosts = useMemo(() => posts.slice(0, 3), [posts]);

  // Early return for empty posts
  if (!memoizedPosts || memoizedPosts.length === 0) {
    return null;
  }

  return (
    <Section>
      <SectionTitle>Ďalšie články</SectionTitle>
      <GridContainer>
        {memoizedPosts.map((post, index) => (
          <BlogCardItem
            key={`${post.id}-${post.slug}`}
            post={post}
            index={index}
          />
        ))}
      </GridContainer>
    </Section>
  );
});

RelatedPostsSection.displayName = 'RelatedPostsSection';

export default RelatedPostsSection;
