import styled from 'styled-components'

export const CountryCardContainer = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`

export const CountryInfosLeft = styled.div`
  display: flex;
  align-items: center;
`

export const CountryMainInfos = styled.div`
  font-size: 13px;
`

export const CountryName = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blue};
  margin-bottom: 10px;
`

export const CountrySecondaryInfos = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.navy};
  margin-right: 30px;
  text-align: right;
`
