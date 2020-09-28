import React, { useContext, useState } from 'react';
import Dropdown from 'components/Dropdown';
import TextContentContext from 'services/text-content';

export const LanguageDropdown: React.FC = () => {
  const { setLanguage } = useContext(TextContentContext);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  return (
    <Dropdown
      width={120}
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
