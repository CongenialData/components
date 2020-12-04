import * as React from 'react'

import { createTheme, render } from '../theming'

import { Card } from './card'

const theme = createTheme([Card])

test('renders without crashing', (): void => {
  render(<Card />, { theme })
})

test('prints given text', (): void => {
  const { container } = render(
    <Card>
      <p>I am a card</p>
    </Card>,
    { theme },
  )

  const elem = container.firstChild

  expect(elem).toHaveTextContent('I am a card')
})
 