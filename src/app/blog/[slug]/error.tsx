'use client';

import { useEffect } from 'react';
import { Button } from '@/components/UI/button';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  min-height: 100vh;
  background: var(--Background);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ErrorCard = styled.div`
  max-width: 32rem;
  margin: 0 auto;
  background: white;
  border-radius: 1rem;
  padding: 3rem 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e5e5;
`;

const ErrorIcon = styled.div`
  width: 4rem;
  height: 4rem;
  margin: 0 auto 1.5rem;
  background: #fee2e2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #dc2626;
`;

const ErrorTitle = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ErrorMessage = styled.p`
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ErrorActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledButton = styled(Button)`
  min-width: 120px;
`;

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Blog post error:', error);
  }, [error]);

  return (
    <ErrorContainer>
      <ErrorContent>
        <ErrorCard>
          <ErrorIcon>⚠️</ErrorIcon>
          <ErrorTitle>Nastala chyba</ErrorTitle>
          <ErrorMessage>
            Ospravedlňujeme sa, ale pri načítavaní článku sa vyskytla neočakávaná chyba. 
            Skúste to prosím znova alebo sa vráťte na hlavnú stránku blogu.
          </ErrorMessage>
          <ErrorActions>
            <StyledButton 
              onClick={reset}
              variant="default"
            >
              Skúsiť znova
            </StyledButton>
            <StyledButton 
              onClick={() => window.location.href = '/blog'}
              variant="outline"
            >
              Späť na blog
            </StyledButton>
          </ErrorActions>
        </ErrorCard>
      </ErrorContent>
    </ErrorContainer>
  );
}
