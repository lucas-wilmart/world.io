import styled from 'styled-components'

export const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const QuizQuestionTile = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${(p) => p.theme.colors.navy};
  color: ${(p) => p.theme.colors.white};
  font-size: 25px;
  border-radius: 15px;
  box-sizing: border-box;
`

export const QuizAnswersContainer = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
`

export const QuizAnswer = styled.div`
  flex: 1;
  padding: 10px;
  background-color: ${(p) => p.theme.colors.navy};
  color: ${(p) => p.theme.colors.white};
  font-size: 20px;
  border-radius: 15px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
`

export const ScoreRow = styled.div`
  margin: 30px;
  text-align: center;
  font-size: 25px;
  color: ${(p) => p.theme.colors.blue};
`
