import { useState, useEffect } from 'react'
import { fetchAllCountries, fetchCountryByCode, searchCountriesByName } from '../services/restcountries'
import { Country } from '../types/country'

const useCountriesService = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [country, setCountry] = useState<Country>()
  const [countries, setCountries] = useState<Country[]>()
  const [error, setError] = useState<boolean | string>(false)

  const loadAll = async () => {
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

  const getByCode = async (code: string) => {
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

  const searchByName = async (search: string) => {
    setError(false)
    setLoading(true)

    try {
      const result = await searchCountriesByName(search)
      setCountries(result)
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError(true)
      }
    }
    setLoading(false)
  }

  return {
    loadAll,
    getByCode,
    searchByName,
    countries,
    country,
    loading,
    error
  }
}

export default useCountriesService
