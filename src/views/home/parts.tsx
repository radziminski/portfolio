import React, { useContext } from 'react';
import Box, { FlexBox } from 'components/Box';
import styled from 'styled-components';
import Button from 'components/Button';
import TextContentContext from 'services/text-content';
import { getValueForDevice } from 'styles/breakpoints';

const STRIPS_WIDTH = getValueForDevice({
  desktopLarge: 70,
  desktopMedium: 60,
  desktopSmall: 55,
  laptopLarge: 50,
  laptopMedium: 36,
  tabLarge: 34
});

export const Subtitle = styled.div(({ theme }) => ({
  fontSize: getValueForDevice({
    desktopLarge: 20,
    desktopMedium: 19,
    desktopSmall: 18,
    laptopLarge: 16,
    laptopMedium: 14,
    tabLarge: 16
  }),
  color: theme.colors.primary100,
  display: 'flex',
  alignItems: 'center',

  '&:after': {
    // eslint-disable-next-line quotes
    content: `''`,
    display: 'block',
    width: `${STRIPS_WIDTH}px`,
    height: '2px',
    backgroundColor: theme.colors.primary100,
    marginLeft: getValueForDevice({
      desktopLarge: '20px',
      desktopSmall: '18px',
      laptopLarge: '16px',
      laptopMedium: '14px'
    })
  },

  '&:before': {
    // eslint-disable-next-line quotes
    content: `''`,
    display: 'block',
    width: `${STRIPS_WIDTH}px`,
    height: '2px',
    backgroundColor: theme.colors.primary100,
    marginRight: getValueForDevice({
      desktopLarge: '20px',
      desktopSmall: '18px',
      laptopLarge: '16px',
      laptopMedium: '14px'
    })
  }
}));

export const Title = styled.h1<{ fontSize?: number }>(
  ({ theme, fontSize = 55 }) => ({
    fontSize: `${fontSize}px`,
    color: theme.colors.white,
    fontWeight: theme.fontWeights.semiBold,
    margin: getValueForDevice({
      desktopLarge: '22px 0',
      desktopMedium: '20px 0',
      desktopSmall: '18px 0',
      laptopLarge: '14px 0',
      laptopMedium: '12px 0',
      tabLarge: '14px 0'
    })
  })
);

export const Description = styled.p(({ theme }) => ({
  fontSize: getValueForDevice({
    desktopLarge: 20,
    desktopMedium: 19,
    desktopSmall: 18,
    laptopLarge: 17,
    laptopMedium: 16,
    tabLarge: 18
  }),
  color: theme.colors.white,
  fontWeight: theme.fontWeights.light,
  textAlign: 'center',
  lineHeight: getValueForDevice({
    desktopLarge: '34px',
    desktopMedium: '32px',
    desktopSmall: '30px',
    laptopLarge: '28px',
    laptopMedium: '26px'
  }),
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

  const titleFontSize = getValueForDevice({
    desktopLarge: 55,
    desktopMedium: 50,
    desktopSmall: 46,
    laptopLarge: 40,
    laptopMedium: 36,
    tabLarge: 38
  });

  const longTitleFontSize = getValueForDevice({
    desktopLarge: 45,
    desktopMedium: 42,
    desktopSmall: 38,
    laptopLarge: 38,
    laptopMedium: 33,
    tabLarge: 35
  });

  const width = getValueForDevice({
    desktopLarge: 700,
    laptopLarge: 600,
    laptopMedium: 550,
    tabLarge: 600
  });

  const buttonsSpace = getValueForDevice({
    desktopLarge: 30,
    laptopLarge: 28,
    laptopMedium: 22
  });

  const top = getValueForDevice({
    desktopLarge: '50%',
    laptopLarge: '52%',
    tabLarge: '50%'
  });

  return (
    <FlexBox
      position='absolute'
      top={top}
      left='50%'
      transform='translate(-50%, -50%)'
      flexDirection='column'
      alignItems='center'
      width={width}
    >
      <Subtitle>{greetingMessage?.toUpperCase()}</Subtitle>
      <Title
        fontSize={
          text.headerTitle.length > 5 ? longTitleFontSize : titleFontSize
        }
      >
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
        <FlexBox marginX={buttonsSpace} />
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
  bottom: getValueForDevice({
    desktopLarge: 40,
    desktopMedium: 36,
    desktopSmall: 32,
    laptopLarge: 26,
    laptopMedium: 20,
    tabLarge: 44
  }),
  left: getValueForDevice({
    desktopLarge: '50%',
    laptopMedium: '50%',
    tabLarge: '85%'
  }),
  transform: 'translate(-50%, -50%)',
  opacity: '60%',
  color: theme.colors.white,
  transition: 'opacity 0.1s, color 0.1s',

  ':hover': {
    color: theme.colors.primary100,
    opacity: '80%'
  }
}));
