import { useState } from 'react'
import { getPageExtract } from '../services/wikipedia'

const useWikipedia = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [extract, setExtract] = useState<string>()
  const [error, setError] = useState<boolean | string>(false)

  const loadPageByTitle = async (title: string) => {
    setError(false)
    setLoading(true)

    try {
      const result = await getPageExtract(title)

      setExtract(result.extract)
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
    loadPageByTitle,
    loading,
    extract,
    error
  }
}

export default useWikipedia
