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
/* enter button has an on click event there should be a function that sends the API call; 
send the string retrieved from display props as a search sequence and send data 
fetched to the wordlist component.*/
/*Make an enter button with an onclick function*/ 