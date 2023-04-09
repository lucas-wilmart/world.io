import styled from 'styled-components'

export const Card = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 15px;
  border: solid 1px ${({ theme }) => theme.colors.grey};
`
