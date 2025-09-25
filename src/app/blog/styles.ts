'use client';
import styled from 'styled-components';

export const Wrapper = styled.main`
  min-height: 100vh;
  background-color: var(--Background);
  contain: layout style;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  width: 90%;
  contain: layout;
`;

export const ContentSection = styled.section`
  margin: 0 auto 100px;
  width: 100%;
  contain: layout style;
`; 