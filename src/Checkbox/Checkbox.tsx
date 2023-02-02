import React from 'react';
import { FiCheck } from 'react-icons/fi';

import './Checkbox.css';

export interface CheckboxProps {
  id: string;
  label: string;
  checked?: boolean;
  helperText?: string;
  onChange: (checked: boolean) => void;
  size?: 'sm' | 'md';
}

export const Checkbox = ({
  checked = false,
  helperText,
  id,
  label,
  size = 'sm',
  onChange,
}: CheckboxProps) => {
  return (
    <div className="checkbox">
      <div className={`checkbox__input checkbox-input--${size}`}>
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={e => onChange(e.target.checked)}
        />
        <label htmlFor={id}>
          {checked && <FiCheck size={size === 'sm' ? 12 : 16} color="white" />}
        </label>
      </div>
      <div className="checkbox__label">
        <label htmlFor={id}>{label}</label>
        {!!helperText && <div className="checkbox__helper">{helperText}</div>}
      </div>
    </div>
  );
};
