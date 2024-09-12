import './../styles/__WordList.scss';

type WordListProps = {
  words: string[];
};

const WordList = ({ words }: WordListProps): JSX.Element => {
  return (
    <div className="word-list">
      {words.length > 0 ? (
        <div className="word-list__columns">
          <div className="word-list__column">
            {words.slice(0, Math.ceil(words.length / 3)).map((word, index) => (
              <p key={index} className="word-list__word">{word}</p>
            ))}
          </div>
          <div className="word-list__column">
            {words.slice(Math.ceil(words.length / 3)).map((word, index) => (
              <p key={index} className="word-list__word">{word}</p>
            ))}
          </div>
          <div className="word-list__column">
            {words.slice(Math.ceil(words.length / 3)).map((word, index) => (
              <p key={index} className="word-list__word">{word}</p>
            ))}
          </div>
        </div>
      ) : (
        <div className="word-list__content">
          <h3 className="word-list__title">Get Started</h3>
          <p className="word-list__subtitle">Enter some letters...</p>
          <div className="word-list__arrow">
            <svg className="arrow-down bounce" xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20" viewBox="0 0 256 256">
              <g transform="translate(1.4 1.4) scale(2.8 2.8)">
                <polygon points="0,38.92 2.83,36.08 45,78.25 87.17,36.08 90,38.92 45,83.92 " />
                <polygon points="0,8.92 2.83,6.08 45,48.25 87.17,6.08 90,8.92 45,53.92 " />
              </g>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default WordList;