import service from '../utils/service'

export interface Country {
  id: string
  iso2Code: string
  name: string
  region: {
    id: string
    iso2code: string
    value: string
  }
  adminregion: {
    id: string
    iso2code: string
    value: string
  }
  incomeLevel: {
    id: string
    iso2code: string
    value: string
  }
  lendingType: {
    id: string
    iso2code: string
    value: string
  }
  capitalCity: string
  longitude: string
  latitude: string
}

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

// export const fetchCountries = (query?: string): Promise<PaginatedData> => service(`${endPoint}${query && `/${query}`}`)
