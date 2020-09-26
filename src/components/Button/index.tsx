import React from 'react';
import { FullButton, GhostButton } from './parts';

export type ButtonVariant = 'ghost' | 'full';

interface Props {
  onClick?: () => void;
  variant?: ButtonVariant;
  margin?: string | number;
  padding?: string | number;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  padding,
  margin,
  variant,
  type
}) => {
  const buttonProps = { onClick, margin, padding };
  if (variant === 'ghost')
    return (
      <GhostButton {...buttonProps} type={type || 'button'}>
        {children}
      </GhostButton>
    );

  return (
    <FullButton {...buttonProps} type={type || 'button'}>
      {children}
    </FullButton>
  );
};

export default Button;
