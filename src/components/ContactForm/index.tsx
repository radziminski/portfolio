import Form from 'components/Form';
import React from 'react';
import { contactFormFields } from './form-fields';

const ContactForm: React.FC = () => {
  return (
    <div>
      <Form
        inputs={contactFormFields}
        onSubmit={() => {
          console.log('submit');
        }}
      />
    </div>
  );
};

export default ContactForm;
