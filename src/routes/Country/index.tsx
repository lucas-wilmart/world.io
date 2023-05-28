import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import routes from '../../routes'

import useAsyncService from '../../hooks/useAsyncService'

import Loader from '../../components/Loader'
import CountryCard from '../../components/CountryCard'
import ServiceError from '../../components/ServiceError'
import styled from 'styled-components'
import WikipediaExtract from '../../components/WikipediaExtract'
import NavigationLink from '../../components/NavigationLink'

import { fetchCountryByCode } from '../../services/restcountries'
import { fetchWikiExtract } from '../../services/wikipedia'

export interface CountryRouteParams {
  countryCode: string
}

const Country: React.FC = () => {
  const { countryCode } = useParams<'countryCode'>()

  const { request: getCountryByCode, error, pending, data } = useAsyncService(fetchCountryByCode)
  console.log({ error })

  const { request: getWikiExtract, data: wikiExtract, pending: wikiExtractPending } = useAsyncService(fetchWikiExtract)

  useEffect(() => {
    if (countryCode) {
      getCountryByCode(countryCode)
    }
  }, [countryCode])

  useEffect(() => {
    if (data) {
      getWikiExtract(data.name.common)
    }
  }, [data])

  return (
    <div>
      <>
        <NavigationLink to={routes.HOME} label="Back to Homepage" />
        {pending && <Loader />}
        {data && (
          <div>
            <CountryCard country={data} />
            <div />
          </div>
        )}
        {error && <ServiceError />}
        {wikiExtract && <StyledWikipediaExtract content={wikiExtract} loading={wikiExtractPending} />}
      </>
    </div>
  )
}

export default Country

const StyledWikipediaExtract = styled(WikipediaExtract)`
  padding: 40px;
  margin-top: 20px;
`
