import Box from 'components/Box';
import ExpandableParagraph from 'components/ExpandableParagraph';
import React from 'react';
import styled from 'styled-components';
import { getValueForDevice } from 'styles/breakpoints';
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
    laptopLarge: 100
  }),
  backgroundColor: theme.colors.primary100
}));

export const TimelineTextContainer = styled.div<{ side: 'left' | 'right' }>(
  ({ theme, side }) => ({
    width: '48%',
    display: 'flex',
    height: 50,
    left: side === 'right' ? '52%' : 'auto',
    right: side === 'left' ? '52%' : 'auto',
    position: 'absolute',
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
  if (timelineSide === 'right')
    return (
      <>
        <TimelinePoint size={20} />
        <TimelineTextContainer side='right'>
          <Box color='primary100' opacity={0.9} width='32%' textAlign='center'>
            {start} - {end}
          </Box>
          <ExpandableParagraph
            title={title}
            content={description}
            textAlign='left'
          />
        </TimelineTextContainer>
      </>
    );

  return (
    <>
      <TimelinePoint size={20} />
      <TimelineTextContainer side='left'>
        <ExpandableParagraph
          title={title}
          content={description}
          textAlign='right'
        />
        <Box color='primary100' opacity={0.95} width='32%' textAlign='center'>
          {start} - {end}
        </Box>
      </TimelineTextContainer>
    </>
  );
};
