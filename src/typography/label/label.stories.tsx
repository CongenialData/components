import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { ThemeProvider } from 'styled-components/macro';

import { Label } from '.';

import { createTheme } from '../../theming';
const theme = createTheme([Label]);

export default {
  title: 'Generic|Typography/Label',
  component: Label,
  decorators: [jsxDecorator],
};

export const LabelDefault = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <div style={{ flexDirection: 'column' }}>
      <Label>I am a label</Label>
    </div>
  </ThemeProvider>
);
LabelDefault.story = {
  name: 'Default',
};
