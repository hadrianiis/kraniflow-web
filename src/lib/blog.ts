import { BlogPost, BlogFilters, BlogResponse } from '@/types/blog';
import { getWordPressAPI } from './wordpress';
import { config } from './config';
import { unstable_cache } from 'next/cache';


// Cached version of getBlogPosts for better performance
const getCachedBlogPosts = unstable_cache(
  async (filters: BlogFilters = {}): Promise<BlogResponse> => {
    return await getBlogPostsInternal(filters);
  },
  ['blog-posts'],
  {
    tags: ['blog-posts'],
    revalidate: 60 * 60, // 1 hour - matches ISR revalidation
  }
);

export async function getBlogPosts(filters: BlogFilters = {}): Promise<BlogResponse> {
  // Use cached version for better performance
  return await getCachedBlogPosts(filters);
}

async function getBlogPostsInternal(filters: BlogFilters = {}): Promise<BlogResponse> {
  // Use only WordPress.com API
  if (config.features.useWordPress) {
    try {
      console.log('📰 Fetching posts from WordPress API only...');
      
      // Fetch ALL posts from WordPress API (no pagination)
      const apiResult = await getWordPressAPI().getPosts({
        ...(filters.search && { search: filters.search }),
        ...(filters.category && { categories: [parseInt(filters.category)] }),
        ...(filters.tags && { tags: filters.tags.map(tag => parseInt(tag)).filter(id => !isNaN(id)) }),
        orderby: filters.sortBy === 'title' ? 'title' : 
                filters.sortBy === 'oldest' ? 'date' : 
                filters.sortBy === 'popular' ? 'date' : 'date',
        order: filters.sortBy === 'oldest' ? 'asc' : 'desc'
      });
      
      if (apiResult && apiResult.posts && apiResult.posts.length > 0) {
        console.log(`✅ Found ${apiResult.posts.length} posts from WordPress API (${apiResult.total} total posts)`);
        
        // Apply additional client-side filters
        let filteredPosts = apiResult.posts;
        
        if (filters.category && !filters.category.match(/^\d+$/)) {
          // If category is not a number, filter by name
          filteredPosts = filteredPosts.filter(post => 
            post.category.toLowerCase().includes(filters.category!.toLowerCase())
          );
        }
        
        if (filters.tags?.length) {
          filteredPosts = filteredPosts.filter(post => 
            post.tags.some(tag => 
              filters.tags!.some(filterTag => 
                tag.toLowerCase().includes(filterTag.toLowerCase())
              )
            )
          );
        }
        
        if (filters.author) {
          filteredPosts = filteredPosts.filter(post => 
            post.author.name.toLowerCase().includes(filters.author!.toLowerCase())
          );
        }
        
        // Apply additional sorting if needed
        if (filters.sortBy === 'popular') {
          filteredPosts.sort((a, b) => b.views - a.views);
        }
        
        // Get categories from WordPress
        const categories = await getWordPressAPI().getCategories().catch(() => []);
        
        return {
          posts: filteredPosts, // Return ALL posts - frontend will handle pagination
          pagination: {
            page: 1, // Not used anymore
            limit: 6, // Frontend will use this for display
            total: filteredPosts.length, // Total filtered posts
            totalPages: Math.ceil(filteredPosts.length / 6) // Calculate pages for frontend
          },
          categories: categories.length > 0 ? categories : [
            { id: '1', name: 'Blog', slug: 'blog', description: '', postCount: filteredPosts.length, color: '#3B82F6' }
          ]
        };
      } else {
        console.log('❌ No posts found from WordPress API');
        throw new Error('No posts available from WordPress API');
      }
    } catch (apiError) {
      console.error('❌ WordPress API error:', apiError);
      throw new Error(`Failed to fetch posts from WordPress API: ${apiError instanceof Error ? apiError.message : 'Unknown error'}`);
    }
  }

  // If WordPress is disabled, return empty result
  console.log('📝 WordPress is disabled, returning empty result');
  return {
    posts: [],
    pagination: {
      page: filters.page || 1,
      limit: filters.limit || 6,
      total: 0,
      totalPages: 0
    },
    categories: []
  };
}

// Cached version of getBlogPost for better performance
const getCachedBlogPost = (slug: string) => unstable_cache(
  async (): Promise<BlogPost | null> => {
    return await getBlogPostInternal(slug);
  },
  [`blog-post-${slug}`],
  {
    tags: ['blog-post'],
    revalidate: 60 * 10, // 10 minutes
  }
)();

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  // Use cached version for better performance
  return await getCachedBlogPost(slug);
}

async function getBlogPostInternal(slug: string): Promise<BlogPost | null> {
  // Use only WordPress.com API
  if (config.features.useWordPress) {
    try {
      console.log(`📰 Fetching post by slug from WordPress API: ${slug}`);
      
      const apiPost = await getWordPressAPI().getPostBySlug(slug);
      if (apiPost) {
        console.log(`✅ Found post from WordPress API: ${apiPost.title}`);
        return apiPost;
      } else {
        console.log(`❌ Post not found in WordPress API: ${slug}`);
        return null;
      }
    } catch (apiError) {
      console.error('❌ WordPress API error for single post:', apiError);
      throw new Error(`Failed to fetch post from WordPress API: ${apiError instanceof Error ? apiError.message : 'Unknown error'}`);
    }
  }

  // If WordPress is disabled, return null
  console.log(`📝 WordPress is disabled, post not found: ${slug}`);
  return null;
}

export async function getRelatedPosts(
  currentSlug: string, 
  _category: string, 
  _tags: string[]
): Promise<BlogPost[]> {
  // Use only WordPress.com API
  if (config.features.useWordPress) {
    try {
      console.log('📰 Fetching related posts from WordPress API...');
      
      const apiResult = await getWordPressAPI().getPosts({
        // Get latest posts (no pagination)
      });

      if (apiResult && apiResult.posts) {
        // Filter out current post and return latest posts
        const otherPosts = apiResult.posts
          .filter(post => post.slug !== currentSlug)
          .slice(0, 3);
        
        console.log(`✅ Found ${otherPosts.length} related posts from WordPress API`);
        return otherPosts;
      } else {
        console.log('❌ No posts found from WordPress API');
        return [];
      }
    } catch (apiError) {
      console.error('❌ WordPress API error for related posts:', apiError);
      throw new Error(`Failed to fetch related posts from WordPress API: ${apiError instanceof Error ? apiError.message : 'Unknown error'}`);
    }
  }

  // If WordPress is disabled, return empty array
  console.log('📝 WordPress is disabled, no related posts available');
  return [];
}

export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  // Use only WordPress.com API
  if (config.features.useWordPress) {
    try {
      console.log(`📰 Fetching posts by category from WordPress API: ${category}`);
      
      const { posts } = await getWordPressAPI().getPosts({
        categories: [parseInt(category)] // Assuming category is passed as ID
      });
      
      console.log(`✅ Found ${posts.length} posts in category: ${category}`);
      return posts;
    } catch (error) {
      console.error('❌ WordPress API error for category posts:', error);
      throw new Error(`Failed to fetch posts by category from WordPress API: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  // If WordPress is disabled, return empty array
  console.log('📝 WordPress is disabled, no posts by category available');
  return [];
}

export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  // Use only WordPress.com API
  if (config.features.useWordPress) {
    try {
      console.log(`📰 Fetching posts by tag from WordPress API: ${tag}`);
      
      const { posts } = await getWordPressAPI().getPosts({
        tags: [parseInt(tag)] // Assuming tag is passed as ID
      });
      
      console.log(`✅ Found ${posts.length} posts with tag: ${tag}`);
      return posts;
    } catch (error) {
      console.error('❌ WordPress API error for tag posts:', error);
      throw new Error(`Failed to fetch posts by tag from WordPress API: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  // If WordPress is disabled, return empty array
  console.log('📝 WordPress is disabled, no posts by tag available');
  return [];
}

export async function getBlogPostsByAuthor(author: string): Promise<BlogPost[]> {
  // Use only WordPress.com API
  if (config.features.useWordPress) {
    try {
      console.log(`📰 Fetching posts by author from WordPress API: ${author}`);
      
      const { posts } = await getWordPressAPI().getPosts({
        author: parseInt(author) // Assuming author is passed as ID
      });
      
      console.log(`✅ Found ${posts.length} posts by author: ${author}`);
      return posts;
    } catch (error) {
      console.error('❌ WordPress API error for author posts:', error);
      throw new Error(`Failed to fetch posts by author from WordPress API: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  // If WordPress is disabled, return empty array
  console.log('📝 WordPress is disabled, no posts by author available');
  return [];
}

export async function searchBlogPosts(query: string): Promise<BlogPost[]> {
  // Use only WordPress.com API
  if (config.features.useWordPress) {
    try {
      console.log(`📰 Searching posts in WordPress API: "${query}"`);
      
      const { posts } = await getWordPressAPI().searchPosts(query);
      
      console.log(`✅ Found ${posts.length} posts matching: "${query}"`);
      return posts;
    } catch (error) {
      console.error('❌ WordPress API error for search:', error);
      throw new Error(`Failed to search posts from WordPress API: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  // If WordPress is disabled, return empty array
  console.log('📝 WordPress is disabled, no search results available');
  return [];
}

// Admin functions for CRUD operations
export async function createBlogPost(_postData: Omit<BlogPost, 'id' | 'publishedAt' | 'updatedAt' | 'views' | 'likes'>): Promise<BlogPost> {
  try {
    // Use WordPress API if enabled and available
    if (config.features.useWordPress && config.wordpress.apiUrl) {
      // WordPress API integration would go here
      // This would require implementing POST requests to WordPress API
      console.log('WordPress API create post not implemented yet');
      throw new Error('WordPress API create post not implemented yet');
    }
  } catch (error) {
    console.error('WordPress API error:', error);
    throw new Error('Failed to create post via WordPress API');
  }

  // If WordPress is disabled, throw error
  throw new Error('WordPress is disabled, cannot create posts');
}

export async function updateBlogPost(_id: string, _postData: Partial<BlogPost>): Promise<BlogPost | null> {
  try {
    // Use WordPress API if enabled and available
    if (config.features.useWordPress && config.wordpress.apiUrl) {
      // WordPress API integration would go here
      // This would require implementing PUT/PATCH requests to WordPress API
      console.log('WordPress API update post not implemented yet');
      throw new Error('WordPress API update post not implemented yet');
    }
  } catch (error) {
    console.error('WordPress API error:', error);
    throw new Error('Failed to update post via WordPress API');
  }

  // If WordPress is disabled, throw error
  throw new Error('WordPress is disabled, cannot update posts');
}

export async function deleteBlogPost(_id: string): Promise<boolean> {
  try {
    // Use WordPress API if enabled and available
    if (config.features.useWordPress && config.wordpress.apiUrl) {
      // WordPress API integration would go here
      // This would require implementing DELETE requests to WordPress API
      console.log('WordPress API delete post not implemented yet');
      throw new Error('WordPress API delete post not implemented yet');
    }
  } catch (error) {
    console.error('WordPress API error:', error);
    throw new Error('Failed to delete post via WordPress API');
  }

  // If WordPress is disabled, throw error
  throw new Error('WordPress is disabled, cannot delete posts');
}