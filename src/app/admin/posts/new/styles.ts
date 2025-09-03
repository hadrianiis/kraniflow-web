import styled from 'styled-components';

export const EditorStyles = styled.div`
  .editor-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0;
    border-bottom: 1px solid #e2e8f0;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
      align-items: stretch;
    }
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 1rem;

    .back-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #64748b;
      text-decoration: none;
      font-size: 0.875rem;
      transition: color 0.2s;

      &:hover {
        color: #667eea;
      }
    }

    h1 {
      font-size: 1.875rem;
      font-weight: 700;
      color: #1e293b;
      margin: 0;
    }
  }

  .header-actions {
    display: flex;
    gap: 0.75rem;

    @media (max-width: 768px) {
      justify-content: stretch;
    }
  }

  .preview-btn, .save-btn, .publish-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    border: none;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .preview-btn {
    background: #f1f5f9;
    color: #64748b;
    border: 1px solid #e2e8f0;

    &:hover:not(:disabled) {
      background: #e2e8f0;
    }
  }

  .save-btn {
    background: #dbeafe;
    color: #2563eb;
    border: 1px solid #bfdbfe;

    &:hover:not(:disabled) {
      background: #bfdbfe;
    }
  }

  .publish-btn {
    background: #3b82f6;
    color: white;
    border: 1px solid #2563eb;

    &:hover:not(:disabled) {
      background: #2563eb;
      transform: translateY(-1px);
    }
  }

  .editor-content {
    display: grid;
    grid-template-columns: 1fr 350px;
    gap: 2rem;
    margin-bottom: 3rem;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
    }
  }

  .preview-section {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border: 1px solid #e2e8f0;

    h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1e293b;
      margin: 0 0 2rem 0;
      padding-bottom: 1rem;
      border-bottom: 1px solid #e2e8f0;
    }
  }

  .image-upload {
    margin-top: 0.5rem;
  }

  .image-url {
    margin-top: 0.5rem;
    padding: 0.5rem;
    background: #f8fafc;
    border-radius: 0.375rem;
    border: 1px solid #e2e8f0;

    small {
      color: #64748b;
      font-size: 0.75rem;
      word-break: break-all;
    }
  }

  .editor-main {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border: 1px solid #e2e8f0;
  }

  .form-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
      font-weight: 600;
      color: #374151;
    }

    input, textarea, select {
      padding: 0.75rem;
      border: 1px solid #d1d5db;
      border-radius: 0.5rem;
      font-size: 1rem;
      transition: all 0.2s;

      &:focus {
        outline: none;
        border-color: #667eea;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
      }

      &::placeholder {
        color: #9ca3af;
      }
    }

    .title-input {
      font-size: 1.5rem;
      font-weight: 600;
      padding: 1rem;
    }

    .excerpt-input {
      resize: vertical;
      min-height: 80px;
    }

    .content-input {
      resize: vertical;
      min-height: 400px;
      font-family: 'Inter', sans-serif;
      line-height: 1.6;
    }

    small {
      font-size: 0.75rem;
      color: #6b7280;
    }
  }

  .checkbox-group {
    .checkbox-label {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      cursor: pointer;
      font-weight: 500;

      input[type="checkbox"] {
        display: none;
      }

      .checkmark {
        width: 20px;
        height: 20px;
        border: 2px solid #d1d5db;
        border-radius: 0.375rem;
        position: relative;
        transition: all 0.2s;

        &::after {
          content: '';
          position: absolute;
          left: 6px;
          top: 2px;
          width: 6px;
          height: 10px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
          opacity: 0;
          transition: opacity 0.2s;
        }
      }

      input[type="checkbox"]:checked + .checkmark {
        background: #667eea;
        border-color: #667eea;

        &::after {
          opacity: 1;
        }
      }
    }
  }

  .editor-sidebar {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .sidebar-section {
    background: white;
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border: 1px solid #e2e8f0;

    h3 {
      font-size: 1.125rem;
      font-weight: 600;
      color: #1e293b;
      margin: 0 0 1rem 0;
    }

    .form-group {
      margin-bottom: 1rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .preview-card {
    border: 1px solid #e2e8f0;
    border-radius: 0.75rem;
    overflow: hidden;
    background: #f8fafc;
  }

  .preview-image {
    height: 120px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .preview-content {
    padding: 1rem;

    h4 {
      font-size: 1rem;
      font-weight: 600;
      color: #1e293b;
      margin: 0 0 0.5rem 0;
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    p {
      color: #64748b;
      font-size: 0.875rem;
      margin: 0 0 0.75rem 0;
      line-height: 1.5;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  .preview-meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: #64748b;

    span {
      background: #f1f5f9;
      padding: 0.25rem 0.5rem;
      border-radius: 0.375rem;
    }
  }
`;
