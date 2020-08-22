import React from 'react';
import { FullButton, GhostButton } from './parts';

export type ButtonVariant = 'ghost' | 'full';

interface Props {
  onClick: () => void;
  variant?: ButtonVariant;
}

const Button: React.FC<Props> = ({ children, onClick, variant }) => {
  const buttonProps = { onClick };
  if (variant === 'ghost')
    return <GhostButton {...buttonProps}>{children}</GhostButton>;

  return <FullButton {...buttonProps}>{children}</FullButton>;
};

export default Button;
