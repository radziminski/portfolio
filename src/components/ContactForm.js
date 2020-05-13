import React, { Component } from 'react';
import Btn from './Btn';

class ContactForm extends Component {
    state = {
        email: '',
        subject: '',
        message: '',
        messageLabelShown: false,
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onMessageFocus = (e) => {
        this.setState({ messageLabelShown: !this.state.messageLabelShown });
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

        return (
            <form className="contact-form">
                <div className="contact-form__input-box">
                    <input
                        type="email"
                        className="contact-form__input"
                        name="email"
                        onChange={this.onChange}
                        required
                    />
                    <label htmlFor="email" className={emailLabelClassName}>
                        Email
                    </label>
                </div>

                <div className="contact-form__input-box">
                    <input
                        type="text"
                        className="contact-form__input"
                        name="subject"
                        onChange={this.onChange}
                        required
                    />
                    <label htmlFor="subject" className={subjectLabelClassName}>
                        Subject
                    </label>
                </div>

                <div className="contact-form__textarea-box">
                    <textarea
                        type="text"
                        className="contact-form__textarea"
                        name="message"
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
                    <Btn type="wide" form>
                        Send!
                    </Btn>
                </div>
            </form>
        );
    }
}

export default ContactForm;
