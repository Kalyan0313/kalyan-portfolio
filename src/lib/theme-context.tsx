'use client';

import React, { useEffect } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Force dark theme always
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    document.documentElement.setAttribute('data-theme', 'dark');
    // Remove any light theme classes
    document.body.classList.remove('light');
    document.body.classList.add('dark');
  }, []);

  return <>{children}</>;
}
