/* eslint-disable react/display-name */
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { ThemeProvider } from 'styled-components/macro';

import { Button } from './button';

import { createTheme } from '../theming';
const theme = createTheme([Button]);

export default {
  title: 'Generic|Input/Button',
  component: Button,
  decorators: [
    withKnobs,
    jsxDecorator,
    (storyFn): JSX.Element => (
      <div style={{ background: 'white', padding: '1rem' }}>{storyFn()}</div>
    ),
  ],
};

const Container: React.FunctionComponent<{ style?; children }> = ({
  style,
  children,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const Wrapper: React.FunctionComponent = ({ children }) => (
  <div style={{ marginRight: '1rem' }}>{children}</div>
);

const ControlWrapper: React.FunctionComponent = ({ children }) => (
  <div
    style={{
      background: '#3366ff',
      padding: '1rem',
      marginRight: '1rem',
    }}
  >
    {children}
  </div>
);

export const ButtonBasic = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '1rem' }}>
          <Button>Active</Button>
        </div>
        <div>
          <Button disabled={true}>Disabled</Button>
        </div>
      </div>
    </ThemeProvider>
  );
};
ButtonBasic.story = {
  name: 'Basic',
};

export const ButtonColors = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <h1>Enabled</h1>
    <Container>
      <Wrapper>
        <Button>Basic</Button>
      </Wrapper>
      <Wrapper>
        <Button status="primary">Primary</Button>
      </Wrapper>
      <Wrapper>
        <Button status="danger">Danger</Button>
      </Wrapper>
      <Wrapper>
        <Button status="info">Info</Button>
      </Wrapper>
      <Wrapper>
        <Button status="warning">Warning</Button>
      </Wrapper>
      <Wrapper>
        <Button status="success">Success</Button>
      </Wrapper>
      <ControlWrapper>
        <Button status="control">Control</Button>
      </ControlWrapper>
    </Container>
    <h1>Disabled</h1>
    <Container>
      <Wrapper>
        <Button disabled={true}>Basic</Button>
      </Wrapper>
      <Wrapper>
        <Button disabled={true} status="primary">
          Primary
        </Button>
      </Wrapper>
      <Wrapper>
        <Button disabled={true} status="danger">
          Danger
        </Button>
      </Wrapper>
      <Wrapper>
        <Button disabled={true} status="info">
          Info
        </Button>
      </Wrapper>
      <Wrapper>
        <Button disabled={true} status="warning">
          Warning
        </Button>
      </Wrapper>
      <Wrapper>
        <Button disabled={true} status="success">
          Success
        </Button>
      </Wrapper>
      <Wrapper>
        <Button disabled={true} status="control">
          Control
        </Button>
      </Wrapper>
    </Container>
  </ThemeProvider>
);
ButtonColors.story = {
  name: 'Colors',
};

export const ButtonSizes = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Container>
      <Wrapper>
        <Button size="tiny">Tiny</Button>
      </Wrapper>
      <Wrapper>
        <Button size="small">Small</Button>
      </Wrapper>
      <Wrapper>
        <Button size="medium">Medium</Button>
      </Wrapper>
      <Wrapper>
        <Button size="large">Large</Button>
      </Wrapper>
      <Wrapper>
        <Button size="giant">Giant</Button>
      </Wrapper>
    </Container>
  </ThemeProvider>
);
ButtonSizes.story = {
  name: 'Sizes',
};

export const ButtonOutline = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <h1>Enabled</h1>
    <Container>
      <Wrapper>
        <Button appearance="outline">Basic</Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="outline" status="primary">
          Primary
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="outline" status="success">
          Success
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="outline" status="info">
          Info
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="outline" status="warning">
          Warning
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="outline" status="danger">
          Danger
        </Button>
      </Wrapper>
      <ControlWrapper>
        <Button appearance="outline" status="control">
          Control
        </Button>
      </ControlWrapper>
    </Container>
    <h1>Disabled</h1>
    <Container>
      <Wrapper>
        <Button appearance="outline" disabled={true}>
          Basic
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="outline" disabled={true} status="primary">
          Primary
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="outline" disabled={true} status="success">
          Success
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="outline" disabled={true} status="info">
          Info
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="outline" disabled={true} status="warning">
          Warning
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="outline" disabled={true} status="danger">
          Danger
        </Button>
      </Wrapper>
      <ControlWrapper>
        <Button appearance="outline" disabled={true} status="control">
          Control
        </Button>
      </ControlWrapper>
    </Container>
  </ThemeProvider>
);
ButtonOutline.story = {
  name: 'Outline',
};

export const ButtonHero = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <h1>Enabled</h1>
    <Container>
      <Wrapper>
        <Button appearance="hero">Basic</Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="hero" status="primary">
          Primary
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="hero" status="success">
          Success
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="hero" status="info">
          Info
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="hero" status="warning">
          Warning
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="hero" status="danger">
          Danger
        </Button>
      </Wrapper>
      <ControlWrapper>
        <Button appearance="hero" status="control">
          Control
        </Button>
      </ControlWrapper>
    </Container>
    <h1>Disabled</h1>
    <Container>
      <Wrapper>
        <Button appearance="hero" disabled={true}>
          Basic
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="hero" disabled={true} status="primary">
          Primary
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="hero" disabled={true} status="success">
          Success
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="hero" disabled={true} status="info">
          Info
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="hero" disabled={true} status="warning">
          Warning
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="hero" disabled={true} status="danger">
          Danger
        </Button>
      </Wrapper>
      <ControlWrapper>
        <Button appearance="hero" disabled={true} status="control">
          Control
        </Button>
      </ControlWrapper>
    </Container>
    <h1>Pulse</h1>
    <Container>
      <Wrapper>
        <Button appearance="hero" pulse={true}>
          Basic
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="hero" pulse={true} status="primary">
          Primary
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="hero" pulse={true} status="success">
          Success
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="hero" pulse={true} status="info">
          Info
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="hero" pulse={true} status="warning">
          Warning
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="hero" pulse={true} status="danger">
          Danger
        </Button>
      </Wrapper>
      <ControlWrapper>
        <Button appearance="hero" pulse={true} status="control">
          Control
        </Button>
      </ControlWrapper>
    </Container>
  </ThemeProvider>
);
ButtonHero.story = {
  name: 'Hero',
};
export const ButtonGhost = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <h1>Enabled</h1>
    <Container>
      <Wrapper>
        <Button appearance="ghost">Basic</Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="ghost" status="primary">
          Primary
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="ghost" status="success">
          Success
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="ghost" status="info">
          Info
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="ghost" status="warning">
          Warning
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="ghost" status="danger">
          Danger
        </Button>
      </Wrapper>
      <ControlWrapper>
        <Button appearance="ghost" status="control">
          Control
        </Button>
      </ControlWrapper>
    </Container>
    <h1>Disabled</h1>
    <Container>
      <Wrapper>
        <Button appearance="ghost" disabled={true}>
          Default
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="ghost" disabled={true} status="primary">
          Primary
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="ghost" disabled={true} status="success">
          Success
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="ghost" disabled={true} status="info">
          Info
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="ghost" disabled={true} status="warning">
          Warning
        </Button>
      </Wrapper>
      <Wrapper>
        <Button appearance="ghost" disabled={true} status="danger">
          Danger
        </Button>
      </Wrapper>
      <ControlWrapper>
        <Button appearance="ghost" disabled={true} status="control">
          Control
        </Button>
      </ControlWrapper>
    </Container>
  </ThemeProvider>
);
ButtonGhost.story = {
  name: 'Ghost',
};

export const ButtonShapes = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <p>
      Defaults to <b>reactangle</b>
    </p>
    <Container>
      <Wrapper>
        <Button shape="rectangle" status="primary">
          Rectangle
        </Button>
      </Wrapper>
      <Wrapper>
        <Button shape="semiround" status="primary">
          Semi round
        </Button>
      </Wrapper>
      <Wrapper>
        <Button shape="round" status="primary">
          Round
        </Button>
      </Wrapper>
    </Container>
  </ThemeProvider>
);
ButtonShapes.story = {
  name: 'Shapes',
};

export const ButtonFullWidth = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Container style={{ flexDirection: 'column', width: '100%' }}>
      <Button fullWidth={true} status="primary">
        Primary
      </Button>
      <br />

      <Button fullWidth={true} status="success">
        Success
      </Button>
      <br />
      <Button fullWidth={true} status="info">
        Info
      </Button>
      <br />
      <Button fullWidth={true} status="warning">
        Warning
      </Button>
      <br />
      <Button fullWidth={true} status="danger">
        Danger
      </Button>
    </Container>
  </ThemeProvider>
);
ButtonFullWidth.story = {
  name: 'Full Width',
};
