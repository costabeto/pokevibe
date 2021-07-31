import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './globalStyle';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';

import Header from './components/Header';

const light = {
  bgcolor: '#e6e6e6',
  red: '#dc143c',
  white: '#e6e6e6',
  font: 'src/assets/fonts/retroGame.ttf',
};

// const dark = {
//   bgcolor: '#3f3f3f',
//   red: '#dc143c',
//   white: '#e6e6e6',
//   font: 'src/assets/fonts/retroGame.ttf',
// };

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
