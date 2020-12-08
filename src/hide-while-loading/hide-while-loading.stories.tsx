import React from 'react';

import { boolean, withKnobs } from '@storybook/addon-knobs/react';
import { jsxDecorator } from 'storybook-addon-jsx';

import { HideWhileLoading } from './';

export default {
  title: 'Generic|Hide While Loading',
  component: HideWhileLoading,
  decorators: [
    withKnobs,
    jsxDecorator,
    (storyFn): JSX.Element => (
      <div style={{ background: 'white', padding: '1rem' }}>{storyFn()}</div>
    ),
  ],
};

export const Default = (): JSX.Element => {
  const loading = boolean('loading', true);

  return (
    <div>
      <HideWhileLoading isLoading={loading}>
        <p>I am hidden while loading</p>
      </HideWhileLoading>
    </div>
  );
};
Default.story = {
  name: 'Default',
};
