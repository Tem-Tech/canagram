import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { fetchWords } from './../apiService';
import './styles/App.css';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import Buttons from './components/Button';
import Display from './components/Display';
import Keyboard from './components/Keyboard';
import WordList from './components/Wordlist';
import Dictionary from './components/Dictionary1';

type Word = {
  word: string;
  score: number;
};

function App() {
  const [letters, setLetters] = useState<string[]>([]);
  const [words, setWords] = useState<Word[]>([]);

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
      setWords(
        result.slice(0, 30).map((wordObj: any) => ({
          word: wordObj.word,
          score: wordObj.score || 0,
        }))
      );
    } catch (error) {
      console.error('Error fetching words:', error);
    }
  };

  const handleRefresh = () => {
    setLetters([]);
    setWords([]);
  };

  return (
    <div >
      <Router>
        <Navbar />
        <Heading />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Buttons />
              </>
            }
          />
          <Route
            path="/canagram/page1"
            element={
              <>
                <WordList words={words} />
                <Display letters={letters} />
                <Keyboard onClick={handleKeyClick} onSearch={handleSearch} onRefresh={handleRefresh} />
              </>
            }
          />
          <Route
            path="/canagram/dictionary"
            element={
              <>
                <Dictionary />
              </>
            }
          />
          <Route
            path="/canagram/dictionary/:word"
            element={
              <>
                <Dictionary />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
