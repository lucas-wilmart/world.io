import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { quizRoutes } from '../../routes'
import { PageTitle } from '../../styles/typography'

const Quizs: React.FC = () => {
  return (
    <div>
      <PageTitle>Quizs</PageTitle>

      <QuizLink className="box-shadow" to={`./${quizRoutes.CAPITAL}`}>
        Countries Capital Cities
      </QuizLink>
    </div>
  )
}

export default Quizs

const QuizLink = styled(Link)`
  display: block;
  margin-top: 20px;
  font-size: 23px;
  text-decoration: none;
  padding: 20px;
  border-radius: 15px;
  margin: 20px 0;
  background-color: ${(p) => p.theme.colors.white};
  color: ${(p) => p.theme.colors.navy};

  &:hover {
    opacity: 0.8;
  }
`
