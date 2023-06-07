import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import Loader from '@/components/Loader'
import CountryCard from '@/components/CountryCard'
import ServiceError from '@/components/ServiceError'
import WikipediaExtract from '@/components/WikipediaExtract'
import NavigationLink from '@/components/NavigationLink'

import useAsyncService from '@/hooks/useAsyncService'

import { fetchCountryByCode } from '@/services/restcountries'
import { fetchWikiExtract } from '@/services/wikipedia'

import routes from '@/routes'
import MapCard from '@/components/MapCard'
import CountryInformationTile from '@/components/CountryInformationTile'

export interface CountryRouteParams {
  countryCode: string
}

const Country: React.FC = () => {
  const { countryCode } = useParams<'countryCode'>()

  const { request: getCountryByCode, error, pending, data } = useAsyncService(fetchCountryByCode)

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

  const renderCurrencyValue = () => {
    return data
      ? Object.values(data.currencies)
          .map(({ name, symbol }) => `${name} (${symbol})`)
          .join(', ')
      : ''
  }

  const renderCallingCodeValue = () => {
    return data ? data.idd.suffixes.map((item) => `${data.idd.root}${item}`).join(', ') : ''
  }

  return (
    <div>
      <>
        <NavigationLink to={routes.SEARCH} label="Back to search" />
        {pending && <Loader />}
        {error && <ServiceError />}
        {data && (
          <CardsContainer>
            <CountryCard country={data} showDescription={false} />

            <CountryInformations>
              <CountryInformationTile title="Country Code" value={data.cca2} />
              <CountryInformationTile title="Capital City" value={data.capital.join(', ')} />
              <CountryInformationTile title="Languages" value={Object.values(data.languages).join(', ')} />
              <CountryInformationTile title="TLD" value={data.tld.join(', ')} />
              <CountryInformationTile title="Currency" value={renderCurrencyValue()} />
              <CountryInformationTile title="Calling Code" value={renderCallingCodeValue()} />
            </CountryInformations>

            <DescriptionGrid>
              <MapCard name={data.name.common} lat={data.latlng[0]} long={data.latlng[1]} />
              {wikiExtract && <WikipediaExtract content={wikiExtract} loading={wikiExtractPending} />}
            </DescriptionGrid>
          </CardsContainer>
        )}
      </>
    </div>
  )
}

export default Country

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const CountryInformations = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 20px;

  @media (min-width: ${(p) => p.theme.media.md}px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: ${(p) => p.theme.media.lg}px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`
const DescriptionGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: 20px;

  @media (min-width: ${(p) => p.theme.media.lg}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`
