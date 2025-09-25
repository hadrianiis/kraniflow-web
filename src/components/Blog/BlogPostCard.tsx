'use client';

import React from 'react';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  author: string;
  publishedAt: string;
  readTime?: number;
  category?: string;
}

interface BlogPostCardProps {
  post: BlogPost;
  className?: string;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  post,
  className = ''
}) => {
  const handlePostClick = () => {
    // Blog post click tracking will be handled server-side
  };

  return (
    <article className={`border rounded-lg overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
      <Link
        href={`/blog/${post.slug}`}
        className="block"
        onClick={handlePostClick}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            {post.category && (
              <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                {post.category}
              </span>
            )}
            <time className="text-sm text-gray-500">
              {new Date(post.publishedAt).toLocaleDateString('sk-SK')}
            </time>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
            {post.title}
          </h2>
          
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Autor:</span>
              <span className="text-sm font-medium text-gray-700">
                {post.author}
              </span>
            </div>
            {post.readTime && (
              <span className="text-sm text-gray-500">
                {post.readTime} min čítania
              </span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
};
