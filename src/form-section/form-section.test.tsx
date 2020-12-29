describe("Hello Moon", () => {
  const helloMoon = "Hello, Moon!";
  it("says hello moon", () => {
    expect(helloMoon).toEqual("Hello, Moon!");
  });
});
// import React from 'react'
// // TODO: Check why TypeScript doesn't find test-utils
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// import { find } from 'styled-components/test-utils'
// import { faCalendar } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { FormSection } from './form-section'
// import { StyledFormSection } from './form-section.styles'
// import { Heading } from '../typography/heading'
// import { StyledHeading } from '../typography/heading/heading.styles'

// import { createTheme, render } from '../theming'

// const theme = createTheme([FormSection, Heading])

// test('renders without crashing', (): void => {
//   const { container } = render(<FormSection />, { theme })

//   const renderedFormSection = find(container, StyledFormSection)

//   expect(renderedFormSection).toBeDefined()
// })

// test('can have a title', (): void => {
//   const title = 'I am a form section title'

//   const { container } = render(<FormSection title={title} />, { theme })

//   const renderedFormSection = find(container, StyledFormSection) as HTMLDivElement
//   const renderedFormHeading = find(container, StyledHeading) as HTMLHeadingElement

//   expect(renderedFormSection).toBeDefined()
//   expect(renderedFormHeading).toBeDefined()

//   expect(renderedFormHeading).toHaveTextContent(title)
// })

// test('can have an icon', (): void => {
//   const { container } = render(<FormSection icon={<FontAwesomeIcon icon={faCalendar} />} />, { theme })

//   const renderedFormSection = find(container, StyledFormSection) as HTMLDivElement
//   const renderedFormIcon = container.getElementsByTagName('svg')

//   expect(renderedFormSection).toBeDefined()
//   expect(renderedFormIcon[0].className.baseVal).toContain('fa-calendar')
// })
