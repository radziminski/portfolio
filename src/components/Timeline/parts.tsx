import Box from 'components/Box';
import ExpandableParagraph from 'components/ExpandableParagraph';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import {
  getValueForDevice,
  LAYOUT_ORIENTATION_BREAKPOINT
} from 'styles/breakpoints';
import { TimelinePointProps } from '.';

export const TimelinePoint = styled.div<{ size: number }>(
  ({ theme, size }) => ({
    display: 'flex',
    borderRadius: '100%',
    width: size,
    height: size,
    backgroundColor: theme.colors.primary100
  })
);

export const TimelineLine = styled.div(({ theme }) => ({
  display: 'flex',
  width: '2px',
  height: getValueForDevice({
    desktopLarge: 120,
    desktopMedium: 115,
    desktopSmall: 110,
    laptopLarge: 100,
    tabSmall: 130,
    mobileLarge: 160,
    mobileMedium: 170
  }),
  backgroundColor: theme.colors.primary100,
  marginLeft: getValueForDevice({
    desktopLarge: 0,
    desktopMedium: 0,
    desktopSmall: 0,
    laptopLarge: 0,
    tabSmall: 8.5,
    mobileLarge: 8.5,
    mobileMedium: 7.5
  }),
  marginTop: window.innerWidth > LAYOUT_ORIENTATION_BREAKPOINT ? 0 : -16
}));

export const TimelineTextContainer = styled.div<{ side: 'left' | 'right' }>(
  ({ theme, side }) => ({
    width: window.innerWidth > LAYOUT_ORIENTATION_BREAKPOINT ? '48%' : '90%',
    display: 'flex',
    height: 50,
    left: side === 'right' ? '52%' : 'auto',
    right: side === 'left' ? '52%' : 'auto',
    position:
      window.innerWidth > LAYOUT_ORIENTATION_BREAKPOINT ? 'absolute' : 'static',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: theme.fontSizes[4]
  })
);

export const TimelineEntry: React.FC<TimelinePointProps> = ({
  start,
  end,
  title,
  description,
  timelineSide
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: `-${window.innerHeight * 0.44}px 0px`
  });

  useEffect(() => {
    // Used for debouncing
    setTimeout(() => {
      if (inView) setIsOpen(true);
      else setIsOpen(false);
    }, 160);
  }, [inView]);

  if (timelineSide === 'right')
    return (
      <>
        <TimelinePoint
          size={getValueForDevice({
            desktopLarge: 20,
            mobileLarge: 19,
            mobileMedium: 16
          })}
        />
        <TimelineTextContainer side='right' ref={ref}>
          <Box
            color='primary100'
            opacity={0.9}
            width={getValueForDevice({
              desktopLarge: '32%',
              mobileLarge: '32%',
              mobileMedium: '34%'
            })}
            style={{
              fontSize: getValueForDevice({
                desktopLarge: 'inherit',
                mobileLarge: 'inherit',
                mobileMedium: '11px'
              })
            }}
            textAlign='center'
          >
            {start} - {end}
          </Box>
          <ExpandableParagraph
            title={title}
            content={description}
            textAlign='left'
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </TimelineTextContainer>
      </>
    );

  return (
    <>
      <TimelinePoint size={20} />
      <TimelineTextContainer side='left' ref={ref}>
        <ExpandableParagraph
          title={title}
          content={description}
          textAlign='right'
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <Box color='primary100' opacity={0.95} width='32%' textAlign='center'>
          {start} - {end}
        </Box>
      </TimelineTextContainer>
    </>
  );
};
