import React, { Fragment } from 'react';
import MobileNavIcon from './MobileNavIcon';
import { Link } from 'react-scroll';
import navLinks from '../assets/data/navLinks';

const MobileNav = ({ showNav, toggleNav }) => {
    let nav = null;
    if (showNav) {
        nav = (
            <Fragment>
                <ul className="mobile-nav">
                    {navLinks.map((el, id) => (
                        <li key={id} className="mobile-nav__element" onClick={toggleNav}>
                            <Link
                                activeClass="active"
                                to={el.linkTo}
                                spy={true}
                                smooth={true}
                                offset={-130}
                                duration={500}
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
