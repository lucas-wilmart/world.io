import React from 'react'

import { Country } from '@/types/country'

import CountryFlag from '../CountryFlag'
import {
  CountryCardContainer,
  CountryDescription,
  CountryDescriptionRow,
  CountryInfosLeft,
  CountryMainInfos,
  CountryName
} from './styles'

interface CountryCardProps {
  country: Country
  showDescription?: boolean
  onClick?: () => void
}

const CountryCard: React.FC<CountryCardProps> = ({ country, onClick, showDescription = true }) => {
  const renderCountryDescriptionRows = (rows: { header: string; value: string }[]) => {
    return rows.map((row) => (
      <CountryDescriptionRow key={row.header}>
        <span>{row.header}</span>
        <span>{row.value}</span>
      </CountryDescriptionRow>
    ))
  }

  return (
    <CountryCardContainer key={country.cca2} className="box-shadow" onClick={onClick} clickable={onClick !== undefined}>
      <CountryInfosLeft>
        <CountryFlag flagSrc={country.flags.png} />
        <CountryMainInfos>
          <CountryName>{country.name.common}</CountryName>
          <div>{country.region}</div>
          <div>{country.subregion}</div>
        </CountryMainInfos>
      </CountryInfosLeft>

      {showDescription && (
        <CountryDescription>
          {renderCountryDescriptionRows([
            {
              header: 'Code',
              value: country.cca2
            },
            {
              header: 'Capital',
              value: country.capital.join(', ')
            },
            {
              header: 'Languages',
              value: Object.values(country.languages).join(', ')
            },
            {
              header: 'TLD',
              value: country.tld.join(', ')
            },
            {
              header: 'Independent',
              value: country.independent ? 'yes' : 'no'
            }
          ])}
        </CountryDescription>
      )}
    </CountryCardContainer>
  )
}

export default CountryCard
