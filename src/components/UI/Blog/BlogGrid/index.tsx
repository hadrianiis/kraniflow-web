'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Sparkles } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { 
  Container, 
  BlogGridContainer,
  BlogCard,
  CardImage,
  CardContent,
  CardMeta,
  CardTitle,
  CardExcerpt,
  CardTags,
  CardTag,
  ReadMoreLink,
  PaginationContainer,
  PaginationButton
} from './styles';

interface BlogGridProps {
  initialPosts: BlogPost[];
  showFilters?: boolean;
}

export default function BlogGrid({ initialPosts, showFilters = true }: BlogGridProps) {
  return (
    <Container>
      {/* Blog Posts Grid */}
      <BlogGridContainer>
        {initialPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          >
            <BlogCard>
              <CardImage>
                <img
                  src={post.featuredImage}
                  alt={post.title}
                />
                {post.isPublished && (
                  <div className="featured-badge">
                    <Sparkles />
                    Odporúčané
                  </div>
                )}
                <div className="category-badge">
                  {post.category}
                </div>
              </CardImage>
              
              <CardContent>
                <CardMeta>
                  <div>
                    <User />
                    <span>{post.author.name}</span>
                  </div>
                  <div>
                    <Calendar />
                    {new Date(post.publishedAt).toLocaleDateString('sk-SK')}
                  </div>
                  <div>
                    <Clock />
                    {post.readTime} min
                  </div>
                </CardMeta>
                
                <CardTitle>{post.title}</CardTitle>
                
                <CardExcerpt>{post.excerpt}</CardExcerpt>
                
                <CardTags>
                  {post.tags.slice(0, 3).map((tag) => (
                    <CardTag key={tag}>#{tag}</CardTag>
                  ))}
                </CardTags>
                
                <ReadMoreLink href={`/blog/${post.slug}`}>
                  Čítať viac
                  <ArrowRight />
                </ReadMoreLink>
              </CardContent>
            </BlogCard>
          </motion.article>
        ))}
      </BlogGridContainer>

      {/* Pagination */}
      {initialPosts.length > 0 && (
        <PaginationContainer>
          <PaginationButton>Predchádzajúca</PaginationButton>
          <PaginationButton $isActive>1</PaginationButton>
          <PaginationButton>2</PaginationButton>
          <PaginationButton>3</PaginationButton>
          <PaginationButton>Ďalšia</PaginationButton>
        </PaginationContainer>
      )}
    </Container>
  );
}