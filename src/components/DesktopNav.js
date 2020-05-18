import React from 'react';
import { Link } from 'react-scroll';
import navLinks from '../assets/data/navLinks';

const DesktopNav = () => {
    return (
        <ul className="desktop-nav">
            {navLinks.map((el, id) => (
                <Link key={id} activeClass="active" to={el.linkTo} spy={true} smooth={true} offset={0} duration={500}>
                    <li className="desktop-nav__item">{el.name}</li>
                </Link>
            ))}
        </ul>
    );
};

export default DesktopNav;
