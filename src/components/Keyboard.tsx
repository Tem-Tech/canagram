import './../styles/__Keyboard.scss';

type KeyboardProps = {
  onClick: (key: string) => void;
};

function generateAlphabet(capital: boolean = true) {
  const startCharCode = capital ? 65 : 97;
  return [...Array(26)].map((_, i) => {
    const letter = String.fromCharCode(startCharCode + i);
    return { letter };
  });
}

const Keyboard = ({ onClick }: KeyboardProps): JSX.Element => {
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
    </div>
  );
};

export default Keyboard;
