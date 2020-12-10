import * as React from 'react'

import { createTheme, render } from '../../theming'

import { Grid } from './grid'

test('renders without crashing', (): void => {
  const theme = createTheme([])
  render(<Grid />, { theme })
})
