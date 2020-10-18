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
          width='49%'
          height={3}
          position='absolute'
          right={0}
          alignItems='center'
          justifyContent='space-between'
        >
          <Box
            marginX={10}
            color='primary100'
            opacity={0.9}
            width={100}
            textAlign='center'
          >
            {start} - {end}
          </Box>
          <Box color='gray90' width='75%'>
            <Text lineHeight={1.6}>{description}</Text>
          </Box>
        </FlexBox>
      </>
    );

  return (
    <>
      <TimelinePoint size={20} />
      <FlexBox
        width='49%'
        height={3}
        position='absolute'
        right='58%'
        alignItems='center'
        justifyContent='space-between'
      >
        <Box color='gray90' width='75%' textAlign='right'>
          <Text lineHeight={1.6}>{description}</Text>
        </Box>
        <Box
          marginX={10}
          color='primary100'
          opacity={0.95}
          width={100}
          textAlign='center'
        >
          {start} - {end}
        </Box>
      </FlexBox>
    </>
  );
};
