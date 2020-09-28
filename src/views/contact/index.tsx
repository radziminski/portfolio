import React, { useContext } from 'react';
import TextContentContext from 'services/text-content';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import ContactForm from 'components/ContactForm';
import Box, { FlexBox } from 'components/Box';
import SocialsBar from 'components/SocialsBar';

const ContactView: React.FC = () => {
  const {
    text: { sectionTitles }
  } = useContext(TextContentContext);
  return (
    <Section variant='dark' withLinker>
      <FlexBox justifyContent='space-between'>
        <Box width='50%' position='relative'>
          <SectionTitle type='left'>{sectionTitles.contact}</SectionTitle>
          <FlexBox flexDirection='column' justifyContent='space-between'>
            <div>d</div>
          </FlexBox>
          <Box position='absolute' bottom={0} left={0}>
            <SocialsBar
              orientation='horizontal'
              elementDistance={20}
              iconSize={28}
            />
          </Box>
        </Box>

        <Box width='50%' paddingLeft='10%'>
          <ContactForm />
        </Box>
      </FlexBox>
    </Section>
  );
};

export default ContactView;
