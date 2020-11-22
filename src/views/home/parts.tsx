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
  tabLarge: 34,
  mobileLarge: 30,
  mobileMedium: 26
});

export const Subtitle = styled.div(({ theme }) => ({
  fontSize: getValueForDevice({
    desktopLarge: 20,
    desktopMedium: 19,
    desktopSmall: 18,
    laptopLarge: 16,
    laptopMedium: 14,
    tabLarge: 16,
    mobileMedium: 12
  }),
  color: theme.colors.primary100,
  display: 'flex',
  alignItems: 'center',

  '&:after': {
    // eslint-disable-next-line quotes
    content: `''`,
    display: getValueForDevice({
      desktopLarge: 'block',
      tabSmall: 'block',
      mobileLarge: 'none'
    }),
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
    textAlign: getValueForDevice({
      desktopLarge: 'center',
      tabSmall: 'center',
      mobileLarge: 'left'
    }),
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
    tabLarge: 18,
    tabSmall: 16,
    mobileMedium: 13
  }),
  color: theme.colors.white,
  fontWeight: theme.fontWeights.light,
  textAlign: getValueForDevice({
    desktopLarge: 'center',
    tabSmall: 'center',
    mobileLarge: 'left'
  }),
  lineHeight: getValueForDevice({
    desktopLarge: '34px',
    desktopMedium: '32px',
    desktopSmall: '30px',
    laptopLarge: '28px',
    laptopMedium: '26px',
    mobileMedium: '21px'
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
    tabLarge: 38,
    mobileLarge: 36,
    mobileMedium: 30
  });

  const longTitleFontSize = getValueForDevice({
    desktopLarge: 45,
    desktopMedium: 42,
    desktopSmall: 38,
    laptopLarge: 38,
    laptopMedium: 33,
    tabLarge: 34,
    mobileLarge: 32,
    mobileMedium: 28
  });

  const width = getValueForDevice({
    desktopLarge: 700,
    laptopLarge: 600,
    laptopMedium: 550,
    tabLarge: 600,
    tabSmall: 500,
    mobileLarge: 400,
    mobileMedium: 270,
    mobileSmall: window.innerWidth * 0.86
  });

  const buttonsSpace = getValueForDevice({
    desktopLarge: 30,
    laptopLarge: 28,
    laptopMedium: 22,
    mobileMedium: 16
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
      alignItems={getValueForDevice({
        desktopLarge: 'center',
        tabSmall: 'center',
        mobileLarge: 'start'
      })}
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
    tabLarge: 70,
    tabMedium: 60,
    tabSmall: 44
  }),
  right: getValueForDevice({
    desktopLarge: '50%',
    laptopMedium: '50%',
    tabLarge: 50
  }),
  transform: getValueForDevice({
    desktopLarge: 'translate(50%, -50%)',
    laptopMedium: 'translate(50%, -50%)',
    tabLarge: 'none'
  }),
  opacity: '60%',
  color: theme.colors.white,
  transition: 'opacity 0.1s, color 0.1s',

  ':hover': {
    color: theme.colors.primary100,
    opacity: '80%'
  }
}));
