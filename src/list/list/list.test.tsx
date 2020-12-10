import * as React from 'react'
import { render } from '@testing-library/react'

import { List } from './list'

test('renders without crashing', (): void => {
  render(
    <List>
      <List.Item>My list</List.Item>
    </List>,
  )
})
