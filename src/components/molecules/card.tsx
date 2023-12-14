interface Props {
  number: number;
  text: string;
  reveal?: boolean;
}

export default function Card(props: Props) {
  const { number, text, reveal = false } = props;
  return (
    <div className={`card ${reveal ? 'card-reveal' : ''}`}>
      <div className="card-back">
        {reveal && <span className="text-4xl font-bold font-pacifico">{text}</span>}
      </div>
      <div className="card-front">
        <span className="font-bold text-8xl font-luckiest">{number}</span>
      </div>
    </div>
  );
}
