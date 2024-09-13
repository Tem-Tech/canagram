import { useState } from 'react';
import './../styles/__dictionary.scss';

const Dictionary = () => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchDefinition = async () => {
    if (!word) return;
    setLoading(true);
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await response.json();

      console.log('API response:', data); 

      if (data.length > 0) {
        const firstMeaning = data[0].meanings[0]; 
        setDefinition(firstMeaning.definitions[0].definition); 
      } else {
        setDefinition('No definition found.');
      }
    } catch (error) {
      console.error('Error fetching word definition:', error);
      setDefinition('Error fetching definition');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      fetchDefinition();
    }
  };

  return (
    <div className="dictionary">
      <input
        type="text"
        value={word}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type a word..."
      />
      <button onClick={fetchDefinition} disabled={loading}>
        {loading ? 'Loading...' : 'Search'}
      </button>
      {definition && (
        <div className="dictionary__definition">
          <h3>Definition:</h3>
          <p>{definition}</p>
        </div>
      )}
    </div>
  );
};

export default Dictionary;