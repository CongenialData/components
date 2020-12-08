import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { jsxDecorator } from 'storybook-addon-jsx';

import { Chip } from '.';

import { createTheme } from '../theming';
const theme = createTheme([Chip]);

export default {
  title: 'Generic|Chip',
  component: Chip,
  decorators: [withKnobs, jsxDecorator],
};
export const ChipDefault = (): JSX.Element => {
  const title = text('Text', 'I am a chip');

  return (
    <ThemeProvider theme={theme}>
      <Chip text={title} />
    </ThemeProvider>
  );
};

ChipDefault.story = {
  name: 'Default',
};
export const ChipDisabled = (): JSX.Element => {
  const title = text('Text', 'I am a chip');

  return (
    <ThemeProvider theme={theme}>
      <Chip disabled={true} text={title} />
    </ThemeProvider>
  );
};

ChipDisabled.story = {
  name: 'Disabled',
};
