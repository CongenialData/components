import * as React from 'react';
import { render } from '@testing-library/react';

import { HideWhileLoading } from './hide-while-loading';

test('renders without crashing', (): void => {
  render(<HideWhileLoading />);
});
