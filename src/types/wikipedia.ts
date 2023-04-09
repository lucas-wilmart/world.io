export interface WikipediaExtractResultItem {
  pageid: number
  ns: number
  title: string
  extract: string
}

export interface WikipediaTextExtractResponse {
  query: {
    pages: {
      [key: string]: WikipediaExtractResultItem | (Omit<WikipediaExtractResultItem, 'extract'> & { missing: string })
    }
  }
}
