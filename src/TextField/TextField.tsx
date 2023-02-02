import React, { ChangeEventHandler, HTMLAttributes } from 'react';
import './TextField.css';

export interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
  id: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  label?: string;
  error?: string;
  helperText?: string;
  placeholder?: string;
  maxLength?: number;
}

export const TextField = ({
  id,
  label,
  error,
  helperText,
  ...props
}: TextFieldProps) => {
  return (
    <div className="text-field">
      {!!label && (
        <label htmlFor={id} className="text-field__label">
          {label}
        </label>
      )}
      <div className={`text-field__input ${!!error && 'has-error'}`}>
        <input type="text" id={id} {...props} />
        <div
          className={`text-field__helpers ${
            !!helperText && !!props.maxLength
              ? 'helpers--between'
              : !!props.maxLength
              ? 'helpers--end'
              : ''
          }`}
        >
          {!!helperText && (
            <div className="text-field__helper-text">{helperText}</div>
          )}
          {!!props.maxLength && (
            <div className="text-field__counter">
              {props.value.length}/{props.maxLength}
            </div>
          )}
        </div>
      </div>
      {!!error && <div className="text-field__error-message">{error}</div>}
    </div>
  );
};
