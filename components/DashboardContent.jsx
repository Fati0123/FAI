'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function DashboardView() {
  const searchParams = useSearchParams();
  const view = searchParams.get('view');
  
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {view === 'settings' ? (
        <div>Settings View</div>
      ) : (
        <div>Default View</div>
      )}
    </div>
  );
}

export default function DashboardContent() {
  return (
    <Suspense fallback={<div>Loading dashboard...</div>}>
      <DashboardView />
    </Suspense>
  );
}
