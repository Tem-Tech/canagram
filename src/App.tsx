import { useState, useEffect } from 'react'
import { fetchWords } from './../apiService'; 
import './../src/styles/App.css'
import Heading from './components/Heading'
import Display from './components/Display'
import Keyboard from './components/Keyboard'
import WordList from './components/Wordlist'
function App() {
  const [letters, setLetters] = useState<string[]>([]);
  const [pattern, setPattern] = useState<string>(''); 
  const [data, setData] = useState<any[]>([]);
  const handlePatternChange = (newPattern: string) => {
    setPattern(newPattern);
  };
  useEffect(() => {
    if (pattern) {
      fetchWords(pattern)
        .then((result) => {
          const words = result.map((item: { word: string }) => item.word);
          setData(words.slice(0, 10)); 
        })
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [pattern]);
    
  const handleKeyClick = (key: string) => {
    if (key === 'Backspace') {
      setLetters((prevLetters) => prevLetters.slice(0, -1)); 
    }  else {
      setLetters((prevLetters) => [...prevLetters, key]); 
    }
  };
  return (
    <>
      <Heading />  
      <WordList words={data} />
      <Display letters={letters} onPatternChange={handlePatternChange}/>
      <Keyboard pattern={pattern} onClick={handleKeyClick} /> 
    
   
    </>
  )
}

export default App
