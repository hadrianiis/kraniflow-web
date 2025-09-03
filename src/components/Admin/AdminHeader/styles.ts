import styled from 'styled-components';

export const HeaderStyles = styled.div`
  background: white;
  border-bottom: 1px solid #e2e8f0;
  padding: 1rem 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .header-left {
    flex: 1;
    max-width: 400px;
  }

  .search-box {
    position: relative;
    display: flex;
    align-items: center;
    background: #f8fafc;
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

  .search-input {
    border: none;
    background: none;
    outline: none;
    flex: 1;
    font-size: 0.875rem;
    color: #1e293b;

    &::placeholder {
      color: #64748b;
    }
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .notification-btn {
    position: relative;
    background: none;
    border: none;
    padding: 0.5rem;
    border-radius: 0.5rem;
    color: #64748b;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: #f1f5f9;
      color: #334155;
    }
  }

  .notification-badge {
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
    background: #ef4444;
    color: white;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.125rem 0.375rem;
    border-radius: 9999px;
    min-width: 1.25rem;
    text-align: center;
  }

  .user-menu {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .user-name {
    font-size: 0.875rem;
    font-weight: 600;
    color: #1e293b;
  }

  .user-role {
    font-size: 0.75rem;
    color: #64748b;
    text-transform: capitalize;
  }

  .logout-btn {
    background: none;
    border: none;
    padding: 0.5rem;
    border-radius: 0.375rem;
    color: #64748b;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: #fee2e2;
      color: #dc2626;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    .header-content {
      flex-direction: column;
      gap: 1rem;
    }

    .header-left {
      max-width: none;
      width: 100%;
    }

    .search-box {
      width: 100%;
    }
  }
`;
