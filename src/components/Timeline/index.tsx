import { FlexBox } from 'components/Box';
import React from 'react';

interface TimelinePoint {
  label: string;
  start: string | number;
  end: string | number;
  description: string;
  timelineSide?: 'left' | 'right';
}

interface Props {
  points: TimelinePoint[];
}

const Timeline: React.FC<Props> = () => {
  return <FlexBox justifyContent='center'></FlexBox>;
};

export default Timeline;
