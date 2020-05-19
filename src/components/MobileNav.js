import React, { Fragment } from 'react';
import MobileNavIcon from './MobileNavIcon';
import { Link } from 'react-scroll';
import navLinks from '../assets/data/navLinks';

const MobileNav = ({ showNav, toggleNav }) => {
    let nav = null;
    if (showNav) {
        let scrollLinkOffset = 130;
        if (window.innerWidth < 600) scrollLinkOffset = 80;
        if (window.innerWidth < 480) scrollLinkOffset = 68;
        nav = (
            <Fragment>
                <ul className="mobile-nav">
                    {navLinks.map((el, id) => (
                        <li key={id}>
                            <Link
                                activeClass="active"
                                to={el.linkTo}
                                spy={true}
                                smooth={true}
                                offset={-scrollLinkOffset}
                                duration={500}
                                className="mobile-nav__element"
                                onClick={toggleNav}
                            >
                                {el.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Fragment>
        );
    }
    return (
        <nav>
            <MobileNavIcon onClick={toggleNav} active={showNav} />
            {nav}
        </nav>
    );
};

export default MobileNav;
