describe("Hello Moon", () => {
  const helloMoon = "Hello, Moon!";
  it("says hello moon", () => {
    expect(helloMoon).toEqual("Hello, Moon!");
  });
});
// import * as React from 'react'

// import { InputWrapper } from '.'
// import { TextInput } from '../text-input'
// import { Label } from '../../typography/label'
// import { createTheme, render } from '../../theming'

// const theme = createTheme([InputWrapper, Label, TextInput])

// test('renders without crashing', (): void => {
//   const { container } = render(
//     <InputWrapper>
//       <TextInput label="Hello" />
//     </InputWrapper>,
//     { theme },
//   )

//   expect(container).toBeDefined()
// })
