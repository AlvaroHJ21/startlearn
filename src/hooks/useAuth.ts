import { useShallow } from 'zustand/react/shallow';
import { useNavigate } from 'react-router-dom';

import { useAuthStore } from '@/store/auth.store';

export default function useAuth() {
  const { user, state, login, logout } = useAuthStore(useShallow((state) => state));

  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/');
  }

  return { user, state, login, handleLogout };
}
