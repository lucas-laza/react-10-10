import React from 'react';
import './Container.css';
import { useTheme } from '../DarkThemeContext';

const Container = ({ children, onLogout }) => {
  const { darkTheme, toggleDarkTheme } = useTheme();

  return (
    <div className={darkTheme ? 'container dark' : 'container light'}>
      <h1>Coucou</h1>
      <button onClick={toggleDarkTheme}>
        Toggle {darkTheme ? '🌞' : '🌙'}
      </button>
      <button onClick={onLogout}>Logout</button>
      {children}
    </div>
  );
}

export default Container;
