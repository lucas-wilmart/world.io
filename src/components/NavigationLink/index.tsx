import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LeftArrow from '../LeftArrow'

interface NavigationLinkProps {
  to: string
  label: string
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ to, label }) => {
  return (
    <StyledLink to={to}>
      <LeftArrow />
      <span>{label}</span>
    </StyledLink>
  )
}

export default NavigationLink

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
  font-weight: 400;
  color: ${(p) => p.theme.colors.blue};
  padding: 20px 0;

  &:hover {
    text-decoration: underline;

    & svg {
      opacity: 0.8;
    }
  }
`
