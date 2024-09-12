import { useState, useEffect } from 'react';
import './../styles/__display.scss'; 

type DisplayProps = {
  letters: string[];
  onPatternChange: (pattern: string) => void;
};

const Display = ({ letters, onPatternChange }: DisplayProps): JSX.Element => {
  const [boxCount, setBoxCount] = useState<number>(5);

  const generatePattern = () => {
    let pattern = '';
    for (let i = 0; i < boxCount; i++) {
      if (letters[i]) {
        pattern += letters[i];
      }
    }
    return pattern;
  };
  useEffect(() => {
    const pattern = generatePattern();
    onPatternChange(pattern); 
  }, [letters, boxCount]);
  const handleIncrease = () => {
    setBoxCount(boxCount + 1);
  };

  const handleDecrease = () => {
    if (boxCount > 3) {
      setBoxCount(boxCount - 1);
    }
  };
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
    </div>
  );
};

export default Display;
/* loop through the letters array and push each character into a "pattern" string which formms the api call. 
Extract this string and send to keyboard component*/