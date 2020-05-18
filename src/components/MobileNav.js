import React, { Fragment } from 'react';
import MobileNavIcon from './MobileNavIcon';

const MobileNav = ({ showNav, toggleNav }) => {
    let nav = null;
    if (showNav) {
        nav = (
            <Fragment>
                <ul className="mobile-nav">
                    <li className="mobile-nav__element">About</li>
                    <li className="mobile-nav__element">Skills</li>
                    <li className="mobile-nav__element">Projects</li>
                    <li className="mobile-nav__element">Experiance</li>
                    <li className="mobile-nav__element">Contact</li>
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
