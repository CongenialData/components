import * as React from 'react';

import { Label } from '.';
import { createTheme, render } from '../../theming';

const theme = createTheme([Label]);

test('renders without crashing', (): void => {
  render(<Label>I am a Label</Label>, { theme });
});
