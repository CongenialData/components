describe('Hello Moon', () => {
  const helloMoon = 'Hello, Moon!'
  it('says hello moon', () => {
    expect(helloMoon).toEqual('Hello, Moon!')
  })
})

// import React from 'react';
// import * as ReactDOM from 'react-dom';
// import { ThemeProvider } from 'styled-components';
// import { createTheme } from '../src/theming';
// import { Card } from '../src/card';
// import { Default as CardStory } from '../stories/card.stories';

// const theme = createTheme([Card]);

// describe('Thing', () => {
//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(
//       <ThemeProvider theme={theme}>
//         <CardStory />
//       </ThemeProvider>,
//       div
//     );
//     ReactDOM.unmountComponentAtNode(div);
//   });
// });
