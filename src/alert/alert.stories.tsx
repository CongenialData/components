import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { jsxDecorator } from 'storybook-addon-jsx';

import { Alert } from './alert';
import { createTheme } from '../theming';
const theme = createTheme([Alert]);

export default {
  title: 'Generic/Alert',
  component: Alert,
  decorators: [
    jsxDecorator,
    (storyFn): JSX.Element => (
      <div style={{ background: 'white', padding: '1rem' }}>{storyFn()}</div>
    ),
  ],
};

export const AlertStory = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Alert message="I am default, pretty boring..." status="basic" />
    <Alert message="Look out, this is an error!" status="danger" />
    <Alert message="I give info!" status="info" />
    <Alert message="So important!" status="primary" />
    <Alert message="Everything is ok!" status="success" />
    <Alert message="Please, be careful" status="warning" />
  </ThemeProvider>
);

AlertStory.story = {
  name: 'Default',
};

export const AlertAccentStory = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Alert accent="basic" message="I am default, pretty boring..." />
    <Alert accent="danger" message="Look out, this is an error!" />
    <Alert accent="info" message="I give info!" />
    <Alert accent="primary" message="So important!" />
    <Alert accent="success" message="Everything is ok!" />
    <Alert accent="warning" message="Please, be careful" />
  </ThemeProvider>
);

AlertAccentStory.story = {
  name: 'Accent',
};

export const AlertOutlineStory = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Alert message="I am default, pretty boring..." outline="basic" />
    <Alert message="Look out, this is an error!" outline="danger" />
    <Alert message="I give info!" outline="info" />
    <Alert message="So important!" outline="primary" />
    <Alert message="Everything is ok!" outline="success" />
    <Alert message="Please, be careful" outline="warning" />
    <Alert message="Mix status and accent" outline="warning" />
  </ThemeProvider>
);

AlertOutlineStory.story = {
  name: 'Outline',
};
