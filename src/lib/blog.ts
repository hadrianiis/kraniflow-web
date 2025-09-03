import { BlogPost } from '@/types/blog';

// Mock data - v reálnej aplikácii by toto bolo z databázy alebo CMS
const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Úvod do kraniosakrálnej terapie',
    excerpt: 'Objavte, ako kraniosakrálna terapia môže pomôcť s chronickými bolesťami, stresom a celkovým zdravím.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featuredImage: '/images/kranio-about1.avif',
    publishedAt: '2024-01-15',
    updatedAt: '2024-01-15',
    readTime: 8,
    author: {
      id: '1',
      name: 'Mgr. Kika Nováková',
      avatar: '/images/kika-photo-kranio.avif',
      bio: 'Certifikovaná kraniosakrálna terapeutka s viac ako 10-ročnými skúsenosťami.',
      role: 'Terapeutka'
    },
    tags: ['kraniosakrálna terapia', 'úvod', 'zdravie'],
    category: 'Základy terapie',
    isPublished: true,
    views: 1250,
    likes: 45,
    slug: 'uvod-do-kraniosakralnej-terapie'
  },
  {
    id: '2',
    title: 'Ako kraniosakrálna terapia pomáha so stresom',
    excerpt: 'Pozrite si, ako môže kraniosakrálna terapia účinne redukovať stres a napätie v tele.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featuredImage: '/images/stress-cells.avif',
    publishedAt: '2024-01-12',
    updatedAt: '2024-01-12',
    readTime: 12,
    author: {
      id: '1',
      name: 'Mgr. Kika Nováková',
      avatar: '/images/kika-photo-kranio.avif',
      bio: 'Certifikovaná kraniosakrálna terapeutka s viac ako 10-ročnými skúsenosťami.',
      role: 'Terapeutka'
    },
    tags: ['stres', 'napätie', 'relaxácia'],
    category: 'Stres a napätie',
    isPublished: true,
    views: 980,
    likes: 32,
    slug: 'ako-kraniosakralna-terapia-pomaha-so-stresom'
  },
  {
    id: '3',
    title: 'Kraniosakrálna terapia pre deti',
    excerpt: 'Ako môže kraniosakrálna terapia pomôcť deťom s rôznymi zdravotnými problémami a vývojovými poruchami.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featuredImage: '/images/kika-spine.webp',
    publishedAt: '2024-01-10',
    updatedAt: '2024-01-10',
    readTime: 10,
    author: {
      id: '1',
      name: 'Mgr. Kika Nováková',
      avatar: '/images/kika-photo-kranio.avif',
      bio: 'Certifikovaná kraniosakrálna terapeutka s viac ako 10-ročnými skúsenosťami.',
      role: 'Terapeutka'
    },
    tags: ['deti', 'vývoj', 'zdravie'],
    category: 'Terapia pre deti',
    isPublished: true,
    views: 756,
    likes: 28,
    slug: 'kraniosakralna-terapia-pre-deti'
  },
  {
    id: '4',
    title: 'Biodynamický prístup v kraniosakrálnej terapii',
    excerpt: 'Pozrite si, ako biodynamický prístup môže priniesť hlbšie liečivé účinky v kraniosakrálnej terapii.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featuredImage: '/images/skeleton.avif',
    publishedAt: '2024-01-08',
    updatedAt: '2024-01-08',
    readTime: 15,
    author: {
      id: '1',
      name: 'Mgr. Kika Nováková',
      avatar: '/images/kika-photo-kranio.avif',
      bio: 'Certifikovaná kraniosakrálna terapeutka s viac ako 10-ročnými skúsenosťami.',
      role: 'Terapeutka'
    },
    tags: ['biodynamika', 'liečenie', 'terapia'],
    category: 'Biodynamický prístup',
    isPublished: true,
    views: 634,
    likes: 19,
    slug: 'biodynamicky-pristup-v-kraniosakralnej-terapii'
  },
  {
    id: '5',
    title: 'Kraniosakrálna terapia a migrény',
    excerpt: 'Ako môže kraniosakrálna terapia pomôcť pri chronických bolestiach hlavy a migrénach.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featuredImage: '/images/featured_img.avif',
    publishedAt: '2024-01-05',
    updatedAt: '2024-01-05',
    readTime: 11,
    author: {
      id: '1',
      name: 'Mgr. Kika Nováková',
      avatar: '/images/kika-photo-kranio.avif',
      bio: 'Certifikovaná kraniosakrálna terapeutka s viac ako 10-ročnými skúsenosťami.',
      role: 'Terapeutka'
    },
    tags: ['migrény', 'bolesť hlavy', 'liečenie'],
    category: 'Bolesť hlavy',
    isPublished: true,
    views: 892,
    likes: 41,
    slug: 'kraniosakralna-terapia-a-migreny'
  },
  {
    id: '6',
    title: 'Príprava na kraniosakrálnu terapiu',
    excerpt: 'Praktické tipy, ako sa pripraviť na prvú kraniosakrálnu terapiu a čo očakávať.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featuredImage: '/images/featured_img1.avif',
    publishedAt: '2024-01-03',
    updatedAt: '2024-01-03',
    readTime: 9,
    author: {
      id: '1',
      name: 'Mgr. Kika Nováková',
      avatar: '/images/kika-photo-kranio.avif',
      bio: 'Certifikovaná kraniosakrálna terapeutka s viac ako 10-ročnými skúsenosťami.',
      role: 'Terapeutka'
    },
    tags: ['príprava', 'prvá návšteva', 'tipy'],
    category: 'Príprava na terapiu',
    isPublished: true,
    views: 567,
    likes: 23,
    slug: 'priprava-na-kraniosakralnu-terapiu'
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
    post.author.name.toLowerCase().includes(author.toLowerCase())
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

// Admin functions for CRUD operations
export async function createBlogPost(postData: Omit<BlogPost, 'id' | 'publishedAt' | 'updatedAt' | 'views' | 'likes'>): Promise<BlogPost> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const newPost: BlogPost = {
    ...postData,
    id: (mockPosts.length + 1).toString(),
    publishedAt: new Date().toISOString().split('T')[0],
    updatedAt: new Date().toISOString().split('T')[0],
    views: 0,
    likes: 0
  };
  
  mockPosts.unshift(newPost);
  return newPost;
}

export async function updateBlogPost(id: string, postData: Partial<BlogPost>): Promise<BlogPost | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const postIndex = mockPosts.findIndex(post => post.id === id);
  if (postIndex === -1) return null;
  
  const updatedPost = {
    ...mockPosts[postIndex],
    ...postData,
    updatedAt: new Date().toISOString().split('T')[0]
  };
  
  mockPosts[postIndex] = updatedPost;
  return updatedPost;
}

export async function deleteBlogPost(id: string): Promise<boolean> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const postIndex = mockPosts.findIndex(post => post.id === id);
  if (postIndex === -1) return false;
  
  mockPosts.splice(postIndex, 1);
  return true;
}