export default function useSpeak() {
  function speak(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-PE';
    // utterance.rate = 1.2;
    // utterance.pitch = 1.2;
    speechSynthesis.speak(utterance);
  }

  return { speak };
}
