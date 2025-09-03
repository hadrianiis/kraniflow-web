import styled from 'styled-components';

export const Container = styled.article`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  background-color: #f1f1f1;
  
  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`;

export const HeroSection = styled.div`
  max-width: 64rem;
  margin: 0 auto 2rem;
  
  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
  line-height: 1.2;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Excerpt = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

export const MetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: transparent;
  border-radius: 1rem;
  border: none;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const AuthorAvatar = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  border: 2px solid #dbeafe;
`;

export const AuthorDetails = styled.div``;

export const AuthorName = styled.div`
  font-weight: 600;
  color: #111827;
  font-size: 0.875rem;
`;

export const AuthorLabel = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
`;

export const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.75rem;
  color: #6b7280;
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const FeaturedImageContainer = styled.div`
  max-width: 64rem;
  margin: 0 auto 2rem;
  
  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`;

export const FeaturedImage = styled.img`
  width: 100%;
  height: 16rem;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    height: 20rem;
  }
`;

export const ContentContainer = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  background-color: transparent;
  border-radius: 1rem;
  padding: 1.5rem;
  border: none;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const Content = styled.div`
  color: #374151;
  line-height: 1.7;
  
  p {
    margin-bottom: 1rem;
  }
  
  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #111827;
    margin: 1.5rem 0 0.75rem;
  }
  
  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
  }
  
  .bullet {
    width: 0.5rem;
    height: 0.5rem;
    background-color: #2563eb;
    border-radius: 9999px;
    margin-top: 0.75rem;
    flex-shrink: 0;
  }
`;

export const Blockquote = styled.blockquote`
  border-left: 4px solid #2563eb;
  padding-left: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  background-color: #eff6ff;
  border-radius: 0 0.5rem 0.5rem 0;
  font-style: italic;
  margin: 1rem 0;
  color: #1e40af;
  font-size: 1rem;
`;

export const TagsSection = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
`;

export const TagsTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.75rem;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const TagLink = styled.a`
  padding: 0.375rem 0.75rem;
  background-color: #eff6ff;
  color: #1d4ed8;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #dbeafe;
    transform: translateY(-1px);
  }
`;
