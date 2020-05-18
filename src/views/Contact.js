import React, { Component } from 'react';
import SocialsBar from '../components/SocialsBar';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import Linker from '../components/Linker';

export class Contact extends Component {
    render() {
        return (
            <div className="section-contact section--dark ">
                <Linker type="light" />
                <div className={`section-contact__container section--col-phone-wrap`}>
                    <div className="section-contact__info col-1-of-2 col-1-of-2--phone-wrap ">
                        <SectionTitle>Contact Me</SectionTitle>
                        <p className="section-paragraph">
                            If You have any questions, feel free to message me using following form &rarr;
                        </p>
                        <ul className="contact-list u-m-margin-top">
                            <li className="contact-list__element">Email: tobereplaced@gmail.com</li>
                            <li className="contact-list__element">Phone: +48 123 456 789</li>
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
