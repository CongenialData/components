describe("Hello Moon", () => {
  const helloMoon = "Hello, Moon!";
  it("says hello moon", () => {
    expect(helloMoon).toEqual("Hello, Moon!");
  });
});
// import * as React from 'react'
// import { createTheme, render } from '../theming'

// import { Chip } from '.'

// const theme = createTheme([Chip])

// test('renders without crashing', (): void => {
//   render(<Chip text="Title" />, { theme })
// })

// test('has a text', (): void => {
//   const { getByText } = render(<Chip text="My text" />, { theme })

//   const chip = getByText('My text') as HTMLDivElement

//   expect(chip).toHaveTextContent('My text')
// })
