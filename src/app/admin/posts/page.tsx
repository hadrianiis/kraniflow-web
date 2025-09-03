'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye,
  MoreVertical
} from 'lucide-react';
import { getBlogPosts } from '@/lib/blog';
import { BlogPost } from '@/types/blog';
import { PostsStyles } from './styles';

export default function PostsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await getBlogPosts();
        setPosts(data);
        setFilteredPosts(data);
      } catch (error) {
        console.error('Error loading posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  useEffect(() => {
    let filtered = posts;

    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(post =>
        post.category === selectedCategory
      );
    }

    setFilteredPosts(filtered);
  }, [posts, searchQuery, selectedCategory]);

  const categories = Array.from(new Set(posts.map(post => post.category)));

  const handleDelete = async (postId: string) => {
    if (confirm('Ste si istí, že chcete vymazať tento článok?')) {
      // TODO: Implement delete functionality
      console.log('Delete post:', postId);
    }
  };

  return (
    <PostsStyles>
      <div className="posts-header">
        <div className="header-content">
          <h1>Správa článkov</h1>
          <p>Spravujte a upravujte blog články</p>
        </div>
        <Link href="/admin/posts/new" className="new-post-btn">
          <Plus size={16} />
          Nový článok
        </Link>
      </div>

      <div className="posts-filters">
        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Vyhľadať články..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filter-box">
          <Filter size={18} />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Všetky kategórie</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="posts-stats">
        <div className="stat">
          <span className="stat-label">Celkovo článkov:</span>
          <span className="stat-value">{posts.length}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Zobrazené:</span>
          <span className="stat-value">{filteredPosts.length}</span>
        </div>
      </div>

      {isLoading ? (
        <div className="loading">Načítavam články...</div>
      ) : (
        <div className="posts-grid">
          {filteredPosts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-image">
                <img src={post.featuredImage} alt={post.title} />
                <div className="post-status">
                  {post.isPublished && <span className="featured">Published</span>}
                </div>
              </div>

              <div className="post-content">
                <div className="post-meta">
                  <span className="post-category">{post.category}</span>
                  <span className="post-date">{post.publishedAt}</span>
                </div>

                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>

                <div className="post-stats">
                  <span className="read-time">{post.readTime} min</span>
                  <span className="author">{post.author.name}</span>
                </div>
              </div>

              <div className="post-actions">
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="action-btn view"
                  target="_blank"
                >
                  <Eye size={16} />
                </Link>
                <Link 
                  href={`/admin/posts/${post.id}/edit`} 
                  className="action-btn edit"
                >
                  <Edit size={16} />
                </Link>
                <button 
                  onClick={() => handleDelete(post.id)}
                  className="action-btn delete"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {filteredPosts.length === 0 && !isLoading && (
        <div className="empty-state">
          <h3>Žiadne články</h3>
          <p>Nenašli sa žiadne články zodpovedajúce vašim kritériám.</p>
          <Link href="/admin/posts/new" className="create-btn">
            <Plus size={16} />
            Vytvoriť prvý článok
          </Link>
        </div>
      )}
    </PostsStyles>
  );
}
