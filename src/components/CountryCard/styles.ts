import { Card } from '@/styles/elements'
import styled from 'styled-components'

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

export const CountryDescription = styled.div`
  font-size: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const CountryDescriptionRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  & :first-child {
    color: ${({ theme }) => theme.colors.navy};
  }

  & :last-child {
    color: ${({ theme }) => theme.colors.black};
    text-align: right;
  }
`

interface CountryCardContainerProps {
  clickable: boolean
}

export const CountryCardContainer = styled(Card)<CountryCardContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${(p) =>
    p.clickable &&
    `
    cursor: pointer;
    &:hover {
      opacity: 0.85;
      ${CountryName} {
        text-decoration: underline;
        color: ${p.theme.colors.navy};
      }
    }
  `}
`
