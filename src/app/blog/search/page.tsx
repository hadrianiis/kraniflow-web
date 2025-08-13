'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar, Clock, User } from 'lucide-react';
import { searchBlogPosts } from '@/lib/blog';
import { BlogPost } from '@/components/UI/Blog/BlogGrid/types';
import {
  Container,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  SearchForm,
  SearchContainer,
  SearchIcon,
  SearchInput,
  SearchButton,
  ContentSection,
  SearchResults,
  ResultsHeader,
  ResultsTitle,
  ResultsCount,
  LoadingContainer,
  Spinner,
  LoadingText,
  ResultsGrid,
  PostCard,
  ImageContainer,
  PostImage,
  FeaturedBadge,
  CategoryBadge,
  PostContent,
  PostMeta,
  MetaItem,
  PostTitle,
  PostExcerpt,
  TagsContainer,
  TagBadge,
  ReadMoreLink,
  EmptyState,
  EmptyIcon,
  EmptyTitle,
  EmptySubtitle,
  EmptyTips,
  EmptyTipsTitle,
  EmptyTipsList,
  PopularSearches,
  PopularTitle,
  PopularGrid,
  PopularItem,
  PopularItemTitle,
  PopularItemSubtitle
} from './styles';

export default function BlogSearchPage() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const initialQuery = searchParams.get('q') || '';

  useEffect(() => {
    if (initialQuery) {
      setSearchQuery(initialQuery);
      performSearch(initialQuery);
    }
  }, [initialQuery]);

  const performSearch = async (query: string) => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    setHasSearched(true);
    
    try {
      const results = await searchBlogPosts(query);
      setSearchResults(results);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(searchQuery);
  };

  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTitle>
              Vyhľadávanie v blogu
            </HeroTitle>
            <HeroSubtitle>
              Nájdite presne to, čo hľadáte v našich expertných článkoch
            </HeroSubtitle>
          </motion.div>

          {/* Search Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSearch}
          >
            <SearchForm>
              <SearchContainer>
                <SearchIcon>
                  <Search />
                </SearchIcon>
                <SearchInput
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Hľadať články, tagy, autory..."
                />
                <SearchButton type="submit">
                  Hľadať
                </SearchButton>
              </SearchContainer>
            </SearchForm>
          </motion.form>
        </HeroContent>
      </HeroSection>

      {/* Search Results */}
      <ContentSection>
        {hasSearched && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SearchResults>
              <ResultsHeader>
                <ResultsTitle>
                  Výsledky vyhľadávania
                  {searchQuery && (
                    <span className="query">"{searchQuery}"</span>
                  )}
                </ResultsTitle>
                
                {searchResults.length > 0 && (
                  <ResultsCount>
                    <Filter />
                    {searchResults.length} výsledkov
                  </ResultsCount>
                )}
              </ResultsHeader>

              {isLoading ? (
                <LoadingContainer>
                  <Spinner />
                  <LoadingText>Hľadám články...</LoadingText>
                </LoadingContainer>
              ) : searchResults.length > 0 ? (
                <ResultsGrid>
                  {searchResults.map((post, index) => (
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
                          {post.featured && (
                            <FeaturedBadge>
                              Odporúčané
                            </FeaturedBadge>
                          )}
                          <CategoryBadge>
                            {post.category}
                          </CategoryBadge>
                        </ImageContainer>
                        
                        <PostContent>
                          <PostMeta>
                            <MetaItem>
                              <User />
                              {post.author}
                            </MetaItem>
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
                          
                          <TagsContainer>
                            {post.tags.slice(0, 3).map((tag: string) => (
                              <TagBadge key={tag}>
                                {tag}
                              </TagBadge>
                            ))}
                          </TagsContainer>
                          
                          <ReadMoreLink href={`/blog/${post.slug}`}>
                            Čítať viac
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </ReadMoreLink>
                        </PostContent>
                      </PostCard>
                    </motion.article>
                  ))}
                </ResultsGrid>
              ) : (
                <EmptyState>
                  <EmptyIcon>
                    <Search />
                  </EmptyIcon>
                  <EmptyTitle>
                    Nenašli sa žiadne výsledky
                  </EmptyTitle>
                  <EmptySubtitle>
                    Skúste použiť iné kľúčové slová alebo zmeniť vyhľadávanie
                  </EmptySubtitle>
                  <EmptyTips>
                    <EmptyTipsTitle>Tipy pre lepšie vyhľadávanie:</EmptyTipsTitle>
                    <EmptyTipsList>
                      <li>• Použite kratšie kľúčové slová</li>
                      <li>• Skúste synonymá alebo súvisiace pojmy</li>
                      <li>• Overte si pravopis</li>
                    </EmptyTipsList>
                  </EmptyTips>
                </EmptyState>
              )}
            </SearchResults>
          </motion.div>
        )}

        {/* Popular Searches */}
        {!hasSearched && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <PopularSearches>
              <PopularTitle>
                Populárne vyhľadávania
              </PopularTitle>
              <PopularGrid>
                {[
                  'investovanie',
                  'finančná sloboda',
                  'dôchodok',
                  'kryptomeny',
                  'dane',
                  'rozpočet'
                ].map((term) => (
                  <PopularItem
                    key={term}
                    onClick={() => {
                      setSearchQuery(term);
                      performSearch(term);
                    }}
                  >
                    <PopularItemTitle>
                      {term}
                    </PopularItemTitle>
                    <PopularItemSubtitle>
                      Kliknite pre vyhľadávanie
                    </PopularItemSubtitle>
                  </PopularItem>
                ))}
              </PopularGrid>
            </PopularSearches>
          </motion.div>
        )}
      </ContentSection>
    </Container>
  );
} 