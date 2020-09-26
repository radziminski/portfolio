import React, { useState } from 'react';
import { Container, Label, Input } from './parts';

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required: boolean;
}

const TextInput: React.FC<Props> = ({ label, value, onChange, required }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <Input
        type='text'
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      />
      <Label htmlFor={value} selected={isFocused || !!value}>
        {label}
      </Label>
    </Container>
  );
};

export default TextInput;
