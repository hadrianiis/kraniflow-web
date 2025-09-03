'use client';

import { useState, useEffect } from 'react';
import { 
  FileText, 
  Plus,
  Edit,
  Trash2
} from 'lucide-react';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';
import { BlogPost } from '@/types/blog';
import { DashboardStyles } from './styles';

export function AdminDashboard() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await getBlogPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error loading posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  const stats = [
    {
      title: 'Celkový počet článkov',
      value: posts.length,
      icon: FileText,
      color: 'blue',
      change: '+12%'
    }
  ];

  const recentPosts = posts.slice(0, 5);

  return (
    <DashboardStyles>
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Vitajte v administračnom rozhraní KranioFlow</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className={`stat-card ${stat.color}`}>
              <div className="stat-icon">
                <Icon size={24} />
              </div>
              <div className="stat-content">
                <h3>{stat.value}</h3>
                <p>{stat.title}</p>
                <span className="stat-change">{stat.change}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="dashboard-content">
        <div className="recent-posts">
          <div className="section-header">
            <h2>Najnovšie články</h2>
            <Link href="/admin/posts/new" className="new-post-btn">
              <Plus size={16} />
              Nový článok
            </Link>
          </div>

          {isLoading ? (
            <div className="loading">Načítavam...</div>
          ) : (
            <div className="posts-list">
              {recentPosts.map((post) => (
                <div key={post.id} className="post-item">
                  <div className="post-image">
                    <img src={post.featuredImage} alt={post.title} />
                  </div>
                  <div className="post-content">
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="post-meta">
                      <span className="post-date">{post.publishedAt}</span>
                      <span className="post-category">{post.category}</span>
                    </div>
                  </div>
                  <div className="post-actions">
                    <button className="action-btn edit">
                      <Edit size={16} />
                    </button>
                    <button className="action-btn delete">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="quick-actions">
          <h2>Rýchle akcie</h2>
          <div className="actions-grid">
            <Link href="/admin/posts/new" className="action-card">
              <FileText size={24} />
              <span>Nový článok</span>
            </Link>
          </div>
        </div>
      </div>
    </DashboardStyles>
  );
}
