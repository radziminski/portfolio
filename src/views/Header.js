import React, { Component } from 'react';
import Logo from '../components/Logo';
import Nav from '../components/Nav';
//import Linker from '../components/Linker';
import Btn from '../components/Btn';

export class Header extends Component {
    state = {
        greetingMsg: 'Good evening!',
    };

    componentDidMount() {
        let dayTime = new Date().getHours();
        console.log(dayTime);
        if (dayTime < 12 && dayTime > 4) {
            this.setState({ greetingMsg: 'Good morning!' });
        } else if (dayTime < 18) {
            this.setState({ greetingMsg: 'Good afternoon!' });
        }
    }

    render() {
        return (
            <header className="header">
                <Logo />
                <Nav />
                {/* <Linker /> */}
                <div className="header__heading-box">
                    <div className="header__heading-top">{this.state.greetingMsg}</div>
                    <div className="header__heading-primary">
                        I'm <span className="u-color-primary">Jan</span> Radzimiński
                    </div>
                    <p className="header__about">
                        Full-stack developer, computer scientist and music producer.Nisi
                        reprehenderit nisi cillum sit. In laborum reprehenderit aliquip et et amet
                        sit quis enim voluptate duis.
                    </p>
                    {/* <div className="header__heading-secondary">
                        <span>Full Stack Developer</span>
                        <span>|</span>
                        <span>Music Producer</span>
                    </div> */}
                    <Btn>Download CV</Btn>
                    <Btn type="ghost">About me</Btn>
                </div>
            </header>
        );
    }
}

export default Header;
