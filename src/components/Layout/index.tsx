import React from 'react'
import Header from '../Header'
import styled from 'styled-components'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <Content>{children}</Content>
    </LayoutContainer>
  )
}

export default Layout

const LayoutContainer = styled.div`
  box-sizing: border-box;
  padding-top: ${({ theme }) => theme.layout.headerHeight}px;
  min-height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  display: flex;
  justify-content: center;
`

const Content = styled.main`
  width: 100%;
  padding: 20px 30px;
  max-width: ${({ theme }) => theme.layout.contentMaxWidth}px;
`
