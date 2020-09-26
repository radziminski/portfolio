import Form from 'components/Form';
import React from 'react';
import { contactFormFields } from './form-fields';

const ContactForm: React.FC = () => {
  return (
    <Form
      inputs={contactFormFields}
      onSubmit={() => {
        console.log('submit');
      }}
    />
  );
};

export default ContactForm;
