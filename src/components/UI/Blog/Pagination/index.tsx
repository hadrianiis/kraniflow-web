'use client';

import React, { memo, useMemo } from 'react';
import styled from 'styled-components';
import { useRouter, useSearchParams } from 'next/navigation';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

const PaginationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
  gap: 0.5rem;
  
  @media (min-width: 768px) {
    margin: 4rem 0;
    gap: 0.75rem;
  }
`;

const PaginationList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.25rem;
  
  @media (min-width: 640px) {
    gap: 0.5rem;
  }
`;

const PaginationItem = styled.li`
  display: flex;
`;

const PaginationButton = styled.button<{ 
  $isActive?: boolean; 
  $isDisabled?: boolean;
  $variant?: 'number' | 'arrow';
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${props => props.$variant === 'arrow' ? '2.5rem' : '2.75rem'};
  height: 2.75rem;
  padding: 0 ${props => props.$variant === 'arrow' ? '0.5rem' : '0.75rem'};
  border: 1px solid ${props => props.$isActive ? 'var(--gradient-end, #469F9D)' : 'var(--Gray-200, #E5E7EB)'};
  border-radius: 0.5rem;
  background-color: ${props => 
    props.$isActive 
      ? 'var(--gradient-end, #469F9D)' 
      : props.$isDisabled 
        ? 'var(--Gray-50, #F9FAFB)' 
        : 'white'
  };
  color: ${props => 
    props.$isActive 
      ? 'white' 
      : props.$isDisabled 
        ? 'var(--Gray-400, #9CA3AF)' 
        : 'var(--Gray-700, #374151)'
  };
  font-size: 0.875rem;
  font-weight: ${props => props.$isActive ? '600' : '500'};
  line-height: 1.25rem;
  cursor: ${props => props.$isDisabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  
  &:hover:not(:disabled) {
    background-color: ${props => 
      props.$isActive 
        ? 'var(--gradient-end, #469F9D)' 
        : 'var(--Gray-50, #F9FAFB)'
    };
    border-color: ${props => 
      props.$isActive 
        ? 'var(--gradient-end, #469F9D)' 
        : 'var(--Gray-300, #D1D5DB)'
    };
    transform: translateY(-1px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }
  
  &:focus-visible {
    outline: 2px solid var(--gradient-end, #469F9D);
    outline-offset: 2px;
  }
  
  @media (min-width: 640px) {
    min-width: ${props => props.$variant === 'arrow' ? '2.75rem' : '3rem'};
    height: 3rem;
    font-size: 1rem;
  }
`;

const Ellipsis = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2.75rem;
  height: 2.75rem;
  color: var(--Gray-500, #6B7280);
  font-size: 0.875rem;
  font-weight: 500;
  
  @media (min-width: 640px) {
    min-width: 3rem;
    height: 3rem;
    font-size: 1rem;
  }
`;


// Arrow icons as SVG components
const ChevronLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Pagination = memo(function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange,
  className 
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Generate page numbers to display
  const pageNumbers = useMemo(() => {
    const pages: (number | 'ellipsis')[] = [];
    const maxVisiblePages = 7; // Show up to 7 page numbers
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      if (currentPage <= 4) {
        // Near the beginning
        for (let i = 2; i <= Math.min(5, totalPages - 1); i++) {
          pages.push(i);
        }
        if (totalPages > 6) {
          pages.push('ellipsis');
        }
        if (totalPages > 5) {
          pages.push(totalPages);
        }
      } else if (currentPage >= totalPages - 3) {
        // Near the end
        if (totalPages > 6) {
          pages.push('ellipsis');
        }
        for (let i = Math.max(2, totalPages - 4); i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // In the middle
        pages.push('ellipsis');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }
    
    return pages;
  }, [currentPage, totalPages]);
  
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    
    if (onPageChange) {
      onPageChange(page);
    } else {
      // Update URL with new page parameter
      const params = new URLSearchParams(searchParams.toString());
      if (page === 1) {
        params.delete('page');
      } else {
        params.set('page', page.toString());
      }
      
      const newUrl = params.toString() 
        ? `${window.location.pathname}?${params.toString()}`
        : window.location.pathname;
      
      router.push(newUrl);
    }
  };
  
  if (totalPages <= 1) {
    return null;
  }
  
  return (
    <PaginationContainer className={className} role="navigation" aria-label="Paginácia">
      <PaginationList>
        {/* Previous button */}
        <PaginationItem>
          <PaginationButton
            $variant="arrow"
            $isDisabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Predchádzajúca stránka"
          >
            <ChevronLeftIcon />
          </PaginationButton>
        </PaginationItem>
        
        {/* Page numbers */}
        {pageNumbers.map((page, index) => (
          <PaginationItem key={index}>
            {page === 'ellipsis' ? (
              <Ellipsis aria-hidden="true">…</Ellipsis>
            ) : (
              <PaginationButton
                $isActive={page === currentPage}
                onClick={() => handlePageChange(page)}
                aria-label={`Stránka ${page}`}
                aria-current={page === currentPage ? 'page' : undefined}
              >
                {page}
              </PaginationButton>
            )}
          </PaginationItem>
        ))}
        
        {/* Next button */}
        <PaginationItem>
          <PaginationButton
            $variant="arrow"
            $isDisabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Ďalšia stránka"
          >
            <ChevronRightIcon />
          </PaginationButton>
        </PaginationItem>
      </PaginationList>
    </PaginationContainer>
  );
});

Pagination.displayName = 'Pagination';

export default Pagination;
