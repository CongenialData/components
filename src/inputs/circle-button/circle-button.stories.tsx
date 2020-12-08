import React from 'react';
import { faCabinetFiling } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { jsxDecorator } from 'storybook-addon-jsx';
import { ThemeProvider } from 'styled-components/macro';

import { CircleButton } from './circle-button';

import { IThemedComponent, createTheme } from '../theming';
const theme = createTheme([CircleButton as IThemedComponent]);

export default {
  title: 'Generic|Input/Circle Button',
  component: CircleButton,
  decorators: [jsxDecorator],
};

export const CircleButtonBasic = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <CircleButton size="small" title="Small" />
    <CircleButton size="medium" title="Medium" />
    <CircleButton size="large" title="Large" />
    <CircleButton size="xl" title="XL" />
  </ThemeProvider>
);
CircleButtonBasic.story = {
  name: 'Basic',
};

export const CircleButtonVariants = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <CircleButton title="Accent" variant="accent" />
    <CircleButton title="Primary" variant="primary" />
    <CircleButton title="Secondary" variant="secondary" />
    <CircleButton title="Danger" variant="danger" />
  </ThemeProvider>
);
CircleButtonVariants.story = {
  name: 'Variants',
};

export const CircleButtonIcon = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <h2>Sizes</h2>
    <div
      style={{
        display: 'flex',
        marginTop: '1rem',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <CircleButton
          icon={<FontAwesomeIcon icon={faCabinetFiling} />}
          size="small"
        />
        <p>small</p>
      </div>
      <div>
        <CircleButton icon={<FontAwesomeIcon icon={faCabinetFiling} />} />
        <p>regular</p>
      </div>
      <div>
        <CircleButton
          icon={<FontAwesomeIcon icon={faCabinetFiling} />}
          size="large"
        />
        <p>large</p>
      </div>
      <div>
        <CircleButton
          icon={<FontAwesomeIcon icon={faCabinetFiling} />}
          size="xl"
        />
        <p>xl</p>
      </div>
    </div>
  </ThemeProvider>
);
CircleButtonIcon.story = {
  name: 'Icon',
};

export const CircleButtonSpacing = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <h2>Vertical Spacing</h2>
        <CircleButton title="default" />
        <CircleButton title="narrow" verticalSpacing="narrow" />
        <CircleButton title="wide" verticalSpacing="wide" />
        <CircleButton title="none" verticalSpacing="none" />
      </div>
      <div>
        <h2>Horizontal Spacing</h2>
        <CircleButton title="default" />
        <CircleButton horizontalSpacing="narrow" title="narrow" />
        <CircleButton horizontalSpacing="wide" title="wide" />
        <CircleButton horizontalSpacing="none" title="none" />
      </div>

      <div>
        <h2>Spacing</h2>
        <CircleButton title="default" />
        <CircleButton
          horizontalSpacing="narrow"
          title="narrow"
          verticalSpacing="narrow"
        />
        <CircleButton
          horizontalSpacing="wide"
          title="wide"
          verticalSpacing="wide"
        />
        <CircleButton
          horizontalSpacing="none"
          title="none"
          verticalSpacing="none"
        />
      </div>
    </div>
  </ThemeProvider>
);
CircleButtonSpacing.story = {
  name: 'Spacing',
};
