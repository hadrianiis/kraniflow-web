export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  publishedAt: string;
  updatedAt: string;
  readTime: number;
  author: {
    id: string;
    name: string;
    avatar: string;
    bio: string;
    role: string;
  };
  tags: string[];
  category: string;
  isPublished: boolean;
  views: number;
  likes: number;
  slug: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  count: number;
} 