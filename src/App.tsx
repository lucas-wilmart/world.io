import React from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Layout from './components/Layout'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <div>Test</div>
      </Layout>
    </ThemeProvider>
  )
}

export default App
