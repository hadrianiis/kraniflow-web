import styled from 'styled-components';

export const AdminStyles = styled.div`
  .admin-layout {
    display: flex;
    min-height: 100vh;
    background: #f8fafc;
  }

  .admin-main {
    flex: 1;
    margin-left: 280px;
  }

  .admin-content {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    min-height: 100vh;
  }

  @media (max-width: 768px) {
    .admin-main {
      margin-left: 0;
    }
    
    .admin-content {
      padding: 1rem;
    }
  }
`;
