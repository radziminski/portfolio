import React, { useMemo, useState, useEffect } from 'react';
import TextInput from './TextInput';
import { Container } from './parts';
import TextareaInput from './TextareaInput';
import Button from 'components/Button';
import { FlexBox } from 'components/Box';

export interface FormInput {
  label: string;
  type: 'text' | 'textarea';
  required?: boolean;
}

export interface Props {
  inputs: FormInput[];
  onSubmit: (values: string[]) => void;
}

const Form: React.FC<Props> = ({ inputs, onSubmit }) => {
  const [values, setValues] = useState<Record<string, string>>({});
  useEffect(() => {
    inputs.forEach((input) =>
      setValues((prevValues) => ({
        ...prevValues,
        [input.label]: ''
      }))
    );
  }, [inputs]);

  const renderedInputs = useMemo(
    () =>
      inputs.map((input) =>
        input.type === 'text' ? (
          <TextInput
            key={input.label}
            label={input.label}
            required={!!input.required}
            onChange={(value) => {
              setValues((prevValues) => ({
                ...prevValues,
                [input.label]: value
              }));
            }}
            value={values[input.label] || ''}
          />
        ) : (
          <TextareaInput
            key={input.label}
            label={input.label}
            required={input.required}
            onChange={(value) => {
              setValues((prevValues) => ({
                ...prevValues,
                [input.label]: value
              }));
            }}
            value={values[input.label] || ''}
          />
        )
      ),
    [inputs, values]
  );

  return (
    <Container>
      {renderedInputs}
      <FlexBox justifyContent='space-between' alignItems='center'>
        <FlexBox
          color='primary100'
          maxWidth='300px'
          opacity={0}
          transition='all 0.2s'
        >
          Sample message will be here
        </FlexBox>
        <Button
          onClick={() => {
            console.log('onClick');
          }}
          padding='10px 30px'
        >
          Send!
        </Button>
      </FlexBox>
    </Container>
  );
};

export default Form;
