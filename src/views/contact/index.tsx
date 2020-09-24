import React from 'react';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';

const ContactView: React.FC = () => {
  return (
    <Section variant='dark' withLinker>
      <SectionTitle type='left'>Contact Me</SectionTitle>
    </Section>
  );
};

export default ContactView;
