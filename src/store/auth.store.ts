import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface State {
  user?: {
    name: string;
  };
  state: 'authenticated' | 'unauthenticated' | 'loading';

  login: (name: string) => void;
  logout: () => void;
}

export const useAuthStore = create<State>()(
  persist(
    devtools((set) => ({
      state: 'unauthenticated', 

      login: (name: string) => {
        set({
          user: {
            name,
          },
          state: 'authenticated',
        });
      },

      logout: () => {
        set({
          user: undefined,
          state: 'unauthenticated',
        });
      },
    })),
    {
      name: 'auth-store',
    }
  )
);
