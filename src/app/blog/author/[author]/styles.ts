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
  max-width: 64rem;
  margin: 0 auto;
  text-align: center;
  padding: 0 1rem;
`;

export const AuthorAvatarContainer = styled.div`
  margin-bottom: 2rem;
`;

export const AuthorAvatar = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.2);
  margin: 0 auto 1.5rem;
  
  @media (min-width: 768px) {
    width: 8rem;
    height: 8rem;
  }
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
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const AuthorBio = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 42rem;
  margin: 0 auto;
`;

export const AuthorBioText = styled.p`
  color: #bfdbfe;
  line-height: 1.6;
  margin: 0;
`;

export const ContentSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;
