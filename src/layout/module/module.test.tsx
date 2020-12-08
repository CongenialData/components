import * as React from 'react';

import { createTheme, render } from '../../theming';
import { Module } from './module';

const theme = createTheme([]);

test('renders without crashing', (): void => {
  render(
    <Module>
      <p>I am a child</p>
    </Module>,
    { theme }
  );
});
