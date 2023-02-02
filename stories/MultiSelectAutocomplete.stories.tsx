import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  MultiSelectAutocomplete,
  AutocompleteProps,
} from '../src/MultiSelectAutocomplete';

const meta: Meta = {
  title: 'Autocomplete',
  component: MultiSelectAutocomplete,
};

export default meta;

const COUNTRIES = [
  { label: 'Argentina', value: 'ARG' },
  { label: 'Australia', value: 'AUS' },
  { label: 'Belgium', value: 'BEL' },
  { label: 'Brazil', value: 'BRA' },
  { label: 'Cameroon', value: 'CAM' },
  { label: 'Canada', value: 'CAN' },
  { label: 'Costa Rica', value: 'CRC' },
  { label: 'Croatia', value: 'CRO' },
  { label: 'Denmark', value: 'DEN' },
  { label: 'Ecuador', value: 'ECU' },
  { label: 'England', value: 'ENG' },
  { label: 'France', value: 'FRA' },
  { label: 'Germany', value: 'DEU' },
  { label: 'Ghana', value: 'GHA' },
  { label: 'Iran', value: 'IRA' },
  { label: 'Japan', value: 'JAP' },
  { label: 'Korea Republic', value: 'KOR' },
  { label: 'Mexico', value: 'MEX' },
  { label: 'Morocco', value: 'MOR' },
  { label: 'Netherlands', value: 'NED' },
  { label: 'Poland', value: 'POL' },
  { label: 'Portugal', value: 'POR' },
  { label: 'Qatar', value: 'QAT' },
  { label: 'Saudi Arabia', value: 'SAU' },
  { label: 'Senegal', value: 'SEN' },
  { label: 'Serbia', value: 'SER' },
  { label: 'Spain', value: 'SPA' },
  { label: 'Switzerland', value: 'SWZ' },
  { label: 'Tunisia', value: 'TUN' },
  { label: 'United States', value: 'USA' },
  { label: 'Uruguay', value: 'URU' },
  { label: 'Wales', value: 'WAL' },
];

const Template: Story<AutocompleteProps> = ({
  onChange,
  value,
  options,
  ...args
}) => {
  const [list, setList] = useState<string[]>(value || []);

  return (
    <MultiSelectAutocomplete
      onChange={value => setList(value)}
      value={list}
      options={COUNTRIES}
      {...args}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  id: 'autocomplete-countries',
  label: 'Countries',
  placeholder: 'Type to filter',
};
