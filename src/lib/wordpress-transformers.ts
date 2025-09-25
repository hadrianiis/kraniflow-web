/**
 * WordPress Data Transformers
 * 
 * This module contains functions to transform WordPress API responses
 * into our application's data models.
 */

import { BlogPost, Author } from '@/types/blog';
import { WordPressComPost, WordPressAuthor, WordPressMedia } from './wordpress';

// Simple emoji cleaning function
const convertWordPressEmojis = (html: string): string => {
  return html
    // Replace WordPress.com emoji images with actual emoji characters
    .replace(/<img[^>]*src="[^"]*wpcom-smileys\/twemoji\/[^"]*\/1f([0-9a-f]{3})\.png"[^>]*alt="([^"]*)"[^>]*\/?>/gi, (_, emojiCode) => {
      // Convert hex code to Unicode emoji
      const unicodeEmoji = String.fromCodePoint(parseInt('1f' + emojiCode, 16));
      return unicodeEmoji;
    })
    // Handle other common WordPress emoji patterns
    .replace(/<img[^>]*class="wp-smiley"[^>]*alt="([^"]*)"[^>]*\/?>/gi, '$1')
    // Clean up any remaining WordPress emoji artifacts
    .replace(/<img[^>]*wp-smiley[^>]*\/?>/gi, '');
};

// WordPress.com specific types

export type WordPressPostUnion = WordPressComPost | any; // Allow any WordPress post type
export type WordPressUser = WordPressAuthor | any; // Allow any WordPress user type

/**
 * Calculate reading time based on content length
 */
function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Strip HTML tags and clean text
 */
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&[^;]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Extract structured content from WordPress post
 */
function extractStructuredContent(content: string): {
  title?: string;
  excerpt?: string;
  mainContent: string;
  sections: Array<{
    type: 'heading' | 'paragraph' | 'list' | 'quote';
    content: string;
    level?: number;
  }>;
} {
  // Remove WordPress shortcodes and clean content
  let cleanContent = content
    .replace(/\[[^\]]+\]/g, '') // Remove shortcodes
    .replace(/<!--.*?-->/g, '') // Remove HTML comments
    .trim();

  // Extract title from H1 if present
  const titleMatch = cleanContent.match(/<h1[^>]*>(.*?)<\/h1>/i);
  const title = titleMatch ? stripHtml(titleMatch[1] || '') : undefined;

  // Extract excerpt from first paragraph or excerpt div
  const excerptMatch = cleanContent.match(/<div[^>]*class="[^"]*excerpt[^"]*"[^>]*>(.*?)<\/div>/i) ||
                      cleanContent.match(/<p[^>]*>(.*?)<\/p>/i);
  const excerpt = excerptMatch ? stripHtml(excerptMatch[1] || '') : undefined;

  // Remove title and excerpt from main content
  let mainContent = cleanContent
    .replace(/<h1[^>]*>.*?<\/h1>/gi, '')
    .replace(/<div[^>]*class="[^"]*excerpt[^"]*"[^>]*>.*?<\/div>/gi, '')
    .trim();

  // Parse sections
  const sections: Array<{
    type: 'heading' | 'paragraph' | 'list' | 'quote';
    content: string;
    level?: number;
  }> = [];

  // Split content by HTML elements
  const elementRegex = /<(h[1-6]|p|ul|ol|blockquote|div)[^>]*>(.*?)<\/\1>/gi;
  let match;
  
  while ((match = elementRegex.exec(mainContent)) !== null) {
    const tag = match[1]?.toLowerCase() || '';
    const content = stripHtml(match[2] || '');
    
    if (content.trim()) {
      if (tag.startsWith('h')) {
        sections.push({
          type: 'heading',
          content,
          level: parseInt(tag[1] || '1')
        });
      } else if (tag === 'ul' || tag === 'ol') {
        sections.push({
          type: 'list',
          content
        });
      } else if (tag === 'blockquote') {
        sections.push({
          type: 'quote',
          content
        });
      } else {
        sections.push({
          type: 'paragraph',
          content
        });
      }
    }
  }

  const result: any = {
    mainContent,
    sections
  };

  if (title !== undefined) {
    result.title = title;
  }
  if (excerpt !== undefined) {
    result.excerpt = excerpt;
  }

  return result;
}

/**
 * Transform WordPress user to our Author model
 */
export function transformWordPressUserToAuthor(
  wpUser: WordPressUser,
  role: string = 'Author'
): Author {
  return {
    id: wpUser.id.toString(),
    name: wpUser.name,
    avatar: wpUser.avatar_urls?.['96'] || wpUser.avatar_urls?.['48'] || wpUser.avatar_urls?.['24'] || '',
    bio: stripHtml(wpUser.description || ''),
    role: role,
  };
}

/**
 * Transform WordPress media to image URL
 */
export function transformWordPressMediaToImageUrl(
  wpMedia: WordPressMedia | null
): string {
  if (!wpMedia) return '';
  
  // Try to get the best available size
  const sizes = wpMedia.media_details?.sizes;
  if (sizes) {
    // Prefer large, then medium_large, then medium, then full
    const preferredSizes = ['large', 'medium_large', 'medium', 'full'];
    for (const size of preferredSizes) {
      if (sizes[size]?.source_url) {
        return sizes[size].source_url;
      }
    }
  }
  
  // Fallback to source_url
  return wpMedia.source_url || '';
}

/**
 * Check if post is WordPress.com format
 */
function isWordPressComPost(post: WordPressPostUnion): post is WordPressComPost {
  return 'site_ID' in post;
}

/**
 * Transform WordPress post to our BlogPost model
 */
export function transformWordPressPostToBlogPost(
  wpPost: WordPressPostUnion,
  wpUser?: WordPressUser,
  wpMedia?: WordPressMedia | null
): BlogPost {
  if (isWordPressComPost(wpPost)) {
    return transformWordPressComPostToBlogPost(wpPost);
  } else {
    return transformStandardWordPressPostToBlogPost(wpPost, wpUser, wpMedia);
  }
}

/**
 * Transform standard WordPress post to our BlogPost model
 */
function transformStandardWordPressPostToBlogPost(
  wpPost: WordPressComPost,
  wpUser?: WordPressUser,
  wpMedia?: WordPressMedia | null
): BlogPost {
  // Extract author information
  const author: Author = wpUser 
    ? transformWordPressUserToAuthor(wpUser)
    : {
        id: wpPost.author.toString(),
        name: 'Unknown Author',
        avatar: '',
        bio: '',
        role: 'Author',
      };

  // Extract featured image
  const featuredImage = wpMedia 
    ? transformWordPressMediaToImageUrl(wpMedia)
    : '/images/skeleton.avif';

  // Extract categories and tags from embedded data
  const embedded = (wpPost as any)._embedded;
  const categories = (embedded?.['wp:term']) 
    ? embedded['wp:term'].filter(
        (term: any) => term.taxonomy === 'category'
      ).map((term: any) => ({
        id: term.id,
        name: term.name,
        slug: term.slug,
      }))
    : [];

  const tags = (embedded?.['wp:term'])
    ? embedded['wp:term'].filter(
        (term: any) => term.taxonomy === 'post_tag'
      ).map((term: any) => term.name)
    : [];

  // Extract structured content
  const structuredContent = extractStructuredContent(wpPost.content);
  
  // Use extracted title if available, otherwise use WordPress title
  const title = structuredContent.title || stripHtml(wpPost.title);
  
  // Use extracted excerpt if available, otherwise use WordPress excerpt
  const excerpt = structuredContent.excerpt || stripHtml(wpPost.excerpt);
  
  // Use main content (without title and excerpt) and convert WordPress emojis
  const content = convertWordPressEmojis(structuredContent.mainContent || wpPost.content);

  // Generate slug if missing or empty
  const slug = wpPost.slug || title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();

  return {
    id: wpPost.ID.toString(),
    slug,
    title,
    excerpt,
    content,
    featuredImage,
    publishedAt: (wpPost.date?.split('T')[0] || new Date().toISOString().split('T')[0]) as string, // Extract date part
    updatedAt: (wpPost.modified?.split('T')[0] || new Date().toISOString().split('T')[0]) as string, // Extract date part
    readTime: calculateReadTime(content),
    author,
    isPublished: wpPost.status === 'publish',
    views: 0, // WordPress doesn't provide view counts by default
    likes: 0, // WordPress doesn't provide like counts by default
    category: categories.length > 0 ? categories[0].name : 'Bez kategórie',
    tags,
  };
}

/**
 * Transform WordPress.com post to our BlogPost model
 */
function transformWordPressComPostToBlogPost(wpPost: WordPressComPost): BlogPost {
  // Extract author information
  const author: Author = {
    id: wpPost.author.ID.toString(),
    name: wpPost.author.name || wpPost.author.login,
    avatar: wpPost.author.avatar_URL,
    bio: '',
    role: 'Author',
  };

  // Extract featured image
  const featuredImage = wpPost.featured_image || '/images/skeleton.avif';

  // Extract categories and tags
  const categories = Object.values(wpPost.categories || {});
  const categoryName = categories.length > 0 ? (categories[0] as any)?.name || 'Bez kategórie' : 'Bez kategórie';

  const tags = Object.values(wpPost.tags || {}).map(tag => 
    typeof tag === 'string' ? tag : (tag as any).name || tag
  );

  // For WordPress.com, use the excerpt directly and convert emojis in content
  const title = stripHtml(wpPost.title);
  const excerpt = stripHtml(wpPost.excerpt);
  const content = convertWordPressEmojis(wpPost.content); // Convert WordPress emojis to actual emoji characters

  // Generate slug if missing or empty
  const slug = wpPost.slug || title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();

  return {
    id: wpPost.ID.toString(),
    slug,
    title,
    excerpt,
    content,
    featuredImage,
    publishedAt: (wpPost.date?.split('T')[0] || new Date().toISOString().split('T')[0]) as string, // Extract date part
    updatedAt: (wpPost.modified?.split('T')[0] || new Date().toISOString().split('T')[0]) as string, // Extract date part
    readTime: calculateReadTime(content),
    author,
    isPublished: wpPost.status === 'publish',
    views: 0, // WordPress.com doesn't provide view counts by default
    likes: wpPost.like_count || 0,
    category: categoryName,
    tags,
  };
}

/**
 * Transform multiple WordPress posts to BlogPost array
 */
export function transformWordPressPostsToBlogPosts(
  wpPosts: WordPressPostUnion[]
): BlogPost[] {
  return wpPosts.map(wpPost => {
    if (isWordPressComPost(wpPost)) {
      // WordPress.com posts already have author data embedded
      return transformWordPressPostToBlogPost(wpPost);
    } else {
      // Standard WordPress posts - extract author from embedded data
      const wpUser = wpPost._embedded?.author?.[0];
      
      // Extract featured media from embedded data
      const wpMedia = wpPost._embedded?.['wp:featuredmedia']?.[0];
      
      return transformWordPressPostToBlogPost(wpPost, wpUser, wpMedia);
    }
  });
}

/**
 * Transform WordPress post with separate author and media data
 */
export function transformWordPressPostWithDetails(
  wpPost: WordPressComPost,
  wpUser?: WordPressUser,
  wpMedia?: WordPressMedia | null
): BlogPost {
  return transformWordPressPostToBlogPost(wpPost, wpUser, wpMedia);
}

/**
 * Extract searchable text from WordPress post
 */
export function extractSearchableText(wpPost: WordPressPostUnion): string {
  if (isWordPressComPost(wpPost)) {
    const title = stripHtml(wpPost.title);
    const excerpt = stripHtml(wpPost.excerpt);
    const content = stripHtml(wpPost.content);
    
    return `${title} ${excerpt} ${content}`.toLowerCase();
  } else {
    const title = stripHtml((wpPost as any).title?.rendered || '');
    const excerpt = stripHtml((wpPost as any).excerpt?.rendered || '');
    const content = stripHtml((wpPost as any).content?.rendered || '');
    
    return `${title} ${excerpt} ${content}`.toLowerCase();
  }
}

/**
 * Check if WordPress post matches search query
 */
export function matchesSearchQuery(
  wpPost: WordPressPostUnion,
  query: string
): boolean {
  const searchableText = extractSearchableText(wpPost);
  const lowercaseQuery = query.toLowerCase();
  
  return searchableText.includes(lowercaseQuery);
}

/**
 * Sort WordPress posts by various criteria
 */
export function sortWordPressPosts(
  wpPosts: WordPressPostUnion[],
  sortBy: 'newest' | 'oldest' | 'title' = 'newest'
): WordPressPostUnion[] {
  const sorted = [...wpPosts];
  
  switch (sortBy) {
    case 'newest':
      return sorted.sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    case 'oldest':
      return sorted.sort((a, b) => 
        new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    case 'title':
      return sorted.sort((a, b) => {
        const titleA = isWordPressComPost(a) ? a.title : (a as any).title?.rendered || '';
        const titleB = isWordPressComPost(b) ? b.title : (b as any).title?.rendered || '';
        return titleA.localeCompare(titleB);
      });
    default:
      return sorted;
  }
}
