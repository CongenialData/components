import React from 'react'
import { Meta, Story } from '@storybook/react';
// import { jsxDecorator } from 'storybook-addon-jsx'
// import { ThemeProvider } from 'styled-components/macro'
// import centered from '@storybook/addon-centered/react'

// import { createTheme } from '../src/theming'

import { Card } from '../src/card/card'
import { ICardProps } from '../src/card/card.interfaces'

// const theme = createTheme([Card])

const meta: Meta = {
  title: 'Welcome',
  component: Card,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  }
};

export default meta;

const Template: Story<ICardProps> = args => <Card {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};

// export default {
//   title: 'Card',
//   component: Card,
//   decorators: [jsxDecorator, centered]
// }

// const Template = (args) => (
//   <ThemeProvider theme={theme}>
//     <Card {...args}>I am a card. And I have some content</Card>
//   </ThemeProvider>
// )

// export const Default: { args: ICardProps } = Template.bind({})
// Default.args = {
//   title: 'Title',
//   shadow: true,
//   status: 'success',
//   spacing: 'normal',
//   accent: 'primary',
//   footer: 'Hey footer'
// }

// export const CardHeaderFooter = (): JSX.Element => (
//   <ThemeProvider theme={theme}>
//     <Card title='I am a header'>And I have some content</Card>
//     <Card footer='I am a footer'>And I have some content</Card>
//     <Card footer='I am a footer' title='I am a header'>
//       And I have some content
//     </Card>
//     <Card>And I am alone</Card>
//   </ThemeProvider>
// )

// CardHeaderFooter.story = {
//   name: 'Header and footer'
// }

// export const Spacing = (): JSX.Element => (
//   <ThemeProvider theme={theme}>
//     <Card spacing='none' title='Spacing is none'>
//       And I have some content
//     </Card>
//     <Card spacing='small' title='Spacing is small'>
//       And I have some content
//     </Card>
//     <Card title='Default spacing'>And I have some content</Card>
//     <Card
//       footer='I am a footer without spacing'
//       spacing='none'
//       title='I am a header without spacing'
//     >
//       And I have some content, but no spacing
//     </Card>
//   </ThemeProvider>
// )

// Spacing.story = {
//   name: 'Spacing'
// }

// export const CardAccent = (): JSX.Element => (
//   <ThemeProvider theme={theme}>
//     <Card accent='basic' title='I am a basic'>
//       And I have some content
//     </Card>
//     <Card accent='primary' title='I am a primary'>
//       And I have some content
//     </Card>
//     <Card accent='info' title='I am a info'>
//       And I have some content
//     </Card>
//     <Card accent='success' title='I am a success'>
//       And I have some content
//     </Card>
//     <Card accent='warning' title='I am a warning'>
//       And I have some content
//     </Card>
//     <Card accent='danger' title='I am a danger'>
//       And I have some content
//     </Card>
//     <Card accent='info' status='warning' title='Combined status and accent'>
//       You can mix both status and accent together
//     </Card>
//   </ThemeProvider>
// )

// CardAccent.story = {
//   name: 'Accent'
// }
