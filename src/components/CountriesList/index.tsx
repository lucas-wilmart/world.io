import React from 'react'
import { Country } from '../../types/country'
import { CountryListContainer } from './styles'

interface CountriesListProps {
  countries: Country[]
}

const CountriesList: React.FC<CountriesListProps> = ({}) => {
  return <CountryListContainer></CountryListContainer>
}

export default CountriesList
