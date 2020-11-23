import React, { useContext } from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import TextContentContext from 'services/text-content';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import ContactForm from 'components/ContactForm';
import Box, { FlexBox } from 'components/Box';
import SocialsBar from 'components/SocialsBar';
import Paragraph from 'components/Paragraph';
import CopyIconField from 'components/CopyIconField';
import { getValueForDevice } from 'styles/breakpoints';

const ICON_STYLE = {
  transform: 'translateY(3px)'
};

const ContactView: React.FC = () => {
  const {
    text: { sectionTitles, contactMsg, tel }
  } = useContext(TextContentContext);

  const contactMethods = [
    {
      label: 'Email',
      icon: <AiOutlineMail style={ICON_STYLE} />,
      value: 'radziminski.j@gmail.com'
    },
    {
      label: tel,
      value: '+48 694 785 934',
      icon: <AiOutlinePhone style={ICON_STYLE} />
    }
  ];

  const formPadding = getValueForDevice({
    desktopLarge: '8%',
    laptopLarge: '4%',
    tabMedium: '4%',
    tabSmall: 0
  });

  const iconSize = getValueForDevice({
    desktopLarge: 28,
    desktopMedium: 26,
    desktopSmall: 24,
    laptopLarge: 22
  });

  const iconDistance = getValueForDevice({
    desktopLarge: 20,
    desktopMedium: 19,
    desktopSmall: 17,
    laptopLarge: 16,
    laptopMedium: 15
  });

  const flexDirection = getValueForDevice({
    desktopLarge: 'row',
    tabMedium: 'row',
    tabSmall: 'column',
    mobileSmall: 'column'
  });

  const width = getValueForDevice({
    desktopLarge: '50%',
    tabMedium: '50%',
    tabSmall: '100%',
    mobileSmall: '100%'
  });
  const textMarginBottom = getValueForDevice({
    desktopLarge: 6,
    tabMedium: 6,
    tabSmall: 2,
    mobileSmall: 2
  });

  const contentPaddingBottom = getValueForDevice({
    desktopLarge: 0,
    tabMedium: 0,
    tabSmall: 8,
    mobileSmall: 8
  });
  const contentMarginBottom = getValueForDevice({
    desktopLarge: 0,
    tabMedium: 0,
    tabSmall: 4,
    mobileSmall: 4
  });

  const socialsBarLeft = getValueForDevice({
    desktopLarge: -18,
    tabMedium: -18,
    tabSmall: 'auto',
    mobileSmall: 'auto'
  });

  const socialsBarRight = getValueForDevice({
    desktopLarge: 'auto',
    tabMedium: 'auto',
    tabSmall: 0,
    mobileSmall: '0,'
  });

  return (
    <Section variant='dark' withLinker name='section-contact'>
      <FlexBox justifyContent='space-between' flexDirection={flexDirection}>
        <Box
          width={width}
          position='relative'
          paddingBottom={contentPaddingBottom}
          marginBottom={contentMarginBottom}
        >
          <SectionTitle type='left'>{sectionTitles.contact}</SectionTitle>

          <FlexBox
            flexDirection='column'
            justifyContent='space-between'
            marginBottom={textMarginBottom}
          >
            <Paragraph fontSize={4} lineHeight={1.7}>
              {contactMsg} &rarr;
            </Paragraph>
          </FlexBox>

          {contactMethods.map((method) => (
            <CopyIconField
              key={method.label}
              icon={method.icon}
              text={method.value}
            />
          ))}

          <Box
            position='absolute'
            bottom={0}
            left={socialsBarLeft}
            right={socialsBarRight}
          >
            <SocialsBar
              orientation='horizontal'
              elementDistance={iconDistance}
              iconSize={iconSize}
            />
          </Box>
        </Box>

        <Box width={width} paddingLeft={formPadding}>
          <ContactForm />
        </Box>
      </FlexBox>
    </Section>
  );
};

export default ContactView;
