'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  color: #666;
  background: #f8f9fa;
  border-radius: 0.75rem;
  border: 1px solid #e9ecef;
  margin: 1rem 0;
`;

const ErrorTitle = styled.h3`
  color: #dc3545;
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
`;

const ErrorMessage = styled.p`
  margin-bottom: 1rem;
  font-size: 0.875rem;
  line-height: 1.5;
`;

const RetryButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: #0056b3;
  }

  &:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }
`;

class BlogErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Blog Error Boundary caught an error:', error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  override render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <ErrorContainer>
          <ErrorTitle>Niečo sa pokazilo</ErrorTitle>
          <ErrorMessage>
            Ospravedlňujeme sa, ale pri načítavaní blogu sa vyskytla chyba.
          </ErrorMessage>
          <RetryButton onClick={this.handleRetry}>
            Skúsiť znovu
          </RetryButton>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default BlogErrorBoundary;
