import { Card } from '@/styles/elements'
import React from 'react'
import styled from 'styled-components'

interface CountryInformationTileProps {
  title: string
  value: string
}

const CountryInformationTile: React.FC<CountryInformationTileProps> = ({ title, value }) => {
  return (
    <Card className="box-shadow">
      <Title>{title}</Title>
      <Value title={value}>{value}</Value>
    </Card>
  )
}

export default CountryInformationTile

const Title = styled.div`
  font-size: 12px;
  color: ${(p) => p.theme.colors.blue};
  font-weight: 800;
`

const Value = styled.div`
  margin-top: 5px;
  font-size: 18px;
  padding-left: 5px;
`
