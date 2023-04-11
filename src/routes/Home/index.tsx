import React, { useState } from 'react'
import CountriesList from '../../components/CountriesList'
import styled from 'styled-components'
import { PageTitle } from '../../styles/typography'
import SearchBar from '../../components/SearchBar'

const Home: React.FC = () => {
  const [search, setSearch] = useState<string>()

  return (
    <div>
      <SearchBar value={search} onChange={setSearch} />

      <CountriesList />
    </div>
  )
}

export default Home
