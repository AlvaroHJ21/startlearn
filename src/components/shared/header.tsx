import { Link } from 'react-router-dom';
import Button from '../atoms/button';
import Icon from '../atoms/icon';
import useAuth from '@/hooks/useAuth';

export default function Header() {
  const { user, handleLogout } = useAuth();
  return (
    <header className="max-w-screen-md w-[90%] m-auto py-4 flex gap-2">
      <Link to="/" className="text-2xl font-luckiest">
        START<span className="text-primary">LEARN</span>
      </Link>

      <div className="flex-1"></div>

      <Button.Link to="/top">
        <Icon icon="bars" />
      </Button.Link>

      {user && (
        <div className="flex items-center gap-1">
          <div className="badge badge-outline">
            <Icon icon="user" />
            <span className="font-bold">{user.name}</span>
          </div>
          <button onClick={handleLogout} className="p-2 text-white rounded-full bg-primary">
            <Icon icon="x" />
          </button>
        </div>
      )}
    </header>
  );
}
