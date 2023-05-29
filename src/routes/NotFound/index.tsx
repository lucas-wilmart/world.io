import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Button from '@/components/Button'

import routes from '@/routes'

const NotFound: React.FC = () => {
  return (
    <Container>
      <Message>Oups ! la page demandée n'existe pas</Message>
      <Link to={routes.HOME}>
        <StyledButton>Retour à l'accueil</StyledButton>
      </Link>
    </Container>
  )
}

export default NotFound

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.blue};
`

const Message = styled.div`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 25px;
  font-weight: 800;
`

const StyledButton = styled(Button)`
  margin-top: 50px;
`
