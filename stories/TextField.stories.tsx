import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { TextField, TextFieldProps } from '../src/TextField';

const meta: Meta = {
  title: 'TextField',
  component: TextField,
};

export default meta;

const Template: Story<TextFieldProps> = ({ onChange, value, ...args }) => {
  const [text, setText] = useState<string>(value || '');

  return (
    <TextField onChange={e => setText(e.target.value)} value={text} {...args} />
  );
};

export const Default = Template.bind({});
export const Helper = Template.bind({});
export const Counter = Template.bind({});
export const Disabled = Template.bind({});
export const Error = Template.bind({});

Default.args = {
  id: 'txt-default',
  label: 'Username',
  placeholder: 'Please enter your username',
};

Helper.args = {
  id: 'txt-helper',
  label: 'Username',
  helperText: 'The username must have at least one number and one letter',
};

Counter.args = {
  id: 'txt-counter',
  maxLength: 20,
  label: 'Username',
  helperText: "Your username can't have more than 20 characters",
};

Disabled.args = {
  id: 'txt-disabled',
  maxLength: 20,
  label: 'Username',
  helperText: "Your username can't have more than 20 characters",
  disabled: true,
  value: 'Iron Maiden',
};

Error.args = {
  id: 'txt-error',
  label: 'Username',
  error: "You can't have spaces in the username",
  value: 'Iron Maiden',
};
