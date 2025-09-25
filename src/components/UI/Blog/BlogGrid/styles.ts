'use client';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const FiltersSection = styled.div`
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const CategoryButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const CategoryButton = styled.button<{ $isActive: boolean }>`
  padding: 0.5rem 1rem;
  border: 1px solid ${props => props.$isActive ? '#469F9D' : '#e5e7eb'};
  border-radius: 0.5rem;
  background: ${props => props.$isActive ? '#469F9D' : 'white'};
  color: ${props => props.$isActive ? 'white' : '#666'};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #469F9D;
    background: ${props => props.$isActive ? '#469F9D' : 'rgba(70, 159, 157, 0.1)'};
    color: ${props => props.$isActive ? 'white' : '#469F9D'};
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 20rem;
  position: relative;
  
  @media (min-width: 768px) {
    width: auto;
  }

  svg {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1.25rem;
    height: 1.25rem;
    color: #9ca3af;
    pointer-events: none;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  outline: none;
  transition: all 0.2s ease;
  background: white;

  &:focus {
    border-color: #469F9D;
    box-shadow: 0 0 0 3px rgba(70, 159, 157, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const BlogGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;

export const BlogCard = styled.article`
  background: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  min-height: 500px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
`;

export const CardImage = styled.div`
  position: relative;
  height: 12rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${BlogCard}:hover & img {
    transform: scale(1.05);
  }

  .featured-badge {
    position: absolute;
    top: 1rem;
    left: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    background: var(--green);
    color: white;
    border-radius: 0.5rem;
    font-size: 0.75rem;
    font-weight: 500;

    svg {
      width: 0.875rem;
      height: 0.875rem;
    }
  }

  .category-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.25rem 0.75rem;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    border-radius: 0.5rem;
    font-size: 0.75rem;
    font-weight: 500;
  }
`;

export const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CardMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: #666;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: #9ca3af;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.75rem;
  line-height: 1.4;
`;

export const CardExcerpt = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  flex: 1;
`;

export const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const CardTag = styled.span`
  padding: 0.25rem 0.5rem;
  background: rgba(70, 159, 157, 0.1);
  color: #469F9D;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
`;

export const ReadMoreLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #469F9D;
  font-weight: 500;
  font-size: 0.875rem;
  text-decoration: none;
  transition: all 0.2s ease;
  margin-top: auto;

  &:hover {
    color: #3a8a88;
    gap: 0.75rem;
  }

  svg {
    width: 1rem;
    height: 1rem;
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateX(2px);
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 3rem;
`;

export const PaginationButton = styled.button<{ $isActive?: boolean }>`
  padding: 0.75rem 1rem;
  border: 1px solid ${props => props.$isActive ? '#469F9D' : '#e5e7eb'};
  border-radius: 0.5rem;
  background: ${props => props.$isActive ? '#469F9D' : 'white'};
  color: ${props => props.$isActive ? 'white' : '#666'};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #469F9D;
    background: ${props => props.$isActive ? '#469F9D' : 'rgba(70, 159, 157, 0.1)'};
    color: ${props => props.$isActive ? 'white' : '#469F9D'};
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 1rem;

  .title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    color: #666;
    font-size: 1rem;
  }
`; 