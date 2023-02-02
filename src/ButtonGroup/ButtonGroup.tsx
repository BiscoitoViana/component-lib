import React, { ReactNode } from 'react';

import './ButtonGroup.css';

export interface ButtonGroupProps {
  children: ReactNode;
  vertical?: boolean;
  align?: 'start' | 'center' | 'end' | 'between';
}

/** ButtonGroup is used to display a series of buttons.  */
export const ButtonGroup = ({
  vertical = false,
  align = 'start',
  ...props
}: ButtonGroupProps) => {
  const classNames = ['button-group'];
  classNames.push(`button-group--align-${align}`);
  if (vertical) {
    classNames.push('button-group--vertical');
  }

  return <div className={classNames.join(' ')}>{props.children}</div>;
};
