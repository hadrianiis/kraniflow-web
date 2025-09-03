'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Search, Calendar, User } from 'lucide-react';
import { searchBlogPosts } from '@/lib/blog';
import { BlogPost } from '@/components/UI/Blog/BlogGrid/types';
import {
  Wrapper,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  SearchForm,
  SearchContainer,
  SearchInput,
  SearchIcon,
  SearchButton,
  ContentSection,
  LoadingContainer,
  Spinner,
  LoadingText,
  ResultsHeader,
  ResultsTitle,
  ResultsCount,
  ResultsGrid,
  PostCard,
  PostImageContainer,
  PostImage,
  FeaturedBadge,
  CategoryBadge,
  PostContent,
  PostMeta,
  MetaItem,
  PostTitle,
  PostExcerpt,
  PostTags,
  PostTag,
  ReadMoreLink,
  EmptyState,
  EmptyIcon,
  EmptyTitle,
  EmptyDescription,
  PopularSearches,
  PopularTitle,
  PopularTags,
  PopularTag,
  InitialState,
  InitialIcon,
  InitialTitle,
  InitialDescription
} from './styles';

function BlogSearchContent() {
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
    <Wrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HeroTitle>
              Vyhľadávanie v blogu
            </HeroTitle>
            <HeroSubtitle>
              Nájdite články, ktoré vás zaujímajú
            </HeroSubtitle>
          </motion.div>

          {/* Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SearchForm onSubmit={handleSearch}>
              <SearchContainer>
                <SearchIcon>
                  <Search size={24} />
                </SearchIcon>
                <SearchInput
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Hľadať články..."
                />
                <SearchButton type="submit">
                  Hľadať
                </SearchButton>
              </SearchContainer>
            </SearchForm>
          </motion.div>
        </HeroContent>
      </HeroSection>

      {/* Content Section */}
      <ContentSection>
        {isLoading && (
          <LoadingContainer>
            <Spinner />
            <LoadingText>Hľadám články...</LoadingText>
          </LoadingContainer>
        )}

        {!isLoading && hasSearched && (
          <div>
            <ResultsHeader>
              <ResultsTitle>
                Výsledky vyhľadávania
              </ResultsTitle>
              <ResultsCount>
                {searchResults.length} článkov nájdených
              </ResultsCount>
            </ResultsHeader>

            {searchResults.length > 0 ? (
              <ResultsGrid>
                {searchResults.map((post) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <PostCard>
                      <PostImageContainer>
                        <PostImage
                          src={post.featuredImage}
                          alt={post.title}
                        />
                        <CategoryBadge>
                          {post.category}
                        </CategoryBadge>
                      </PostImageContainer>
                      
                      <PostContent>
                        <PostMeta>
                          <MetaItem>
                            <Calendar size={16} />
                            {new Date(post.publishedAt).toLocaleDateString('sk-SK')}
                          </MetaItem>
                          <MetaItem>
                            <User size={16} />
                            {post.author.name}
                          </MetaItem>
                        </PostMeta>
                        
                        <PostTitle>
                          {post.title}
                        </PostTitle>
                        
                        <PostExcerpt>
                          {post.excerpt}
                        </PostExcerpt>
                        
                        <PostTags>
                          {post.tags.slice(0, 3).map((tag) => (
                            <PostTag key={tag}>
                              {tag}
                            </PostTag>
                          ))}
                        </PostTags>
                        
                        <ReadMoreLink href={`/blog/${post.slug}`}>
                          Čítať viac
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </ReadMoreLink>
                      </PostContent>
                    </PostCard>
                  </motion.div>
                ))}
              </ResultsGrid>
            ) : (
              <EmptyState>
                <EmptyIcon>
                  <Search size={32} />
                </EmptyIcon>
                <EmptyTitle>
                  Žiadne výsledky nenájdené
                </EmptyTitle>
                <EmptyDescription>
                  Skúste zmeniť vyhľadávací výraz alebo sa pozrieť na naše odporúčané články
                </EmptyDescription>
                
                <PopularSearches>
                  <PopularTitle>Populárne vyhľadávania:</PopularTitle>
                  <PopularTags>
                    {['investovanie', 'finančné plánovanie', 'dôchodok', 'úspory'].map((term) => (
                      <PopularTag
                        key={term}
                        onClick={() => {
                          setSearchQuery(term);
                          performSearch(term);
                        }}
                      >
                        {term}
                      </PopularTag>
                    ))}
                  </PopularTags>
                </PopularSearches>
              </EmptyState>
            )}
          </div>
        )}

        {!hasSearched && !isLoading && (
          <InitialState>
            <InitialIcon>
              <Search size={32} />
            </InitialIcon>
            <InitialTitle>
              Začnite vyhľadávanie
            </InitialTitle>
            <InitialDescription>
              Zadajte kľúčové slová a nájdite články, ktoré vás zaujímajú
            </InitialDescription>
          </InitialState>
        )}
      </ContentSection>
    </Wrapper>
  );
}

export default function BlogSearchPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'inline-block', width: '3rem', height: '3rem', border: '2px solid transparent', borderTop: '2px solid var(--accent)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
      </div>
    }>
      <BlogSearchContent />
    </Suspense>
  );
} 