import Button from '@/components/atoms/button';
import Icon from '@/components/atoms/icon';
import InputText from '@/components/atoms/input';
import Card from '@/components/molecules/card';
import usePractice from '@/hooks/usePractice';
import useRecognition from '@/hooks/useRecognition';

export default function PracticePage() {
  const { result: response, setResult: setResponse, isListening, handleStart } = useRecognition();

  const {
    revealed,
    currentNumber,
    successes,
    errors,
    increaseSuccesses,
    increaseErrors,
    revelate,
  } = usePractice();

  return (
    <div>
      <div className="text-xl font-bold text-primary">{successes} ✅</div>
      <div className="text-xl font-bold text-primary">{errors} ❌</div>

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
          <div className="flex items-center justify-center gap-2 p-4 rounded-xl">
            <Button onClick={increaseSuccesses} color="success">
              <Icon icon="check" />
            </Button>
            <Button onClick={increaseErrors} color="danger">
              <Icon icon="x" />
            </Button>
          </div>
        )}

        {!revealed && <Button onClick={() => revelate()}>Revelar</Button>}
      </div>
    </div>
  );
}
