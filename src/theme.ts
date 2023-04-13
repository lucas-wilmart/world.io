import { DefaultTheme } from 'styled-components'

const Theme: DefaultTheme = {
  colors: {
    light: '#FFFFFF',
    grey: '#cccccc',
    darkGrey: '#5e5e5e',
    lightBlue: '#dae4ea',
    blue: '#19A7CE',
    navy: '#146C94',
    black: '#000000',
    white: '#ffffff'
  },
  layout: {
    headerHeight: {
      sm: 130,
      md: 80
    },
    contentMaxWidth: 1280
  },
  media: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280
  }
}

export default Theme
