import React, { useMemo } from 'react';
import { FlexBox } from 'components/Box';
import { TimelineLine, TimelineEntry } from './parts';

export interface TimelinePointProps {
  start: string | number;
  end: string | number;
  description: string;
  timelineSide?: 'left' | 'right';
}

interface Props {
  points: TimelinePointProps[];
}

const Timeline: React.FC<Props> = ({ points }) => {
  const pointsRender = useMemo(
    () =>
      points.map((point, index) => (
        <FlexBox
          key={index}
          flexDirection='column'
          alignItems='center'
          width='100%'
        >
          <FlexBox
            width='100%'
            justifyContent='center'
            alignItems='center'
            position='relative'
          >
            <TimelineEntry
              timelineSide={index % 2 === 1 ? 'left' : 'right'}
              {...point}
            />
          </FlexBox>

          {index !== points.length - 1 && <TimelineLine />}
        </FlexBox>
      )),
    [points]
  );
  return (
    <FlexBox alignItems='center' flexDirection='column'>
      {pointsRender}
    </FlexBox>
  );
};

export default Timeline;
