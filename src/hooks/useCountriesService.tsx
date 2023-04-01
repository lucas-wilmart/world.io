import { useState, useEffect } from 'react'
import { fetchAllCountries, fetchCountryByCode } from '../services/restcountries'
import { Country } from '../types/country'

const useCountriesService = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [country, setCountry] = useState<Country>()
  const [countries, setCountries] = useState<Country[]>()
  const [error, setError] = useState<boolean>(false)

  const loadAllCountries = async () => {
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

  const loadCountryByCode = async (code: string) => {
    setError(false)
    setLoading(true)

    try {
      const result = await fetchCountryByCode(code)
      setCountry(result)
    } catch (error) {
      console.log({ error })
      setError(true)
    }

    setLoading(false)
  }

  return {
    loadAllCountries,
    loadCountryByCode,
    countries,
    country,
    loading,
    error
  }
}

export default useCountriesService
