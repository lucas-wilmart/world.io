import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useCountriesService from '../../hooks/useCountriesService'
import Loader from '../../components/Loader'
import CountryCard from '../../components/CountryCard'
import ServiceError from '../../components/ServiceError'
import styled from 'styled-components'
import routes from '../../routes'
import useWikipediaService from '../../hooks/useWikipediaService'
import WikipediaExtract from '../../components/WikipediaExtract'

export interface CountryRouteParams {
  countryCode: string
}

const Country: React.FC = () => {
  const { countryCode } = useParams<'countryCode'>()

  const { loadCountryByCode, loading, country, error } = useCountriesService()

  const { loadPageByTitle, loading: wikipediaLoading, error: wikipediaError, extract } = useWikipediaService()

  useEffect(() => {
    if (countryCode) {
      loadCountryByCode(countryCode)
    }
  }, [countryCode])

  useEffect(() => {
    if (country) {
      loadPageByTitle(country.name.common)
    }
  }, [country])

  return (
    <div>
      <StyledLink to={routes.HOME}>Liste des pays</StyledLink>
      {loading && <Loader />}
      {country && (
        <div>
          <CountryCard country={country} />
          <div />
        </div>
      )}
      {error && <ServiceError />}
      {extract && <StyledWikipediaExtract content={extract} />}
    </div>
  )
}

export default Country

const StyledLink = styled(Link)`
  display: block;
  margin: 30px 10px;
`
const StyledWikipediaExtract = styled(WikipediaExtract)`
  padding: 40px;
  margin-top: 20px;
`
