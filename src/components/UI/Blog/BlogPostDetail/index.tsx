'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, User, MessageCircle } from 'lucide-react';
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

interface BlogPostDetailProps {
  post: BlogPost;
}

export default function BlogPostDetail({ post }: BlogPostDetailProps) {
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
            {post.title}
          </Title>

          {/* Excerpt */}
          <Excerpt>
            {post.excerpt}
          </Excerpt>

          {/* Meta Information */}
          <MetaContainer>
            <AuthorInfo>
              <AuthorAvatar
                src={post.author.avatar}
                alt={post.author.name}
              />
              <AuthorDetails>
                <AuthorName>{post.author.name}</AuthorName>
                <AuthorLabel>Autor článku</AuthorLabel>
              </AuthorDetails>
            </AuthorInfo>

            <MetaInfo>
              <MetaItem>
                <Calendar />
                {new Date(post.publishedAt).toLocaleDateString('sk-SK', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </MetaItem>
              <MetaItem>
                <Clock />
                {post.readTime} min
              </MetaItem>
            </MetaInfo>
          </MetaContainer>


        </HeroSection>
      </motion.div>

      {/* Featured Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <FeaturedImageContainer>
          <FeaturedImage
            src={post.featuredImage}
            alt={post.title}
          />
        </FeaturedImageContainer>
      </motion.div>

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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <h2>
                Kľúčové body článku
              </h2>
              
              <ul>
                <li>
                  <div className="bullet"></div>
                  <span>Dôležitosť finančného plánovania pre dlhodobý úspech</span>
                </li>
                <li>
                  <div className="bullet"></div>
                  <span>Strategie pre rôzne životné etapy a finančné ciele</span>
                </li>
                <li>
                  <div className="bullet"></div>
                  <span>Praktické tipy pre implementáciu finančného plánu</span>
                </li>
              </ul>
              
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
              <Blockquote>
                "Finančná sloboda nie je o tom, koľko peňazí máte, ale o tom, ako ich používate a investujete pre svoju budúcnosť."
              </Blockquote>
              
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </Content>

            {/* Tags */}
            <TagsSection>
              <TagsTitle>Tagy</TagsTitle>
              <TagsContainer>
                {post.tags.map((tag) => (
                  <TagLink
                    key={tag}
                    href={`/blog/tag/${tag}`}
                  >
                    #{tag}
                  </TagLink>
                ))}
              </TagsContainer>
            </TagsSection>


          </ContentWrapper>
        </ContentContainer>
      </motion.div>
    </Container>
  );
} 