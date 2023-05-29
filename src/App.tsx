import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from './theme'
import Router from './Router'

import './App.css'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

export default App
