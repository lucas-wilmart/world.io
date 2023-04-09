import React from 'react'
import styled from 'styled-components'
import { Card } from '../../styles/elements'

interface WikipediaExtractProps {
  className?: string
  content: string
}

const WikipediaExtract: React.FC<WikipediaExtractProps> = ({ className, content }) => {
  return <ExtractContainer className={className}>{content}</ExtractContainer>
}

export default WikipediaExtract

const ExtractContainer = styled(Card)``
