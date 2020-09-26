import React from 'react';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import ContactForm from 'components/ContactForm';

const ContactView: React.FC = () => {
  return (
    <Section variant='dark' withLinker>
      <SectionTitle type='left'>Contact Me</SectionTitle>
      <ContactForm />
    </Section>
  );
};

export default ContactView;
