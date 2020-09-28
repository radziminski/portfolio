import React, { useContext, useMemo } from 'react';
import { database as db } from 'services/firebase';
import Form, { FormInput } from 'components/Form';
import TextContentContext from 'services/text-content';

const ContactForm: React.FC = () => {
  const { text } = useContext(TextContentContext);
  const successMessage = text.form.messageSuccess;
  const errorMessage = text.form.messageFail;

  const contactFormFields = useMemo<FormInput[]>(
    () => [
      {
        label: 'Email',
        type: 'email',
        required: true
      },
      {
        label: text.form.subject,
        type: 'text',
        required: true
      },
      {
        label: text.form.message,
        type: 'textarea',
        required: true
      }
    ],
    [text]
  );

  const onSubmit = (values: Record<string, string>) => {
    const payload = { ...values };
    return new Promise<string>((resolve, reject) => {
      db.collection('messages')
        .doc()
        .set(payload)
        .then(() => resolve(successMessage))
        .catch(() => reject(errorMessage));
    });
  };

  return (
    <Form
      inputs={contactFormFields}
      onSubmit={onSubmit}
      sendBtnText={text.btns.send}
    />
  );
};

export default ContactForm;
