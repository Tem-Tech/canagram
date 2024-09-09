import React from 'react';
import './../styles/__Keyboard.scss';

const SCRABBLE_SCORES: { [key: string]: number } = {
  A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, J: 8,
  K: 5, L: 1, M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1,
  U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10,
};

type KeyboardProps = {
  onClick: (key: string) => void;
};

const Keyboard = ({ onClick }: KeyboardProps): JSX.Element => {
  return (
    <div className="keyboard">
      {Object.keys(SCRABBLE_SCORES).map((letter) => (
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
        onClick={() => onClick('Backspace')}
      >
        ←
      </button>
      <button
        className="keyboard__key keyboard__key--special"
        onClick={() => onClick('?')}

      >
        ?
      </button>
    </div>
  );
};

export default Keyboard;
