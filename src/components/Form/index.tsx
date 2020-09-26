import React, { useMemo, useState, useEffect, useCallback } from 'react';
import TextInput from './TextInput';
import { Container } from './parts';
import TextareaInput from './TextareaInput';
import Button from 'components/Button';
import { FlexBox } from 'components/Box';
import Loader from 'components/Loader';

const INFO_MESSAGE_APPEARANCE_DURATION_MS = 4000;

export interface FormInput {
  label: string;
  type: 'text' | 'textarea';
  required?: boolean;
}

export interface Props {
  inputs: FormInput[];
  onSubmit: (values: Record<string, string>) => Promise<string>;
}

const Form: React.FC<Props> = ({ inputs, onSubmit }) => {
  const [values, setValues] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const onSubmitFinished = (resultMessage: string) => {
    setMessage(resultMessage);
    setIsLoading(false);
    setShowMessage(true);
    setTimeout(
      () => setShowMessage(false),
      INFO_MESSAGE_APPEARANCE_DURATION_MS - 2000
    );
    setTimeout(() => setMessage(''), INFO_MESSAGE_APPEARANCE_DURATION_MS);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;

    setShowMessage(true);
    setIsLoading(true);
    onSubmit(values)
      .then((resultMessage) => {
        onSubmitFinished(resultMessage);
        clearFormValues();
      })
      .catch((errMessage) => {
        onSubmitFinished(errMessage);
      });
  };

  const clearFormValues = useCallback(
    () =>
      inputs.forEach((input) =>
        setValues((prevValues) => ({
          ...prevValues,
          [input.label.toLowerCase()]: ''
        }))
      ),
    [inputs]
  );

  useEffect(() => clearFormValues(), [clearFormValues]);

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
                [input.label.toLowerCase()]: value
              }));
            }}
            value={values[input.label.toLowerCase()] || ''}
          />
        ) : (
          <TextareaInput
            key={input.label}
            label={input.label}
            required={input.required}
            onChange={(value) => {
              setValues((prevValues) => ({
                ...prevValues,
                [input.label.toLowerCase()]: value
              }));
            }}
            value={values[input.label.toLowerCase()] || ''}
          />
        )
      ),
    [inputs, values]
  );

  const messageBoxContent = isLoading ? <Loader /> : message || null;

  return (
    <Container onSubmit={onFormSubmit}>
      {renderedInputs}
      <FlexBox justifyContent='space-between' alignItems='center'>
        <FlexBox
          color='primary100'
          maxWidth='180px'
          opacity={showMessage ? 1 : 0}
          transition='all 0.3s'
          style={{ wordWrap: 'break-word' }}
        >
          {messageBoxContent}
        </FlexBox>
        <Button type='submit' padding='10px 30px'>
          Send!
        </Button>
      </FlexBox>
    </Container>
  );
};

export default Form;
