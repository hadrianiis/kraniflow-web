'use client';

import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { BlogPost } from '@/types/blog';
import { memo, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { formatDate, calculateReadTime, getImageSizes, DEFAULT_BLUR_DATA_URL, handleImageError, handleImageLoad } from '@/lib/blog-utils';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
  variant?: 'default' | 'compact' | 'no-hover';
  className?: string;
}

// Memoized icon components to prevent recreation
const UserIcon = memo(() => <User size={16} />);
UserIcon.displayName = 'UserIcon';

const CalendarIcon = memo(() => <Calendar size={16} />);
CalendarIcon.displayName = 'CalendarIcon';

const ClockIcon = memo(() => <Clock size={16} />);
ClockIcon.displayName = 'ClockIcon';

const ArrowRightIcon = memo(() => <ArrowRight size={16} />);
ArrowRightIcon.displayName = 'ArrowRightIcon';

const BlogCard = memo(function BlogCard({ 
  post, 
  index = 0,
  variant = 'default',
  className
}: BlogCardProps) {
  // Memoize callbacks to prevent recreation
  const onImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    handleImageError(e);
  }, []);

  const onImageLoad = useCallback(() => {
    handleImageLoad(post?.featuredImage);
  }, [post?.featuredImage]);

  // Memoize expensive calculations
  const readTime = useMemo(() => calculateReadTime(post?.content || ''), [post?.content]);
  const formattedDate = useMemo(() => formatDate(post?.publishedAt || ''), [post?.publishedAt]);
  const imageSizes = useMemo(() => getImageSizes('BLOG_CARD'), []);
  
  // Memoize the blog URL to prevent recreation with robust validation
  const blogUrl = useMemo(() => {
    const slug = post?.slug;
    if (!slug || typeof slug !== 'string' || slug.trim() === '') {
      console.warn('BlogCard: post.slug is undefined, empty or invalid for post:', post?.id);
      return '/blog/unknown';
    }
    return `/blog/${slug.trim()}`;
  }, [post?.slug, post?.id]);

  // Handle click to navigate and scroll to top
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    // Check if we're on client side before using window
    if (typeof window !== 'undefined') {
      window.location.href = blogUrl;
    }
  }, [blogUrl]);

  // Early validation to prevent runtime errors
  if (!post || !post.id) {
    console.error('BlogCard: Invalid post data received');
    return null;
  }

  // Final validation before rendering
  if (!blogUrl || typeof blogUrl !== 'string') {
    console.error('BlogCard: blogUrl is invalid:', blogUrl);
    return null;
  }

  return (
    <a href={blogUrl} className={className} onClick={handleClick}>
      <CardContainer $variant={variant}>
        <ImageContainer $variant={variant}>
          {post.featuredImage ? (
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              priority={index === 0}
              fetchPriority={index === 0 ? "high" : "auto"}
              sizes={imageSizes}
              placeholder="blur"
              blurDataURL={DEFAULT_BLUR_DATA_URL}
              onError={onImageError}
              onLoad={onImageLoad}
            />
          ) : (
            <PlaceholderImage>
              Žiadny obrázok
            </PlaceholderImage>
          )}
        </ImageContainer>
        
        <ContentContainer $variant={variant}>
          <MetaContainer>
            <MetaItem>
              <UserIcon />
              <span>{post.author.name}</span>
            </MetaItem>
            <MetaItem>
              <CalendarIcon />
              <span>{formattedDate}</span>
            </MetaItem>
            <MetaItem>
              <ClockIcon />
              <span>{readTime} min</span>
            </MetaItem>
          </MetaContainer>
          
          <Title $variant={variant}>{post.title}</Title>
          <Excerpt $variant={variant}>{post.excerpt}</Excerpt>
          
          <ReadMoreLink $variant={variant}>
            Čítať viac
            <ArrowRightIcon />
          </ReadMoreLink>
        </ContentContainer>
      </CardContainer>
    </a>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function for better memoization
  return (
    prevProps.post.id === nextProps.post.id &&
    prevProps.post.slug === nextProps.post.slug &&
    prevProps.post.title === nextProps.post.title &&
    prevProps.post.excerpt === nextProps.post.excerpt &&
    prevProps.post.featuredImage === nextProps.post.featuredImage &&
    prevProps.post.publishedAt === nextProps.post.publishedAt &&
    prevProps.post.author.name === nextProps.post.author.name &&
    prevProps.post.content === nextProps.post.content &&
    prevProps.index === nextProps.index &&
    prevProps.variant === nextProps.variant
  );
});

BlogCard.displayName = 'BlogCard';

export default BlogCard;

// Styled components - optimized with better CSS containment and performance
const CardContainer = styled.div<{ $variant: 'default' | 'compact' | 'no-hover' }>`
  background: white;
  border-radius: 0.75rem;
  overflow: hidden;
  cursor: pointer;
  min-height: ${props => props.$variant === 'compact' ? '320px' : '360px'};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  text-decoration: none;
  color: inherit;

  /* Mobile - väčšie karty pre lepšie zobrazenie obrázkov */
  @media (max-width: 768px) {
    min-height: ${props => props.$variant === 'compact' ? '380px' : '420px'};
  }

  /* Veľmi malé mobily */
  @media (max-width: 480px) {
    min-height: ${props => props.$variant === 'compact' ? '360px' : '400px'};
  }

  @media (min-width: 769px) {
    min-height: ${props => props.$variant === 'compact' ? '340px' : '380px'};
  }

  ${props => props.$variant === 'no-hover' ? `
    /* Completely clean styles for no-hover variant - absolutely minimal */
  ` : `
    /* Hover effects for default and compact variants */
    contain: layout style paint;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s ease;
    will-change: transform;

    &:hover {
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
      text-decoration: none;
      color: inherit;
    }

    &:hover img {
      transform: scale(1.05);
    }

    &:active {
      transform: translateY(-2px);
      transition-duration: 0.1s;
    }
  `}
`;

const ImageContainer = styled.div<{ $variant: 'default' | 'compact' | 'no-hover' }>`
  position: relative;
  height: ${props => props.$variant === 'compact' ? '8rem' : '10rem'};
  min-height: ${props => props.$variant === 'compact' ? '8rem' : '10rem'};
  max-height: ${props => props.$variant === 'compact' ? '8rem' : '10rem'};
  overflow: hidden;
  flex-shrink: 0;
  aspect-ratio: 16/9;

  /* Mobile - obrázky na celú šírku s horizontálnym aspect ratio */
  @media (max-width: 768px) {
    height: 12rem;
    min-height: 12rem;
    max-height: 12rem;
    aspect-ratio: 16/9;
    width: 100%;
  }

  /* Veľmi malé mobily */
  @media (max-width: 480px) {
    height: 10rem;
    min-height: 10rem;
    max-height: 10rem;
  }

  @media (min-width: 769px) {
    height: ${props => props.$variant === 'compact' ? '9rem' : '11rem'};
    min-height: ${props => props.$variant === 'compact' ? '9rem' : '11rem'};
    max-height: ${props => props.$variant === 'compact' ? '9rem' : '11rem'};
  }

  ${props => props.$variant !== 'no-hover' && `
    contain: layout style paint;
  `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${props => props.$variant !== 'no-hover' && `
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      will-change: transform;
    `}
  }
`;

const ContentContainer = styled.div<{ $variant: 'default' | 'compact' | 'no-hover' }>`
  padding: ${props => props.$variant === 'compact' ? '1rem' : '1.25rem'};
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden; /* Skryť prebytočný obsah */
  min-height: 0; /* Allow flex item to shrink */

  /* Mobile - optimálne padding pre väčšie obrázky */
  @media (max-width: 768px) {
    padding: ${props => props.$variant === 'compact' ? '1rem' : '1.25rem'};
  }

  /* Veľmi malé mobily */
  @media (max-width: 480px) {
    padding: ${props => props.$variant === 'compact' ? '0.875rem' : '1rem'};
  }

  @media (min-width: 769px) {
    padding: ${props => props.$variant === 'compact' ? '1.25rem' : '1.5rem'};
  }

  ${props => props.$variant !== 'no-hover' && `
    contain: layout style;
  `}
`;

const MetaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  color: #666;
  contain: layout;

  /* Responzívne breakpointy pre meta informácie */
  @media (max-width: 480px) {
    gap: 0.4rem;
    margin-bottom: 0.4rem;
    font-size: 0.7rem;
  }

  @media (min-width: 769px) {
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    font-size: 0.8rem;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  contain: layout;

  /* Responzívne breakpointy pre meta položky */
  @media (max-width: 480px) {
    gap: 0.3rem;
  }

  @media (min-width: 769px) {
    gap: 0.5rem;
  }
`;

const Title = styled.h3<{ $variant: 'default' | 'compact' | 'no-hover' }>`
  font-size: ${props => props.$variant === 'compact' ? '0.9rem' : '1rem'};
  font-weight: 600;
  color: #333;
  margin-bottom: 0.25rem;
  line-height: 1.3;
  word-break: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  contain: layout style;
  height: calc(1.3em * 2); /* Fixná výška pre 2 riadky na všetkých zariadeniach */
  max-height: calc(1.3em * 2);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  /* Responzívne breakpointy pre nadpisy */
  @media (max-width: 480px) {
    font-size: ${props => props.$variant === 'compact' ? '0.85rem' : '0.9rem'};
    margin-bottom: 0.2rem;
  }

  @media (min-width: 769px) {
    font-size: ${props => props.$variant === 'compact' ? '1rem' : '1.125rem'};
    margin-bottom: 0.3rem;
  }
`;

const Excerpt = styled.p<{ $variant: 'default' | 'compact' | 'no-hover' }>`
  color: #666;
  line-height: 1.4;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  max-height: calc(1.4em * 3); /* Maximálna výška pre 3 riadky */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  overflow-wrap: break-word;
  hyphens: none;
  contain: layout style;

  /* Responzívne breakpointy pre excerpty */
  @media (max-width: 480px) {
    font-size: 0.75rem;
    height: calc(1.4em * 2); /* Fixná výška na mobile pre 2 riadky */
    max-height: calc(1.4em * 2);
    margin-bottom: 0.4rem;
    -webkit-line-clamp: 2;
  }

  @media (min-width: 769px) {
    font-size: 0.875rem;
    max-height: calc(1.4em * 3);
    margin-bottom: 0.6rem;
    -webkit-line-clamp: 3;
  }
`;

const ReadMoreLink = styled.div<{ $variant: 'default' | 'compact' | 'no-hover' }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #469f9d;
  font-weight: 500;
  font-size: 0.8rem;
  text-decoration: none;
  margin-top: auto;
  padding-top: 0.25rem;
  flex-shrink: 0;
  align-self: flex-start; /* Align to start, don't stretch */

  /* Responzívne breakpointy pre ReadMoreLink */
  @media (max-width: 480px) {
    padding-top: 0.2rem;
    font-size: 0.75rem;
  }

  @media (min-width: 769px) {
    padding-top: 0.3rem;
    font-size: 0.85rem;
  }

  ${props => props.$variant !== 'no-hover' && `
    contain: layout;
    transition: color 0.2s ease, gap 0.2s ease;
    
    ${CardContainer}:hover & {
      color: #3a8a88;
      gap: 0.75rem;
    }
  `}

  svg {
    width: 1rem;
    height: 1rem;
    ${props => props.$variant !== 'no-hover' && `
      transition: transform 0.2s ease;
      will-change: transform;
      
      ${CardContainer}:hover & {
        transform: translateX(2px);
      }
    `}
  }
`;

const PlaceholderImage = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 0.875rem;
  font-weight: 500;
  contain: layout style paint;
`;
