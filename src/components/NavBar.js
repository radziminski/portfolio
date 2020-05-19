import React, { Component, Fragment } from 'react';
import Logo from './Logo';
import Language from './Language';
import MobileNav from './MobileNav';
import Modal from './Modal';
import DesktopNav from './DesktopNav';
import DesktopPortableNav from './DesktopPortableNav';

class NavBar extends Component {
    state = {
        isSticked: false,
        showNav: false,
        showPortableNav: false,
    };

    componentDidMount = () => {
        const offsetForToolbarSticked = 100;
        const togglePortableNavOffset = window.innerHeight - 200;
        window.addEventListener('scroll', () => {
            if (window.scrollY > offsetForToolbarSticked && !this.state.isSticked) this.setState({ isSticked: true });
            else if (window.scrollY < offsetForToolbarSticked && this.state.isSticked)
                this.setState({ isSticked: false });

            if (window.scrollY > togglePortableNavOffset && !this.state.showPortableNav) this.togglePortableNav();
            else if (window.scrollY <= togglePortableNavOffset && this.state.showPortableNav) this.togglePortableNav();
        });
    };

    toggleNav = () => {
        this.setState({ showNav: !this.state.showNav });
    };

    togglePortableNav = () => {
        this.setState({ showPortableNav: !this.state.showPortableNav });
    };

    render() {
        let stickedClass = '';
        if (this.state.isSticked) stickedClass = 'navbar--sticked';
        let modal = null;
        if (this.state.showNav) modal = <Modal onClick={this.toggleNav} />;
        let mobileNav = <MobileNav showNav={this.state.showNav} toggleNav={this.toggleNav} />;
        if (window.innerWidth > 900) mobileNav = null;

        let portableNav = null;
        if (this.state.showPortableNav && window.innerWidth > 900) portableNav = <DesktopPortableNav />;

        return (
            <Fragment>
                <div className={`navbar ${stickedClass}`}>
                    <Logo />
                    <DesktopNav />
                    <Language />
                    {portableNav}
                    {mobileNav}
                </div>

                {modal}
            </Fragment>
        );
    }
}

export default NavBar;
