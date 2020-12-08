import React from 'react';
import { createTheme } from '../theming';
import { jsxDecorator } from 'storybook-addon-jsx';
import { ThemeProvider } from 'styled-components/macro';
import centered from '@storybook/addon-centered/react';

import { MultiSelect } from './multiselect';

const theme = createTheme([MultiSelect]);

export default {
  title: 'Generic|Input/Multiselect',
  component: MultiSelect,
  decorators: [jsxDecorator, centered],
};

const users = [
  { value: '1', label: 'Jane Doe' },
  { value: '2', label: 'John Doe' },
];

export const MultiSelectDefault = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <div style={{ background: 'white', padding: '1rem' }}>
      <MultiSelect
        addButtonText="Add assignees"
        name="assignees"
        options={users}
      />
    </div>
  </ThemeProvider>
);

MultiSelectDefault.story = {
  name: 'Default',
};

export const MultiSelectDisabled = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <div style={{ background: 'white', padding: '1rem' }}>
      <MultiSelect
        addButtonText="Add assignees"
        disabled={true}
        name="assignees"
        options={users}
      />
    </div>
  </ThemeProvider>
);

MultiSelectDisabled.story = {
  name: 'Disabled',
};
