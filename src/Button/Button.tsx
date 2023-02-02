import React, { HTMLAttributes, MouseEventHandler, ReactNode } from 'react';

import './Button.css';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
  children,
  onClick,
  variant = 'secondary',
  size = 'md',
  type = 'button',
  ...props
}: ButtonProps) => {
  const classNames = ['button'];

  if (variant === 'primary') {
    classNames.push('button--primary');
  }

  classNames.push(`button--${size}`);

  return (
    <button
      onClick={onClick}
      className={classNames.join(' ')}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
