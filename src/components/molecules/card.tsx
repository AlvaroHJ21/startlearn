import useSpeak from '@/hooks/useSpeak';
import Button from '../atoms/button';
import Icon from '../atoms/icon';
import { cn } from '@/lib/util';

interface Props {
  number: number;
  text: string;
  reveal?: boolean;
  size?: 'sm' | 'md';
}

export default function Card(props: Props) {
  const { number, text, reveal = false, size = 'md' } = props;

  const { speak } = useSpeak();

  return (
    <div
      className={cn(
        'card',
        reveal && 'card-reveal',
        size === 'sm' && 'card-sm',
        size === 'md' && 'card-md'
      )}
    >
      <div className="card-back">
        <div className="absolute top-2 right-2">
          <Button onClick={() => speak(text)} color="secondary">
            <Icon icon="volume" />
          </Button>
        </div>
        {reveal && <span className="text-4xl font-bold text-center pointer-events-none font-pacifico">{text}</span>}
      </div>
      <div className="card-front">
        <span className="font-bold pointer-events-none text-8xl font-luckiest">{number}</span>
      </div>
    </div>
  );
}
