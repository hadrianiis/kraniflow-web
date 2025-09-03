'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FileText, 
  Menu,
  X,
  LogOut
} from 'lucide-react';
import { useAdmin } from '../AdminProvider';
import { SidebarStyles } from './styles';

const menuItems = [
  {
    title: 'Blog Posty',
    href: '/admin/posts',
    icon: FileText,
  },
];

export function AdminSidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAdmin();

  return (
    <SidebarStyles>
      <div className={`sidebar ${isMobileOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <h2>KranioFlow</h2>
            <span>Admin</span>
          </div>
          <button 
            className="mobile-close"
            onClick={() => setIsMobileOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="user-info">
          <div className="user-avatar">
            {user?.name.charAt(0).toUpperCase()}
          </div>
          <div className="user-details">
            <p className="user-name">{user?.name}</p>
            <p className="user-role">{user?.role}</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={() => setIsMobileOpen(false)}
              >
                <Icon size={20} />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <button onClick={logout} className="logout-btn">
            <LogOut size={20} />
            <span>Odhlásiť sa</span>
          </button>
        </div>
      </div>

      <button 
        className="mobile-toggle"
        onClick={() => setIsMobileOpen(true)}
      >
        <Menu size={20} />
      </button>
    </SidebarStyles>
  );
}
