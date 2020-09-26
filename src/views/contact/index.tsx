import React from 'react';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import ContactForm from 'components/ContactForm';
import Box, { FlexBox } from 'components/Box';

const ContactView: React.FC = () => {
  return (
    <Section variant='dark' withLinker>
      <FlexBox justifyContent='space-between'>
        <Box width='50%'>
          <SectionTitle type='left'>Contact Me</SectionTitle>
        </Box>

        <Box width='50%' paddingLeft='10%'>
          <ContactForm />
        </Box>
      </FlexBox>
    </Section>
  );
};

export default ContactView;
