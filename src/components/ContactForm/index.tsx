import Form from 'components/Form';
import { database as db } from 'services/firebase';
import React from 'react';
import { contactFormFields } from './form-fields';

const SUCCESS_MESSAGE = 'Message sent successfully.';
const ERROR_MESSAGE =
  'There was an error while sending the message. Please try again later.';

const ContactForm: React.FC = () => {
  const onSubmit = (values: Record<string, string>) => {
    const payload = { ...values };
    return new Promise<string>((resolve, reject) => {
      db.collection('messages')
        .doc()
        .set(payload)
        .then(() => resolve(SUCCESS_MESSAGE))
        .catch(() => reject(ERROR_MESSAGE));
    });
  };

  return <Form inputs={contactFormFields} onSubmit={onSubmit} />;
};

export default ContactForm;
