import { Metadata } from 'next';
import { AdminLayoutWrapper } from '@/components/Admin/AdminLayoutWrapper';

export const metadata: Metadata = {
  title: 'Admin Panel | KranioFlow',
  description: 'Administračné rozhranie pre správu blogu',
  robots: 'noindex, nofollow',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminLayoutWrapper>
      {children}
    </AdminLayoutWrapper>
  );
}
