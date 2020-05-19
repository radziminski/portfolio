import React, { Component } from 'react';
import Btn from '../components/Btn';
import SocialsBar from '../components/SocialsBar';
import { FiArrowDownCircle } from 'react-icons/fi';
import { Link } from 'react-scroll';

export class Header extends Component {
    state = {
        greetingMsg: 'Good evening!',
    };

    componentDidMount() {
        let dayTime = new Date().getHours();
        console.log(dayTime);
        if (dayTime < 12 && dayTime > 4) {
            this.setState({ greetingMsg: 'Good morning!' });
        } else if (dayTime < 18 && dayTime > 11) {
            this.setState({ greetingMsg: 'Good afternoon!' });
        }
    }

    render() {
        let socialsBarType = 'vertical';
        if (window.innerWidth < 725) socialsBarType = 'horizontal';
        return (
            <header className="header" name="header">
                <div className="header__socials">
                    <SocialsBar type={socialsBarType} />
                </div>
                <div className="header__heading-box">
                    <div className="header__heading-top">{this.state.greetingMsg}</div>
                    <h1 className="header__heading-primary">
                        I'm <span className="u-color-primary">Jan</span> Radzimiński
                    </h1>
                    <p className="header__about">
                        Full-stack developer, computer scientist and music producer.Nisi reprehenderit nisi cillum sit.
                        In laborum reprehenderit aliquip et et amet sit quis enim voluptate duis.
                    </p>
                    {/* <div className="header__heading-secondary">
                        <span>Full Stack Developer</span>
                        <span>|</span>
                        <span>Music Producer</span>
                    </div> */}
                    <Btn linkTo="section-contact">Contact Me</Btn>
                    <Btn type="ghost" linkTo="section-about">
                        About
                    </Btn>
                </div>
                <Link activeClass="active" to={'section-about'} spy={true} smooth={true} offset={-130} duration={500}>
                    <div className="header__scroll-btn">
                        <FiArrowDownCircle />
                    </div>
                </Link>
            </header>
        );
    }
}

export default Header;
