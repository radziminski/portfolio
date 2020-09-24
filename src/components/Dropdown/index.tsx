import React, { useMemo, useRef, useState } from 'react';
import {
  DropdownContainer,
  SelectedOptionText,
  SelectedOptionContainer,
  DropdownOptionItem,
  DropdownOptionsList
} from './parts';
import { AiFillCaretDown } from 'react-icons/ai';
import useOutsideClick from 'hooks/useOutsideClick';

interface Props {
  options: string[];
  value: string;
  onChange: (option: string) => void;
}

export const Dropdown: React.FC<Props> = ({ options, value, onChange }) => {
  const [isOpened, setIsOpened] = useState(false);
  const dropdownRef = useRef(null);
  const renderedOptions = useMemo(
    () =>
      options.map((option) => (
        <DropdownOptionItem key={option} onClick={() => onChange(option)}>
          {option}
        </DropdownOptionItem>
      )),
    [options, onChange]
  );

  useOutsideClick(dropdownRef, () => setIsOpened(false));

  return (
    <DropdownContainer
      onClick={() => setIsOpened((prevState) => !prevState)}
      ref={dropdownRef}
    >
      <SelectedOptionContainer>
        <SelectedOptionText>{value} </SelectedOptionText>
        <AiFillCaretDown
          style={{
            transform: `translateY(2px) ${isOpened ? 'rotate(180deg)' : ''}`,
            marginLeft: '26px',
            transition: 'all 0.2s'
          }}
        />
      </SelectedOptionContainer>
      {isOpened && <DropdownOptionsList>{renderedOptions}</DropdownOptionsList>}
    </DropdownContainer>
  );
};

export default Dropdown;
