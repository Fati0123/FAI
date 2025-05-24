'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function SearchParamsProvider({ children }) {
  useSearchParams();
  return children;
}

export function Providers({ children }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParamsProvider>{children}</SearchParamsProvider>
    </Suspense>
  );
}
