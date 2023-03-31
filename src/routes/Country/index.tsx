import React from 'react'
import { useParams } from 'react-router-dom'

const Country: React.FC = () => {
  const { countryCode } = useParams()

  return <div>{countryCode}</div>
}

export default Country
