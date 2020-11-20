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
    laptopLarge: '4%'
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

  return (
    <Section variant='dark' withLinker>
      <FlexBox justifyContent='space-between'>
        <Box width='50%' position='relative'>
          <SectionTitle type='left'>{sectionTitles.contact}</SectionTitle>

          <FlexBox
            flexDirection='column'
            justifyContent='space-between'
            marginBottom={6}
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

          <Box position='absolute' bottom={0} left={-18}>
            <SocialsBar
              orientation='horizontal'
              elementDistance={iconDistance}
              iconSize={iconSize}
            />
          </Box>
        </Box>

        <Box width='50%' paddingLeft={formPadding}>
          <ContactForm />
        </Box>
      </FlexBox>
    </Section>
  );
};

export default ContactView;
