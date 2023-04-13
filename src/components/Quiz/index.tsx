import React, { useState } from 'react'
import { PageTitle } from '../../styles/typography'
import { QuizQuestion } from '../../types/quiz'
import {
  GameEndText,
  QuizAnswer,
  QuizAnswersContainer,
  QuizButton,
  QuizButtonContainer,
  QuizContainer,
  QuizQuestionTile,
  ScoreRow
} from './styles'

interface QuizProps {
  title: string
  questions: QuizQuestion[]
  onPlayAgain: () => void
}

const Quiz: React.FC<QuizProps> = ({ title, questions }) => {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [currentAnswer, setCurrentAnswer] = useState<undefined | string>()

  const currentQuestion = questions.length > questionIndex ? questions[questionIndex] : undefined

  const onNextQuestion = () => {
    setCurrentAnswer(undefined)
    setQuestionIndex((questionIndex) => questionIndex + 1)
  }

  const onPlayAgain = () => {
    setQuestionIndex(0)
    setScore(0)
    setCurrentAnswer(undefined)
  }

  return (
    <div>
      <PageTitle>{title}</PageTitle>

      {currentQuestion && (
        <QuizContainer>
          <QuizQuestionTile>{currentQuestion.question}</QuizQuestionTile>

          <QuizAnswersContainer>
            {currentQuestion.answers.map((answer, index) => {
              const isCorrect = answer === currentQuestion.correctAnswer
              const isWrong = !isCorrect && currentAnswer === answer

              const handleClick = () => {
                if (isCorrect) {
                  setScore((score) => score + 1)
                }

                setCurrentAnswer(answer)
              }

              const quizAnswerProps = currentAnswer
                ? {
                    correct: isCorrect,
                    wrong: isWrong
                  }
                : undefined

              return (
                <QuizAnswer onClick={handleClick} {...quizAnswerProps} key={answer}>
                  {answer}
                </QuizAnswer>
              )
            })}
          </QuizAnswersContainer>
        </QuizContainer>
      )}

      {!currentQuestion && <GameEndText>Finished. Your score is:</GameEndText>}
      <ScoreRow>
        {score} / {questions.length}
      </ScoreRow>

      <QuizButtonContainer>
        {currentAnswer && currentQuestion && (
          <QuizButton className="box-shadow" onClick={onNextQuestion}>
            Question suivante
          </QuizButton>
        )}
        {!currentQuestion && (
          <QuizButton className="box-shadow" onClick={onPlayAgain}>
            Rejouer
          </QuizButton>
        )}
      </QuizButtonContainer>
    </div>
  )
}

export default Quiz
