import { useState } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/atoms/button';
import InputText from '@/components/atoms/input';
import useAuth from '@/hooks/useAuth';

export default function AppPage() {
  const [name, setName] = useState('');

  const navigate = useNavigate();

  const { login, user } = useAuth();

  function handleNewGame() {
    if (user) return navigate('/game');

    if (!name) return toast.error('Debes ingresar un nombre');

    login(name);
    navigate('/game');
  }

  return (
    <div>
      <div className="flex flex-col gap-2 py-8">
        {!user && (
          <>
            <h2 className="text-3xl text-center text-primary font-luckiest">Nuevo jugador</h2>
            <InputText
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ariana"
            />
          </>
        )}

        <Button.Link to="/practice" variant="outlined">
          Practicar
        </Button.Link>
        <Button onClick={handleNewGame}>Nueva Partida</Button>
      </div>

      <div className="fixed text-sm tracking-[-.2rem] bottom-2 right-4">
        <Button.Link to="/numbers">
          1<span className="text-xl">2</span><span className='text-2xl'>3</span>
        </Button.Link>
      </div>
    </div>
  );
}
