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
  overflow: hidden;
  flex-shrink: 0;

  & img {
    border: solid 1px ${(p) => p.theme.colors.black};
    border-radius: 10px;
    width: 120px;
    height: 90px;
  }
`
