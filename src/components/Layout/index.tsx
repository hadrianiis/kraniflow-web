'use client';

import { useEffect, useRef } from 'react';
import { GlobalStyles } from './GlobalStyles';
import { Footer, Header } from '..';
import { ToastProvider } from '@/components/UI/Toast';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Dynamicky importujeme Lenis len keď je potrebný
      import('lenis').then((Lenis) => {
        try {
          lenisRef.current = new Lenis.default({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });

          const raf = (time: number) => {
            if (lenisRef.current) {
              lenisRef.current.raf(time);
              requestAnimationFrame(raf);
            }
          };

          requestAnimationFrame(raf);
        } catch (error) {
          console.warn('Lenis initialization failed:', error);
        }
      });
    }

    return () => {
      if (lenisRef.current && typeof lenisRef.current.destroy === 'function') {
        lenisRef.current.destroy();
      }
    };
  }, []);

  return (
    <ToastProvider>
      <GlobalStyles />
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </ToastProvider>
  );
};

export default Layout;
