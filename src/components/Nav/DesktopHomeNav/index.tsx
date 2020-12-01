import React, { useContext } from 'react';
import TextContentContext from 'services/text-content';
import { NavLink } from 'services/text-content/navLinks';
import { getValueForDevice } from 'styles/breakpoints';
import NavLinkWrapper from '../NavLinkWrapper';
import { NavList, NavItem } from './parts';

const DesktopNav: React.FC = () => {
  const { navLinks } = useContext(TextContentContext);

  const itemPadding = getValueForDevice({
    desktopLarge: '10px 25px',
    desktopMedium: '10px 22px',
    laptopLarge: '8px 18px',
    laptopMedium: '8px 16px',
    laptopSmall: '8px 10px'
  });

  return (
    <NavList>
      {navLinks.slice(1).map((el: NavLink) => (
        <NavItem key={el.name}>
          <NavLinkWrapper linkTo={el.linkTo} padding={itemPadding}>
            {el.name}
          </NavLinkWrapper>
        </NavItem>
      ))}
    </NavList>
  );
};

export default DesktopNav;
