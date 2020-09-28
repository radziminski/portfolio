import React, { useContext } from 'react';
import Box, { FlexBox } from 'components/Box';
import styled from 'styled-components';
import Button from 'components/Button';
import TextContentContext from 'services/text-content';

export const Subtitle = styled.div(({ theme }) => ({
  fontSize: '20px',
  color: theme.colors.primary100,
  display: 'flex',
  alignItems: 'center',

  '&:after': {
    // eslint-disable-next-line quotes
    content: `''`,
    display: 'block',
    width: '60px',
    height: '2px',
    backgroundColor: theme.colors.primary100,
    marginLeft: '20px'
  },

  '&:before': {
    // eslint-disable-next-line quotes
    content: `''`,
    display: 'block',
    width: '60px',
    height: '2px',
    backgroundColor: theme.colors.primary100,
    marginRight: '20px'
  }
}));

export const Title = styled.h1<{ fontSize?: number }>(
  ({ theme, fontSize = 55 }) => ({
    fontSize: `${fontSize}px`,
    color: theme.colors.white,
    fontWeight: theme.fontWeights.semiBold,
    margin: '22px 0'
  })
);

export const Description = styled.p(({ theme }) => ({
  fontSize: '20px',
  color: theme.colors.white,
  fontWeight: theme.fontWeights.light,
  textAlign: 'center',
  lineHeight: '34px',
  margin: 0,
  marginBottom: '8px'
}));

export const HeroBox: React.FC = () => {
  const { text } = useContext(TextContentContext);
  let greetingMessage = text.greetings.late;
  const dayTime = new Date().getHours();
  if (dayTime < 12 && dayTime > 4) {
    greetingMessage = text.greetings.early;
  } else if (dayTime < 18 && dayTime > 11) {
    greetingMessage = text.greetings.mid;
  }

  return (
    <FlexBox
      position='absolute'
      top='50%'
      left='50%'
      transform='translate(-50%, -50%)'
      flexDirection='column'
      alignItems='center'
      width='700px'
    >
      <Subtitle>{greetingMessage?.toUpperCase()}</Subtitle>
      <Title fontSize={text.headerTitle.length > 5 ? 45 : undefined}>
        {text.headerTitle}{' '}
        <Box display='inline-flex' color='primary100'>
          Jan
        </Box>{' '}
        Radzimiński
      </Title>
      <Description>{text.headerSubtitle}</Description>
      <FlexBox marginTop='28px'>
        <Button
          variant='full'
          onClick={() => {
            /** todo */
          }}
        >
          {text.btns.contact}
        </Button>
        <FlexBox marginX='30px' />
        <Button
          variant='ghost'
          onClick={() => {
            /** todo */
          }}
        >
          {text.btns.about}
        </Button>
      </FlexBox>
    </FlexBox>
  );
};

export const ArrowDownWrapper = styled.button(({ theme }) => ({
  position: 'absolute',
  bottom: '40px',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  opacity: '60%',
  color: theme.colors.white,
  transition: 'opacity 0.1s, color 0.1s',

  ':hover': {
    color: theme.colors.primary100,
    opacity: '80%'
  }
}));
