import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      light: string
      grey: string
      darkGrey: string
      lightBlue: string
      blue: string
      navy: string
      black: string
      white: string
    }
    layout: {
      headerHeight: {
        sm: number
        md: number
      }
      contentMaxWidth: number
    }
    media: {
      sm: number
      md: number
      lg: number
      xl: number
    }
  }
}
