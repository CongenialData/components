/* eslint-disable react/display-name */
import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { jsxDecorator } from 'storybook-addon-jsx';
import { ThemeProvider } from 'styled-components/macro';
import { withKnobs } from '@storybook/addon-knobs/react';

import { Checkbox } from './checkbox';

import { createTheme } from '../theming';
const theme = createTheme([Checkbox]);

export default {
  title: 'Generic|Input/Checkbox',
  component: Checkbox,
  decorators: [
    withKnobs,
    jsxDecorator,
    (storyFn): JSX.Element => (
      <div style={{ background: 'white', padding: '1rem' }}>{storyFn()}</div>
    ),
  ],
};

const Container: React.FunctionComponent<any> = ({ style, children }) => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
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

export const CheckboxBasic = (): JSX.Element => {
  const checked = boolean('Checked', true);

  return (
    <Container>
      <Wrapper>
        <Checkbox checked={checked} onClick={action('button-click')} />
      </Wrapper>
    </Container>
  );
};
CheckboxBasic.story = {
  name: 'Basic',
};

export const CheckboxLabel = (): JSX.Element => {
  const checked = boolean('Checked', true);
  const label = text('Label', 'This is my label');

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '1rem' }}>
          <Checkbox
            checked={checked}
            label={label}
            onClick={action('button-click')}
          />
        </div>
      </div>
    </ThemeProvider>
  );
};
CheckboxLabel.story = {
  name: 'Basic Label',
};

export const CheckboxStates = (): JSX.Element => {
  return (
    <>
      <h1>Enabled</h1>
      <Container>
        <Wrapper>
          <Checkbox
            checked={false}
            label="Basic"
            status="basic"
            onClick={action('button-click')}
          />
        </Wrapper>
        <Wrapper>
          <Checkbox
            checked={false}
            label="Primary"
            status="primary"
            onClick={action('button-click')}
          />
        </Wrapper>
        <Wrapper>
          <Checkbox
            checked={false}
            label="Success"
            status="success"
            onClick={action('button-click')}
          />
        </Wrapper>
        <Wrapper>
          <Checkbox
            checked={false}
            label="Danger"
            status="danger"
            onClick={action('button-click')}
          />
        </Wrapper>
        <Wrapper>
          <Checkbox
            checked={false}
            label="Warning"
            status="warning"
            onClick={action('button-click')}
          />
        </Wrapper>
        <Wrapper>
          <Checkbox
            checked={false}
            label="Info"
            status="info"
            onClick={action('button-click')}
          />
        </Wrapper>
        <ControlWrapper>
          <Checkbox
            checked={false}
            label="Control"
            status="control"
            onClick={action('button-click')}
          />
        </ControlWrapper>
      </Container>
      <Container>
        <Wrapper>
          <Checkbox
            checked={true}
            label="Basic"
            status="basic"
            onClick={action('button-click')}
          />
        </Wrapper>
        <Wrapper>
          <Checkbox
            checked={true}
            label="Primary"
            status="primary"
            onClick={action('button-click')}
          />
        </Wrapper>
        <Wrapper>
          <Checkbox
            checked={true}
            label="Success"
            status="success"
            onClick={action('button-click')}
          />
        </Wrapper>
        <Wrapper>
          <Checkbox
            checked={true}
            label="Danger"
            status="danger"
            onClick={action('button-click')}
          />
        </Wrapper>
        <Wrapper>
          <Checkbox
            checked={true}
            label="Warning"
            status="warning"
            onClick={action('button-click')}
          />
        </Wrapper>
        <Wrapper>
          <Checkbox
            checked={true}
            label="Info"
            status="info"
            onClick={action('button-click')}
          />
        </Wrapper>
        <ControlWrapper>
          <Checkbox
            checked={true}
            label="Control"
            status="control"
            onClick={action('button-click')}
          />
        </ControlWrapper>
      </Container>

      <h1>Disabled</h1>
      <Container>
        <Wrapper>
          <Checkbox
            checked={false}
            disabled={true}
            label="Basic"
            status="basic"
            onClick={action('button-click')}
          />
        </Wrapper>
        <Wrapper>
          <Checkbox
            checked={false}
            disabled={true}
            label="Primary"
            status="primary"
            onClick={action('button-click')}
          />
        </Wrapper>
        <Wrapper>
          <Checkbox
            checked={false}
            disabled={true}
            label="Success"
            status="success"
            onClick={action('button-click')}
          />
        </Wrapper>
        <Wrapper>
          <Checkbox
            checked={false}
            disabled={true}
            label="Danger"
            status="danger"
            onClick={action('button-click')}
          />
        </Wrapper>
        <Wrapper>
          <Checkbox
            checked={false}
            disabled={true}
            label="Warning"
            status="warning"
            onClick={action('button-click')}
          />
        </Wrapper>
        <Wrapper>
          <Checkbox
            checked={false}
            disabled={true}
            label="Info"
            status="info"
            onClick={action('button-click')}
          />
        </Wrapper>
        <ControlWrapper>
          <Checkbox
            checked={false}
            disabled={true}
            label="Control"
            status="control"
            onClick={action('button-click')}
          />
        </ControlWrapper>
      </Container>
      <Container>
        <Wrapper>
          <Checkbox
            checked={true}
            disabled={true}
            label="Basic"
            status="basic"
            onClick={action('button-click')}
          />
        </Wrapper>
        <Wrapper>
          <Checkbox
            checked={true}
            disabled={true}
            label="Primary"
            status="primary"
            onClick={action('button-click')}
          />
        </Wrapper>
        <Wrapper>
          <Checkbox
            checked={true}
            disabled={true}
            label="Success"
            status="success"
            onClick={action('button-click')}
          />
        </Wrapper>
        <Wrapper>
          <Checkbox
            checked={true}
            disabled={true}
            label="Danger"
            status="danger"
            onClick={action('button-click')}
          />
        </Wrapper>
        <Wrapper>
          <Checkbox
            checked={true}
            disabled={true}
            label="Warning"
            status="warning"
            onClick={action('button-click')}
          />
        </Wrapper>
        <Wrapper>
          <Checkbox
            checked={true}
            disabled={true}
            label="Info"
            status="info"
            onClick={action('button-click')}
          />
        </Wrapper>
        <ControlWrapper>
          <Checkbox
            checked={true}
            disabled={true}
            label="Control"
            status="control"
            onClick={action('button-click')}
          />
        </ControlWrapper>
      </Container>
    </>
  );
};
CheckboxStates.story = {
  name: 'States',
};

export const CheckboxToggleChecked = (): JSX.Element => {
  const [checked, setChecked] = React.useState<boolean>(true);

  const onClick = () => {
    setChecked(!checked);
  };

  return (
    <Container>
      <Wrapper>
        <Checkbox
          checked={checked}
          label="Basic"
          status="basic"
          onClick={onClick}
        />
      </Wrapper>
    </Container>
  );
};
CheckboxToggleChecked.story = {
  name: 'Toggle checked',
};

export const CheckboxError = (): JSX.Element => {
  const checked = boolean('Checked', false);
  const label = text('Label', 'I agree to give Andreas my money');
  const error = 'You must give him them money!';

  return (
    <Container>
      <Checkbox
        caption={error}
        checked={checked}
        label={label}
        status="danger"
        onClick={action('button-click')}
      />
    </Container>
  );
};
CheckboxError.story = {
  name: 'Label with error',
};
