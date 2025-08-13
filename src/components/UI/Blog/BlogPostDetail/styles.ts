import styled from 'styled-components';

export const Container = styled.article`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
  
  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
`;

export const HeroSection = styled.div`
  max-width: 64rem;
  margin: 0 auto 3rem;
  
  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

export const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const CategoryBadge = styled.span`
  padding: 0.5rem 1rem;
  background-color: #dbeafe;
  color: #1d4ed8;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const FeaturedBadge = styled.span`
  padding: 0.5rem 1rem;
  background: linear-gradient(to right, #f97316, #dc2626);
  color: white;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Excerpt = styled.p`
  font-size: 1.25rem;
  color: #4b5563;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

export const MetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #f3f4f6;
  
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
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  border: 2px solid #dbeafe;
`;

export const AuthorDetails = styled.div``;

export const AuthorName = styled.div`
  font-weight: 600;
  color: #111827;
`;

export const AuthorLabel = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
`;

export const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.875rem;
  color: #6b7280;
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const ActionButton = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.$variant === 'primary' ? '#2563eb' : '#f3f4f6'};
  color: ${props => props.$variant === 'primary' ? 'white' : '#374151'};
  border-radius: 0.75rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.$variant === 'primary' ? '#1d4ed8' : '#e5e7eb'};
    transform: translateY(-1px);
  }
  
  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const FeaturedImageContainer = styled.div`
  max-width: 64rem;
  margin: 0 auto 3rem;
  
  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

export const FeaturedImage = styled.img`
  width: 100%;
  height: 24rem;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    height: 31.25rem;
  }
`;

export const ContentContainer = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #f3f4f6;
  
  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

export const Content = styled.div`
  color: #374151;
  line-height: 1.7;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
    margin: 2rem 0 1rem;
  }
  
  ul {
    margin: 1.5rem 0;
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.75rem;
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
  padding-left: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #eff6ff;
  border-radius: 0 0.75rem 0.75rem 0;
  font-style: italic;
  margin: 1.5rem 0;
  color: #1e40af;
  font-size: 1.125rem;
`;

export const TagsSection = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
`;

export const TagsTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const TagLink = styled.a`
  padding: 0.5rem 1rem;
  background-color: #eff6ff;
  color: #1d4ed8;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #dbeafe;
    transform: translateY(-1px);
  }
`;

export const AuthorBioSection = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
`;

export const AuthorBioContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background-color: #f9fafb;
  border-radius: 0.75rem;
`;

export const AuthorBioAvatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  border: 2px solid #dbeafe;
`;

export const AuthorBioContent = styled.div``;

export const AuthorBioName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
`;

export const AuthorBioDescription = styled.p`
  color: #4b5563;
  margin-bottom: 0.75rem;
  line-height: 1.6;
`;

export const AuthorBioLink = styled.a`
  color: #2563eb;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #1d4ed8;
  }
`;
