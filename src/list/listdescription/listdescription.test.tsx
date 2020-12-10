import React from 'react'

import { ListDescription } from './listdescription'
import { createTheme, render } from '../../theming'

const theme = createTheme([ListDescription])

test('renders without crashing', (): void => {
  render(<ListDescription />, { theme })
})
