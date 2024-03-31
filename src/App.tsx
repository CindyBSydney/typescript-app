import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
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
          <button onClick={() => setCurrentPath('/login')}>Login</button>
          <button onClick={() => setCurrentPath('/signup')}>Signup</button>
        </nav>

        {currentPath === '/' && <StartComponent />}
        {currentPath === '/level4' && <Levels user={user} />}
        {currentPath === '/login' && <Login />}
        {currentPath === '/signup' && <Signup />}
      </div>
    </ThemeProvider>
  );
};

export default App;





