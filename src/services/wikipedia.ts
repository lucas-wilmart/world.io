import { WikipediaExtractResultItem, WikipediaTextExtractResponse } from './../types/wikipedia'
import service from '../utils/service'

const endPoint =
  'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext=1&format=json&exintro=1&origin=*&exsentences=10'

export const getPageExtract = async (title: string): Promise<WikipediaExtractResultItem> => {
  const result: WikipediaTextExtractResponse = await service(`${endPoint}&titles=${title}`)

  const firstResult = result.query.pages[Object.keys(result.query.pages)[0]]

  if ('missing' in firstResult) {
    throw new Error('Page introuvable')
  } else {
    return firstResult
  }
}
