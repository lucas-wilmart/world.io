import styled from 'styled-components'

export const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const QuizQuestionTile = styled.div`
  width: 100%;
  padding: 40px;
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

export const QuizAnswer = styled.div<{ correct?: boolean; wrong?: boolean }>`
  flex: 1;
  padding: 10px;
  background-color: ${(p) => {
    if (p.correct) {
      return 'green'
    } else if (p.wrong) {
      return 'red'
    } else {
      return p.theme.colors.navy
    }
  }};
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

export const GameEndText = styled.div`
  font-size: 25px;
  color: ${(p) => p.theme.colors.blue};
  text-align: center;
  margin: 40px 0;
  font-weight: 500;
`

export const QuizButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const QuizButton = styled.button`
  margin-top: 20px;
  font-size: 23px;
  padding: 20px;
  border-radius: 15px;
  margin: 20px 0;
  background-color: ${(p) => p.theme.colors.white};
  color: ${(p) => p.theme.colors.navy};
  border: solid 2px ${(p) => p.theme.colors.navy};
  text-align: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`
