import React, { useContext, useState } from 'react';
import { Link } from 'react-scroll';
import MobileNavIcon from 'components/Nav/MobileNavIcon';
import { MainContainer, ListContainer, ListElement } from './parts';
import TextContentContext from 'services/text-content';

// Todo: Language - to be updates
// const language = 'EN';

const DesktopStickedNav = () => {
  const [showNav, setShowNav] = useState(false);

  const { navLinks, language } = useContext(TextContentContext);
  let linksToCut = 0; // displaying home in en

  if (language === 'PL') {
    linksToCut = 1;
  }

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
