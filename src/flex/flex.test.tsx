import * as React from 'react'

import { render } from '@testing-library/react'

import { Flex } from './flex'

test('renders without crashing', (): void => {
  const { container } = render(<Flex />)

  expect(container).toBeDefined()
})
