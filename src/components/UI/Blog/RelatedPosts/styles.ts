import styled from 'styled-components';

export const Container = styled.section`
  max-width: 80rem;
  margin: 0 auto;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #4b5563;
  max-width: 42rem;
  margin: 0 auto;
  line-height: 1.6;
`;

export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;

export const PostCard = styled.article`
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #f3f4f6;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${PostCard}:hover & {
    transform: scale(1.05);
  }
`;

export const CategoryBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  color: #374151;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
`;

export const PostContent = styled.div`
  padding: 1.5rem;
`;

export const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.75rem;
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const PostTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  
  ${PostCard}:hover & {
    color: #2563eb;
  }
`;

export const PostExcerpt = styled.p`
  color: #4b5563;
  margin-bottom: 1rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ReadMoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #2563eb;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: #1d4ed8;
    gap: 0.75rem;
  }
  
  svg {
    width: 1rem;
    height: 1rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(0.25rem);
  }
`;

export const Footer = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

export const ViewAllButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background-color: #2563eb;
  color: white;
  font-weight: 500;
  border-radius: 0.75rem;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #1d4ed8;
    transform: translateY(-1px);
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(0.25rem);
  }
`;
