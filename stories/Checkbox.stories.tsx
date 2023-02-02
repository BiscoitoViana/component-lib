import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox, CheckboxProps } from '../src/Checkbox';

const meta: Meta = {
  title: 'Checkbox',
  component: Checkbox,
};

export default meta;

const Template: Story<CheckboxProps> = args => {
  const [state, setState] = useState<boolean>(args.checked || false);

  return (
    <Checkbox
      checked={state}
      onChange={checked => setState(checked)}
      label={args.label}
      helperText={args.helperText}
      id={args.id}
      size={args.size}
    />
  );
};

export const Default = Template.bind({});
export const Checked = Template.bind({});
export const HelperText = Template.bind({});
export const Medium = Template.bind({});

Default.args = {
  id: 'checkbox-default',
  label: 'I agree to the Terms and Conditions',
};

Checked.args = {
  id: 'checkbox-checked',
  label: 'I agree that this is a checkbox',
  checked: true,
};

HelperText.args = {
  id: 'checkbox-helper',
  label: 'I want to receive e-mail with news and oportunities',
  helperText: "It's possible to change this at anytime",
};

Medium.args = {
  id: 'checkbox-medium',
  label: 'This is a medium checkbox',
  helperText: 'Yes, way bigger than the other one',
  size: 'md',
};
