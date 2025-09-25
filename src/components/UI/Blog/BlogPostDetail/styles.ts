import styled from 'styled-components';
import Image from 'next/image';
import { theme, media } from '@/lib/theme';

export const Container = styled.article`
  max-width: 48rem;
  margin: 0 auto;
  padding: ${theme.spacing['2xl']} ${theme.spacing.lg};
  contain: layout style;
  
  ${media.md} {
    padding: ${theme.spacing['3xl']} ${theme.spacing.xl};
  }
`;

export const Header = styled.header`
  margin-bottom: ${theme.spacing['2xl']};
  contain: layout style;
`;

export const Title = styled.h1`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xl};
  line-height: ${theme.typography.lineHeight.tight};
  word-break: break-word;
  overflow-wrap: break-word;
  contain: layout style;
  
  ${media.md} {
    font-size: ${theme.typography.fontSize['4xl']};
  }
`;

export const AuthorSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  padding-bottom: ${theme.spacing.xl};
  border-bottom: 1px solid ${theme.colors.border.light};
  contain: layout style;
  
  ${media.md} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  contain: layout;
`;

export const AuthorAvatar = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
  contain: layout style paint;
`;

export const AuthorDetails = styled.div`
  contain: layout;
`;

export const AuthorName = styled.div`
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.sm};
`;

export const AuthorRole = styled.div`
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.text.muted};
`;

export const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xl};
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.text.muted};
  contain: layout;
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  contain: layout;
`;


export const FeaturedImageContainer = styled.div`
  margin-bottom: 2rem;
`;

export const FeaturedImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-height: 20rem;
  border-radius: 0.5rem;
  overflow: hidden;
  
  @media (min-width: 768px) {
    max-height: 25rem;
  }
`;

export const FeaturedImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const ContentContainer = styled.div`
  margin-top: 2rem;
`;

export const Content = styled.div`
  color: #333;
  line-height: 1.7;
  font-size: 1rem;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: #1a1a1a;
    margin: 2rem 0 1rem;
    line-height: 1.3;
  }
  
  h1 {
    font-size: 1.75rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
  
  h3 {
    font-size: 1.25rem;
  }
  
  h4 {
    font-size: 1.125rem;
  }
  
  ul, ol {
    margin: 1.5rem 0;
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  blockquote {
    border-left: 3px solid #ddd;
    padding-left: 1rem;
    margin: 1.5rem 0;
    font-style: italic;
    color: #555;
    background-color: #f9f9f9;
    padding: 1rem;
    border-radius: 0 0.25rem 0.25rem 0;
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 0.25rem;
    margin: 1.5rem 0;
  }
  
  a {
    color: #0066cc;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  strong {
    font-weight: 600;
  }
  
  em {
    font-style: italic;
  }
  
  code {
    background-color: #f5f5f5;
    padding: 0.125rem 0.25rem;
    border-radius: 0.125rem;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.875rem;
  }
  
  pre {
    background-color: #f5f5f5;
    padding: 1rem;
    border-radius: 0.25rem;
    overflow-x: auto;
    margin: 1.5rem 0;
    
    code {
      background-color: transparent;
      padding: 0;
    }
  }
`;


