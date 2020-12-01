import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Dropdown from 'components/Dropdown';
import TextContentContext from 'services/text-content';
import { getValueForDevice } from 'styles/breakpoints';

const SUPPORTED_LANGUAGES = ['English', 'Polski'];

export const LanguageDropdown: React.FC = () => {
  const { setLanguage, language } = useContext(TextContentContext);
  const [selectedLanguage, setSelectedLanguage] = useState(
    language === 'EN' ? SUPPORTED_LANGUAGES[0] : SUPPORTED_LANGUAGES[1]
  );
  return (
    <Dropdown
      width={getValueForDevice({
        desktopLarge: 120,
        laptopLarge: 110,
        laptopSmall: 100
      })}
      options={SUPPORTED_LANGUAGES}
      value={selectedLanguage}
      onChange={(value) => {
        setSelectedLanguage(value);
        if (!setLanguage) return;
        if (value === 'English') setLanguage('EN');
        else setLanguage('PL');
      }}
    />
  );
};

export const DarkOverlay = styled.div({
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 8888,
  animation: 'fade-in 0.2s ease-in'
});
