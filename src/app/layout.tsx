import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';
import Header from '@/components/shared/header';

export default function AppLayout() {
  return (
    <div>
      <Header />
      <main className="max-w-screen-md w-[90%] m-auto">
        <Outlet />
      </main>

      <Toaster />
    </div>
  );
}
