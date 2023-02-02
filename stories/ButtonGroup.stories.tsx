import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src/Button';
import { ButtonGroup, ButtonGroupProps } from '../src/ButtonGroup';

const meta: Meta = {
  title: 'ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    children: {
      defaultValue: (
        <>
          <Button>Cancel</Button>
          <Button variant="primary">Save</Button>
        </>
      ),
    },
  },
};

export default meta;
const Template: Story<ButtonGroupProps> = args => <ButtonGroup {...args} />;

export const Default = Template.bind({});
export const Start = Template.bind({});
export const Center = Template.bind({});
export const End = Template.bind({});
export const Between = Template.bind({});
export const Vertical = Template.bind({});

Center.args = {
  align: 'center',
};

End.args = {
  align: 'end',
};

Between.args = {
  align: 'between',
};

Vertical.args = {
  vertical: true,
};
