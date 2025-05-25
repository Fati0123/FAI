'use client';

import { useSearchParams } from 'next/navigation';

export default function DashboardContent() {
  const searchParams = useSearchParams();
  
  return (
    <div className="w-full">
      {/* Use searchParams here */}
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {/* Rest of your dashboard content */}
    </div>
  );
}
