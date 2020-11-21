import { FlexBox } from 'components/Box';
import React, { useContext, useMemo } from 'react';
import TextContentContext from 'services/text-content';
import { Container, NavList, NavElement, LanguageContainer } from './parts';

const MobileNav: React.FC = () => {
  const { navLinks, language, setLanguage } = useContext(TextContentContext);

  const links = useMemo(
    () =>
      navLinks.map((link) => (
        <NavElement key={link.name}>{link.name}</NavElement>
      )),
    [navLinks]
  );

  return (
    <Container>
      <NavList>{links}</NavList>
      <FlexBox>
        <LanguageContainer
          active={language === 'EN'}
          onClick={() => setLanguage && setLanguage('EN')}
        >
          EN
        </LanguageContainer>
        <LanguageContainer
          active={language === 'PL'}
          onClick={() => setLanguage && setLanguage('PL')}
        >
          PL
        </LanguageContainer>
      </FlexBox>
    </Container>
  );
};

export default MobileNav;
