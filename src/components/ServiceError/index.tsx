import React from 'react'
import styled from 'styled-components'

interface ServiceErrorProps {
  error?: string
}

const ServiceError: React.FC<ServiceErrorProps> = ({ error = 'Something went wrong... 😵' }) => {
  return (
    <Container>
      <div>{error}</div>
    </Container>
  )
}

export default ServiceError

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 500px;
  color: ${(p) => p.theme.colors.blue};
  padding: 40px 0;
`
