'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { BlogPost } from '../BlogGrid/types';
import {
  Container,
  Header,
  Title,
  Subtitle,
  PostsGrid,
  PostCard,
  ImageContainer,
  PostImage,
  CategoryBadge,
  PostContent,
  PostMeta,
  MetaItem,
  PostTitle,
  PostExcerpt,
  ReadMoreLink,
  Footer,
  ViewAllButton
} from './styles';

interface RelatedPostsProps {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Header>
          <Title>
            Súvisiace články
          </Title>
          <Subtitle>
            Objavte ďalšie užitočné články, ktoré vám pomôžu na vašej finančnej ceste
          </Subtitle>
        </Header>
      </motion.div>

      <PostsGrid>
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <PostCard>
              <ImageContainer>
                <PostImage
                  src={post.image}
                  alt={post.title}
                />
                <CategoryBadge>
                  {post.category}
                </CategoryBadge>
              </ImageContainer>
              
              <PostContent>
                <PostMeta>
                  <MetaItem>
                    <Calendar />
                    {new Date(post.publishedAt).toLocaleDateString('sk-SK')}
                  </MetaItem>
                  <MetaItem>
                    <Clock />
                    {post.readTime}
                  </MetaItem>
                </PostMeta>
                
                <PostTitle>
                  {post.title}
                </PostTitle>
                
                <PostExcerpt>
                  {post.excerpt}
                </PostExcerpt>
                
                <ReadMoreLink href={`/blog/${post.slug}`}>
                  Čítať viac
                  <ArrowRight />
                </ReadMoreLink>
              </PostContent>
            </PostCard>
          </motion.article>
        ))}
      </PostsGrid>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Footer>
          <ViewAllButton href="/blog">
            Zobraziť všetky články
            <ArrowRight />
          </ViewAllButton>
        </Footer>
      </motion.div>
    </Container>
  );
} 