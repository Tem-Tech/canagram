import { useState } from 'react';
import { fetchWords } from './../apiService'; 
import './../src/styles/App.css';
import Heading from './components/Heading';
import Display from './components/Display';
import Keyboard from './components/Keyboard';
import WordList from './components/Wordlist';

function App() {
  const [letters, setLetters] = useState<string[]>([]);
  const [words, setWords] = useState<string[]>([]);
  const [pattern, setPattern] = useState<string>(''); 

  const handleKeyClick = (key: string) => {
    if (key === 'Backspace') {
      setLetters((prevLetters) => prevLetters.slice(0, -1)); 
    } else {
      setLetters((prevLetters) => [...prevLetters, key]); 
    }
  };

  const handleSearch = async () => {
    if (pattern) {
      try {
        const result = await fetchWords(pattern); 
        setWords(result.slice(0, 30).map((wordObj: any) => wordObj.word)); 
      } catch (error) {
        console.error('Failed to fetch words:', error);
      }
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
      <WordList words={words} />
      <Display letters={letters} onPatternChange={handlePatternChange} />
      <Keyboard onClick={handleKeyClick} onSearch={handleSearch} onRefresh={handleRefresh} />
    </>
  );
}

export default App;
