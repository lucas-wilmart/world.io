import React from 'react'
import styled from 'styled-components'

const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <img src="/loading.gif" alt="loading..." />
    </LoaderContainer>
  )
}

export default Loader

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 80px 0;
  font-weight: 100;

  & img {
    width: 100px;
  }
`
