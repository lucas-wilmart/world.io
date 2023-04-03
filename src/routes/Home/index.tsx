import React from 'react'
import CountriesList from '../../components/CountriesList'
import styled from 'styled-components'
import { PageTitle } from '../../styles/typography'

const Home: React.FC = () => {
  return (
    <div>
      <PageTitle>Countries List</PageTitle>

      <CountriesList />
    </div>
  )
}

const SearchBar = styled.div``

export default Home
