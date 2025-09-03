'use client';
import styled from 'styled-components';

export const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--Background);
`;

export const HeroSection = styled.section`
  background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
  color: white;
  padding: 5rem 0;
  text-align: center;
`;

export const HeroContent = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 4rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 6rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3rem;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const SearchForm = styled.form`
  margin-top: 3rem;
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
`;

export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  font-size: 1.125rem;
  color: var(--text-primary);
  background: white;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: none;
  outline: none;
  
  &:focus {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  pointer-events: none;
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 0 1.5rem;
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 0 1rem 1rem 0;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background: var(--accent-hover);
  }
`;

export const ContentSection = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

export const LoadingContainer = styled.div`
  text-align: center;
  padding: 3rem 0;
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 2px solid transparent;
  border-top: 2px solid var(--accent);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const LoadingText = styled.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
`;

export const ResultsHeader = styled.div`
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ResultsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  
  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0;
  }
`;

export const ResultsCount = styled.p`
  color: var(--text-secondary);
  
  @media (min-width: 768px) {
    text-align: right;
  }
`;

export const ResultsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const PostCard = styled.article`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
  }
`;

export const PostImageContainer = styled.div`
  position: relative;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
`;

export const FeaturedBadge = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #f59e0b;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const CategoryBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--accent);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
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
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const PostTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const PostExcerpt = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const PostTag = styled.span`
  background: var(--muted);
  color: var(--text-secondary);
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
`;

export const ReadMoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent);
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--accent-hover);
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 0;
`;

export const EmptyIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background: var(--muted);
  border-radius: 50%;
  margin-bottom: 1rem;
`;

export const EmptyTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

export const EmptyDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

export const PopularSearches = styled.div`
  max-width: 32rem;
  margin: 0 auto;
`;

export const PopularTitle = styled.h4`
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

export const PopularTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`;

export const PopularTag = styled.button`
  background: var(--accent-light);
  color: var(--accent);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background: var(--accent-lighter);
  }
`;

export const InitialState = styled.div`
  text-align: center;
  padding: 3rem 0;
`;

export const InitialIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background: var(--accent-light);
  border-radius: 50%;
  margin-bottom: 1rem;
`;

export const InitialTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

export const InitialDescription = styled.p`
  color: var(--text-secondary);
`;
