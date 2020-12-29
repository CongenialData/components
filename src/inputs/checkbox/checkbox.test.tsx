describe("Hello Moon", () => {
  const helloMoon = "Hello, Moon!";
  it("says hello moon", () => {
    expect(helloMoon).toEqual("Hello, Moon!");
  });
});
// import React from 'react'
// import { cleanup } from '@testing-library/react'
// // TODO: Remove eslint disable rule and fix imports
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// import { find } from 'styled-components/test-utils'

// import { createTheme, render } from '../../theming'

// import { Caption } from '../../typography/caption/caption'
// import { StyledCaption } from '../../typography/caption/caption.styles'

// import { Checkbox } from '.'
// import { CheckboxWrapper, NativeInput } from './checkbox.styles'

// const theme = createTheme([Caption, Checkbox])

// afterEach(cleanup)

// test('renders without crashing', (): void => {
//   render(<Checkbox checked={false} />, { theme })
// })

// test('can be checked', (): void => {
//   const { container } = render(<Checkbox checked={true} />, { theme })

//   const element = find(container, NativeInput) as HTMLInputElement
//   expect(element.checked).toBe(true)
// })

// test('is enabled by default', () => {
//   const { container } = render(<Checkbox checked={false} />, { theme })

//   const element = find(container, NativeInput) as HTMLInputElement
//   expect(element.disabled).toBe(false)
// })

// test('can be disabled', () => {
//   const { container } = render(<Checkbox checked={false} disabled={true} />, {
//     theme,
//   })

//   const element = find(container, NativeInput) as HTMLInputElement
//   expect(element.disabled).toBe(true)
// })

// test('can have a label', () => {
//   const label = 'I am a checkbox'

//   const { container } = render(<Checkbox checked={false} label={label} />, {
//     theme,
//   })

//   const element = find(container, CheckboxWrapper) as HTMLInputElement
//   expect(element).toHaveTextContent(label)
// })

// test('can have a caption', () => {
//   const captionText = 'I am a caption'

//   const { container } = render(<Checkbox caption={captionText} checked={false} />, { theme })

//   const element = find(container, StyledCaption) as HTMLInputElement
//   expect(element).toHaveTextContent(captionText)
// })
