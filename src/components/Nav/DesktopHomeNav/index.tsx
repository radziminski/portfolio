import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import TextContentContext from 'services/text-content';
import { NavLink } from 'services/text-content/navLinks';
import { NavList, NavItem } from './parts';

interface Props {
  language: string;
}

const DesktopNav: React.FC<Props> = () => {
  const { navLinks } = useContext(TextContentContext);

  return (
    <NavList>
      {navLinks.slice(1).map((el: NavLink) => (
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
