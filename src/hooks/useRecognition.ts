import { useState } from 'react';
import { num2Letters } from '@/helpers/recognition';

export default function useRecognition() {
  const [result, setResult] = useState('');

  const [isListening, setIsListening] = useState(false);

  function handleStart() {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {

      const recognition = new webkitSpeechRecognition();

      recognition.lang = 'es-ES';

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;

        const number = transcript.match(/\b\d+\b/g);

        if (number) {
          const numberPass = parseInt(number[0], 10);

          const converted = num2Letters(numberPass);

          setResult(converted);
        } else {
          setResult(transcript.replace('.', '').toLowerCase());
        }
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
      setIsListening(true);
    }
  }

  return { result, setResult, isListening, handleStart };
}
