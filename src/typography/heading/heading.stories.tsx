import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { ThemeProvider } from 'styled-components/macro';

import { Heading } from './';

import { createTheme } from '../../theming';
const theme = createTheme([Heading]);

export default {
  title: 'Generic|Typography/Heading',
  component: Heading,
  decorators: [jsxDecorator],
};

export const HeadingDefault = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <div style={{ flexDirection: 'column' }}>
      <Heading level="h1">Level 1</Heading>
      <Heading level="h2">Level 2</Heading>
      <Heading level="h3">Level 3</Heading>
      <Heading level="h4">Level 4</Heading>
      <Heading level="h5">Level 5</Heading>
      <Heading level="h6">Level 6</Heading>
    </div>
  </ThemeProvider>
);
HeadingDefault.story = {
  name: 'Default',
};
