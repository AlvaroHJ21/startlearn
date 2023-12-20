import { useState } from 'react';
import { CardNumber, numbers } from '@/data/numbers';

function getCardNumberRandom() {
  const index = Math.floor(Math.random() * numbers.length);
  return numbers[index];
}

export default function usePractice() {
  const [revealed, setRevealed] = useState(false);

  const [currentNumber, setCurrentNumber] = useState<CardNumber>(getCardNumberRandom());

  const [endGame, setEndGame] = useState(false);

  const [successes, setSuccesses] = useState(0);
  const [errors, setErrors] = useState(0);

  function next() {
    setRevealed(false);
    setCurrentNumber(getCardNumberRandom());
  }

  function reset() {
    setEndGame(false);
    setRevealed(false);
  }

  function increaseSuccesses() {
    setSuccesses(successes + 1);
    next();
  }

  function increaseErrors() {
    setErrors(errors + 1);
    next();
  }

  function revelate() {
    setRevealed(true);
  }

  return {
    revealed,
    successes,
    errors,

    currentNumber,

    setRevealed,
    next,
    endGame,

    increaseSuccesses,
    increaseErrors,
    reset,
    revelate,
  };
}
