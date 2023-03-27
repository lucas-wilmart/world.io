import { Country } from '../types/country'

const version = 2
const endPoint = `http://api.worldbank.org/v${version}/country`

type PaginatedData = [
  {
    page: number
    pages: number
    per_page: number
    total: number
  },
  Country[]
]

const fetchCountries = (query?: string): Promise<PaginatedData> => service(`${endPoint}${query && `/${query}`}`)
