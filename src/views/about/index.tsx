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

  const flexDirection = getValueForDevice({
    desktopLarge: 'row',
    tabMedium: 'row',
    tabSmall: 'column',
    mobileSmall: 'column'
  });

  const textWidth = getValueForDevice({
    desktopLarge: '65%',
    tabLarge: '60%',
    tabSmall: '100%'
  });

  const photoWidth = getValueForDevice({
    desktopLarge: '35%',
    tabMedium: '35%',
    tabSmall: '60%',
    mobileSmall: '50%'
  });

  const photoMarginBottom = getValueForDevice({
    desktopLarge: 0,
    tabMedium: 0,
    tabSmall: 40
  });

  return (
    <Section variant='dark' withLinker name='section-about'>
      <FlexBox
        justifyContent='space-between'
        flexDirection={flexDirection}
        alignItems='center'
      >
        <Box
          width={photoWidth}
          marginRight={getValueForDevice({
            desktopLarge: 12,
            tabLarge: 8
          })}
          marginBottom={photoMarginBottom}
        >
          <Photo src={PortraitPhoto} alt='Portrait' />
        </Box>
        <Box width={textWidth}>
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
