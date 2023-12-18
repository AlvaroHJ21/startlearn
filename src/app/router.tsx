import { createBrowserRouter } from 'react-router-dom';
import AppPage from './page';
import AppLayout from './layout';
import GamePage from './game/page';
import TopPage from './top/page';
import GameLayout from './game/layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <AppPage />,
      },
      {
        path: '/game',
        element: <GameLayout />,
        children: [
          {
            path: '/game',
            element: <GamePage />,
          },
        ],
      },
      {
        path: '/top',
        element: <TopPage />,
      },
    ],
  },
]);
