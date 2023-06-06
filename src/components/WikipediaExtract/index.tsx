import React from 'react'
import styled from 'styled-components'

import { Card } from '@/styles/elements'
import Loader from '../Loader'

interface WikipediaExtractProps {
  className?: string
  content: string
  loading?: boolean
}

const WikipediaExtract: React.FC<WikipediaExtractProps> = ({ className, content, loading }) => {
  return (
    <ExtractContainer className={className}>
      {!loading && content}
      {loading && <Loader />}
    </ExtractContainer>
  )
}

export default WikipediaExtract

const ExtractContainer = styled(Card)`
  padding: 40px;
`
