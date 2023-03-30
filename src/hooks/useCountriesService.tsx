import { useState, useEffect } from 'react'
import { fetchAllCountries } from '../services/restcountries'
import { Country } from '../types/country'

const useCountriesService = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [countries, setCountries] = useState<Country[]>()
  const [error, setError] = useState<boolean>(false)

  const loadData = async () => {
    setError(false)
    setLoading(true)

    try {
      const result = await fetchAllCountries()
      setCountries(result)
    } catch (error) {
      console.log({ error })
      setError(true)
    }

    setLoading(false)
  }

  useEffect(() => {
    loadData()
  }, [])

  return {
    countries,
    loading,
    error
  }
}

export default useCountriesService
