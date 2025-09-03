import styled from 'styled-components';

export const LoginStyles = styled.div`
  min-height: 100vh;
  background: #1f2937;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  .login-container {
    width: 100%;
    max-width: 400px;
  }

  .login-card {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  .login-header {
    text-align: center;
    margin-bottom: 2rem;

    h1 {
      font-size: 2rem;
      font-weight: 700;
      color: #1e293b;
      margin: 0 0 0.5rem 0;
    }

    h2 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #3b82f6;
      margin: 0 0 0.5rem 0;
    }

    p {
      color: #64748b;
      margin: 0;
    }
  }

  .login-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .error-message {
    background: #fee2e2;
    color: #dc2626;
    padding: 0.75rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    text-align: center;
    border: 1px solid #fecaca;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      font-size: 0.875rem;
      font-weight: 500;
      color: #374151;
    }

    input {
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

      &:disabled {
        background: #f9fafb;
        color: #9ca3af;
        cursor: not-allowed;
      }

      &::placeholder {
        color: #9ca3af;
      }
    }
  }

  .login-btn {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 0.75rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;

    &:hover:not(:disabled) {
      background: #2563eb;
      transform: translateY(-1px);
    }

    &:disabled {
      background: #9ca3af;
      cursor: not-allowed;
      transform: none;
    }
  }

  .login-footer {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid #e5e7eb;
  }

  .demo-credentials {
    font-size: 0.75rem;
    color: #6b7280;
    text-align: center;
    line-height: 1.5;
    margin: 0;
  }

  .loading {
    text-align: center;
    color: white;
    font-size: 1.125rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;

    .login-card {
      padding: 1.5rem;
    }
  }
`;
