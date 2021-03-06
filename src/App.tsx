import React, { useState, useMemo, useEffect, useCallback } from 'react';
import TextContentContext, { Language } from 'services/text-content';
import { ThemeProvider } from 'styled-components';
import getText from 'services/text-content/text';

import { GlobalStyles } from 'styles/global';
import { defaultTheme } from 'styles/theme';
import LandingPage from 'views/landing';
import getNavLinks from 'services/text-content/navLinks';
import getEduAndExp from 'services/text-content/eduAndExp';
import getProjects from 'services/text-content/projects';
import getSkills from 'services/text-content/skills';

const App: React.FC = () => {
  const [currLanguage, setCurrLanguage] = useState<Language>(
    (localStorage.getItem('language') as Language) || 'EN'
  );
  // Used for FOUC hiding
  const [appOpacity, setAppOpacity] = useState(0);

  // Used only for re-rendering app on size change
  // eslint-disable-next-line
  const [deviceDimensions, setDeviceDimensions] = useState<number[]>([
    window.innerWidth,
    window.innerHeight
  ]);

  const onResize = useCallback(() => {
    setDeviceDimensions([window.innerWidth, window.innerHeight]);
  }, []);

  const setLanguage = useCallback((language: Language): void => {
    localStorage.setItem('language', language);
    setCurrLanguage(language);
  }, []);

  const language = currLanguage;

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [onResize]);

  useEffect(() => {
    setTimeout(() => {
      setAppOpacity(1);
    }, 50);
  }, []);

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
          <div style={{ opacity: appOpacity, transition: 'opacity 1s' }}>
            <LandingPage />
          </div>
        </TextContentContext.Provider>
      </ThemeProvider>
    </div>
  );
};

export default App;
