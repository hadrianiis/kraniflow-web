'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { BlogPost, BlogPagination } from '@/types/blog';
import BlogGrid from '../BlogGrid';

interface BlogGridWithPaginationProps {
  posts: BlogPost[];
  pagination: BlogPagination;
}

export default function BlogGridWithPagination({ 
  posts, 
  pagination 
}: BlogGridWithPaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (page === 1) {
      params.delete('page');
    } else {
      params.set('page', page.toString());
    }
    
    const newUrl = params.toString() 
      ? `/blog?${params.toString()}`
      : '/blog';
    
    router.push(newUrl);
  };

  return (
    <BlogGrid 
      posts={posts} 
      pagination={pagination}
      onPageChange={handlePageChange}
    />
  );
}
