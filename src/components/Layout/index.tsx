'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import { GlobalStyles } from './GlobalStyles';
import { Footer, Header, Preloader } from '..';
import { useState } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [complete, setComplete] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();
  
  // Check if current page is admin page or contact page
  const isAdminPage = pathname.startsWith('/admin');
  const isContactPage = pathname === '/contact';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      const raf = (time: number) => {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);

      return () => {
        lenisRef.current?.destroy();
      };
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      {!isAdminPage && !isContactPage && <Preloader setComplete={setComplete} />}
      <div className={complete || isAdminPage || isContactPage ? 'complete' : 'not_complete'}>
        {!isAdminPage && !isContactPage && <Header />}
        {children}
        {!isAdminPage && !isContactPage && <Footer />}
      </div>
    </>
  );
};

export default Layout;
