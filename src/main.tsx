import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CharactersContextProvider } from './contexts'
import '../src/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CharactersContextProvider>
      <App />
    </CharactersContextProvider>
  </React.StrictMode>
)
