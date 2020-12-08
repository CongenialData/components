import React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { ThemeProvider } from 'styled-components/macro'

import { Card } from '../card'

import { Skeleton } from '.'
import { createTheme } from '../theming'
const theme = createTheme([Card, Skeleton])

export default {
  title: 'Generic|Skeleton',
  component: Skeleton,
  decorators: [jsxDecorator],
}

export const SkeletonDefaultStory = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <h2>Default</h2>
    <Skeleton />
  </ThemeProvider>
)
SkeletonDefaultStory.story = {
  name: 'Default',
}

export const SkeletonTranslucentStory = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <h2>Translucent</h2>
    <Skeleton translucent={true} />
  </ThemeProvider>
)
SkeletonTranslucentStory.story = {
  name: 'Translucent',
}

export const SkeletonSizesStory = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <div style={{ display: 'flex' }}>
      <div>
        <h2>Height</h2>
        <div>
          <p>Small</p>
          <Skeleton height="small" />
        </div>
        <div>
          <p>Medium</p>
          <Skeleton height="medium" />
        </div>
        <div>
          <p>Large</p>
          <Skeleton height="Large" />
        </div>
        <div>
          <p>Custom: 125px</p>
          <Skeleton height="125px" />
        </div>
      </div>
      <div style={{ width: '20rem' }}>
        <h2>Width</h2>
        <div>
          <p>Default (6rem)</p>
          <Skeleton />
        </div>
        <div>
          <p>Small (3rem)</p>
          <Skeleton width="small" />
        </div>
        <div>
          <p>Medium (9rem)</p>
          <Skeleton width="medium" />
        </div>
        <div>
          <p>Large (18rem)</p>
          <Skeleton width="large" />
        </div>
        <div>
          <p>Custom (125px)</p>
          <Skeleton width="125px" />
        </div>
      </div>
    </div>
  </ThemeProvider>
)
SkeletonSizesStory.story = {
  name: 'Sizes',
}

export const SkeletonContentStory = (): JSX.Element => {
  const [isLoading, setIsLoading] = React.useState(true)

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: 'flex',
          background: theme.colors.BACKGROUND_BASIC_COLOR_2,
          padding: '2rem',
          fontFamily: 'Poppins',
        }}
      >
        <div style={{ width: '15rem' }}>
          <button onClick={() => setIsLoading(!isLoading)}>Toggle loading state</button>

          <Card shadow={true} spacing="none">
            <div
              style={{
                backgroundImage: 'linear-gradient(to right, #63066f, #f90066)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                height: '5rem',
                padding: '0 1rem',
                justifyContent: 'center',
              }}
            >
              {isLoading ? <Skeleton height="large" translucent={true} width="100px" /> : <h2>John Doe</h2>}
            </div>
            <div style={{ padding: '0 1rem 1rem' }}>
              <p style={{ height: '1rem' }}>
                {isLoading ? <Skeleton height="1.5rem" width="medium" /> : <>User Name: johndoe</>}
              </p>
              <p style={{ height: '1rem' }}>
                {isLoading ? <Skeleton height="1.5rem" width="medium" /> : <>Age: Unknown</>}
              </p>
              <p style={{ height: '1rem' }}>
                {isLoading ? <Skeleton height="1.5rem" width="medium" /> : <>City: Stockholm</>}
              </p>
              <p style={{ height: '1rem' }}>
                {isLoading ? <Skeleton height="1.5rem" width="medium" /> : <>Email: john@doe.se</>}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </ThemeProvider>
  )
}

SkeletonContentStory.story = {
  name: 'Content',
}
