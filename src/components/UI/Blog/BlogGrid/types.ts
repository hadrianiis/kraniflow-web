export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  image: string;
  slug: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  count: number;
} 