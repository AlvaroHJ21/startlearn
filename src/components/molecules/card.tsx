import useSpeak from '@/hooks/useSpeak';
import Button from '../atoms/button';
import Icon from '../atoms/icon';

interface Props {
  number: number;
  text: string;
  reveal?: boolean;
}

export default function Card(props: Props) {
  const { number, text, reveal = false } = props;

  const { speak } = useSpeak();

  return (
    <div className={`card ${reveal ? 'card-reveal' : ''}`}>
      <div className="card-back">
        <div className="absolute top-2 right-2">
          <Button onClick={() => speak(text)} color="secondary">
            <Icon icon="volume" />
          </Button>
        </div>
        {reveal && <span className="text-4xl font-bold font-pacifico">{text}</span>}
      </div>
      <div className="card-front">
        <span className="font-bold text-8xl font-luckiest">{number}</span>
      </div>
    </div>
  );
}
