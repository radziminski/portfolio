import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import TextContentContext from 'services/text-content';
import { NavLink } from 'services/text-content/navLinks';
import { getValueForDevice } from 'styles/breakpoints';
import { NavList, NavItem } from './parts';

interface Props {
  language: string;
}

const DesktopNav: React.FC<Props> = () => {
  const { navLinks } = useContext(TextContentContext);

  const itemPadding = getValueForDevice({
    desktopLarge: '10px 25px',
    laptopLarge: '8px 22px',
    laptopMedium: '8px 16px',
    laptopSmall: '8px 14px'
  });

  return (
    <NavList>
      {navLinks.slice(1).map((el: NavLink) => (
        <NavItem key={el.name}>
          <Link
            style={{ padding: itemPadding, cursor: 'pointer' }}
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
