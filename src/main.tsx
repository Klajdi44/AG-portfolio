import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss';
import App from './App'
import { LanguageProvider } from './LanguageContext';

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
