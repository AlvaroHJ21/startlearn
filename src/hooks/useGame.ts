import { useState } from 'react';
import { CardNumber, numbers } from '@/data/numbers';

function getCardNumberRandom() {
  const index = Math.floor(Math.random() * numbers.length);
  return numbers[index];
}

export enum Status {
  playing = 'playing',
  correct = 'correct',
  wrong = 'wrong',
  endGame = 'endGame',
}

interface Props {
  handleSaveScore(score: number): void;
}

export default function useGame(props: Props) {
  const { handleSaveScore } = props;

  const [revealed, setRevealed] = useState(false);

  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);

  const [currentNumber, setCurrentNumber] = useState<CardNumber>(getCardNumberRandom());

  const [endGame, setEndGame] = useState(false);
  const [status, setStatus] = useState<Status>(Status.playing);

  function verify(guess: string) {
    setRevealed(true);

    if (
      currentNumber.text === guess.replace('.', '') ||
      currentNumber.number.toString() === guess.replace('.', '')
    ) {
      setScore(score + 1);
      setStatus(Status.correct);
    } else {
      setLives(lives - 1);
      setStatus(Status.wrong);

      if (lives === 1) {
        setEndGame(true);
        setStatus(Status.endGame);

        handleSaveScore(score);
      }
    }
  }

  function next() {
    setRevealed(false);
    setCurrentNumber(getCardNumberRandom());
  }

  function reset(){
    setScore(0);
    setLives(3);
    setEndGame(false);
    setStatus(Status.playing);
    setRevealed(false);
  }

  return {
    revealed,
    score,
    lives,
    currentNumber,
    status,

    setRevealed,
    verify,
    next,
    endGame,

    reset
  };
}
