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
        height="100%"
        style={{ border: 0, minHeight: 300 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_API_KEY}
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
