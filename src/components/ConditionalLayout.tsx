'use client';

import { usePathname } from 'next/navigation';
import Layout from '@/components/Layout';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

const ConditionalLayout = ({ children }: ConditionalLayoutProps) => {
  const pathname = usePathname();
  
  // Stránky, ktoré NEPOTREBUJÚ Layout (navbar + footer)
  const noLayoutPages = ['/kontakt'];
  
  // Ak je aktuálna stránka v zozname stránok bez layoutu, vráť iba children
  if (noLayoutPages.includes(pathname)) {
    return <>{children}</>;
  }
  
  // Pre všetky ostatné stránky použij Layout
  return <Layout>{children}</Layout>;
};

export default ConditionalLayout;
