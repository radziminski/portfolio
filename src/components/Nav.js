import React, { Component } from 'react';
import Hamburger from './Hamburger';

export class Nav extends Component {
    state = {
        showNav: false
    };

    toggleNav = () => {
        this.setState({ showNav: !this.state.showNav });
    };

    render() {
        let conteinerClassName = 'nav';
        if (this.state.showNav) conteinerClassName += ' nav--on';

        return (
            <div className={conteinerClassName} onClick={this.toggleNav}>
                <Hamburger />
            </div>
        );
    }
}

export default Nav;
