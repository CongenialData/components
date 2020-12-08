import * as React from 'react';

import { Heading } from '.';
import { createTheme, render } from '../../theming';

const theme = createTheme([Heading]);

test('renders without crashing', (): void => {
  render(<Heading>I am a heading</Heading>, { theme });
});
