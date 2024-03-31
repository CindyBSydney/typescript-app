import React, { useState } from 'react';
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
      <div>
        <nav>
          <button onClick={() => setCurrentPath('/level4')}>Levels</button>
        </nav>

        {currentPath === '/level4' && <Levels user={user} />}
      </div>
  );
};

export default App;


