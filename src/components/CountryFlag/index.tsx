import React from 'react'
import styled from 'styled-components'

interface CountryFlagProps {
  cca2: string
  independent: boolean
}

const CountryFlag: React.FC<CountryFlagProps> = ({ cca2, independent }) => {
  const endPoint = 'flags'

  return (
    <FlagContainer>
      <img src={`https://flagcdn.com/160x120/${cca2.toLowerCase()}.png`} />
    </FlagContainer>
  )
}

export default CountryFlag

const FlagContainer = styled.div`
  padding: 15px;
`
