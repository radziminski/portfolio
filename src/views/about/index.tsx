import React, { useContext } from 'react';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import TextContentContext from 'services/text-content';
import Box, { FlexBox } from 'components/Box';
import Paragraph from 'components/Paragraph';

const AboutView: React.FC = () => {
  const {
    text: { sectionTitles, about }
  } = useContext(TextContentContext);

  return (
    <Section variant='dark' withLinker>
      <FlexBox justifyContent='space-between'>
        <Box width='35%'>photo</Box>
        <Box width='65%'>
          <SectionTitle type='left'>{sectionTitles.about}</SectionTitle>
          {about.split('\n').map((paragraph, index) => (
            <Box key={index} margin='15px 0'>
              <Paragraph fontSize={18} lineHeight={1.8}>
                {paragraph}
              </Paragraph>
            </Box>
          ))}
        </Box>
      </FlexBox>
    </Section>
  );
};

export default AboutView;
