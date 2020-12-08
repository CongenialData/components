import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { ThemeProvider } from 'styled-components/macro';
import { TextInput } from '../text-input';
import { Card } from '../../card';

import { InputWrapper } from '.';

import { createTheme } from '../theming';
import { Heading } from '../typography/heading';
const theme = createTheme([Card, InputWrapper, TextInput]);

export default {
  title: 'Generic|Input/Input Wrapper',
  component: InputWrapper,
  decorators: [jsxDecorator],
};

export const InputWrapperDefault = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <p>
      This adds a wrapper around input fields. Fixes some layout issues that
      manually have to be handled if used without this component.
    </p>
    <Card>
      <InputWrapper>
        <TextInput label="User name" />
        <TextInput label="Password" />
      </InputWrapper>
    </Card>
    <Card>
      <InputWrapper direction="vertical">
        <TextInput label="User name" />
        <TextInput label="Password" />
      </InputWrapper>
    </Card>
    <Card>
      <InputWrapper>
        <TextInput label="Single field" />
      </InputWrapper>
    </Card>
  </ThemeProvider>
);

InputWrapperDefault.story = {
  name: 'Default',
};

export const InputWrapperSpacing = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Card title="Horizontal">
      <Heading level="h6">Tiny</Heading>
      <InputWrapper size="tiny">
        <TextInput label="User name" />
        <TextInput label="Phone" />
        <TextInput label="E-mail" />
        <TextInput label="Password" />
      </InputWrapper>
      <Heading level="h6">Small</Heading>
      <InputWrapper size="small">
        <TextInput label="User name" />
        <TextInput label="Phone" />
        <TextInput label="E-mail" />
        <TextInput label="Password" />
      </InputWrapper>
      <Heading level="h6">Medium</Heading>
      <InputWrapper size="medium">
        <TextInput label="User name" />
        <TextInput label="Phone" />
        <TextInput label="E-mail" />
        <TextInput label="Password" />
      </InputWrapper>
      <Heading level="h6">Large</Heading>
      <InputWrapper size="large">
        <TextInput label="User name" />
        <TextInput label="Phone" />
        <TextInput label="E-mail" />
        <TextInput label="Password" />
      </InputWrapper>
      <Heading level="h6">Giant</Heading>
      <InputWrapper size="giant">
        <TextInput label="User name" />
        <TextInput label="Phone" />
        <TextInput label="E-mail" />
        <TextInput label="Password" />
      </InputWrapper>
    </Card>
    <Card title="Vertical">
      <Heading level="h6">Tiny</Heading>
      <InputWrapper direction="vertical" size="tiny">
        <TextInput label="User name" />
        <TextInput label="Phone" />
        <TextInput label="E-mail" />
        <TextInput label="Password" />
      </InputWrapper>
      <Heading level="h6">Small</Heading>
      <InputWrapper direction="vertical" size="small">
        <TextInput label="User name" />
        <TextInput label="Phone" />
        <TextInput label="E-mail" />
        <TextInput label="Password" />
      </InputWrapper>
      <Heading level="h6">Medium</Heading>
      <InputWrapper direction="vertical" size="medium">
        <TextInput label="User name" />
        <TextInput label="Phone" />
        <TextInput label="E-mail" />
        <TextInput label="Password" />
      </InputWrapper>
      <Heading level="h6">Large</Heading>
      <InputWrapper direction="vertical" size="large">
        <TextInput label="User name" />
        <TextInput label="Phone" />
        <TextInput label="E-mail" />
        <TextInput label="Password" />
      </InputWrapper>
      <Heading level="h6">Giant</Heading>
      <InputWrapper direction="vertical" size="giant">
        <TextInput label="User name" />
        <TextInput label="Phone" />
        <TextInput label="E-mail" />
        <TextInput label="Password" />
      </InputWrapper>
    </Card>
  </ThemeProvider>
);

InputWrapperSpacing.story = {
  name: 'Spacing',
};
