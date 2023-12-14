import Button from '@/components/atoms/button';
import InputText from '@/components/atoms/input';

export default function AppPage() {
  return (
    <div>
      <div className="flex flex-col gap-4 py-8">
        <h2 className="text-3xl text-center text-primary font-luckiest">Nuevo jugador</h2>
        <InputText placeholder="Ariana" />
        <Button variant="outlined">Practicar</Button>
        <Button.Link to="/game">Nueva Partida</Button.Link>
      </div>
    </div>
  );
}
