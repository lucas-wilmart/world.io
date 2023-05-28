export interface WikipediaExtractResultItem {
  pageid: number
  ns: number
  title: string
  extract?: string
  missing?: string
}

export interface WikipediaTextExtractResponse {
  query: {
    pages: {
      [key: string]: WikipediaExtractResultItem
    }
  }
}
