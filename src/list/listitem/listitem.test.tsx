import React from 'react'
import { render } from '@testing-library/react'

import { ListItem } from './listitem'

test('renders without crashing', (): void => {
  render(<ListItem title="I love ListItem" />)
})
