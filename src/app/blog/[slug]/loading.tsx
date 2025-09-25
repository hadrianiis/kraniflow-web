'use client';

import styled from 'styled-components';

const LoadingContainer = styled.div`
  min-height: 100vh;
  background: var(--Background);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SkeletonContainer = styled.div`
  max-width: 48rem;
  margin: 0 auto;
`;

const SkeletonHeader = styled.div`
  margin-bottom: 2rem;
`;

const SkeletonTitle = styled.div`
  height: 3rem;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  
  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const SkeletonMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SkeletonAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
`;

const SkeletonAuthorInfo = styled.div`
  flex: 1;
`;

const SkeletonAuthorName = styled.div`
  height: 1.25rem;
  width: 60%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
`;

const SkeletonAuthorRole = styled.div`
  height: 1rem;
  width: 40%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 0.25rem;
`;

const SkeletonImage = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`;

const SkeletonContent = styled.div`
  margin-top: 2rem;
`;

const SkeletonParagraph = styled.div`
  height: 1.25rem;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  
  &:nth-child(odd) {
    width: 100%;
  }
  
  &:nth-child(even) {
    width: 85%;
  }
  
  &:nth-child(3n) {
    width: 95%;
  }
`;

export default function Loading() {
  return (
    <LoadingContainer>
      <LoadingContent>
        <SkeletonContainer>
          <SkeletonHeader>
            <SkeletonTitle />
            <SkeletonMeta>
              <SkeletonAvatar />
              <SkeletonAuthorInfo>
                <SkeletonAuthorName />
                <SkeletonAuthorRole />
              </SkeletonAuthorInfo>
            </SkeletonMeta>
          </SkeletonHeader>
          
          <SkeletonImage />
          
          <SkeletonContent>
            {Array.from({ length: 8 }).map((_, index) => (
              <SkeletonParagraph key={index} />
            ))}
          </SkeletonContent>
        </SkeletonContainer>
      </LoadingContent>
    </LoadingContainer>
  );
}
