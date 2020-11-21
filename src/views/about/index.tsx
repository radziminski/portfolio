import React, { useContext } from 'react';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import TextContentContext from 'services/text-content';
import Box, { FlexBox } from 'components/Box';
import Paragraph from 'components/Paragraph';
import PortraitPhoto from 'assets/img/photo.jpg';
import Photo from 'components/Photo';
import { getValueForDevice } from 'styles/breakpoints';

const AboutView: React.FC = () => {
  const {
    text: { sectionTitles, about }
  } = useContext(TextContentContext);

  return (
    <Section variant='dark' withLinker>
      <FlexBox justifyContent='space-between'>
        <Box
          width='35%'
          marginRight={getValueForDevice({
            desktopLarge: 12,
            tabLarge: 8
          })}
        >
          <Photo src={PortraitPhoto} alt='Portrait' />
        </Box>
        <Box
          width={getValueForDevice({
            desktopLarge: '65%',
            tabLarge: '60%'
          })}
        >
          <SectionTitle type='left'>{sectionTitles.about}</SectionTitle>
          {about.split('\n').map((paragraph, index) => (
            <Box key={index} margin='15px 0'>
              <Paragraph fontSize={4} lineHeight={1.8}>
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
