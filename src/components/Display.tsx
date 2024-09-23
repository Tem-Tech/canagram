import { useState, useEffect } from 'react';
import './../styles/__display.scss'; 

type DisplayProps = {
  letters: string[];
};

const Display = ({ letters }: DisplayProps): JSX.Element => {
  const [boxCount, setBoxCount] = useState<number>(5);

  useEffect(() => {
    if (letters.length > boxCount) {
      setBoxCount(letters.length);
    } else if (letters.length < boxCount && boxCount > 5) {
      setBoxCount(letters.length);
    }
  }, [letters]);

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
