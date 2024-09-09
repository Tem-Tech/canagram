// src/components/Display.tsx
import React, { useState } from 'react';
import './../styles/__display.scss'; // Adjust the path according to your project structure

type DisplayProps = {
  letters: string[];
};

const Display = ({ letters }: DisplayProps): JSX.Element => {
  const [boxCount, setBoxCount] = useState<number>(3);

  const handleIncrease = () => {
    setBoxCount(boxCount + 1);
  };

  const handleDecrease = () => {
    if (boxCount > 3) {
      setBoxCount(boxCount - 1);
    }
  };

  const letterSequence = letters.slice(0, boxCount).join('');

  return (
    <div className="display">
      <div className="display__controls">
        <button
          className="display__button display__button--increase"
          onClick={handleIncrease}
        >
          ↑
        </button>
        <button
          className="display__button display__button--decrease"
          onClick={handleDecrease}
          disabled={boxCount <= 3}
        >
          ↓
        </button>
      </div>
      <div className="display__boxes">
        {[...Array(boxCount)].map((_, index) => (
          <div key={index} className="display__box">
            {letters[index] || ''}
          </div>
        ))}
      </div>
      <p className="display__sequence">Letter Sequence: {letterSequence}</p>
    </div>
  );
};

export default Display;
