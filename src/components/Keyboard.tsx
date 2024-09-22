import { useEffect } from 'react';
import './../styles/__Keyboard.scss';

type KeyboardProps = {
  onClick: (key: string) => void;
  onSearch: () => void;
  onRefresh: () => void;
};

function generateAlphabet(capital: boolean = true) {
  const startCharCode = capital ? 65 : 97;
  return [...Array(26)].map((_, i) => {
    const letter = String.fromCharCode(startCharCode + i);
    return { letter };
  });
}

const Keyboard = ({ onClick, onSearch, onRefresh }: KeyboardProps): JSX.Element => {
  const letters = generateAlphabet();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key, shiftKey } = event;
      if ((shiftKey && key === '?') || key === ' ') {
        event.preventDefault(); 
        onClick('?');           
      } 
      else if (/^[a-zA-Z]$/.test(key)) {
        onClick(key.toUpperCase()); 
      } 
      else if (key === 'Backspace') {
        event.preventDefault(); 
        onClick('Backspace');
      } 
      else if (key === 'Enter') {
        event.preventDefault(); 
        onSearch();
      } 
      else if (key === 'F5') {
        event.preventDefault(); 
        onRefresh();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClick, onSearch, onRefresh]);

  return (
    <div className="keyboard">
      {letters.map(({ letter }) => (
        <button
          key={letter}
          className="keyboard__key"
          onClick={() => onClick(letter)}
        >
          {letter}
        </button>
      ))}
      <button
        className="keyboard__key keyboard__key--special"
        onClick={() => onClick('?')}
      >
        ?
      </button>
      <button
        className="keyboard__key keyboard__key--special"
        onClick={() => onClick('Backspace')}
      >
        ←
      </button>
      <button
        className="keyboard__key keyboard__key--special"
        onClick={onSearch}
      >
        🔍
      </button>
      <button
        className="keyboard__key keyboard__key--special"
        onClick={onRefresh}
      >
        🔄
      </button>
    </div>
  );
};

export default Keyboard;
