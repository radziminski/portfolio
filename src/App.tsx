import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'styles/global';
import { defaultTheme } from 'styles/theme';
import HomeView from 'views/home';
import AboutView from 'views/about';
import SkillsView from 'views/skills';
import PortfolioView from 'views/portfolio';
import ExperienceView from 'views/experiance';
import ContactView from 'views/contact';
import Footer from 'views/footer';

const App: React.FC = () => {
  return (
    <div className='App'>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <HomeView />
        <AboutView />
        <SkillsView />
        <PortfolioView />
        <ExperienceView />
        <ContactView />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
