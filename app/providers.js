'use client';

import { ThemeProvider } from 'next-themes';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import { pageview } from '@/lib/analytics';

function AnalyticsProvider({ children }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      const url = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ''}`;
      pageview(url);
    }
  }, [pathname, searchParams]);

  return children;
}

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Suspense fallback={<div>Loading...</div>}>
        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
      </Suspense>
    </ThemeProvider>
  );
}
