'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import {
  Container,
  HeroSection,
  Title,
  Excerpt,
  MetaContainer,
  AuthorInfo,
  AuthorAvatar,
  AuthorDetails,
  AuthorName,
  AuthorLabel,
  MetaInfo,
  MetaItem,
  FeaturedImageContainer,
  FeaturedImage,
  ContentContainer,
  ContentWrapper,
  Content,
  Blockquote,
  TagsSection,
  TagsTitle,
  TagsContainer,
  TagLink
} from './styles';

interface PostPreviewProps {
  postData: {
    title: string;
    excerpt: string;
    content: string;
    category: string;
    tags: string;
    image: string;
    author: string;
  };
}

export function PostPreview({ postData }: PostPreviewProps) {
  // Parse tags from string
  const tags = postData.tags ? postData.tags.split(',').map(tag => tag.trim()).filter(tag => tag) : [];
  
  // Create mock blog post for preview
  const mockPost: BlogPost = {
    id: 'preview',
    title: postData.title || 'Názov článku',
    excerpt: postData.excerpt || 'Krátky popis článku...',
    content: postData.content || 'Obsah článku sa zobrazí tu...',
    featuredImage: postData.image || '/images/kranio-about1.avif',
    publishedAt: new Date().toISOString().split('T')[0],
    updatedAt: new Date().toISOString().split('T')[0],
    readTime: Math.ceil((postData.content?.length || 0) / 500) || 1,
    author: {
      id: '1',
      name: postData.author || 'Mgr. Kika Nováková',
      avatar: '/images/kika-photo-kranio.avif',
      bio: 'Certifikovaná kraniosakrálna terapeutka',
      role: 'Terapeutka'
    },
    tags: tags,
    category: postData.category || 'Kategória',
    isPublished: true,
    views: 0,
    likes: 0,
    slug: 'preview'
  };

  return (
    <Container>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection>
          {/* Title */}
          <Title>
            {mockPost.title}
          </Title>

          {/* Excerpt */}
          <Excerpt>
            {mockPost.excerpt}
          </Excerpt>

          {/* Meta Information */}
          <MetaContainer>
            <AuthorInfo>
              <AuthorAvatar
                src={mockPost.author.avatar}
                alt={mockPost.author.name}
              />
              <AuthorDetails>
                <AuthorName>{mockPost.author.name}</AuthorName>
                <AuthorLabel>Autor článku</AuthorLabel>
              </AuthorDetails>
            </AuthorInfo>

            <MetaInfo>
              <MetaItem>
                <Calendar />
                {new Date(mockPost.publishedAt).toLocaleDateString('sk-SK', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </MetaItem>
              <MetaItem>
                <Clock />
                {mockPost.readTime} min
              </MetaItem>
            </MetaInfo>
          </MetaContainer>
        </HeroSection>
      </motion.div>

      {/* Featured Image */}
      {mockPost.featuredImage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FeaturedImageContainer>
            <FeaturedImage
              src={mockPost.featuredImage}
              alt={mockPost.title}
            />
          </FeaturedImageContainer>
        </motion.div>
      )}

      {/* Article Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <ContentContainer>
          <ContentWrapper>
            {/* Content */}
            <Content>
              {mockPost.content ? (
                <div dangerouslySetInnerHTML={{ __html: mockPost.content.replace(/\n/g, '<br>') }} />
              ) : (
                <p>Obsah článku sa zobrazí tu...</p>
              )}
            </Content>

            {/* Tags */}
            {tags.length > 0 && (
              <TagsSection>
                <TagsTitle>Tagy</TagsTitle>
                <TagsContainer>
                  {tags.map((tag) => (
                    <TagLink
                      key={tag}
                      href="#"
                    >
                      #{tag}
                    </TagLink>
                  ))}
                </TagsContainer>
              </TagsSection>
            )}
          </ContentWrapper>
        </ContentContainer>
      </motion.div>
    </Container>
  );
}
