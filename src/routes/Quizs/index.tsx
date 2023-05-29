import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { PageTitle } from '@/styles/typography'

import { quizRoutes } from '@/routes'

const Quizs: React.FC = () => {
  return (
    <div>
      <PageTitle>Quizs</PageTitle>

      <QuizLink className="box-shadow" to={`.${quizRoutes.CAPITAL}`}>
        <span>Guess countries capital cities</span>
        <span>10 questions</span>
      </QuizLink>
    </div>
  )
}

export default Quizs

const QuizLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
