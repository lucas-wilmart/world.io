import React from 'react'
import styled from 'styled-components'

interface CountryFlagProps {
  flagSrc: string
}

const CountryFlag: React.FC<CountryFlagProps> = ({ flagSrc }) => {
  return (
    <FlagContainer>
      <img src={flagSrc} />
    </FlagContainer>
  )
}

export default CountryFlag

const FlagContainer = styled.div`
  padding: 15px;
  object-fit: contain;
  overflow: hidden;

  & img {
    border-radius: 10px;
    width: 120px;
    height: 90px;
  }
`
