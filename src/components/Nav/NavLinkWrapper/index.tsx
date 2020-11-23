import React from 'react';
import { Link } from 'react-scroll';
import { getValueForDevice } from 'styles/breakpoints';

interface Props {
  linkTo: string;
  padding?: number | string;
  onClick?: () => void;
}

export const NavLinkWrapper: React.FC<Props> = ({
  padding = 0,
  linkTo,
  children,
  onClick
}) => {
  const scrollLinkOffset = getValueForDevice({
    desktopLarge: -70,
    laptopLarge: -40,
    laptopMedium: -30,
    tabLarge: 0,
    tabMedium: -110,
    mobileLarge: -80,
    mobileMedium: -60
  });

  return (
    <Link
      style={{ padding: padding, cursor: 'pointer' }}
      activeClass='active'
      to={linkTo}
      spy={true}
      smooth={true}
      offset={scrollLinkOffset}
      duration={500}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavLinkWrapper;
