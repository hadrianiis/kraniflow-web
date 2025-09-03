'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor';
}

interface AdminContextType {
  user: AdminUser | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Mock autentifikácia - v reálnej aplikácii by toto bolo cez API
  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulácia API volania
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock údaje - v reálnej aplikácii by toto bolo cez databázu
    if (email === 'admin@kranioflow.sk' && password === 'admin123') {
      const mockUser: AdminUser = {
        id: '1',
        name: 'Admin User',
        email: 'admin@kranioflow.sk',
        role: 'admin'
      };
      
      setUser(mockUser);
      // Set cookie for server-side authentication
      document.cookie = `admin_user=${encodeURIComponent(JSON.stringify(mockUser))}; path=/; max-age=86400`;
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    document.cookie = 'admin_user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    router.push('/admin/login');
  };

  // Kontrola existujúcej session
  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
    };

    const savedUser = getCookie('admin_user');
    if (savedUser) {
      try {
        const userData = JSON.parse(decodeURIComponent(savedUser));
        setUser(userData);
      } catch (error) {
        document.cookie = 'admin_user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      }
    }
    setIsLoading(false);
  }, []);

  const value: AdminContextType = {
    user,
    login,
    logout,
    isLoading,
    isAuthenticated: !!user
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
