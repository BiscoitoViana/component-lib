import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'Button',
    },
  },
};

export default meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});
export const Primary = Template.bind({});
export const Small = Template.bind({});
export const Large = Template.bind({});
export const Disabled = Template.bind({});

Primary.args = {
  variant: 'primary',
};

Small.args = {
  size: 'sm',
};

Large.args = {
  size: 'lg',
};

Disabled.args = {
  disabled: true,
};
