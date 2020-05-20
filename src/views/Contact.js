import React, { Component } from 'react';
import SocialsBar from '../components/SocialsBar';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import Linker from '../components/Linker';
import getText from '../assets/data/text';

export class Contact extends Component {
    render() {
        return (
            <div className="section-contact section--dark " name="section-contact">
                <Linker type="light" />
                <div className={`section-contact__container section--col-phone-wrap`}>
                    <div className="section-contact__info col-1-of-2 col-1-of-2--phone-wrap ">
                        <SectionTitle>{getText('EN').sectionTitles.contact}</SectionTitle>
                        <p className="section-paragraph">{getText('EN').contactMsg} &rarr;</p>
                        <ul className="contact-list u-m-margin-top">
                            <li className="contact-list__element">Email: radziminski.j@gmail.com</li>
                            <li className="contact-list__element">{getText('EN').tel}: +48 694 785 934</li>
                        </ul>
                        <SocialsBar type="horizontal" className="section-contact__socials" />
                    </div>
                    <div className="col-1-of-2 col-1-of-2--phone-wrap">
                        <ContactForm />
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
