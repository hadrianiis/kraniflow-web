'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Sparkles, Search } from 'lucide-react';
import { BlogPost, Category } from './types';
import { 
  Container, 
  FiltersSection, 
  FiltersContainer, 
  SearchContainer, 
  SearchInput,
  CategoryButtons, 
  CategoryButton, 
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
  PaginationButton,
  EmptyState
} from './styles';

const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Ako začať investovať s malým kapitálom',
    excerpt: 'Praktický návod pre začiatočníkov, ktorí chcú začať investovať aj s obmedzenými finančnými prostriedkami.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Mgr. Peter Novák',
    authorAvatar: '/images/robert_fox.png',
    publishedAt: '2024-01-15',
    readTime: '8 min',
    category: 'Investovanie',
    tags: ['začiatočníci', 'investovanie', 'finančné plánovanie'],
    featured: true,
    image: '/images/smart_investing.png',
    slug: 'ako-zacat-investovat-s-malym-kapitalom'
  },
  {
    id: 2,
    title: 'Finančná nezávislosť: Mýty a realita',
    excerpt: 'Rozbíjame najčastejšie mýty o finančnej nezávislosti a poskytujeme reálne kroky k jej dosiahnutiu.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Ing. Jana Kováčová',
    authorAvatar: '/images/esther_howard.png',
    publishedAt: '2024-01-12',
    readTime: '12 min',
    category: 'Finančná sloboda',
    tags: ['finančná nezávislosť', 'plánovanie', 'ciele'],
    featured: false,
    image: '/images/financial_freedom_banner.png',
    slug: 'financna-nezavislost-myty-a-realita'
  },
  {
    id: 3,
    title: 'Dôchodkové sporenie v 21. storočí',
    excerpt: 'Moderné prístupy k dôchodkovému sporeniu a ako si zabezpečiť pohodlný život v starobe.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'PhDr. Martin Svoboda',
    authorAvatar: '/images/cameron_williamson.png',
    publishedAt: '2024-01-10',
    readTime: '10 min',
    category: 'Dôchodkové sporenie',
    tags: ['dôchodok', 'sporenie', 'budúcnosť'],
    featured: false,
    image: '/images/future_banner.png',
    slug: 'dochodkove-sporenie-v-21-storoci'
  },
  {
    id: 4,
    title: 'Kryptomeny: Riziká a príležitosti',
    excerpt: 'Analýza kryptomien z pohľadu dlhodobého investora a ako sa vyhnúť najčastejším chybám.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Mgr. Peter Novák',
    authorAvatar: '/images/robert_fox.png',
    publishedAt: '2024-01-08',
    readTime: '15 min',
    category: 'Kryptomeny',
    tags: ['kryptomeny', 'blockchain', 'investovanie'],
    featured: false,
    image: '/images/wealth_management.png',
    slug: 'kryptomeny-rizika-a-prilezitosti'
  },
  {
    id: 5,
    title: 'Daňové optimalizácie pre živnostníkov',
    excerpt: 'Legálne spôsoby ako znížiť daňové zaťaženie a zvýšiť ziskovosť vašej živnosti.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Ing. Jana Kováčová',
    authorAvatar: '/images/esther_howard.png',
    publishedAt: '2024-01-05',
    readTime: '11 min',
    category: 'Daňové poradenstvo',
    tags: ['dane', 'živnosť', 'optimalizácia'],
    featured: false,
    image: '/images/financial_planning.png',
    slug: 'danove-optimalizacie-pre-zivnostnikov'
  },
  {
    id: 6,
    title: 'Rodinné rozpočtovanie: Základy úspechu',
    excerpt: 'Jednoduché a účinné metódy rodinného rozpočtovania, ktoré fungujú v praxi.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'PhDr. Martin Svoboda',
    authorAvatar: '/images/cameron_williamson.png',
    publishedAt: '2024-01-03',
    readTime: '9 min',
    category: 'Rozpočtovanie',
    tags: ['rozpočet', 'rodina', 'úspory'],
    featured: false,
    image: '/images/seamless_payments.png',
    slug: 'rodinne-rozpoctovanie-zaklady-uspechu'
  }
];

const categories: Category[] = [
  { id: 1, name: 'Všetky', slug: 'vsetky', count: mockPosts.length },
  { id: 2, name: 'Investovanie', slug: 'investovanie', count: 2 },
  { id: 3, name: 'Finančná sloboda', slug: 'financna-sloboda', count: 1 },
  { id: 4, name: 'Dôchodkové sporenie', slug: 'dochodkove-sporenie', count: 1 },
  { id: 5, name: 'Kryptomeny', slug: 'kryptomeny', count: 1 },
  { id: 6, name: 'Daňové poradenstvo', slug: 'danove-poradenstvo', count: 1 },
  { id: 7, name: 'Rozpočtovanie', slug: 'rozpoctovanie', count: 1 }
];

interface BlogGridProps {
  initialPosts?: BlogPost[];
  showFilters?: boolean;
}

export default function BlogGrid({ initialPosts, showFilters = true }: BlogGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('vsetky');
  const [searchQuery, setSearchQuery] = useState('');

  const postsToUse = initialPosts || mockPosts;

  const filteredPosts = postsToUse.filter(post => {
    const matchesCategory = selectedCategory === 'vsetky' || post.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <Container>
      {/* Filters Section */}
      {showFilters && (
        <FiltersSection>
          <FiltersContainer>
            {/* Search Bar - moved to top */}
            <SearchContainer>
              <Search />
              <SearchInput
                type="text"
                placeholder="Hľadať články podľa názvu, obsahu alebo tagov..."
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              />
            </SearchContainer>
            
            {/* Category Buttons */}
            <CategoryButtons>
              {categories.map((category) => (
                <CategoryButton
                  key={category.id}
                  $isActive={selectedCategory === category.slug}
                  onClick={() => setSelectedCategory(category.slug)}
                >
                  {category.name} ({category.count})
                </CategoryButton>
              ))}
            </CategoryButtons>
          </FiltersContainer>
        </FiltersSection>
      )}

      {/* Blog Posts Grid */}
      <BlogGridContainer>
        {filteredPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          >
            <BlogCard>
              <CardImage>
                <img
                  src={post.image}
                  alt={post.title}
                />
                {post.featured && (
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
                    <span>{post.author}</span>
                  </div>
                  <div>
                    <Calendar />
                    {new Date(post.publishedAt).toLocaleDateString('sk-SK')}
                  </div>
                  <div>
                    <Clock />
                    {post.readTime}
                  </div>
                </CardMeta>
                
                <CardTitle>{post.title}</CardTitle>
                
                <CardExcerpt>{post.excerpt}</CardExcerpt>
                
                <CardTags>
                  {post.tags.slice(0, 3).map((tag: string) => (
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
      {filteredPosts.length > 0 && (
        <PaginationContainer>
          <PaginationButton>Predchádzajúca</PaginationButton>
          <PaginationButton $isActive>1</PaginationButton>
          <PaginationButton>2</PaginationButton>
          <PaginationButton>3</PaginationButton>
          <PaginationButton>Ďalšia</PaginationButton>
        </PaginationContainer>
      )}

      {filteredPosts.length === 0 && (
        <EmptyState>
          <div className="title">Nenašli sa žiadne články</div>
          <div className="subtitle">Skúste zmeniť filtre alebo vyhľadávanie</div>
        </EmptyState>
      )}
    </Container>
  );
} 