import React from 'react';
import { FullButton, GhostButton } from './parts';

export type ButtonVariant = 'ghost' | 'full';

interface Props {
  onClick: () => void;
  variant?: ButtonVariant;
  margin?: string | number;
  padding?: string | number;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  padding,
  margin,
  variant
}) => {
  const buttonProps = { onClick, margin, padding };
  if (variant === 'ghost')
    return <GhostButton {...buttonProps}>{children}</GhostButton>;

  return <FullButton {...buttonProps}>{children}</FullButton>;
};

export default Button;
