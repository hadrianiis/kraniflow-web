'use client';

import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';

// Skeleton animation
const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const LoadingContainer = styled.div`
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

const TitleSkeleton = styled.div`
  height: 4rem;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 0.5rem;
  margin: 0 0 3rem 0;
  width: 200px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 640px) {
    height: 4.5rem;
    margin-bottom: 3.5rem;
  }

  @media (min-width: 768px) {
    height: 5rem;
    margin-bottom: 4rem;
  }

  @media (min-width: 1024px) {
    height: 5.5rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;

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

const CardSkeleton = styled.div`
  background: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
`;

const ImageSkeleton = styled.div`
  height: 200px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite;

  @media (min-width: 640px) {
    height: 220px;
  }

  @media (min-width: 1024px) {
    height: 240px;
  }
`;

const ContentSkeleton = styled.div`
  padding: 1.5rem;
`;

const TitleSkeletonLine = styled.div<{ $width?: string }>`
  height: 1.25rem;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 0.25rem;
  margin-bottom: 0.75rem;
  width: ${({ $width }) => $width || '90%'};
`;

const ExcerptSkeletonLine = styled.div<{ $width?: string }>`
  height: 0.875rem;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  width: ${props => props.$width || '100%'};
`;

const MetaSkeleton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1rem;
`;

const AuthorSkeleton = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite;
`;

const AuthorInfoSkeleton = styled.div`
  flex: 1;
`;

const AuthorNameSkeleton = styled.div`
  height: 0.875rem;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 0.25rem;
  margin-bottom: 0.25rem;
  width: 60%;
`;

const ReadTimeSkeleton = styled.div`
  height: 0.75rem;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 0.25rem;
  width: 40%;
`;

const PaginationSkeleton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
  gap: 0.5rem;

  @media (min-width: 768px) {
    margin: 4rem 0;
    gap: 0.75rem;
  }
`;

const PaginationButtonSkeleton = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 0.5rem;

  @media (min-width: 640px) {
    width: 3rem;
    height: 3rem;
  }
`;

const PageInfoSkeleton = styled.div`
  height: 1rem;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 0.25rem;
  width: 120px;
  margin-left: 1rem;

  @media (min-width: 640px) {
    margin-left: 1.5rem;
  }
`;

interface BlogLoadingProps {
  postsCount?: number;
  showPagination?: boolean;
  className?: string;
}

const BlogLoading = memo(function BlogLoading({ 
  postsCount = 6, 
  showPagination = true,
  className 
}: BlogLoadingProps) {
  return (
    <LoadingContainer className={className}>
      <TitleSkeleton />
      <GridContainer>
        {Array.from({ length: postsCount }, (_, index) => (
          <CardSkeleton key={index}>
            <ImageSkeleton />
            <ContentSkeleton>
              <TitleSkeletonLine />
              <TitleSkeletonLine $width="75%" />
              <ExcerptSkeletonLine />
              <ExcerptSkeletonLine $width="90%" />
              <ExcerptSkeletonLine $width="85%" />
              <MetaSkeleton>
                <AuthorSkeleton />
                <AuthorInfoSkeleton>
                  <AuthorNameSkeleton />
                  <ReadTimeSkeleton />
                </AuthorInfoSkeleton>
              </MetaSkeleton>
            </ContentSkeleton>
          </CardSkeleton>
        ))}
      </GridContainer>
      
      {showPagination && (
        <PaginationSkeleton>
          <PaginationButtonSkeleton />
          <PaginationButtonSkeleton />
          <PaginationButtonSkeleton />
          <PaginationButtonSkeleton />
          <PaginationButtonSkeleton />
          <PaginationButtonSkeleton />
          <PaginationButtonSkeleton />
          <PageInfoSkeleton />
        </PaginationSkeleton>
      )}
    </LoadingContainer>
  );
});

BlogLoading.displayName = 'BlogLoading';

export default BlogLoading;
