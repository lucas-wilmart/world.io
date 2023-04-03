import React, { useState } from 'react'
import { QuizQuestion } from '../../types/quiz'
import { PageTitle } from '../../styles/typography'
import { QuizAnswer, QuizAnswersContainer, QuizContainer, QuizQuestionTile, ScoreRow } from './styles'

interface QuizProps {
  title: string
  questions: QuizQuestion[]
}

const Quiz: React.FC<QuizProps> = ({ title, questions }) => {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)

  const currentQuestion = questions.length > questionIndex ? questions[questionIndex] : undefined

  return (
    <div>
      <PageTitle>{title}</PageTitle>

      {currentQuestion && (
        <QuizContainer>
          <QuizQuestionTile>{currentQuestion.question}</QuizQuestionTile>

          <QuizAnswersContainer>
            {currentQuestion.answers.map((answer, index) => {
              const handleClick = () => {
                if (answer === currentQuestion.correctAnswer) {
                  setScore((score) => score + 1)
                }

                setQuestionIndex((questionIndex) => questionIndex + 1)
              }

              return (
                <QuizAnswer onClick={handleClick} key={answer}>
                  {answer}
                </QuizAnswer>
              )
            })}
          </QuizAnswersContainer>
        </QuizContainer>
      )}

      {!currentQuestion && <div>Terminé !</div>}
      <ScoreRow>
        Score: {score} / {questions.length}
      </ScoreRow>
    </div>
  )
}

export default Quiz
