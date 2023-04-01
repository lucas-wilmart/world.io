import React from 'react'
import CountriesList from '../../components/CountriesList'
import styled from 'styled-components'

const Home: React.FC = () => {
  return (
    <div>
      <HomeHeader>Countries List</HomeHeader>

      <CountriesList />
    </div>
  )
}

const HomeHeader = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.blue};
`

const SearchBar = styled.div``

export default Home
