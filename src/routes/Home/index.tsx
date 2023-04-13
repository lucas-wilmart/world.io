import React, { useEffect, useState } from 'react'
import CountriesList from '../../components/CountriesList'
import styled from 'styled-components'
import SearchBar from '../../components/SearchBar'
import { useNavigate } from 'react-router-dom'
import useCountriesService from '../../hooks/useCountriesService'
import Loader from '../../components/Loader'
import ServiceError from '../../components/ServiceError'
import routes from '../../routes'
import { Country } from '../../types/country'

const Home: React.FC = () => {
  const [search, setSearch] = useState<string>('')

  const navigate = useNavigate()
  const { countries, loading, error, loadAll, searchByName } = useCountriesService()

  useEffect(() => {
    if (search) {
      searchByName(search)
    } else {
      loadAll()
    }
  }, [search])

  const onCountryClick = (country: Country) => {
    navigate(`${routes.COUNTRY}/${country.cca2}`)
  }

  return (
    <div>
      <StyledSearchBar value={search} onChange={setSearch} placeholder="Search for a country..." />
      {loading && <Loader />}
      {countries && !loading && !error && <CountriesList countries={countries} onCountryClick={onCountryClick} />}
      {error && <ServiceError error={typeof error === 'string' ? error : undefined} />}
    </div>
  )
}

export default Home

const StyledSearchBar = styled(SearchBar)`
  margin: 20px 0;
`
