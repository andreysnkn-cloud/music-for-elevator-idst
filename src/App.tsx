import { useMemo, useState } from 'react';
import { bonusLink, channelUrl, codeWord, floors, type Floor } from './data/floors';

type Screen = 'gate' | 'home' | 'floor' | 'code';

function App() {
  const [screen, setScreen] = useState<Screen>('gate');
  const [selectedFloor, setSelectedFloor] = useState<Floor | null>(null);
  const [subscribed, setSubscribed] = useState(false);
  const [doorsClosed, setDoorsClosed] = useState(false);
  const [word, setWord] = useState('');
  const [wordAccepted, setWordAccepted] = useState(false);
  const [wordError, setWordError] = useState('');

  const title = useMemo(() => {
    if (screen === 'floor' && selectedFloor) return `ЭТАЖ ${selectedFloor.id}`;
    if (screen === 'code') return 'КОДОВОЕ СЛОВО';
    if (screen === 'home') return 'ВЫБЕРИТЕ ЭТАЖ';
    return 'ПРОВЕРКА ДОСТУПА';
  }, [screen, selectedFloor]);

  const withDoorTransition = (action: () => void) => {
    setDoorsClosed(true);
    window.setTimeout(() => {
      action();
      setDoorsClosed(false);
    }, 500);
  };

  const handleFakeSubscriptionCheck = () => {
    setSubscribed(true);
    withDoorTransition(() => setScreen('home'));
  };

  const openFloor = (floor: Floor) => {
    withDoorTransition(() => {
      setSelectedFloor(floor);
      setScreen('floor');
    });
  };

  const goHome = () => {
    withDoorTransition(() => {
      setSelectedFloor(null);
      setScreen('home');
      setWord('');
      setWordAccepted(false);
      setWordError('');
    });
  };

  const openCodeScreen = () => {
    withDoorTransition(() => {
      setWord('');
      setWordAccepted(false);
      setWordError('');
      setScreen('code');
    });
  };

  const checkWord = () => {
    if (word.trim().toLowerCase() === codeWord.toLowerCase()) {
      setWordAccepted(true);
      setWordError('');
      return;
    }

    setWordAccepted(false);
    setWordError('Лифт не распознал команду. Попробуйте ещё раз.');
  };

  return (
    <div className="app-shell">
      <div className="elevator-frame">
        <header className="display-panel">
          <div className="brand">idst — Музыка для лифта</div>
          <div className="display">{title}</div>
        </header>

export default App;
