import React from 'react';
import { Link } from 'react-scroll';
import navLinksEN from 'assets/data/navLinksEN';
import navLinksPL from 'assets/data/navLinksPL';
import { NavList, NavItem } from './parts';

interface Props {
  language: string;
}

const DesktopNav: React.FC<Props> = ({ language }) => {
  let navLinks = navLinksEN;
  if (language === 'PL') navLinks = navLinksPL;

  return (
    <NavList>
      {navLinks.slice(1).map((el) => (
        <NavItem key={el.name}>
          <Link
            style={{ padding: '10px 25px', cursor: 'pointer' }}
            activeClass='active'
            to={el.linkTo}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            {el.name}
          </Link>
        </NavItem>
      ))}
    </NavList>
  );
};

export default DesktopNav;
