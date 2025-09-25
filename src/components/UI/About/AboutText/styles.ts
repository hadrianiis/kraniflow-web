import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #f1f1f1;
  padding: 2rem 0;
  
  @media (min-width: 768px) {
    padding: 4rem 0;
  }
  
  @media (min-width: 1024px) {
    padding: 6rem 0;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0;
  text-align: center;
  
  @media (max-width: 768px) {
    width: 95%;
  }
`;


export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  margin: 4rem 0;
  width: 100%;
  align-items: start;
  
  @media (min-width: 768px) {
    gap: 7rem;
    margin: 5rem 0;
  }
  
  @media (min-width: 1024px) {
    gap: 8rem;
    margin: 6rem 0;
  }
  
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    margin: 3rem 0;
    align-items: stretch;
  }
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  text-align: left;
  height: 100%;
  padding: 0;
  
  @media (min-width: 768px) {
    gap: 3.5rem;
  }
  
  @media (min-width: 1024px) {
    gap: 4rem;
  }
`;

export const EdgesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  height: 100%;
  justify-content: space-between;
  
  @media (min-width: 768px) {
    gap: 3rem;
  }
  
  @media (min-width: 1024px) {
    gap: 3.5rem;
  }
`;

export const IntroEdge = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem;
  background: linear-gradient(135deg, #F2BCBB, #469F9D);
  background-size: 120% 120%;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: left;
  transition: all 0.3s ease-out;
  margin: 0;
  flex: 1;
  
  @media (min-width: 768px) {
    padding: 3rem;
    gap: 1.75rem;
  }
  
  @media (min-width: 1024px) {
    padding: 3.5rem;
    gap: 2rem;
  }
  
  &:hover {
    background-position: 80% 80%;
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
  }
  
  &:focus-within {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
  }
  
  &:nth-child(1) {
    background: linear-gradient(135deg, #F2BCBB 0%, #469F9D 100%);
  }
  
  &:nth-child(2) {
    background: linear-gradient(140deg, #F2BCBB 0%, #469F9D 100%);
  }
  
  &:nth-child(3) {
    background: linear-gradient(145deg, #F2BCBB 0%, #469F9D 100%);
  }
  
  p {
    font-size: 1rem;
    line-height: 1.7;
    color: #ffffff;
    margin: 0;
  }
  
  h3 {
    color: #ffffff;
    margin: 0;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  
  svg {
    width: 100%;
    height: 100%;
    transition: transform 0.2s ease;
  }
  
  &:hover svg {
    transform: scale(1.1);
  }
`;

export const IntroTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  
  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }
  
  h3 {
    font-size: 1.375rem;
    font-weight: 600;
    color: #ffffff;
    
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
    
    @media (min-width: 1024px) {
      font-size: 1.625rem;
    }
  }
`;

export const SessionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 0;
  
  @media (min-width: 768px) {
    gap: 3.5rem;
  }
  
  @media (min-width: 1024px) {
    gap: 4rem;
  }
`;

export const SessionTitle = styled.article`
  text-align: left;
  margin: 0;
  
  h2 {
    font-size: 1.75rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 1.5rem;
    margin-top: 0;
    text-align: left;
    
    @media (min-width: 768px) {
      font-size: 2rem;
      margin-bottom: 1.75rem;
    }
    
    @media (min-width: 1024px) {
      font-size: 2.25rem;
      margin-bottom: 2rem;
    }
    
    @media (max-width: 767px) {
      font-size: 1.5rem;
    }
  }
  
  p {
    font-size: 1rem;
    line-height: 1.7;
    color: #475569;
    margin: 0;
    text-align: left;
    
    @media (min-width: 768px) {
      font-size: 1.125rem;
      line-height: 1.75;
    }
    
    @media (min-width: 1024px) {
      font-size: 1.25rem;
      line-height: 1.8;
    }
  }
`;

