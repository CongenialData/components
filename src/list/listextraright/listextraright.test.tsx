import React from 'react'

import { ListExtraRight } from './listextraright'
import { createTheme, render } from '../../theming'

const theme = createTheme([ListExtraRight])

test('renders without crashing', (): void => {
  render(<ListExtraRight title="I love ListExtraRight" />, { theme })
})
