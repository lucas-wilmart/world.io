import React from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Layout from './components/Layout'
import Router from './Router'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Router />
      </Layout>
    </ThemeProvider>
  )
}

export default App
