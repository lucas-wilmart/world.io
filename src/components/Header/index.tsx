import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import EarthSvg from '@/assets/images/earth-icon.svg'

import routes from '@routes'

const Header: React.FC = () => {
  const location = useLocation()

  return (
    <HeaderContainer className="box-shadow">
      <HeaderContent>
        <LogoContainer>
          <Logo src={EarthSvg} /> world.io
        </LogoContainer>
        <Nav>
          <NavLink
            to={routes.HOME}
            $active={location.pathname === routes.HOME || location.pathname.includes(routes.COUNTRY)}
          >
            Countries List
          </NavLink>
          <NavLink to={routes.QUIZS} $active={location.pathname.includes(routes.QUIZS)}>
            Quizs
          </NavLink>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header`
  height: ${({ theme }) => theme.layout.headerHeight.sm}px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px ${({ theme }) => theme.colors.grey};

  @media (min-width: ${(p) => p.theme.media.md}px) {
    height: ${({ theme }) => theme.layout.headerHeight.md}px;
  }
`

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
  width: 100%;
  height: 100%;
  max-width: ${({ theme }) => theme.layout.contentMaxWidth}px;
  color: ${({ theme }) => theme.colors.blue};
  align-items: center;
  font-size: 25px;
  padding: 0 20px;

  font-family: 'Trebuchet MS', sans-serif;

  @media (min-width: ${(p) => p.theme.media.md}px) {
    gap: 0;
    justify-content: space-between;
    flex-direction: row;
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const Logo = styled.img`
  width: 50px;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 25px;
  padding-right: 15px;
`

const NavLink = styled(Link)<{ $active: boolean }>`
  text-decoration: none;
  color: ${(p) => (p.$active ? p.theme.colors.blue : p.theme.colors.darkGrey)};
  ${(p) => (p.$active ? 'text-decoration: underline;' : '')};
  font-size: 18px;

  &:hover {
    color: ${(p) => p.theme.colors.blue};
  }
`
