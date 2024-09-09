import { useState } from 'react'
import './../src/styles/App.css'
import Heading from './components/Heading'
import Display from './components/Display'
import Keyboard from './components/Keyboard'
function App() {
  const [letters, setLetters] = useState<string[]>([]); 

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
    
      <Display letters={letters} />

      <Keyboard onClick={handleKeyClick} /> 
   
    </>
  )
}

export default App
