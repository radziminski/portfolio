import React, { Fragment } from 'react';
import MobileNavIcon from './MobileNavIcon';
import { Link } from 'react-scroll';
import navLinksEN from '../assets/data/navLinksEN';
import navLinksPL from '../assets/data/navLinksPL';
import Language from './Language';

const MobileNav = ({ showNav, toggleNav, language, toggleLanguage }) => {
    let navLinks = navLinksEN;
    if (language === 'PL') navLinks = navLinksPL;
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
                    <li className="mobile-nav__language">
                        <Language language={language} type="language-mobile" toggleLanguage={toggleLanguage} />
                    </li>
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
