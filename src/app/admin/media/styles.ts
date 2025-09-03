import styled from 'styled-components';

export const MediaStyles = styled.div`
  .media-header {
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

  .header-actions {
    display: flex;
    gap: 1rem;
  }

  .upload-area {
    position: relative;
  }

  .file-input {
    display: none;
  }

  .upload-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #667eea;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;

    &:hover {
      background: #5a67d8;
      transform: translateY(-1px);
    }
  }

  .media-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    gap: 1rem;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: stretch;
    }
  }

  .search-box {
    position: relative;
    display: flex;
    align-items: center;
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    padding: 0.5rem 0.75rem;
    flex: 1;
    max-width: 400px;

    &:focus-within {
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    svg {
      color: #64748b;
      margin-right: 0.5rem;
    }

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

  .view-controls {
    display: flex;
    gap: 0.5rem;
  }

  .view-btn {
    width: 40px;
    height: 40px;
    border: 1px solid #e2e8f0;
    background: white;
    border-radius: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;

    &:hover {
      border-color: #cbd5e1;
    }

    &.active {
      background: #667eea;
      border-color: #667eea;
      color: white;
    }
  }

  .media-stats {
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

  .empty-state {
    text-align: center;
    padding: 4rem 2rem;
    background: white;
    border-radius: 1rem;
    border: 1px solid #e2e8f0;

    svg {
      color: #cbd5e1;
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1e293b;
      margin: 0 0 0.5rem 0;
    }

    p {
      color: #64748b;
      margin: 0;
    }
  }

  .media-grid {
    display: grid;
    gap: 1.5rem;

    &.grid {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }

    &.list {
      grid-template-columns: 1fr;
    }
  }

  .media-item {
    background: white;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border: 1px solid #e2e8f0;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    &.selected {
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
  }

  .media-preview {
    position: relative;
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .file-icon {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f8fafc;
      color: #64748b;
    }

    .media-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      opacity: 0;
      transition: opacity 0.2s;

      .media-item:hover & {
        opacity: 1;
      }
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

      &.view {
        background: #dbeafe;
        color: #2563eb;

        &:hover {
          background: #bfdbfe;
        }
      }

      &.download {
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
  }

  .media-info {
    padding: 1rem;
  }

  .media-name {
    font-size: 0.875rem;
    font-weight: 600;
    color: #1e293b;
    margin: 0 0 0.5rem 0;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .media-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.75rem;
    color: #64748b;
    margin-bottom: 0.5rem;
  }

  .media-alt {
    font-size: 0.75rem;
    color: #64748b;
    margin: 0;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .bulk-actions {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 1rem;
    padding: 1rem 1.5rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    gap: 1rem;
    z-index: 1000;

    .bulk-info {
      font-size: 0.875rem;
      color: #64748b;
      font-weight: 500;
    }

    .bulk-buttons {
      display: flex;
      gap: 0.5rem;
    }

    .bulk-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 0.5rem;
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;

      &.delete {
        background: #fee2e2;
        color: #dc2626;

        &:hover {
          background: #fecaca;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .media-grid.grid {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }

    .bulk-actions {
      left: 1rem;
      right: 1rem;
      transform: none;
    }
  }
`;
