import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.div`
  min-height: 100vh;
  background: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Content = styled.div`
  max-width: 42rem;
  margin: 0 auto;
  text-align: center;
`;

export const IconContainer = styled.div`
  margin-bottom: 2rem;
`;

export const IconWrapper = styled.div`
  width: 6rem;
  height: 6rem;
  background-color: #dbeafe;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  
  svg {
    width: 3rem;
    height: 3rem;
    color: #2563eb;
  }
`;

export const ErrorCode = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

export const ErrorTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 1.875rem;
  }
`;

export const ErrorDescription = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const ActionButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  border-radius: 0.75rem;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &.primary {
    background-color: #2563eb;
    color: white;
    
    &:hover {
      background-color: #1d4ed8;
    }
  }
  
  &.secondary {
    background-color: #f3f4f6;
    color: #374151;
    
    &:hover {
      background-color: #e5e7eb;
    }
  }
  
  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const SuggestionsSection = styled.div`
  margin-top: 3rem;
  padding: 1.5rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #f3f4f6;
`;

export const SuggestionsTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
`;

export const SuggestionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

export const SuggestionLink = styled(Link)`
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 0.75rem;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #f3f4f6;
  }
`;

export const SuggestionTitle = styled.h4`
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.25rem;
  
  ${SuggestionLink}:hover & {
    color: #2563eb;
  }
`;

export const SuggestionDescription = styled.p`
  font-size: 0.875rem;
  color: #6b5563;
  margin: 0;
`;
