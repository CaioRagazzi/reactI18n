import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {

  const { t, i18n } = useTranslation();

  const handleClick = (language) => {
    i18n.changeLanguage(language);
  }

  return (
      <div className="App">
        <nav style={{ width: '100%', padding: '2rem 0', backgroundColor: 'gray' }}>
          <button onClick={() => handleClick('en')}>English</button>
          <button onClick={() => handleClick('pt')}>Portuguese</button>
        </nav>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          {t('Text.1')}
        </p>
        </header>
      </div>
  );
}

export default App;
