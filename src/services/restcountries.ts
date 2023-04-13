import { Country } from '../types/country'
import service from '../utils/service'

const version = '3.1'
const baseUrl = `https://restcountries.com/v${version}`
const queryFields = 'name,capital,region,subregion,languages,translations,tld,cca2,independent,flags'

export const fetchAllCountries = (): Promise<Country[]> => service(`${baseUrl}/all?fields=${queryFields}`)

export const fetchCountryByCode = async (code: string): Promise<Country> =>
  service(`${baseUrl}/alpha/${code}?fields=${queryFields}`)

export const searchCountriesByName = (search: string): Promise<Country[]> =>
  service(`${baseUrl}/name/${search}?fields=${queryFields}`)
