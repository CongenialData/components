describe('Hello World', () => {
  const helloWorld = 'Hello, World!'
  it('says hello world', () => {
    expect(helloWorld).toEqual('Hello, World!')
  })
})

// import * as React from 'react';

// import { createTheme, render } from '../src/theming';

// import { Card } from '../src/card/card';

// const theme = createTheme([Card]);

// test('renders without crashing', (): void => {
//   render(<Card />, { theme });
// });

// test('prints given text', (): void => {
//   const { container } = render(
//     <Card>
//       <p>I am a card</p>
//     </Card>,
//     { theme }
//   );

//   const elem = container.firstChild;

//   expect(elem).toHaveTextContent('I am a card');
// });
