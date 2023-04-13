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
import NavigationLink from '../../components/NavigationLink'

export interface CountryRouteParams {
  countryCode: string
}

const Country: React.FC = () => {
  const { countryCode } = useParams<'countryCode'>()

  const { getByCode, loading, country, error } = useCountriesService()

  const { loadPageByTitle, extract } = useWikipediaService()

  useEffect(() => {
    if (countryCode) {
      getByCode(countryCode)
    }
  }, [countryCode])

  useEffect(() => {
    if (country) {
      loadPageByTitle(country.name.common)
    }
  }, [country])

  return (
    <div>
      <NavigationLink to={routes.HOME} label="Back to Homepage" />
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

const StyledWikipediaExtract = styled(WikipediaExtract)`
  padding: 40px;
  margin-top: 20px;
`
