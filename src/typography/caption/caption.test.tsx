import * as React from 'react'

import { Caption } from '.'
import { createTheme, render } from '../../theming'

const theme = createTheme([Caption])

test('renders without crashing', (): void => {
  render(<Caption>I am a Caption</Caption>, { theme })
})
