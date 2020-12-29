describe("Hello Moon", () => {
  const helloMoon = "Hello, Moon!";
  it("says hello moon", () => {
    expect(helloMoon).toEqual("Hello, Moon!");
  });
});
// import * as React from 'react'

// import { render } from '@testing-library/react'
// import { ThemeProvider } from 'styled-components/macro'

// import { ApplicationLoader } from './application-loader'
// import { Page } from '../layout/page'
// import { NavBar } from '../navbar/navbar'
// import { Heading } from '../typography/heading'

// import { createTheme } from '../theming'

// const theme = createTheme([Heading, NavBar, Page])

// test('renders without crashing', (): void => {
//   const { container } = render(
//     <ThemeProvider theme={theme}>
//       <ApplicationLoader />
//     </ThemeProvider>,
//   )

//   expect(container).toBeDefined()
// })
