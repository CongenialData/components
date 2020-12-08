import React from 'react';
import { createTheme } from '../theming';
import { jsxDecorator } from 'storybook-addon-jsx';
import { ThemeProvider } from 'styled-components/macro';
import centered from '@storybook/addon-centered/react';
import { faCalendar } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FormSection } from './form-section';

const theme = createTheme([FormSection]);

export default {
  title: 'Generic|Form/Section',
  component: FormSection,
  decorators: [jsxDecorator, centered],
};

export const FormSectionDefault = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <FormSection>
      <p>This is the content of the form section</p>
    </FormSection>
  </ThemeProvider>
);

FormSectionDefault.story = {
  name: 'Default',
};

export const FormSectionBordered = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <div style={{ background: 'white ' }}>
      <FormSection border={true}>
        <p>And I have a bottom border</p>
      </FormSection>
      <FormSection border={true}>
        <p>And I have a bottom border</p>
      </FormSection>
      <FormSection border={true}>
        <p>And I have a bottom border</p>
      </FormSection>
    </div>
  </ThemeProvider>
);

FormSectionBordered.story = {
  name: 'Border',
};

export const FormSectionTitle = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <FormSection title="I am the title">
      <p>This is the content</p>
    </FormSection>
  </ThemeProvider>
);

FormSectionTitle.story = {
  name: 'Title',
};
export const FormSectionIcon = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <FormSection
      icon={<FontAwesomeIcon icon={faCalendar} size="2x" />}
      title="I am the title"
    >
      <p>And I have a bottom border</p>
    </FormSection>
  </ThemeProvider>
);

FormSectionIcon.story = {
  name: 'Icon',
};
