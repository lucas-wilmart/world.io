import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useCountriesService from '../../hooks/useCountriesService'
import Loader from '../../components/Loader'
import CountryCard from '../../components/CountryCard'
import ServiceError from '../../components/ServiceError'
import styled from 'styled-components'
import routes from '../../routes'

export interface CountryRouteParams {
  countryCode: string
}

const Country: React.FC = () => {
  const { countryCode } = useParams<'countryCode'>()

  const { loadCountryByCode, loading, country, error } = useCountriesService()

  useEffect(() => {
    if (countryCode) {
      loadCountryByCode(countryCode)
    }
  }, [countryCode])

  return (
    <div>
      <StyledLink to={routes.HOME}>Liste des pays</StyledLink>
      {loading && <Loader />}
      {country && (
        <div>
          <CountryCard country={country} />
        </div>
      )}
      {error && <ServiceError />}
    </div>
  )
}

export default Country

const StyledLink = styled(Link)`
  display: block;
  margin: 30px 10px;
`
