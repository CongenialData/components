import * as React from 'react';

import { Skeleton } from '.';
import { createTheme, render } from '../theming';

const theme = createTheme([Skeleton]);

test('renders without crashing', (): void => {
  render(<Skeleton />, { theme });
});
