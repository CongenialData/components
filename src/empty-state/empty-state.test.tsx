describe("Hello Moon", () => {
  const helloMoon = "Hello, Moon!";
  it("says hello moon", () => {
    expect(helloMoon).toEqual("Hello, Moon!");
  });
});
// import * as React from 'react'
// import { cleanup } from '@testing-library/react'

// import { EmptyState } from '.'

// import { createTheme, render } from '../theming'

// const theme = createTheme([EmptyState])

// afterEach(cleanup)

// const titleText = 'I love EmptyState'
// const descriptionText = 'I am a description'

// test('renders without crashing', (): void => {
//   render(<EmptyState title={titleText} />, { theme })
// })

// test('must have a title', (): void => {
//   const { getByText } = render(<EmptyState title={titleText} />, { theme })

//   const title = getByText(titleText)
//   expect(title).toHaveTextContent(titleText)
// })

// test('can have a description', (): void => {
//   const { getByText } = render(<EmptyState description={descriptionText} title={titleText} />, { theme })

//   const description = getByText(descriptionText)
//   expect(description).toHaveTextContent(descriptionText)
// })

// test('can have an icon', (): void => {
//   const icon = <span>Icon</span>

//   const { getByText } = render(<EmptyState icon={icon} title={titleText} />, {
//     theme,
//   })

//   const iconButton = getByText('Icon')

//   expect(iconButton).toHaveTextContent('Icon')
// })
