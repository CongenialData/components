import React from 'react';
import { createTheme } from '../theming';
import { jsxDecorator } from 'storybook-addon-jsx';
import { ThemeProvider } from 'styled-components/macro';
import { action } from '@storybook/addon-actions';

import { Card } from '../card/card';
import { DatePicker } from './date-picker';

const theme = createTheme([Card, DatePicker]);

export default {
  title: 'Generic|Input/Date Picker',
  component: DatePicker,
  decorators: [jsxDecorator],
};

export const DatePickerDefault = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <div style={{ display: 'flex' }}>
      <Card size="medium">
        <DatePicker
          label="Start"
          name="start"
          onChange={action('button-click')}
        />
      </Card>
    </div>
  </ThemeProvider>
);

DatePickerDefault.story = {
  name: 'Default',
};

export const DatePickerDialog = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <div style={{ display: 'flex' }}>
      <Card size="medium">
        <DatePicker
          label="Start"
          name="start"
          openInDialog={true}
          onChange={action('button-click')}
        />
      </Card>
    </div>
  </ThemeProvider>
);

DatePickerDialog.story = {
  name: 'Dialog',
};
