import React from 'react';
import Flexbox from 'flexbox-react';
import ShoppingPage from './views/ShoppingPage/ShoppingPage';
import NavMenu from './components/NavMenu/NavMenu';

import './App.scss';

function App() {
  return (
    <Flexbox className="App"
      flexDirection="column"
    >
      <NavMenu />
      <Flexbox justifyContent="center">
        <ShoppingPage />
      </Flexbox>
    </Flexbox>
  );
}

export default App;

