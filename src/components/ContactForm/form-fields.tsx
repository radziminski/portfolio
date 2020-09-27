import { FormInput } from 'components/Form';

export const contactFormFields: FormInput[] = [
  {
    label: 'Email',
    type: 'email',
    required: true
  },
  {
    label: 'Subject',
    type: 'text',
    required: true
  },
  {
    label: 'Message',
    type: 'textarea',
    required: true
  }
];
