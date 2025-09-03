import styled from 'styled-components';

export const UploadStyles = styled.div`
  .upload-area {
    border: 2px dashed #d1d5db;
    border-radius: 0.75rem;
    padding: 2rem;
    text-align: center;
    transition: all 0.2s;
    cursor: pointer;
    background: #f9fafb;
    position: relative;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      border-color: #3b82f6;
      background: #eff6ff;
    }

    &.drag-active {
      border-color: #3b82f6;
      background: #eff6ff;
      transform: scale(1.02);
    }

    &.has-image {
      padding: 0;
      border: none;
      background: transparent;
      cursor: default;
    }
  }

  .upload-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .upload-icon {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: #e5e7eb;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6b7280;
    transition: all 0.2s;

    .upload-area:hover & {
      background: #3b82f6;
      color: white;
    }
  }

  .upload-content h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #374151;
    margin: 0;
  }

  .upload-content p {
    color: #6b7280;
    margin: 0;
    font-size: 0.875rem;
  }

  .upload-formats {
    font-size: 0.75rem;
    color: #9ca3af;
    background: #f3f4f6;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }

  .uploading {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    p {
      color: #3b82f6;
      font-weight: 500;
      margin: 0;
    }
  }

  .spinner {
    width: 32px;
    height: 32px;
    border: 3px solid #e5e7eb;
    border-top: 3px solid #3b82f6;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .image-preview {
    position: relative;
    width: 100%;
    height: 200px;
    border-radius: 0.75rem;
    overflow: hidden;
    background: #f3f4f6;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .remove-btn {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 32px;
    height: 32px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;

    &:hover {
      background: rgba(0, 0, 0, 0.9);
      transform: scale(1.1);
    }
  }

  .success-indicator {
    position: absolute;
    bottom: 0.5rem;
    left: 0.5rem;
    background: #10b981;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 0.5rem;
    font-size: 0.75rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`;
