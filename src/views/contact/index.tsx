import React, { useContext } from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import TextContentContext from 'services/text-content';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import ContactForm from 'components/ContactForm';
import Box, { FlexBox } from 'components/Box';
import SocialsBar from 'components/SocialsBar';
import Paragraph from 'components/Paragraph';
import Text from 'components/Text';

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

  return (
    <Section variant='dark' withLinker>
      <FlexBox justifyContent='space-between'>
        <Box width='50%' position='relative'>
          <SectionTitle type='left'>{sectionTitles.contact}</SectionTitle>

          <FlexBox
            flexDirection='column'
            justifyContent='space-between'
            marginBottom={7}
          >
            <Paragraph fontSize={20} lineHeight={1.7}>
              {contactMsg} &rarr;
            </Paragraph>
          </FlexBox>

          {contactMethods.map((method) => (
            <FlexBox
              key={method.label}
              alignItems='center'
              color='gray90'
              marginBottom={5}
            >
              <Box marginRight={4} color='gray90' opacity={0.7}>
                <Text fontSize={5}>{method.icon}</Text>
              </Box>
              <Text fontSize={5}>{method.value}</Text>
            </FlexBox>
          ))}

          <Box position='absolute' bottom={0} left={-18}>
            <SocialsBar
              orientation='horizontal'
              elementDistance={20}
              iconSize={28}
            />
          </Box>
        </Box>

        <Box width='50%' paddingLeft='8%'>
          <ContactForm />
        </Box>
      </FlexBox>
    </Section>
  );
};

export default ContactView;
