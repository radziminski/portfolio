import React, { useMemo } from 'react';
import { FlexBox } from 'components/Box';
import { TimelineLine, TimelineEntry } from './parts';
import { LAYOUT_ORIENTATION_BREAKPOINT } from 'styles/breakpoints';

export interface TimelinePointProps {
  start: string | number;
  end: string | number;
  description: string;
  title: string;
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
          alignItems={
            window.innerWidth > LAYOUT_ORIENTATION_BREAKPOINT
              ? 'center'
              : 'start'
          }
          width='100%'
          marginTop={
            window.innerWidth > LAYOUT_ORIENTATION_BREAKPOINT || index === 0
              ? 0
              : -16
          }
        >
          <FlexBox
            width='100%'
            justifyContent={
              window.innerWidth > LAYOUT_ORIENTATION_BREAKPOINT
                ? 'center'
                : 'left'
            }
            alignItems='center'
            position='relative'
          >
            <TimelineEntry
              timelineSide={
                window.innerWidth > LAYOUT_ORIENTATION_BREAKPOINT
                  ? index % 2 === 1
                    ? 'left'
                    : 'right'
                  : 'right'
              }
              {...point}
            />
          </FlexBox>

          {index !== points.length - 1 && <TimelineLine />}
        </FlexBox>
      )),
    [points]
  );
  return (
    <FlexBox alignItems='center' flexDirection='column' paddingBottom={10}>
      {pointsRender}
    </FlexBox>
  );
};

export default Timeline;
