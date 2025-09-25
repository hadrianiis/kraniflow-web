
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding: 4rem 0;
  
  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`;

export const ContentSection = styled.div<{ $isReversed: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    flex-direction: ${props => props.$isReversed ? 'row-reverse' : 'row'};
    gap: 4rem;
    align-items: center;
    padding: 0 2rem;
  }
`;

export const TextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

export const ImageContainer = styled.div<{ $isLongImage: boolean }>`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    flex: 1;
    height: ${props => props.$isLongImage ? '500px' : '400px'};
    max-width: 500px;
    align-self: flex-start;
  }
  
  @media (min-width: 1024px) {
    height: ${props => props.$isLongImage ? '600px' : '450px'};
  }
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 500;
  color: #111827;
  line-height: 1.1;
  margin: 0;
  
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #374151;
  margin: 0;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ListItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
  color: #374151;
  
  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    top: 0;
    color: #3b82f6;
    font-weight: 600;
    font-size: 1.125rem;
  }
`;
