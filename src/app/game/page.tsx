import Button from '@/components/atoms/button';
import Icon from '@/components/atoms/icon';
import InputText from '@/components/atoms/input';
import Card from '@/components/molecules/card';
import useAuth from '@/hooks/useAuth';
import useGame, { Status } from '@/hooks/useGame';
import useRecognition from '@/hooks/useRecognition';
import useRecords from '@/hooks/useRecords';
import { cn } from '@/lib/util';
export default function GamePage() {
  const { result: response, setResult: setResponse, isListening, handleStart } = useRecognition();

  const { user } = useAuth();

  const { startCreateRecord } = useRecords();

  const { revealed, currentNumber, score, next, verify, lives, endGame, status, reset } = useGame({
    async handleSaveScore(score) {
      if (!user) return;
      await startCreateRecord({
        name: user.name,
        score,
      });
    },
  });

  if (endGame) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 py-8">
        <div className="text-3xl font-bold">Fin del juego</div>
        <div className="text-2xl font-bold">Puntuación: {score}</div>
        <Button onClick={reset}>Volver a jugar</Button>
      </div>
    );
  }

  return (
    <div>
      <div className="text-xl font-bold text-primary">{score} 🏆</div>
      <div className="text-xl font-bold text-primary">{lives} ❤️</div>

      <div className="py-4">
        <Card number={currentNumber.number} text={currentNumber.text} reveal={revealed} />
      </div>

      <InputText
        value={response}
        onChange={(e) => setResponse(e.target.value)}
        className="text-xl font-bold text-center"
        readOnly
      />

      <div className="flex flex-col gap-2 mt-4">
        {isListening && !revealed && (
          <Button disabled>
            <div className="w-5 h-5 bg-white rounded-full animate-pulse"></div>
          </Button>
        )}

        {!isListening && !revealed && (
          <Button onClick={handleStart} variant="outlined">
            <Icon icon="mic" /> Hablar
          </Button>
        )}

        {revealed && (
          <div
            className={cn(
              'p-4 flex justify-between items-center rounded-xl',
              status === Status.correct && 'bg-green-300',
              status === Status.wrong && 'bg-red-300'
            )}
          >
            {status === Status.correct && (
              <p className="text-2xl font-bold text-green-600">✅ Correcto!</p>
            )}
            {status === Status.wrong && (
              <p className="text-2xl font-bold text-red-600">❌ Incorrecto</p>
            )}

            <Button
              onClick={() => {
                next();
                setResponse('');
              }}
              color={
                status === Status.correct
                  ? 'success'
                  : status === Status.wrong
                  ? 'danger'
                  : 'primary'
              }
            >
              Continuar
            </Button>
          </div>
        )}

        {!revealed && response.length > 0 && (
          <Button onClick={() => verify(response)}>Comprobar</Button>
        )}
      </div>
    </div>
  );
}
