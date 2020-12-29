describe("Hello Moon", () => {
  const helloMoon = "Hello, Moon!";
  it("says hello moon", () => {
    expect(helloMoon).toEqual("Hello, Moon!");
  });
});
// import React from 'react'
// import { cleanup, fireEvent } from '@testing-library/react'

// import { CircleButton } from '.'

// import { createTheme, render } from '../../theming'

// const theme = createTheme([CircleButton])

// afterEach(cleanup)

// test('renders without crashing', (): void => {
//   render(<CircleButton title="I love CircleButton" />, { theme })
// })

// test('changes text on click', (): void => {
//   let buttonText = 'My Button'

//   const onClick = (): string => (buttonText = 'New Text')

//   const { getByText, rerender } = render(<CircleButton onClick={onClick}>{buttonText}</CircleButton>, { theme })

//   const button = getByText('My Button') as HTMLButtonElement

//   fireEvent.click(getByText('My Button'))

//   // NOTE: After changing a value it seems that we must re-render the component
//   rerender(<CircleButton onClick={onClick}>{buttonText}</CircleButton>)

//   expect(button).toHaveTextContent('New Text')
// })

// test('changes does not change on click', (): void => {
//   const onClick = (): void => undefined

//   const { getByText } = render(<CircleButton onClick={onClick}>My Button</CircleButton>, { theme })

//   const button = getByText('My Button') as HTMLButtonElement

//   expect(button).toHaveTextContent('My Button')

//   fireEvent.click(button)

//   expect(button).toHaveTextContent('My Button')
// })

// test('can have a icon', (): void => {
//   const icon = <span>Icon</span>

//   const { getByText } = render(<CircleButton icon={icon} />, { theme })

//   const iconButton = getByText('Icon') as HTMLButtonElement

//   expect(iconButton).toHaveTextContent('Icon')
// })

// test('can have a title', (): void => {
//   const { getByText } = render(<CircleButton title="My Title" />, { theme })

//   const button = getByText('My Title') as HTMLButtonElement

//   expect(button).toHaveTextContent('My Title')
// })
