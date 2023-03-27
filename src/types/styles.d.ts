import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      grey: string
      lightBlue: string
      blue: string
      navy: string
      black: string
    }
    layout: {
      headerHeight: number
      contentMaxWidth: number
    }
  }
}
