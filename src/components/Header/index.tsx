import React from 'react'
import styled from 'styled-components'
import EarthSvg from '../../assets/earth-icon.svg'

const Header: React.FC = () => {
  return (
    <HeaderContainer className="box-shadow">
      <HeaderContent>
        <Logo src={EarthSvg} /> world.io
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header`
  height: ${({ theme }) => theme.layout.headerHeight}px;
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
`

const HeaderContent = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${({ theme }) => theme.layout.contentMaxWidth}px;
  color: ${({ theme }) => theme.colors.blue};
  display: flex;
  align-items: center;
  font-size: 25px;
  padding: 0 20px;

  font-family: 'Trebuchet MS', sans-serif;
`

const Logo = styled.img`
  width: 50px;
  margin-right: 20px;
`
