'use client';

import React, { useState, useMemo } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from 'styled-components';
import { styledComponentsConfig } from './styled-components-config';
import { theme } from './theme';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only create stylesheet in the browser
  const [styledComponentsStyleSheet] = useState(() => {
    if (typeof window === 'undefined') {
      return new ServerStyleSheet();
    }
    return null;
  });

  useServerInsertedHTML(() => {
    if (styledComponentsStyleSheet) {
      const styles = styledComponentsStyleSheet.getStyleElement();
      styledComponentsStyleSheet.instance.clearTag();
      return <>{styles}</>;
    }
    return null;
  });

  // Memoize the StyleSheetManager to prevent unnecessary re-renders
  const styleSheetManager = useMemo(() => {
    // On the client, don't use StyleSheetManager to avoid hydration issues
    if (typeof window !== 'undefined') {
      return <>{children}</>;
    }

    // On the server, use StyleSheetManager
    if (styledComponentsStyleSheet) {
      return (
        <StyleSheetManager 
          sheet={styledComponentsStyleSheet.instance}
          {...styledComponentsConfig}
        >
          {children}
        </StyleSheetManager>
      );
    }

    return <>{children}</>;
  }, [styledComponentsStyleSheet, children]);

  return (
    <ThemeProvider theme={theme}>
      {styleSheetManager}
    </ThemeProvider>
  );
}
