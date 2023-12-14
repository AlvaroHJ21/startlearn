import { createBrowserRouter } from 'react-router-dom';
import AppPage from './page';
import AppLayout from './layout';
import GamePage from './game/page';

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
        element: <GamePage />,
      },
    ],
  },
]);
