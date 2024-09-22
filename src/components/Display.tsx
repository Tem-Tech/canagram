import { useState, useEffect } from 'react';
import './../styles/__display.scss'; 

type DisplayProps = {
  letters: string[];
  onPatternChange: (pattern: string) => void;
};

const Display = ({ letters, onPatternChange }: DisplayProps): JSX.Element => {
  const [boxCount, setBoxCount] = useState<number>(5); 
  useEffect(() => {
    if (letters.length > boxCount) {
      setBoxCount(letters.length);
    }
    else if (letters.length < boxCount && boxCount > 5) {
      setBoxCount(letters.length > 5 ? letters.length : 5);
    }
  }, [letters, boxCount]);

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

  return (
    <div className="display">
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
