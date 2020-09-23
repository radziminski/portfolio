import React from 'react';
import { DropdownContainer } from './parts';

interface Props {
  style?: {
    color: string;
    borderColor: string;
    iconColor: string;
    fontSize: number;
  };
}

export const Dropdown: React.FC<Props> = () => {
  return <DropdownContainer>Sampletext</DropdownContainer>;
};

export default Dropdown;
