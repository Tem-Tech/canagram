import { useState } from 'react';
import './../styles/__display.scss'; 

type DisplayProps = {
  letters: string[];
};

const Display = ({ letters }: DisplayProps): JSX.Element => {
  const [boxCount, setBoxCount] = useState<number>(5);

  const handleIncrease = () => {
    setBoxCount(boxCount + 1);
  };

  const handleDecrease = () => {
    if (boxCount > 5) {
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
          disabled={boxCount <= 5}
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
