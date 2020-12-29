describe("Hello Moon", () => {
  const helloMoon = "Hello, Moon!";
  it("says hello moon", () => {
    expect(helloMoon).toEqual("Hello, Moon!");
  });
});
// import * as React from 'react'

// import { cleanup, fireEvent } from '@testing-library/react'

// import { TextInput } from './text-input'
// import { Caption } from '../../typography/caption'
// import { Label } from '../../typography/label'

// import { createTheme, render } from '../../theming'
// const theme = createTheme([Caption, Label, TextInput])

// afterEach(cleanup)

// test('renders without crashing', (): void => {
//   const { container } = render(<TextInput />, { theme })

//   expect(container).toBeDefined()
// })

// test('can have a placeholder', (): void => {
//   const { container } = render(<TextInput placeholder="My placeholder" />, {
//     theme,
//   })

//   const inputField = container.querySelector('input') as HTMLInputElement
//   expect(inputField.placeholder).toBe('My placeholder')
// })

// test('can have a label', (): void => {
//   const { container } = render(<TextInput label="My Label" name="myField" />, {
//     theme,
//   })

//   const label = container.querySelector('label') as HTMLLabelElement
//   expect(label).toHaveTextContent('My Label')
// })

// test('can show an error message', (): void => {
//   const { getByText } = render(<TextInput caption="I am a message" />, {
//     theme,
//   })

//   const message = getByText('I am a message') as HTMLSpanElement
//   expect(message).toHaveTextContent('I am a message')
// })

// test('can enter text', (): void => {
//   const { container } = render(<TextInput />, { theme })

//   const inputField = container.querySelector('input') as HTMLInputElement
//   expect(inputField.value).toBe('')

//   inputField.value = 'My text'
//   fireEvent.change(inputField)

//   expect(inputField.value).toBe('My text')
// })

// // FIXME: Enable test and make it work.
// // describe('has diferent variants', (): void => {
// //   test('error', (): void => {
// //     const { container } = render(
// //
// //         <TextInput variant="error" />
// //       , { theme }
// //     )

// //     const inputField = container.querySelector('div') as HTMLSpanElement
// //     expect(inputField.className).toContain('error')
// //   })
// // })
// test('can be disabled', (): void => {
//   const { container } = render(<TextInput disabled={true} />, { theme })

//   const inputField = container.querySelector('input') as HTMLInputElement

//   expect(inputField.disabled).toBe(true)
// })
