import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;
  background: #f1f1f1;
`;

export const HeroSection = styled.section`
  background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
  color: white;
  padding: 5rem 0;
  
  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #bfdbfe;
  margin-bottom: 2rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SearchForm = styled.form`
  max-width: 42rem;
  margin: 0 auto;
`;

export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3.5rem;
  background-color: white;
  color: #111827;
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: #6b7280;
  }
  
  &:focus {
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background-color: #2563eb;
  color: white;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #1d4ed8;
  }
`;

export const ContentSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

export const SearchResults = styled.div`
  margin-bottom: 2rem;
`;

export const ResultsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const ResultsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  
  .query {
    color: #2563eb;
    margin-left: 0.5rem;
  }
`;

export const ResultsCount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
  
  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const LoadingContainer = styled.div`
  text-align: center;
  padding: 3rem 0;
`;

export const Spinner = styled.div`
  width: 3rem;
  height: 3rem;
  border: 2px solid #e5e7eb;
  border-top: 2px solid #2563eb;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const LoadingText = styled.p`
  color: #6b5563;
`;

export const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
`;

export const PostCard = styled.article`
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #f3f4f6;
  
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

export const FeaturedBadge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: linear-gradient(135deg, #f97316 0%, #dc2626 100%);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
`;

export const CategoryBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  color: #374151;
  padding: 0.25rem 0.75rem;
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

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const TagBadge = styled.span`
  padding: 0.25rem 0.75rem;
  background-color: #eff6ff;
  color: #1d4ed8;
  font-size: 0.75rem;
  border-radius: 9999px;
  font-weight: 500;
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

export const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 0;
`;

export const EmptyIcon = styled.div`
  width: 6rem;
  height: 6rem;
  background-color: #f3f4f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  
  svg {
    width: 3rem;
    height: 3rem;
    color: #9ca3af;
  }
`;

export const EmptyTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
`;

export const EmptySubtitle = styled.p`
  color: #6b5563;
  margin-bottom: 1.5rem;
  max-width: 28rem;
  margin-left: auto;
  margin-right: auto;
`;

export const EmptyTips = styled.div`
  text-align: left;
  max-width: 28rem;
  margin: 0 auto;
`;

export const EmptyTipsTitle = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
`;

export const EmptyTipsList = styled.ul`
  text-align: left;
  max-width: 28rem;
  margin: 0 auto;
  
  li {
    margin-bottom: 0.25rem;
    color: #6b7280;
    font-size: 0.875rem;
  }
`;

export const PopularSearches = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  text-align: center;
`;

export const PopularTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
`;

export const PopularGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`;

export const PopularItem = styled.button`
  padding: 1rem;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #f3f4f6;
  transition: all 0.3s ease;
  text-align: left;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
`;

export const PopularItemTitle = styled.h4`
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.25rem;
  
  ${PopularItem}:hover & {
    color: #2563eb;
  }
`;

export const PopularItemSubtitle = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`;
