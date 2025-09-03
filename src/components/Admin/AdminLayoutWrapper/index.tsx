'use client';

import { AdminSidebar } from '../AdminSidebar';
import { AdminHeader } from '../AdminHeader';
import { AdminProvider } from '../AdminProvider';
import { AdminStyles } from '@/app/admin/styles';

interface AdminLayoutWrapperProps {
  children: React.ReactNode;
}

export function AdminLayoutWrapper({ children }: AdminLayoutWrapperProps) {
  return (
    <AdminProvider>
      <AdminStyles>
        <div className="admin-layout">
          <AdminSidebar />
          <div className="admin-main">
            <main className="admin-content">
              {children}
            </main>
          </div>
        </div>
      </AdminStyles>
    </AdminProvider>
  );
}
