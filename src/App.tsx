import React, { useState } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import StartComponent from './components/StartComponent';
import Levels from './components/Level2';
import { User } from './types';

const user: User = {
  id: 1,
  name: 'Cindy Bosibori',
  email: 'bosibori.sydney@gmail.com',
};


const App = () => {
  const [currentPath, setCurrentPath] = useState('/');

  return (
    <ThemeProvider>
      <div>
        <nav>
          <button onClick={() => setCurrentPath('/')}>Start</button>
          <button onClick={() => setCurrentPath('/level4')}>Levels</button>
        </nav>

        {currentPath === '/' && <StartComponent />}
        {currentPath === '/level4' && <Levels user={user} />}
      </div>
    </ThemeProvider>
  );
};

export default App;



