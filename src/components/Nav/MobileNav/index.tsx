import { FlexBox } from 'components/Box';
import React, { useContext, useMemo } from 'react';
import TextContentContext from 'services/text-content';
import NavLinkWrapper from '../NavLinkWrapper';
import { Container, NavList, NavElement, LanguageContainer } from './parts';

const MobileNav: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const { navLinks, language, setLanguage } = useContext(TextContentContext);

  const links = useMemo(
    () =>
      navLinks.map((link) => (
        <NavLinkWrapper linkTo={link.linkTo} key={link.name} onClick={onClick}>
          <NavElement>{link.name}</NavElement>
        </NavLinkWrapper>
      )),
    [navLinks, onClick]
  );

  return (
    <Container>
      <NavList>{links}</NavList>
      <FlexBox onClick={onClick}>
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
