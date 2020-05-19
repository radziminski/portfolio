import React, { Component } from 'react';
import MobileNavIcon from './MobileNavIcon';
import navLinks from '../assets/data/navLinks';
import { Link } from 'react-scroll';

export class DesktopPortableNav extends Component {
    state = {
        showNav: false,
    };

    toggleNav = () => {
        this.setState({ showNav: !this.state.showNav });
    };

    render() {
        let nav = null;
        if (this.state.showNav)
            nav = (
                <ul className="portable-nav__links">
                    {navLinks.map((el, id) => (
                        <li key={id} className="portable-nav__element">
                            <Link
                                className="portable-nav__link"
                                onClick={this.toggleNav}
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
        return (
            <div className="portable-nav">
                <MobileNavIcon onClick={this.toggleNav} active={this.state.showNav} />
                {nav}
            </div>
        );
    }
}

export default DesktopPortableNav;
