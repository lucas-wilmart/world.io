import React from 'react'
import { Card } from '@/styles/elements'
import styled from 'styled-components'

interface MapCardProps {
  name: string
  lat: number
  long: number
}

const MapCard: React.FC<MapCardProps> = ({ name, lat, long }) => {
  const serializedName = name.replace(/ /g, '+')

  return (
    <StyledCard>
      <iframe
        width="100%"
        height="500"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyC7JMQbO9CcFa363Z1mEb4QksRu7EMsUfY
    &center=${lat},${long}&zoom=5&q=${serializedName}&language=en`}
      ></iframe>
    </StyledCard>
  )
}

const StyledCard = styled(Card)`
  padding: 0;
  overflow: hidden;
`

export default MapCard
