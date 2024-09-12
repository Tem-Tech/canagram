import { useState } from 'react';
import { fetchWords } from './../apiService';
import './styles/App.css';
import Heading from './components/Heading';
import Display from './components/Display';
import Keyboard from './components/Keyboard';
import WordList from './components/Wordlist';

type Word = {
  word: string;
  score: number;
};

function App() {
  const [letters, setLetters] = useState<string[]>([]);
  const [words, setWords] = useState<Word[]>([]);
  const [pattern, setPattern] = useState<string>(''); 

  const handleKeyClick = (key: string) => {
    if (key === 'Backspace') {
      setLetters((prevLetters) => prevLetters.slice(0, -1)); 
    } else {
      setLetters((prevLetters) => [...prevLetters, key]); 
    }
  };

  const handleSearch = async () => {
    const query = letters.join('');
    try {
      const result = await fetchWords(query); 
      setWords(result.slice(0, 30).map((wordObj: any) => ({
        word: wordObj.word,
        score: wordObj.score || 0 
      })));
    } catch (error) {
      console.error('Error fetching words:', error);
    }
  };

  const handleRefresh = () => {
    setLetters([]); 
    setWords([]);   
    setPattern(''); 
  };

  const handlePatternChange = (newPattern: string) => {
    setPattern(newPattern); 
  };

  return (
    <>
      <Heading />  
      {words.length > 0 && <WordList words={words} />}
      <Display letters={letters} onPatternChange={handlePatternChange} />
      <Keyboard onClick={handleKeyClick} onSearch={handleSearch} onRefresh={handleRefresh} />
    </>
  );
}

export default App;
