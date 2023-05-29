import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

import Header from '../Header'

const Layout: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </LayoutContainer>
  )
}

export default Layout

const LayoutContainer = styled.div`
  box-sizing: border-box;
  padding-top: ${({ theme }) => theme.layout.headerHeight.sm}px;
  @media (min-width: ${(p) => p.theme.media.md}px) {
    padding-top: ${({ theme }) => theme.layout.headerHeight.md}px;
  }
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
