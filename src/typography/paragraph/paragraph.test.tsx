import * as React from 'react'

import { Paragraph } from '.'
import { createTheme, render } from '../../theming'

const theme = createTheme([Paragraph])

test('renders without crashing', (): void => {
  render(<Paragraph>I am a Paragraph</Paragraph>, { theme })
})
