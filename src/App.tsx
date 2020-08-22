import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'styles/global';
import { defaultTheme } from 'styles/theme';
import HomeView from 'views/home';
import AboutView from 'views/about';

const App: React.FC = () => {
  return (
    <div className='App'>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <HomeView />
        <AboutView />
      </ThemeProvider>
    </div>
  );
};

export default App;
