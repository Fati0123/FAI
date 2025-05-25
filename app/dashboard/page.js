import { Suspense } from 'react';
import DashboardContent from '../../components/DashboardContent';
import Loading from '../loading';

export default function DashboardPage() {
  return (
    <Suspense fallback={<Loading />}>
      <DashboardContent />
    </Suspense>
  );
}
