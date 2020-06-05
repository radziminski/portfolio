import React from 'react';
import { Link } from 'react-scroll';
import navLinksEN from '../assets/data/navLinksEN';
import navLinksPL from '../assets/data/navLinksPL';

const DesktopNav = ({ language }) => {
    let navLinks = navLinksEN;
    if (language === 'PL') navLinks = navLinksPL;

    return (
        <ul className="desktop-nav">
            {navLinks.slice(1).map((el, id) => (
                <li key={id} className="desktop-nav__item">
                    <Link
                        className="desktop-nav__link"
                        activeClass="active"
                        to={el.linkTo}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        {el.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default DesktopNav;
