import React from 'react';
import Box, { FlexBox } from 'components/Box';
import styled from 'styled-components';
import Button from 'components/Button';

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

export const Title = styled.h1(({ theme }) => ({
  fontSize: '55px',
  color: theme.colors.white,
  fontWeight: theme.fontWeights.semiBold,
  margin: '22px 0'
}));

export const Description = styled.p(({ theme }) => ({
  fontSize: '20px',
  color: theme.colors.white,
  fontWeight: theme.fontWeights.light,
  textAlign: 'center',
  lineHeight: '34px',
  margin: 0
}));

export const HeroBox: React.FC = () => {
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
      <Subtitle>GOOD MORNING!</Subtitle>
      <Title>
        I&apos;m{' '}
        <Box display='inline-flex' color='primary100'>
          Jan
        </Box>{' '}
        Radzimiński
      </Title>
      <Description>
        Full-stack web developer, computer scientist and music producer. Student
        of bachelor studies at Faculty of Electronics and Information Technology
        at Warsaw University of Technology.
      </Description>
      <FlexBox marginTop='28px'>
        <Button
          variant='full'
          onClick={() => {
            /** todo */
          }}
        >
          Contact Me
        </Button>
        <FlexBox marginX='30px' />
        <Button
          variant='ghost'
          onClick={() => {
            /** todo */
          }}
        >
          About
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
  opacity: '50%',
  color: theme.colors.white
}));
