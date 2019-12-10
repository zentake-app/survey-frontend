import React from 'react'
import { ZuluThemeProvider } from '../src/components/zulu-ui/inputs/ThemeProvider'

const ThemeDecorator = storyFn => (
  <ZuluThemeProvider>{storyFn()}</ZuluThemeProvider>
)

export default ThemeDecorator
