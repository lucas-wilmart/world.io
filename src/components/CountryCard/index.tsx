import React from 'react'
import { Country } from '../../types/country'
import CountryFlag from '../CountryFlag'
import { CountryCardContainer, CountryInfosLeft, CountryMainInfos, CountryName, CountrySecondaryInfos } from './styles'

interface CountryCardProps {
  country: Country
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <CountryCardContainer key={country.cca2} className="box-shadow">
      <CountryInfosLeft>
        <CountryFlag cca2={country.cca2} independent={country.independent} />
        <CountryMainInfos>
          <CountryName>{country.name.common}</CountryName>
          <div>{country.region}</div>
          <div>{country.subregion}</div>
        </CountryMainInfos>
      </CountryInfosLeft>

      <CountrySecondaryInfos>
        <div>Code: {country.cca2}</div>
        <div>
          Capitale{country.capital.length > 1 && 's'}: {country.capital.join(', ')}
        </div>
        <div>languages: {Object.values(country.languages).join(', ')}</div>
        <div>
          Tld{country.capital.length > 1 && 's'}: {country.tld.join(', ')}
        </div>
        <div>Indépendant: {country.independent ? 'Oui' : 'Non'}</div>
      </CountrySecondaryInfos>
    </CountryCardContainer>
  )
}

export default CountryCard
