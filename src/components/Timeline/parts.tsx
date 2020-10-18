import Box, { FlexBox } from 'components/Box';
import Text from 'components/Text';
import React from 'react';
import styled from 'styled-components';
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
  height: '120px',
  backgroundColor: theme.colors.primary100
}));

export const TimelineEntry: React.FC<TimelinePointProps> = ({
  start,
  end,
  description,
  timelineSide
}) => {
  if (timelineSide === 'right')
    return (
      <>
        <TimelinePoint size={20} />
        <FlexBox
          width='48%'
          height={50}
          left='52%'
          position='absolute'
          alignItems='center'
          justifyContent='space-between'
        >
          <Box color='primary100' opacity={0.9} width='36%' textAlign='center'>
            {start} - {end}
          </Box>
          <Box color='gray90' width='64%'>
            <Text lineHeight={1.6}>{description}</Text>
          </Box>
        </FlexBox>
      </>
    );

  return (
    <>
      <TimelinePoint size={20} />
      <FlexBox
        width='48%'
        right='52%'
        height={50}
        position='absolute'
        alignItems='center'
        justifyContent='space-between'
      >
        <Box
          color='gray90'
          width='64%'
          textAlign='right'
          style={{ wordWrap: 'break-word' }}
          overflow='hidden'
        >
          <Text lineHeight={1.6}>{description}</Text>
        </Box>
        <Box color='primary100' opacity={0.95} width='36%' textAlign='center'>
          {start} - {end}
        </Box>
      </FlexBox>
    </>
  );
};
