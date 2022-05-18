import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { GlobalStyle } from './globalStyle';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';

import Header from './components/Header';
import themes from './themes';
import store from './store';

const App = () => {
  const [theme, setTheme] = useState(() => {
    const currentTheme = localStorage.getItem('@pokevibe-theme');
    if (!currentTheme) return true;
    return currentTheme === 'true';
  });

  function handleThemeChange(newTheme) {
    setTheme(newTheme);
    localStorage.setItem('@pokevibe-theme', newTheme);
  }

  return (
    <ThemeProvider theme={themes[theme ? 'light' : 'dark']}>
      <GlobalStyle />
      <BrowserRouter>
        <ReduxProvider store={store}>
          <Header theme={theme} onThemeChange={(v) => handleThemeChange(v)} />
          <Routes />
        </ReduxProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
