'use client';

import { useState, useEffect } from 'react';

interface WordPressStatusProps {
  className?: string;
}

interface WordPressStatusData {
  isConfigured: boolean;
  baseUrl: string;
  environment: string;
}

export default function WordPressStatus({ className }: WordPressStatusProps) {
  const [isConfigured, setIsConfigured] = useState(false);

  useEffect(() => {
    const fetchWordPressStatus = async () => {
      try {
        const response = await fetch('/api/wordpress-status');
        const data: WordPressStatusData = await response.json();
        
        setIsConfigured(data.isConfigured);
      } catch (error) {
        console.error('Failed to fetch WordPress status:', error);
        setIsConfigured(false);
      }
    };

    fetchWordPressStatus();
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className={className} style={{
      position: 'fixed',
      bottom: '1rem',
      right: '1rem',
      background: isConfigured ? '#10b981' : '#f59e0b',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      zIndex: 1000,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{
          width: '0.5rem',
          height: '0.5rem',
          borderRadius: '50%',
          background: 'white',
        }} />
        <span>
          {isConfigured ? 'WordPress Connected' : 'Using Mock Data'}
        </span>
      </div>
      {!isConfigured && (
        <div style={{ fontSize: '0.75rem', marginTop: '0.25rem', opacity: 0.9 }}>
          Set WORDPRESS_BASE_URL to connect
        </div>
      )}
    </div>
  );
}
