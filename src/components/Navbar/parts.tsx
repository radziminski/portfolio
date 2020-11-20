import React, { useContext, useState } from 'react';
import Dropdown from 'components/Dropdown';
import TextContentContext from 'services/text-content';
import { getValueForDevice } from 'styles/breakpoints';

export const LanguageDropdown: React.FC = () => {
  const { setLanguage } = useContext(TextContentContext);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  return (
    <Dropdown
      width={getValueForDevice({
        desktopLarge: 120,
        laptopLarge: 110,
        laptopSmall: 100
      })}
      options={['English', 'Polski']}
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
