
import React from 'react';
import { useTheme } from './ThemeContext'; 
const StartComponent = () => {
  const { theme, toggleTheme } = useTheme();

  const themeClassName = theme === 'light' ? 'theme-light' : 'theme-dark';
  
  return (
    <div className={themeClassName}>
      This is the second assignment
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default StartComponent;

  
