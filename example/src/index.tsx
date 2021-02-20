import 'react-app-polyfill/ie11'
import styled, { ThemeProvider } from 'styled-components/macro'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { theme } from './theme'
import { Card } from '../../dist'

const MyCard = styled(Card)`
  background-color: ${({ theme }) => theme.baseColors.COLOR_BASIC_400};
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Card>Hi default!</Card>
        <MyCard>Hello custom!</MyCard>
      </div>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
