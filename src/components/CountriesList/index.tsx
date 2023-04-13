import React from 'react'
import styled from 'styled-components'
import { Country } from '../../types/country'
import CountryCard from '../CountryCard'

interface CountriesListProps {
  countries: Country[]
  onCountryClick?: (country: Country) => void
}

const CountriesList: React.FC<CountriesListProps> = ({ countries, onCountryClick }) => {
  return (
    <CountryListContainer>
      {countries.map((country) => {
        const onClick = () => {
          if (onCountryClick) {
            onCountryClick(country)
          }
        }

        return <CountryCard country={country} key={country.cca2} onClick={onClick} />
      })}
    </CountryListContainer>
  )
}

export default CountriesList

const CountryListContainer = styled.div`
  display: grid;

  grid-template-columns: minmax(0, 1fr);

  @media (min-width: ${(p) => p.theme.media.md}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${(p) => p.theme.media.lg}px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  gap: 20px;
  padding: 10px;
  text-decoration: none;
`
