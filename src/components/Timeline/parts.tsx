import Box, { FlexBox } from 'components/Box';
import ExpandableParagraph from 'components/ExpandableParagraph';
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
  title,
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
          <Box color='primary100' opacity={0.9} width='32%' textAlign='center'>
            {start} - {end}
          </Box>
          <ExpandableParagraph
            title={title}
            content={description}
            textAlign='left'
          />
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
        <ExpandableParagraph
          title={title}
          content={description}
          textAlign='right'
        />
        <Box color='primary100' opacity={0.95} width='32%' textAlign='center'>
          {start} - {end}
        </Box>
      </FlexBox>
    </>
  );
};
