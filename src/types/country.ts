interface TranslationObject {
  official: string
  common: string
}

interface Translations {
  [key: string]: TranslationObject
}

interface CountryNameObject {
  common: string
  official: string
  nativeName: Translations
}

export interface Country {
  cca2: string
  name: CountryNameObject
  capital: string[]
  tld: string[]
  region: string
  subregion: string
  translations: Translations
  languages: {
    [key: string]: string
  }
  independent: boolean
  flags: {
    png: string
    svg: string
  }
}
