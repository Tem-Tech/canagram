import { StrictMode } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Router>
    <App />
    </Router>
  </StrictMode>,
)
