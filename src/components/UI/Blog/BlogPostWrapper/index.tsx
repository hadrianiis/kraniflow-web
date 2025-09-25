import React, { Suspense } from 'react';
import BlogPostDetail from '../BlogPostDetail';
import BlogPostLayout from '../BlogPostLayout';
import RelatedPostsSection from '../RelatedPostsSection';
import { BlogPost } from '@/types/blog';

interface BlogPostWrapperProps {
  post: BlogPost;
  relatedPosts?: BlogPost[];
}

export default function BlogPostWrapper({ post, relatedPosts }: BlogPostWrapperProps) {
  return (
    <BlogPostLayout>
      <BlogPostDetail post={post} />
      {relatedPosts && <RelatedPosts posts={relatedPosts} />}
    </BlogPostLayout>
  );
}

// Samostatný komponent pre Related Posts
function RelatedPosts({ posts }: { posts?: BlogPost[] }) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <Suspense fallback={<div>Načítavam súvisiace články...</div>}>
      <RelatedPostsSection posts={posts} />
    </Suspense>
  );
}
