import React from 'react';
import logo from './assets/img/pokelogo.webp';

function App() {
  return (
    <div
      className='App'
      style={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src={logo} className='App-logo' alt='logo' />
    </div>
  );
}

export default App;
