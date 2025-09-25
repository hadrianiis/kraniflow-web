'use client';

import React from 'react';
import styled from 'styled-components';

interface BlogPostLayoutProps {
  children: React.ReactNode;
}

const LayoutContainer = styled.main`
  min-height: 100vh;
  background-color: #f1f1f1;
  
  /* Ensure proper spacing and max-width */
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    padding: 0 1.5rem;
  }
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const ContentWrapper = styled.div`
  /* Ensure proper content flow */
  display: flex;
  flex-direction: column;
  gap: 0;
  
  /* Typography improvements */
  line-height: 1.7;
  color: #1a1a1a;
  
  /* Performance optimizations */
  contain: layout style;
`;

const BlogPostLayout = React.memo(function BlogPostLayout({ 
  children 
}: BlogPostLayoutProps) {
  return (
    <LayoutContainer>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </LayoutContainer>
  );
});

BlogPostLayout.displayName = 'BlogPostLayout';

export default BlogPostLayout;
