import { Link, Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <div>
      <header className="max-w-screen-md w-[90%] m-auto py-4">
        <Link to="/" className="text-2xl font-luckiest">
          START<span className="text-primary">LEARN</span>
        </Link>
      </header>
      <main className="max-w-screen-md w-[90%] m-auto">
        <Outlet />
      </main>
    </div>
  );
}
