import { BlogPost } from '@/components/UI/Blog/BlogGrid/types';

// Mock data - v reálnej aplikácii by toto bolo z databázy alebo CMS
const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Ako začať investovať s malým kapitálom',
    excerpt: 'Praktický návod pre začiatočníkov, ktorí chcú začať investovať aj s obmedzenými finančnými prostriedkami.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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

export async function getBlogPosts(): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return mockPosts;
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return mockPosts.find(post => post.slug === slug) || null;
}

export async function getRelatedPosts(
  currentSlug: string, 
  category: string, 
  tags: string[]
): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return mockPosts
    .filter(post => post.slug !== currentSlug)
    .filter(post => 
      post.category === category || 
      post.tags.some(tag => tags.includes(tag))
    )
    .slice(0, 3);
}

export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return mockPosts.filter(post => 
    post.category.toLowerCase().includes(category.toLowerCase())
  );
}

export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return mockPosts.filter(post => 
    post.tags.some(postTag => 
      postTag.toLowerCase().includes(tag.toLowerCase())
    )
  );
}

export async function getBlogPostsByAuthor(author: string): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return mockPosts.filter(post => 
    post.author.toLowerCase().includes(author.toLowerCase())
  );
}

export async function searchBlogPosts(query: string): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  const lowercaseQuery = query.toLowerCase();
  
  return mockPosts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
} 