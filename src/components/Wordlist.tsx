import { useState, useEffect } from 'react';
import './../styles/__WordList.scss';

type Word = {
  word: string;
  score: number;
};

type WordListProps = {
  words: Word[];
};

const WordList = ({ words }: WordListProps): JSX.Element => {
  const [definition, setDefinition] = useState<string | null>(null);
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);
  const [sortedWords, setSortedWords] = useState<Word[]>([]);
  const [sortOption, setSortOption] = useState('alphabetical');
  const [excludeNoDefinition, setExcludeNoDefinition] = useState(false);

  const fetchDefinition = async (word: string) => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (!response.ok) {
        throw new Error('Failed to fetch definition');
      }
      const data = await response.json();
      return data[0]?.meanings[0]?.definitions[0]?.definition || null;
    } catch (error) {
      console.error('Error fetching definition:', error);
      return null;
    }
  };

  const handleMouseEnter = (word: string) => {
    setHoveredWord(word);
    fetchDefinition(word).then((definition) => setDefinition(definition || 'No definition found.'));
  };

  const handleMouseLeave = () => {
    setHoveredWord(null);
    setDefinition(null);
  };

  useEffect(() => {
    const sortWords = async () => {
      let filteredWords = [...words];

      if (excludeNoDefinition) {
        filteredWords = await Promise.all(
          words.map(async (wordObj) => {
            const definition = await fetchDefinition(wordObj.word);
            return definition ? wordObj : null;
          })
        ).then((results) => results.filter((wordObj) => wordObj !== null) as Word[]);
      }

      const sorted = filteredWords.sort((a, b) => {
        if (sortOption === 'alphabetical') {
          return a.word.localeCompare(b.word);
        } else if (sortOption === 'popularity') {
          return (b.score || 0) - (a.score || 0);
        }
        return 0;
      });

      setSortedWords(sorted);
    };

    sortWords();
  }, [words, sortOption, excludeNoDefinition]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  const handleExcludeNoDefinitionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExcludeNoDefinition(event.target.checked);
  };

  return (
    <div className="word-list">
      {words.length === 0 && sortedWords.length === 0 ? (
        <div className="word-list__content">
          <h3 className="word-list__title">Get Started</h3>
          <p className="word-list__subtitle">Enter some letters...</p>
          <div className="word-list__arrow">
            <svg
              className="arrow-down bounce"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="20"
              height="20"
              viewBox="0 0 256 256"
            >
              <g transform="translate(1.4 1.4) scale(2.8 2.8)">
                <polygon points="0,38.92 2.83,36.08 45,78.25 87.17,36.08 90,38.92 45,83.92 " />
                <polygon points="0,8.92 2.83,6.08 45,48.25 87.17,6.08 90,8.92 45,53.92 " />
              </g>
            </svg>
          </div>
        </div>
      ) : (
        <>
          <div className="word-list__controls">
            <label htmlFor="sort-options">Sort by: </label>
            <select
              id="sort-options"
              value={sortOption}
              onChange={handleSortChange}
              className="word-list__dropdown"
            >
              <option value="alphabetical">Alphabetical</option>
              <option value="popularity">Popularity</option>
            </select>
            <label htmlFor="exclude-no-definition">
              <input
                type="checkbox"
                id="exclude-no-definition"
                checked={excludeNoDefinition}
                onChange={handleExcludeNoDefinitionChange}
              />
              Exclude words without definitions
            </label>
          </div>

          <div className="word-list__columns">
            {[...Array(3)].map((_, colIndex) => (
              <div key={colIndex} className="word-list__column">
                {sortedWords
                  .slice(colIndex * 10, (colIndex + 1) * 10)
                  .map(({ word }, index) => (
                    <p
                      key={index}
                      className="word-list__word"
                      onMouseEnter={() => handleMouseEnter(word)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {word}
                    </p>
                  ))}
              </div>
            ))}
          </div>
        </>
      )}

      {hoveredWord && definition && (
        <div className="word-list__definition"
        >
          <strong>{hoveredWord}:</strong> {definition}
        </div>
      )}
    </div>
  );
};

export default WordList;



   /* <div className="word-list">
       

        {sortedWords.length > 0 ? (
            <div className="word-list__columns">
                {[...Array(3)].map((_, colIndex) => (
                    <div key={colIndex} className="word-list__column">
                        {sortedWords
                            .slice(colIndex * 10, (colIndex + 1) * 10)
                            .map(({ word }, index) => (
                                <p
                                    key={index}
                                    className="word-list__word"
                                    onMouseEnter={() => handleMouseEnter(word)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {word}
                                </p>
                            ))}
                    </div>
                ))}
            </div>
        ) : 
};*/

