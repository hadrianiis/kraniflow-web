'use client';

import { ToastProvider } from './index';

interface ClientToastProviderProps {
  children: React.ReactNode;
}

export default function ClientToastProvider({ children }: ClientToastProviderProps) {
  return <ToastProvider>{children}</ToastProvider>;
}
