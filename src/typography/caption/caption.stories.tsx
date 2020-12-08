import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { ThemeProvider } from 'styled-components/macro';

import { Caption } from '.';

import { createTheme } from '../../theming';
const theme = createTheme([Caption]);

export default {
  title: 'Generic|Typography/Caption',
  component: Caption,
  decorators: [jsxDecorator],
};

export const CaptionDefault = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <div style={{ flexDirection: 'column' }}>
      <Caption>I am a caption</Caption>
    </div>
  </ThemeProvider>
);
CaptionDefault.story = {
  name: 'Default',
};

export const CaptionStatus = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Caption status="basic">I am a BASIC caption</Caption>
      <Caption status="control">I am a CONTROL caption</Caption>
      <Caption status="danger">I am a DANGER caption</Caption>
      <Caption status="info">I am an INFO caption</Caption>
      <Caption status="primary">I am a PRIMARY caption</Caption>
      <Caption status="success">I am a SUCCESS caption</Caption>
      <Caption status="warning">I am a WARNING caption</Caption>
    </div>
  </ThemeProvider>
);
CaptionStatus.story = {
  name: 'Status',
};

export const CaptionType = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Caption type="default">I am default type</Caption>
      <Caption type="alternate">I am an alternate caption</Caption>
    </div>
  </ThemeProvider>
);
CaptionType.story = {
  name: 'Type',
};
