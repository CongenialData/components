import React from 'react';

import { action } from '@storybook/addon-actions';
import { jsxDecorator } from 'storybook-addon-jsx';
import { date, withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components/macro';

import { CircleButton } from 'components';
import { Calendar } from './calendar';

import { IThemedComponent, createTheme } from '../theming';

function dateKnob(name: string, defaultValue: Date): Date {
  const stringTimestamp = date(name, defaultValue);
  return new Date(stringTimestamp);
}
const theme = createTheme([
  Calendar as IThemedComponent,
  CircleButton as IThemedComponent,
]);

export default {
  title: 'Generic|Calendar',
  component: Calendar,
  decorators: [jsxDecorator, withKnobs],
};

export const CalendarDefault = (): JSX.Element => {
  const defaultValue = new Date();

  const value = dateKnob('value', defaultValue);
  const onChangeMonth = action('onChangeMonth');
  const onSelectDate = action('onSeleclectDate');

  return (
    <ThemeProvider theme={theme}>
      <Calendar
        month={value}
        value={value}
        onChangeMonth={onChangeMonth}
        onSelectDate={onSelectDate}
      />
    </ThemeProvider>
  );
};
CalendarDefault.story = {
  name: 'Default',
};
