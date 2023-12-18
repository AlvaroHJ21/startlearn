import useAuth from '@/hooks/useAuth';
import { Outlet, Navigate } from 'react-router-dom';

export default function GameLayout() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
