import React, { useState } from 'react';
import { Link } from 'react-scroll';
import navLinksEN from 'assets/data/navLinksEN';
import navLinksPL from 'assets/data/navLinksPL';
import MobileNavIcon from 'components/Nav/MobileNavIcon';
import { MainContainer, ListContainer, ListElement } from './parts';

// Todo: Language - to be updates
const language = 'EN';

const DesktopStickedNav = () => {
  const [showNav, setShowNav] = useState(false);

  const navLinks = navLinksEN;
  const linksToCut = 0; // displaying home in en

  // if (language === 'PL') {
  //   navLinks = navLinksPL;
  //   linksToCut = 1; // Hiding Strona Główna in PL
  // }

  const nav = (
    <ListContainer>
      {navLinks.slice(linksToCut).map((el, id) => (
        <ListElement key={id}>
          <Link
            style={{ padding: '10px 25px', flexShrink: 0 }}
            onClick={() => setShowNav((prevVal) => !prevVal)}
            to={el.linkTo}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            {el.name}
          </Link>
        </ListElement>
      ))}
    </ListContainer>
  );

  return (
    <MainContainer>
      <MobileNavIcon
        onClick={() => setShowNav((prevVal) => !prevVal)}
        active={showNav}
      />
      {showNav && nav}
    </MainContainer>
  );
};

export default DesktopStickedNav;
