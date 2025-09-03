import styled from 'styled-components';

export const PostsStyles = styled.div`
  .posts-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2rem;
    gap: 2rem;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
    }
  }

  .header-content {
    h1 {
      font-size: 2rem;
      font-weight: 700;
      color: #1e293b;
      margin: 0 0 0.5rem 0;
    }

    p {
      color: #64748b;
      margin: 0;
    }
  }

  .new-post-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #3b82f6;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s;
    white-space: nowrap;

    &:hover {
      background: #2563eb;
      transform: translateY(-1px);
    }
  }

  .posts-filters {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .search-box, .filter-box {
    position: relative;
    display: flex;
    align-items: center;
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    padding: 0.5rem 0.75rem;
    transition: all 0.2s;

    &:focus-within {
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    svg {
      color: #64748b;
      margin-right: 0.5rem;
    }
  }

  .search-box {
    flex: 1;
    max-width: 400px;

    input {
      border: none;
      outline: none;
      flex: 1;
      font-size: 0.875rem;
      color: #1e293b;

      &::placeholder {
        color: #64748b;
      }
    }
  }

  .filter-box {
    select {
      border: none;
      outline: none;
      background: none;
      font-size: 0.875rem;
      color: #1e293b;
      cursor: pointer;
      min-width: 150px;
    }
  }

  .posts-stats {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
    padding: 1rem;
    background: #f8fafc;
    border-radius: 0.5rem;
    border: 1px solid #e2e8f0;
  }

  .stat {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    .stat-label {
      font-size: 0.75rem;
      color: #64748b;
      text-transform: uppercase;
      font-weight: 500;
    }

    .stat-value {
      font-size: 1.25rem;
      font-weight: 700;
      color: #1e293b;
    }
  }

  .loading {
    text-align: center;
    padding: 3rem;
    color: #64748b;
    font-size: 1.125rem;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 1.5rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .post-card {
    background: white;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border: 1px solid #e2e8f0;
    transition: all 0.2s;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
  }

  .post-image {
    position: relative;
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .post-status {
      position: absolute;
      top: 1rem;
      right: 1rem;

      .featured {
        background: #fbbf24;
        color: #92400e;
        padding: 0.25rem 0.5rem;
        border-radius: 0.375rem;
        font-size: 0.75rem;
        font-weight: 600;
      }
    }
  }

  .post-content {
    padding: 1.5rem;
  }

  .post-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 0.75rem;
  }

  .post-category {
    background: #e0e7ff;
    color: #3730a3;
    padding: 0.25rem 0.5rem;
    border-radius: 0.375rem;
    font-weight: 500;
  }

  .post-date {
    color: #64748b;
  }

  .post-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #1e293b;
    margin: 0 0 0.75rem 0;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .post-excerpt {
    color: #64748b;
    font-size: 0.875rem;
    line-height: 1.5;
    margin: 0 0 1rem 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .post-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.75rem;
    color: #64748b;
    margin-bottom: 1rem;
  }

  .read-time {
    background: #f1f5f9;
    padding: 0.25rem 0.5rem;
    border-radius: 0.375rem;
  }

  .post-actions {
    display: flex;
    gap: 0.5rem;
    padding: 0 1.5rem 1.5rem 1.5rem;
  }

  .action-btn {
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    text-decoration: none;

    &.view {
      background: #dbeafe;
      color: #2563eb;

      &:hover {
        background: #bfdbfe;
      }
    }

    &.edit {
      background: #dcfce7;
      color: #16a34a;

      &:hover {
        background: #bbf7d0;
      }
    }

    &.delete {
      background: #fee2e2;
      color: #dc2626;

      &:hover {
        background: #fecaca;
      }
    }
  }

  .empty-state {
    text-align: center;
    padding: 4rem 2rem;
    background: white;
    border-radius: 1rem;
    border: 1px solid #e2e8f0;

    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1e293b;
      margin: 0 0 0.5rem 0;
    }

    p {
      color: #64748b;
      margin: 0 0 2rem 0;
    }
  }

  .create-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #667eea;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s;

    &:hover {
      background: #5a67d8;
      transform: translateY(-1px);
    }
  }
`;
