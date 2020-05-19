import React, { Component } from 'react';
import Btn from './Btn';
import { database as db } from '../firebase';
import DotLoader from './DotLoader';

class ContactForm extends Component {
    state = {
        email: '',
        subject: '',
        message: '',
        messageLabelShown: false,
        loading: false,
        showInfo: false,
        sentSuccess: false,
    };

    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onMessageFocus = (e) => {
        this.setState({ messageLabelShown: !this.state.messageLabelShown });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const payload = {
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message,
        };

        db.collection('messages')
            .doc()
            .set(payload)
            .then(() => {
                this.setState({ loading: false, showInfo: true, sentSuccess: true });
                setTimeout(() => {
                    this.setState({ showInfo: false });
                }, 4500);
            })
            .catch((err) => {
                this.setState({
                    loading: false,
                    showInfo: true,
                    sentSuccess: false,
                });
                setTimeout(() => {
                    this.setState({ showInfo: false });
                }, 6000);
            });
    };

    render() {
        const emailLabelClassName = this.state.email
            ? 'contact-form__label contact-form__label--selected'
            : 'contact-form__label';
        const subjectLabelClassName = this.state.subject
            ? 'contact-form__label contact-form__label--selected'
            : 'contact-form__label';
        const messageLabelClassName =
            this.state.message || this.state.messageLabelShown
                ? 'contact-form__label contact-form__label--selected-high'
                : 'contact-form__label';

        let loader = <div className="contact-form__loader-box"></div>;
        if (this.state.loading)
            loader = (
                <div className="contact-form__loader-box">
                    <DotLoader />
                </div>
            );
        else if (this.state.showInfo && this.state.sentSuccess)
            loader = (
                <div className="contact-form__loader-box">
                    <div className="contact-form__info">Message sent successfully.</div>
                </div>
            );
        else if (this.state.showInfo && !this.state.sentSuccess)
            loader = (
                <div className="contact-form__loader-box">
                    <div className="contact-form__info contact-form__info--errors">
                        There was an errror while sending the message. Please try again later.
                    </div>
                </div>
            );

        return (
            <form className="contact-form" onSubmit={this.onSubmit}>
                <div className="contact-form__input-box">
                    <input type="email" className="contact-form__input" id="email" onChange={this.onChange} required />
                    <label htmlFor="email" className={emailLabelClassName}>
                        Email
                    </label>
                </div>

                <div className="contact-form__input-box">
                    <input type="text" className="contact-form__input" id="subject" onChange={this.onChange} required />
                    <label htmlFor="subject" className={subjectLabelClassName}>
                        Subject
                    </label>
                </div>

                <div className="contact-form__textarea-box">
                    <textarea
                        type="text"
                        className="contact-form__textarea"
                        id="message"
                        onChange={this.onChange}
                        onFocus={this.onMessageFocus}
                        onBlur={this.onMessageFocus}
                        required
                    />
                    <label htmlFor="message" className={messageLabelClassName}>
                        Message
                    </label>
                </div>

                <div className="contact-form__btns">
                    {loader}
                    <Btn type="wide" form>
                        Send!
                    </Btn>
                </div>
            </form>
        );
    }
}

export default ContactForm;
