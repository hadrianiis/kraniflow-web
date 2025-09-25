'use client';

import { Calendar, Clock } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { formatDate, getImageSizes, DEFAULT_BLUR_DATA_URL } from '@/lib/blog-utils';

// Simple HTML content cleaning function
const cleanHtmlContent = (html: string): string => {
  return html
    // Remove WordPress-specific artifacts and closing brackets
    .replace(/\]\]>/g, '') // Remove ]]>
    .replace(/}}>/g, '') // Remove }}>
    .replace(/}}/g, '') // Remove }}
    .replace(/{{/g, '') // Remove {{
    .replace(/>>/g, '') // Remove >>
    .replace(/<<</g, '') // Remove <<<
    .replace(/&gt;&gt;/g, '') // Remove HTML encoded >>
    .replace(/&lt;&lt;/g, '') // Remove HTML encoded <<
    .replace(/&gt;/g, '') // Remove HTML encoded >
    .replace(/&lt;/g, '') // Remove HTML encoded <
    // Clean up formatting
    .replace(/\s+/g, ' ')
    .replace(/\n\s*\n/g, '\n')
    .trim();
};
import { memo, useMemo, useCallback } from 'react';
import {
  Container,
  Header,
  Title,
  AuthorSection,
  AuthorInfo,
  AuthorAvatar,
  AuthorDetails,
  AuthorName,
  AuthorRole,
  MetaInfo,
  MetaItem,
  FeaturedImageContainer,
  FeaturedImageWrapper,
  FeaturedImage,
  ContentContainer,
  Content
} from './styles';

interface BlogPostDetailProps {
  post: BlogPost;
}

// Memoized icon components to prevent recreation
const CalendarIcon = memo(() => <Calendar size={16} />);
CalendarIcon.displayName = 'CalendarIcon';

const ClockIcon = memo(() => <Clock size={16} />);
ClockIcon.displayName = 'ClockIcon';

// Separate components for better performance and SSR optimization
const BlogPostHeader = memo(function BlogPostHeader({ post }: { post: BlogPost }) {
  const formattedDate = useMemo(() => {
    return formatDate(post.publishedAt);
  }, [post.publishedAt]);

  return (
    <Header>
      <Title>{post.title}</Title>
      
      {/* Author Section */}
      <AuthorSection>
        <AuthorInfo>
          <AuthorAvatar
            src={post.author.avatar}
            alt={post.author.name}
            width={40}
            height={40}
          />
          <AuthorDetails>
            <AuthorName>{post.author.name}</AuthorName>
            <AuthorRole>{post.author.role || 'Autor'}</AuthorRole>
          </AuthorDetails>
        </AuthorInfo>

        <MetaInfo>
          <MetaItem>
            <CalendarIcon />
            {formattedDate}
          </MetaItem>
          <MetaItem>
            <ClockIcon />
            {post.readTime} min čítania
          </MetaItem>
        </MetaInfo>
      </AuthorSection>
    </Header>
  );
});

const BlogPostImage = memo(function BlogPostImage({ post }: { post: BlogPost }) {
  const imageSizes = useMemo(() => getImageSizes('FEATURED_IMAGE'), []);
  
  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    if (!img.dataset.errorLogged) {
      console.error('Featured image failed to load:', img.src);
      img.dataset.errorLogged = 'true';
    }
    img.style.display = 'none';
  }, []);

  return (
    <FeaturedImageContainer>
      <FeaturedImageWrapper>
        <FeaturedImage
          src={post.featuredImage}
          alt={post.title}
          width={800}
          height={400}
          priority
          fetchPriority="high"
          sizes={imageSizes}
          placeholder="blur"
          blurDataURL={DEFAULT_BLUR_DATA_URL}
          onError={handleImageError}
        />
      </FeaturedImageWrapper>
    </FeaturedImageContainer>
  );
});

const BlogPostContent = memo(function BlogPostContent({ post }: { post: BlogPost }) {
  const cleanedContent = useMemo(() => {
    return cleanHtmlContent(post.content);
  }, [post.content]);

  return (
    <ContentContainer>
      <Content dangerouslySetInnerHTML={{ __html: cleanedContent }} />
    </ContentContainer>
  );
});

const BlogPostDetail = memo(function BlogPostDetail({ post }: BlogPostDetailProps) {
  return (
    <Container>
      {/* Header Section */}
      <BlogPostHeader post={post} />

      {/* Featured Image */}
      <BlogPostImage post={post} />

      {/* Article Content */}
      <BlogPostContent post={post} />
    </Container>
  );
});

BlogPostDetail.displayName = 'BlogPostDetail';

export default BlogPostDetail; 