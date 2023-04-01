import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      light: string
      grey: string
      lightBlue: string
      blue: string
      navy: string
      black: string
      white: string
    }
    layout: {
      headerHeight: number
      contentMaxWidth: number
    }
  }
}
