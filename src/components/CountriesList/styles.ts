import styled from 'styled-components'

export const CountryListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: solid 1px ${({ theme }) => theme.colors.navy};
  padding: 10px;
`
