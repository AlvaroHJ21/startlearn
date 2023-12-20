import { useState } from 'react';
import Card from '@/components/molecules/card';
import { numbers } from '@/data/numbers';

export default function NumbersPage() {
  const [cards, setCards] = useState(numbers.map((number) => ({ number, reveal: false })));

  function toggleRevealByNumber(number: number) {
    setCards((cards) =>
      cards.map((card) => {
        if (card.number.number === number) {
          return { ...card, reveal: !card.reveal };
        }
        return card;
      })
    );
  }

  function handleClickCard(e: React.MouseEvent, number: number) {
    const target = e.target as HTMLDivElement;

    if (target.classList.contains('card-back') || target.classList.contains('card-front')) {
      toggleRevealByNumber(number);
    }
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {cards.map((card) => (
        <div key={card.number.number} onClick={(e) => handleClickCard(e, card.number.number)}>
          <Card
            number={card.number.number}
            text={card.number.text}
            size="sm"
            reveal={card.reveal}
          />
        </div>
      ))}
    </div>
  );
}
