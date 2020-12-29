describe("Hello Moon", () => {
  const helloMoon = "Hello, Moon!";
  it("says hello moon", () => {
    expect(helloMoon).toEqual("Hello, Moon!");
  });
});
// import * as React from 'react'
// import { cleanup, fireEvent } from '@testing-library/react'

// import { Button } from './button'
// import { createTheme, render } from '../../theming'

// const theme = createTheme([Button])

// afterEach(cleanup)

// test('renders without crashing', (): void => {
//   render(<Button />, { theme })
// })

// test('changes text on click', (): void => {
//   let buttonText = 'My Button'

//   const onClick = (): string => (buttonText = 'New Text')

//   const { getByText, rerender } = render(<Button onClick={onClick}>{buttonText}</Button>, { theme })

//   const button = getByText('My Button') as HTMLButtonElement

//   fireEvent.click(button)

//   // NOTE: After changing a value it seems that we must re-render the component
//   rerender(<Button onClick={onClick}>{buttonText}</Button>)

//   expect(button).toHaveTextContent('New Text')
// })

// test('changes does not change on click', (): void => {
//   const onClick = (): void => undefined
//   const { getByText } = render(<Button onClick={onClick}>My Button</Button>, {
//     theme,
//   })

//   const button = getByText('My Button') as HTMLButtonElement

//   expect(button).toHaveTextContent('My Button')

//   fireEvent.click(button)

//   expect(button).toHaveTextContent('My Button')
// })
