import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Count from './components/Count.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Count />
    <App />
  </StrictMode>,
)
