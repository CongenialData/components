import React from 'react';

import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components/macro';

import { TextInput } from './text-input';
import { Card } from '../../card';

import { createTheme } from '../theming';
const theme = createTheme([Card, TextInput]);
const stories = storiesOf('Generic|Input/Text Input', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs);

stories
  .add(
    'Default',
    (): JSX.Element => (
      <ThemeProvider theme={theme}>
        <Card>
          <TextInput />
        </Card>
      </ThemeProvider>
    )
  )
  .add(
    'Default value',
    (): JSX.Element => {
      const value = text('Value', 'My default value');

      return (
        <ThemeProvider theme={theme}>
          <Card>
            <TextInput defaultValue={value} />
          </Card>
        </ThemeProvider>
      );
    }
  )
  .add(
    'Disabled',
    (): JSX.Element => {
      const disabled = boolean('Disabled', true);

      return (
        <ThemeProvider theme={theme}>
          <Card>
            <TextInput disabled={disabled} />
          </Card>
        </ThemeProvider>
      );
    }
  )
  .add(
    'Label',
    (): JSX.Element => (
      <ThemeProvider theme={theme}>
        <Card>
          <TextInput label="E-mail" name="email" />
        </Card>
      </ThemeProvider>
    )
  )
  .add(
    'Status',
    (): JSX.Element => (
      <ThemeProvider theme={theme}>
        <Card>
          <TextInput label="Default styling" status="basic" />
          <TextInput
            caption="You must enter something"
            label="Basic styling"
            name="error"
            status="basic"
          />
          <TextInput label="Info styling" status="info" />
          <TextInput label="Primary styling" status="primary" />
          <TextInput label="Success styling" status="success" />
          <TextInput label="Warning styling" status="warning" />
          <TextInput label="Danger styling" status="danger" />
        </Card>
      </ThemeProvider>
    )
  );
