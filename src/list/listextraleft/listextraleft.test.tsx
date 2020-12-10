import React from 'react'

import { ListExtraLeft } from './listextraleft'
import { createTheme, render } from '../../theming'

const theme = createTheme([ListExtraLeft])

test('renders without crashing', (): void => {
  render(<ListExtraLeft title="I love ListExtraLeft" />, { theme })
})
