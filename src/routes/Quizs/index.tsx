import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { quizRoutes } from '../../routes'
import { PageTitle } from '../../styles/typography'

const Quizs: React.FC = () => {
  return (
    <div>
      <PageTitle>Quizs</PageTitle>

      <QuizLink to={`./${quizRoutes.CAPITAL}`}>Capital Quiz</QuizLink>
    </div>
  )
}

export default Quizs

const QuizLink = styled(Link)`
  margin-top: 20px;
  font-size: 23px;
`
