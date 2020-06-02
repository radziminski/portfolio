import React, { Component } from 'react';
import Btn from '../components/Btn';
import SocialsBar from '../components/SocialsBar';
import { FiArrowDownCircle } from 'react-icons/fi';
import { Link } from 'react-scroll';
import getText from '../assets/data/text';

export class Header extends Component {
    state = {
        greetingMsg: getText(this.props.language).greetings.late,
        text: getText(this.props.language),
    };

    componentDidMount() {
        const dayTime = new Date().getHours();
        if (dayTime < 12 && dayTime > 4) {
            this.setState({ greetingMsg: this.state.text.greetings.early });
        } else if (dayTime < 18 && dayTime > 11) {
            this.setState({ greetingMsg: this.state.text.greetings.mid });
        }
    }

    componentDidUpdate() {
        const newText = getText(this.props.language);
        if (newText !== this.state.text) {
            const dayTime = new Date().getHours();
            let greetingMsg = newText.greetings.late;
            if (dayTime < 12 && dayTime > 4) {
                greetingMsg = newText.greetings.early;
            } else if (dayTime < 18 && dayTime > 11) {
                greetingMsg = newText.greetings.mid;
            }
            this.setState({ text: newText, greetingMsg });
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
                        {this.state.text.headerTitle} <span className="u-color-primary">Jan</span> Radzimiński
                    </h1>
                    <p className="header__about">{this.state.text.headerSubtitle}</p>

                    <Btn linkTo="section-contact">{this.state.text.btns.contact}</Btn>
                    <Btn type="ghost" linkTo="section-about">
                        {this.state.text.btns.about}
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
