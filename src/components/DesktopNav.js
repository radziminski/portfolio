import React from 'react';
import { Link } from 'react-scroll';
import navLinks from '../assets/data/navLinks';

const DesktopNav = () => {
    return (
        <ul className="desktop-nav">
            {navLinks.map((el, id) => (
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