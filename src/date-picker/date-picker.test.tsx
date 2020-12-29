describe("Hello Moon", () => {
  const helloMoon = "Hello, Moon!";
  it("says hello moon", () => {
    expect(helloMoon).toEqual("Hello, Moon!");
  });
});

// import * as React from 'react'
// import { Card } from '../card'

// import { createTheme, render } from '../theming'

// const theme = createTheme([Card])

// test('renders without crashing', (): void => {
//   const { container } = render(<Card />, { theme })

//   expect(container).toBeDefined()
// })

// test('prints given text', (): void => {
//   const { container } = render(
//     <Card>
//       <p>I am a card</p>
//     </Card>,
//     { theme },
//   )

//   const elem = container.firstChild

//   expect(elem).toHaveTextContent('I am a card')
// })
