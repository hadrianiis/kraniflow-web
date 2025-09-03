import { Metadata } from 'next';
import { AdminDashboard } from '@/components/Admin/AdminDashboard';

export const metadata: Metadata = {
  title: 'Dashboard | Admin Panel | KranioFlow',
  description: 'Administračný dashboard',
  robots: 'noindex, nofollow',
};

export default function AdminPage() {
  return <AdminDashboard />;
}
