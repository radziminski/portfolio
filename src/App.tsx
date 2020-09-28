import React, { useState, useMemo } from 'react';
import TextContentContext, { Languages } from 'services/text-content';
import { ThemeProvider } from 'styled-components';
import getText from 'services/text-content/text';

import { GlobalStyles } from 'styles/global';
import { defaultTheme } from 'styles/theme';
import LandingPage from 'views/landing';
import getNavLinks from 'services/text-content/navLinks';
import getEduAndExp from 'services/text-content/eduAndExp';
import getProjects from 'services/text-content/projects';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Languages>('EN');

  const textContent = useMemo(
    () => ({
      text: getText(language),
      navLinks: getNavLinks(language),
      eduAndExp: getEduAndExp(language),
      projects: getProjects(language),
      setLanguage,
      language
    }),
    [language, setLanguage]
  );

  return (
    <div className='App'>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <TextContentContext.Provider value={textContent}>
          <LandingPage />
        </TextContentContext.Provider>
      </ThemeProvider>
    </div>
  );
};

export default App;
