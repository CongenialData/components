import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { createTheme, Card, Flex, Paragraph, Heading, Button } from '../src'

const theme = createTheme([Card, Paragraph, Heading, Button])

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Flex>
        <Heading>Welcome!</Heading>
        <Card>
          <Paragraph>
            Spicy jalapeno bacon ipsum dolor amet corned beef bacon rump, short loin turkey biltong jerky ham hock
            tri-tip porchetta tail fatback. Filet mignon tri-tip fatback shoulder. Porchetta tri-tip ribeye brisket
            shankle fatback. Andouille picanha ground round pork belly sausage rump ham hock prosciutto boudin. Turkey
            t-bone chislic pork belly meatloaf, bacon leberkas.
          </Paragraph>
          <Paragraph>
            Spicy jalapeno bacon ipsum dolor amet corned beef bacon rump, short loin turkey biltong jerky ham hock
            tri-tip porchetta tail fatback. Filet mignon tri-tip fatback shoulder. Porchetta tri-tip ribeye brisket
            shankle fatback. Andouille picanha ground round pork belly sausage rump ham hock prosciutto boudin. Turkey
            t-bone chislic pork belly meatloaf, bacon leberkas.
          </Paragraph>
        </Card>
      </Flex>
      <div>Add content</div>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
