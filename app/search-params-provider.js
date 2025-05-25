'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { pageview } from '@/lib/analytics';

export function SearchParamsProvider({ children }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname && searchParams) {
      const url = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
      pageview(url);
    }
  }, [pathname, searchParams]);

  return children;
}
