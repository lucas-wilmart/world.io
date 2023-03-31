import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <ButtonContainer className={`box-shadow ${className}`} onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}

export default Button

const ButtonContainer = styled.button`
  padding: 15px 25px;
  border-radius: 10px;
  font-size: 20px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
`
