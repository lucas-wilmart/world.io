import React, { useEffect, useState } from 'react'
import CountriesList from '../../components/CountriesList'
import styled from 'styled-components'
import SearchBar from '../../components/SearchBar'
import { useNavigate } from 'react-router-dom'
import useAsyncService from '../../hooks/useAsyncService'
import Loader from '../../components/Loader'
import ServiceError from '../../components/ServiceError'
import routes from '../../routes'
import { Country } from '../../types/country'
import { fetchCountries } from '../../services/restcountries'

const Home: React.FC = () => {
  const [search, setSearch] = useState<string>('')

  const navigate = useNavigate()

  const { pending, data: countries, error, request } = useAsyncService(fetchCountries)

  const onCountryClick = (country: Country) => {
    navigate(`${routes.COUNTRY}/${country.cca2}`)
  }

  useEffect(() => {
    request(search)
  }, [search])

  return (
    <div>
      <>
        <StyledSearchBar value={search} onChange={setSearch} placeholder="Search for a country..." />
        {pending && <Loader />}
        {countries && !pending && !error && <CountriesList countries={countries} onCountryClick={onCountryClick} />}
        {error && <ServiceError error={typeof error === 'string' ? error : undefined} />}
      </>
    </div>
  )
}

export default Home

const StyledSearchBar = styled(SearchBar)`
  margin: 20px 0;
`
