import React from 'react'
import styled from 'styled-components'

interface ServiceErrorProps {
  error?: string
}

const ServiceError: React.FC<ServiceErrorProps> = ({ error = 'Something went wrong... 😵' }) => {
  return (
    <Container>
      <div>{error}</div>
      <AdditionalInfo>
        Could be a temporary network error from our data provider{' '}
        <a href="https://restcountries.com/" target="_blank">
          REST COUNTRIES
        </a>
        
      </AdditionalInfo>
    </Container>
  )
}

export default ServiceError

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 500px;
  color: ${(p) => p.theme.colors.blue};
  padding: 40px 0;
`

const AdditionalInfo = styled.div`
  font-size: 16px;
  margin-top: 30px;
`
