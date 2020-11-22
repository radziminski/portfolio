import React, { useState, useMemo, useEffect, useCallback } from 'react';
import TextContentContext, { Languages } from 'services/text-content';
import { ThemeProvider } from 'styled-components';
import getText from 'services/text-content/text';

import { GlobalStyles } from 'styles/global';
import { defaultTheme } from 'styles/theme';
import LandingPage from 'views/landing';
import getNavLinks from 'services/text-content/navLinks';
import getEduAndExp from 'services/text-content/eduAndExp';
import getProjects from 'services/text-content/projects';
import getSkills from 'services/text-content/skills';
import { getCurrentDevice } from 'styles/breakpoints';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Languages>('EN');
  // Used only for re-rendering app on size change
  // eslint-disable-next-line
  const [deviceDimensions, setDeviceDimensions] = useState<number[]>([
    window.innerWidth,
    window.innerHeight
  ]);
  console.log(getCurrentDevice());

  const onResize = useCallback(() => {
    setDeviceDimensions([window.innerWidth, window.innerHeight]);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [onResize]);

  const textContent = useMemo(
    () => ({
      text: getText(language),
      navLinks: getNavLinks(language),
      eduAndExp: getEduAndExp(language),
      projects: getProjects(language),
      skills: getSkills(language),
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
