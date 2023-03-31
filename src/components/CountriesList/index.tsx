import React from 'react'
import styled from 'styled-components'
import useCountriesService from '../../hooks/useCountriesService'
import CountryCard from '../CountryCard'

interface CountriesListProps {}

const CountriesList: React.FC<CountriesListProps> = ({}) => {
  const { countries, loading, error } = useCountriesService()

  return (
    <CountryListContainer>
      {loading && <div>Chargement ...</div>}
      {!loading &&
        countries &&
        countries.map((country) => {
          return <CountryCard country={country} key={country.cca2} />
        })}
      {error && <div>Un problème est survenu</div>}
    </CountryListContainer>
  )
}

export default CountriesList

const CountryListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
`
