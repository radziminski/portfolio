import React, { Component, Fragment } from 'react';
import Logo from './Logo';
import Language from './Language';
import MobileNav from './MobileNav';
import Modal from './Modal';
import DesktopNav from './DesktopNav';

class NavBar extends Component {
    state = {
        isSticked: false,
        showNav: false,
    };

    componentDidMount = () => {
        const offsetForToolbarSticked = 100;
        window.addEventListener('scroll', () => {
            if (window.scrollY > offsetForToolbarSticked && !this.state.isSticked) this.setState({ isSticked: true });
            else if (window.scrollY < offsetForToolbarSticked && this.state.isSticked)
                this.setState({ isSticked: false });
        });
    };

    toggleNav = () => {
        this.setState({ showNav: !this.state.showNav });
    };

    render() {
        let stickedClass = '';
        if (this.state.isSticked) stickedClass = 'navbar--sticked';
        let modal = null;
        if (this.state.showNav) modal = <Modal onClick={this.toggleNav} />;
        let mobileNav = <MobileNav showNav={this.state.showNav} toggleNav={this.toggleNav} />;
        if (window.innerWidth > 900) mobileNav = null;
        return (
            <Fragment>
                <div className={`navbar ${stickedClass}`}>
                    <Logo />
                    <DesktopNav />
                    <Language />
                    {mobileNav}
                </div>
                {modal}
            </Fragment>
        );
    }
}

export default NavBar;
