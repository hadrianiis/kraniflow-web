'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const LinkTo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  background: #469F9D;
  color: var(--white);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  &:hover {
    background: linear-gradient(135deg, #469F9D, #F2BCBB);
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(70, 159, 157, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
`;
