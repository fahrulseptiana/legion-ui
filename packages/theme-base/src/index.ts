import base from '@theme-ui/preset-base'
import {makeTheme} from '@theme-ui/css/utils'

export const themeBase = makeTheme({
  ...base,
  buttons: {
    primary: {
      backgroundColor: 'red',
      '&:hover': {
        backgroundColor: 'black'
      }
    }
  }
})

export default themeBase