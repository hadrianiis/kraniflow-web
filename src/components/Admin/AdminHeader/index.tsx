'use client';

import { LogOut } from 'lucide-react';
import { useAdmin } from '../AdminProvider';
import { HeaderStyles } from './styles';

export function AdminHeader() {
  const { user, logout } = useAdmin();

  return (
    <HeaderStyles>
      <div className="header-content">
        <div className="header-right">
          <div className="user-menu">
            <div className="user-info">
              <span className="user-name">{user?.name}</span>
              <span className="user-role">{user?.role}</span>
            </div>
            <button onClick={logout} className="logout-btn">
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}
