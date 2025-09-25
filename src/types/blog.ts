export interface Author {
  id: string
  name: string
  avatar: string
  bio: string
  role: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  featuredImage: string
  publishedAt: string
  updatedAt: string
  readTime: number
  author: Author
  tags: string[]
  category: string
  isPublished: boolean
  views: number
  likes: number
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  description: string
  postCount: number
  color: string
}

export interface BlogFilters {
  category?: string
  tags?: string[]
  author?: string
  search?: string
  sortBy?: 'newest' | 'oldest' | 'popular' | 'title'
  page?: number
  limit?: number
}

export interface BlogPagination {
  page: number
  limit: number
  total: number
  totalPages: number
}

export interface BlogResponse {
  posts: BlogPost[]
  pagination: BlogPagination
  categories: BlogCategory[]
} 