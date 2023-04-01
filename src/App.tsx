import React from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Router from './Router'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

export default App
