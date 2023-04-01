import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import useCountriesService from '../../hooks/useCountriesService'
import routes from '../../routes'
import CountryCard from '../CountryCard'
import Loader from '../Loader'

interface CountriesListProps {}

const CountriesList: React.FC<CountriesListProps> = ({}) => {
  const navigate = useNavigate()
  const { countries, loading, error, loadAllCountries } = useCountriesService()

  useEffect(() => {
    loadAllCountries()
  }, [])

  return (
    <CountryListContainer>
      {loading && <Loader />}
      {!loading &&
        countries &&
        countries.map((country) => {
          const onClick = () => {
            navigate(`${routes.COUNTRY}/${country.cca2}`)
          }

          return <CountryCard country={country} key={country.cca2} onClick={onClick} />
        })}
      {error && <div>Un problème est survenu</div>}
    </CountryListContainer>
  )
}

export default CountriesList

const CountryListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  padding: 10px;
  text-decoration: none;
`
